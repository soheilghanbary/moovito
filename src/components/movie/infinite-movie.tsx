"use client"

import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

import { useMovies } from "@/hooks/use-movie"

import { MovieCard } from "./movie-card"
import styles from "./movie.module.scss"

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
    <section className="@container">
      {data?.pages.map((p) => (
        <div key={p.results.length} className={styles["movie-list"]}>
          {p.results.map((m) => (
            <MovieCard key={m.id} {...m} />
          ))}
        </div>
      ))}
      <div ref={ref} />
    </section>
  )
}
