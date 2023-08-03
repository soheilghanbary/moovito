import { MoviesResponse } from "@/types"

import { getSearchMovie } from "@/lib/fetcher"
import { MovieList } from "@/components/movie-list"

export default async function SearchPage({ searchParams }: any) {
  const allShows: MoviesResponse = await getSearchMovie(searchParams.keywords)
  return (
    <MovieList
      title={`Search Results: ${allShows.results.length}`}
      movies={allShows.results}
    />
  )
}
