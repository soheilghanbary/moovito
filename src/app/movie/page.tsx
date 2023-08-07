"use client"

import { MovieSearchParams } from "@/types"

import { InfiniteMovie } from "@/components/movie/infinite-movie"

export default function MoviesPage({
  searchParams,
}: {
  searchParams: MovieSearchParams
}) {
  return (
    <>
      <InfiniteMovie {...searchParams} />
    </>
  )
}
