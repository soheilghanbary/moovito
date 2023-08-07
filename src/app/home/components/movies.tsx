"use client"

import { useAllMovies } from "@/hooks/use-movie"

import { MovieSlider } from "./movie-slider"

export function Movies({
  title,
  target,
}: {
  title: string
  target: "now_playing" | "top_rated" | "upcoming" | "popular"
}) {
  const { data: movies, isLoading } = useAllMovies(target)
  if (isLoading) return <p>loading movie slider</p>
  return <MovieSlider title={title} movies={movies.results} />
}
