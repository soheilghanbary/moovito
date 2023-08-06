"use client"

import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

import { useMovies } from "@/hooks/use-movie"

import { InfiniteMovieLoader } from "./infinite-movie-loader"
import { MovieCard } from "./movie-card"
import styles from "./movie.module.scss"

export const InfiniteMovie = ({ genre = "fdsfds" }) => {
  const {
    data,
    isSuccess,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useMovies(genre)
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
    <>
      {data?.pages.map((p) => (
        <div key={p.results.length} className={styles["movie-list"]}>
          {p.results.map((m) => (
            <MovieCard key={m.id} {...m} />
          ))}
        </div>
      ))}
      <div ref={ref} />
    </>
  )
}
