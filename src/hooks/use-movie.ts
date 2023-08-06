import { Movie } from "@/types"
import { useInfiniteQuery } from "@tanstack/react-query"

import { getMovieDataByPage } from "@/lib/fetcher"

interface InfiniteMovieProps {
  results: Movie[]
}

export function useMovies(genre: string) {
  return useInfiniteQuery<InfiniteMovieProps>({
    queryKey: ["movies", genre],
    queryFn: ({ pageParam }) => getMovieDataByPage({ pageParam, genre }),
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1
    },
  })
}
