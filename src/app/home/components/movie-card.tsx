import Link from "next/link"
import { Movie } from "@/types"

import { baseImageURL } from "@/lib/utils"
import { BlurImage } from "@/components/blur-image"
import { CircleProgress } from "@/components/circle-progressbar"
import { Icons } from "@/components/icons"

export function MovieCard(movie: Movie) {
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="relative h-80 w-full space-y-2 rounded-xl md:h-[400px]"
    >
      <BlurImage
        alt={movie.title}
        image={`${baseImageURL}${movie.poster_path}`}
        className="h-[inherit] w-[inherit] rounded-[inherit]"
      />
      <div className="absolute bottom-0 left-0 flex h-full w-full items-end rounded-[inherit] bg-gradient-to-t from-black/80 from-5% p-4">
        <div className="space-y-2">
          <CircleProgress rate={movie.vote_average} />
          <h2 className="line-clamp-1 text-sm font-semibold text-white">
            {movie.title}
          </h2>
          <p className="flex items-center text-xs font-medium text-white/80">
            <Icons.zap className="mr-1 h-4 w-4 text-amber-500" />
            {movie.vote_count}
          </p>
        </div>
      </div>
    </Link>
  )
}
