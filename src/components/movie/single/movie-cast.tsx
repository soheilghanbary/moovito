import Link from "next/link"
import { CastMember, Movie } from "@/types"

import { baseImageURL } from "@/lib/utils"
import { BlurImage } from "@/components/blur-image"
import { Icons } from "@/components/icons"

import styles from "./single.module.scss"

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

function CastCard(cast: CastMember) {
  return (
    <Link href={`/person/${cast.id}`} className={styles.cast}>
      {cast.profile_path ? (
        <BlurImage
          alt={`${cast.name}`}
          aria-label={`${cast.name} photo`}
          image={`${baseImageURL}${cast.profile_path}`}
          className={styles["cast-profile"]}
        />
      ) : (
        <CastPlaceholder />
      )}
      <h6>{cast.name}</h6>
      <p>{cast.character}</p>
    </Link>
  )
}

const CastPlaceholder = () => (
  <div className={styles["cast-placeholder"]}>
    <Icons.user />
  </div>
)
