"use client"

import { useAllMovies } from "@/hooks/use-movie"
import { Skeleton } from "@/components/ui/skeleton"

import { MovieCard } from "./movie-card"

export function Movies({
  title,
  target,
}: {
  title: string
  target: "now_playing" | "top_rated" | "upcoming" | "popular"
}) {
  return (
    <>
      <h2 className="text-3xl font-black">{title}</h2>
      <hr className="my-2" />
      <MovieSlider target={target} />
    </>
  )
}

const MovieSlider = ({
  target,
}: {
  target: "now_playing" | "top_rated" | "upcoming" | "popular"
}) => {
  const { data: movies, isLoading } = useAllMovies(target)
  if (isLoading) return <MovieSliderLoader />

  return (
    <div className="flex snap-x overflow-x-scroll pb-6">
      {movies.results.map((movie: any) => (
        <div key={movie.id} className="mr-6 min-w-[220px] snap-start last:mr-0">
          <MovieCard {...movie} />
        </div>
      ))}
    </div>
  )
}

const MovieSliderLoader = () => (
  <div className="flex snap-x overflow-x-scroll pb-6">
    {Array.from({ length: 10 }).map((_, index) => (
      <Skeleton
        key={index}
        className="mr-6 h-80 w-full min-w-[220px] snap-start space-y-2 rounded-2xl bg-secondary last:mr-0"
      />
    ))}
  </div>
)
