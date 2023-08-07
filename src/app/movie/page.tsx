import { MovieSearchParams } from "@/types"

import { MovieFilter } from "@/components/movie/movie-filter"
import { InfiniteMovie } from "@/app/movie/components/infinite-movie"

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
