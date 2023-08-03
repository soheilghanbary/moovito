import { Movie } from "@/types"

import { MovieCard } from "./movie-card"

export function MovieList({
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
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies.map((movie) => (
          <div className="snap-start">
            <MovieCard key={movie.id} {...movie} />
          </div>
        ))}
      </div>
    </section>
  )
}
