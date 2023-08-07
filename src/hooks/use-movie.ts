import { Movie, MovieSearchParams } from "@/types"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

import { getMovieDataByPage } from "@/lib/fetcher"

const base_url = "https://api.themoviedb.org/3"
const key = process.env.MOVIE_API_KEY

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

export function useAllMovies(
  target: "now_playing" | "top_rated" | "upcoming" | "popular"
) {
  return useQuery({
    queryKey: ["movies", target],
    queryFn: async () => {
      const res = await fetch(`${base_url}/movie/${target}?api_key=${key}`)
      return res.json()
    },
  })
}
