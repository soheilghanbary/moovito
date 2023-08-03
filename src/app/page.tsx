import { Movie } from "@/types"

import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/fetcher"
import { MovieSlider } from "@/components/movie-slider"

interface MoviesProps {
  results: Movie[]
}

export default async function MoviePage() {
  const movies = (await getNowPlayingMovies()) as MoviesProps
  const upMovies = (await getUpcomingMovies()) as MoviesProps
  const topMovies = (await getTopRatedMovies()) as MoviesProps
  const popMovies = (await getPopularMovies()) as MoviesProps
  return (
    <div className="space-y-8">
      <MovieSlider title="Now Playing" movies={movies.results} />
      <MovieSlider title="Upcoming" movies={upMovies.results} />
      <MovieSlider title="Top Rated" movies={topMovies.results} />
      <MovieSlider title="Popular" movies={popMovies.results} />
    </div>
  )
}
