import { MoviesResponse } from "@/types"

import { getSearchMovie } from "@/lib/fetcher"

import { MovieCard } from "../home/components/movie-card"

export default async function SearchPage({ searchParams }: any) {
  const allShows: MoviesResponse = await getSearchMovie(searchParams.keywords)
  return (
    <section
      style={{ contentVisibility: "auto" }}
      className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5"
    >
      {allShows.results.map((m) => (
        <MovieCard key={m.id} {...m} />
      ))}
    </section>
  )
}
