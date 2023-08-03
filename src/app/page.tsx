import { Movie } from "@/types"

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
      <div className="flex items-center">
        <div className="w-1/3">
          <MovieLottie />
        </div>
        <div className="w-2/3 flex-1 space-y-4">
          <h1 className="text-5xl font-black">
            Your Ultimate Movie Search App
          </h1>
          <p className="text-sm leading-6 text-muted-foreground">
            <span className="font-semibold text-foreground">Moovito</span> is
            your one-stop destination for all things movies. the latest
            blockbusters, timeless classics, or hidden gems, our powerful movie
            search app ensures you find the perfect film for every mood.
            Discover comprehensive movie details, watch trailers, read reviews,
            and create personalized watchlists. With MoovieMatic, the magic of
            cinema is just a tap away!
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
