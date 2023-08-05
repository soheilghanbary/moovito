import { Movie } from "@/types"
import Balancer from "react-wrap-balancer"

import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/fetcher"
import { Container } from "@/components/container"
import { MovieLottie } from "@/components/movie/movie-lottie"
import { MovieSlider } from "@/components/movie/movie-slider"
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
    <Container>
      <div className="mb-4 items-center md:flex">
        <div className="md:w-1/3">
          <MovieLottie />
        </div>
        <div className="flex w-full flex-1 flex-col flex-wrap items-center justify-center space-y-4 md:w-2/3 md:flex-row md:justify-start">
          <Balancer
            ratio={0}
            className="text-center text-3xl font-black md:text-5xl"
          >
            Your Ultimate Movie Search App
          </Balancer>
          <p className="hidden text-sm leading-6 text-muted-foreground md:block">
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
    </Container>
  )
}
