import Image from "next/image"
import Link from "next/link"
import { CastMember } from "@/types"

import { BlurImage } from "./blur-image"
import { Icons } from "./icons"

const baseurl = "https://image.tmdb.org/t/p/w500"

export function CastCard(cast: CastMember) {
  return (
    <Link
      href={`/person/${cast.id}`}
      className="flex flex-col items-center justify-center space-y-2"
    >
      {cast.profile_path ? (
        <>
          <div className="w-[200px] overflow-hidden rounded">
            <BlurImage
              alt={`${cast.name}`}
              aria-label={`${cast.name} photo`}
              image={`${baseurl}${cast.profile_path}`}
              className="aspect-[2/3] h-auto w-auto rounded-xl object-cover transition-all"
            />
          </div>
        </>
      ) : (
        <div className="w-[200px] overflow-hidden rounded">
          <Icons.user className="aspect-[2/3] h-full w-full rounded-xl object-cover text-muted transition-all" />
        </div>
      )}
      <h6 className="font-semibold">{cast.name}</h6>
      <p className="flex flex-wrap text-center text-xs text-muted-foreground">
        {cast.character}
      </p>
    </Link>
  )
}
