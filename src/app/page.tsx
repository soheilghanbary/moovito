import { Movie } from "@/types"
import Balancer from "react-wrap-balancer"

import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/fetcher"
import { MovieLottie } from "@/components/movie-lottie"
import { MovieSlider } from "@/components/movie-slider"
import { SearchBox } from "@/components/search-box"

interface MoviesProps {
  results: Movie[]
}

export default async function MoviePage() {
  const movies = (await getNowPlayingMovies()) as MoviesProps
  const upMovies = (await getUpcomingMovies()) as MoviesProps
  const topMovies = (await getTopRatedMovies()) as MoviesProps
  const popMovies = (await getPopularMovies()) as MoviesProps
  return (
    <>
      <div className="mb-4 items-center md:flex">
        <div className="md:w-1/3">
          <MovieLottie />
        </div>
        <div className="flex-1 space-y-4 md:w-2/3">
          <Balancer
            ratio={0}
            className="text-center text-3xl font-black md:text-5xl"
          >
            Your Ultimate Movie Search App
          </Balancer>
          <p className="text-sm leading-6 text-muted-foreground">
            <span className="font-semibold text-foreground">Moovito</span> is
            your one-stop destination for all things movies. the latest
            blockbusters, timeless classics, or hidden gems, our powerful movie
            search app ensures you find the perfect film for every mood.
          </p>
          <SearchBox />
        </div>
      </div>
      <div className="space-y-8">
        <MovieSlider title="Now Playing" movies={movies.results} />
        <MovieSlider title="Upcoming" movies={upMovies.results} />
        <MovieSlider title="Top Rated" movies={topMovies.results} />
        <MovieSlider title="Popular" movies={popMovies.results} />
      </div>
    </>
  )
}
