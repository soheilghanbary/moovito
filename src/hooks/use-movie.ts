import { Movie } from "@/types"
import { useInfiniteQuery } from "@tanstack/react-query"

import { getMovieDataByPage } from "@/lib/fetcher"

interface InfiniteMovieProps {
  results: Movie[]
}

export function useMovies(genre: string, min_year: string, max_year: string) {
  return useInfiniteQuery<InfiniteMovieProps>({
    queryKey: ["movies", genre, min_year, max_year],
    queryFn: ({ pageParam }) =>
      getMovieDataByPage({ pageParam, genre, min_year, max_year }),
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1
    },
  })
}
