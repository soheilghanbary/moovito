import Link from "next/link"
import { Movie } from "@/types"
import { ZapIcon } from "lucide-react"

import { BlurImage } from "../blur-image"

export const MovieCard = ({ id, title, poster_path, vote_count }: Movie) => (
  <Link href={`/movie/${id}`} className="space-y-2">
    <BlurImage
      className="h-64 w-44 rounded-lg md:h-80 md:w-52"
      image={`https://image.tmdb.org/t/p/w500${poster_path}`}
      alt=""
    />
    <h2 className="line-clamp-1 text-sm font-semibold">{title}</h2>
    <p className="flex items-center text-xs text-foreground">
      <ZapIcon className="mr-1.5 h-4 w-4 text-amber-500" />
      {vote_count}
    </p>
  </Link>
)
