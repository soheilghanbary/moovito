"use client"

import { InfiniteMovie } from "@/components/movie/infinite-movie"

export default function MoviesPage({
  searchParams,
}: {
  searchParams: { genre: string; year: string }
}) {
  return (
    <>
      <InfiniteMovie {...searchParams} />
    </>
  )
}
