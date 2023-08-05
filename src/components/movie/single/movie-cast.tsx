import { Movie } from "@/types"

import { CastCard } from "@/components/cast-card"

export function MovieCast(movie: Movie) {
  const castList = movie.credits?.cast.slice(0, 12)
  return (
    <>
      <h2 className="border-b pb-2 text-2xl font-bold md:text-4xl">Casts</h2>
      <div className="flex flex-wrap justify-evenly gap-4 md:justify-between">
        {castList?.map((cast, index) => <CastCard {...cast} key={index} />)}
      </div>
    </>
  )
}
