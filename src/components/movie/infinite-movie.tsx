"use client"

import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

import { useMovies } from "@/hooks/use-movie"

import { MovieCard } from "./movie-card"

export const InfiniteMovie = () => {
  const {
    data,
    isSuccess,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useMovies()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage])

  if (isLoading) return <p>loading movies</p>
  return (
    <div>
      {data?.pages.map((p) => (
        <div className="grid grid-cols-5 gap-4">
          {p.results.map((m) => (
            <MovieCard {...m} />
          ))}
        </div>
      ))}
      <div ref={ref} />
    </div>
  )
}
