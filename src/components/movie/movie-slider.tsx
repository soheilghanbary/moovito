"use client"

import { Movie } from "@/types"
import { useKeenSlider } from "keen-slider/react"

import { MovieCard } from "./movie-card"

export function MovieSlider({
  movies,
  title,
}: {
  movies: Movie[]
  title: string
}) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 6,
      spacing: 15,
    },
  })

  return (
    <section>
      <h2 className="text-3xl font-black">{title}</h2>
      <hr className="my-4" />
      <div ref={sliderRef} className="keen-slider">
        {movies.map((movie) => (
          <div className="keen-slider__slide">
            <MovieCard key={movie.id} {...movie} />
          </div>
        ))}
      </div>
    </section>
  )
}
