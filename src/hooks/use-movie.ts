import { Movie, MovieSearchParams } from "@/types"
import { useInfiniteQuery } from "@tanstack/react-query"

import { getMovieDataByPage } from "@/lib/fetcher"

interface InfiniteMovieProps {
  results: Movie[]
}

export function useMovies({
  query,
  genre,
  min_year,
  max_year,
}: MovieSearchParams) {
  return useInfiniteQuery<InfiniteMovieProps>({
    queryKey: ["movies", genre, min_year, max_year, query],
    queryFn: ({ pageParam }) =>
      getMovieDataByPage({ pageParam, query, genre, min_year, max_year }),
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1
    },
  })
}
