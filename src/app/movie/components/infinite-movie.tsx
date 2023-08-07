"use client"

import { useEffect } from "react"
import { MovieSearchParams } from "@/types"
import { useInView } from "react-intersection-observer"

import { useMovies } from "@/hooks/use-movie"
import { MovieCard } from "@/app/home/components/movie-card"

import { InfiniteMovieLoader } from "./movie-loader"

export const InfiniteMovie = (params: MovieSearchParams) => {
  const {
    data,
    isSuccess,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useMovies({ ...params })
  const { ref, inView } = useInView({
    rootMargin: "200px",
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage])

  if (isLoading) return <InfiniteMovieLoader />
  return (
    <section className="@container">
      {data?.pages.map((p) => (
        <div
          key={p.results.length}
          style={{ contentVisibility: "auto" }}
          className={
            "mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5"
          }
        >
          {p.results.map((m) => (
            <MovieCard key={m.id} {...m} />
          ))}
        </div>
      ))}
      {isFetchingNextPage && <InfiniteMovieLoader />}
      <div ref={ref} />
    </section>
  )
}
