import { MovieSearchParams } from "@/types"

import { InfiniteMovie } from "@/components/movie/infinite-movie"
import { MovieFilter } from "@/components/movie/movie-filter"

export default function MoviesPage({
  searchParams,
}: {
  searchParams: MovieSearchParams
}) {
  return (
    <>
      <MovieFilter />
      <InfiniteMovie {...searchParams} />
    </>
  )
}
