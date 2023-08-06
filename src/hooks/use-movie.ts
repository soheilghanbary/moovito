import { Movie } from "@/types"
import { useInfiniteQuery } from "@tanstack/react-query"

import { getMovieDataByPage } from "@/lib/fetcher"

interface InfiniteMovieProps {
  results: Movie[]
}

export function useMovies() {
  return useInfiniteQuery<InfiniteMovieProps>({
    queryKey: ["movies"],
    queryFn: getMovieDataByPage,
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1
    },
  })
}
