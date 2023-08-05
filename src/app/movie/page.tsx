import { MoviesResponse } from "@/types"

import { getMovieDataByParams } from "@/lib/fetcher"
import { MovieList } from "@/components/movie/movie-list"

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: { genre: string }
}) {
  const allShows: MoviesResponse = await getMovieDataByParams(
    1,
    searchParams.genre
  )

  return (
    <div>
      <MovieList movies={allShows.results} title="Movies" />
    </div>
  )
}
