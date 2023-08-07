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
      <div className="flex snap-x gap-4 overflow-x-scroll scroll-smooth pb-6">
        {movies.map((movie) => (
          <div className="mr-4 min-w-[180px] snap-start last:mr-0">
            <MovieCard key={movie.id} {...movie} />
          </div>
        ))}
      </div>
    </section>
  )
}
