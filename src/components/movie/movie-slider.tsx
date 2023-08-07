"use client"

import { Movie } from "@/types"

import { MovieCard } from "./movie-card"

export function MovieSlider({
  movies,
  title,
}: {
  movies: Movie[]
  title: string
}) {
  // const [sliderRef] = useKeenSlider({
  //   breakpoints: {
  //     "(min-width: 320px)": {
  //       slides: { perView: 2, spacing: 20 },
  //     },
  //     "(min-width: 640px)": {
  //       slides: { perView: 4, spacing: 20 },
  //     },
  //     "(min-width: 768px)": {
  //       slides: { perView: 4, spacing: 10 },
  //     },
  //     "(min-width: 1200px)": {
  //       slides: { perView: 5 },
  //     },
  //     "(min-width: 1400px)": {
  //       slides: { perView: 6 },
  //     },
  //   },
  //   slides: { perView: 3, spacing: 10 },
  // })

  return (
    <section>
      <h2 className="text-3xl font-black">{title}</h2>
      <hr className="my-4" />
      <div className="flex overflow-x-scroll scroll-smooth snap-x space-x-4 pb-4">
        {movies.map((movie) => (
          <div className="snap-start">
            <MovieCard key={movie.id} {...movie} />
          </div>
        ))}
      </div>
    </section>
  )
}
