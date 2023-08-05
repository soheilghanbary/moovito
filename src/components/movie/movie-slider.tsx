import { Movie } from "@/types"

import { MovieCard } from "./movie-card"

export function MovieSlider({
  movies,
  title,
}: {
  movies: Movie[]
  title: string
}) {
  return (
    <section>
      <h2 className="text-3xl font-black">{title}</h2>
      <hr className="my-4" />
      <div className="flex snap-x snap-mandatory space-x-8 overflow-x-scroll pb-8">
        {movies.map((movie) => (
          <div className="snap-start">
            <MovieCard key={movie.id} {...movie} />
          </div>
        ))}
      </div>
    </section>
  )
}
