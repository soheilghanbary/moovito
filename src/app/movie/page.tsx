import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { InfiniteMovie } from "@/components/movie/infinite-movie"

export default function MoviesPage({
  searchParams,
}: {
  searchParams: { genre: string }
}) {
  return (
    <div>
      <InfiniteMovie genre={searchParams.genre} />
    </div>
  )
}
