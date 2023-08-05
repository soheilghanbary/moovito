import { Movie } from "@/types"
import { CircularProgressbar } from "react-circular-progressbar"

import { getClock } from "@/lib/convertors"
import { Button } from "@/components/ui/button"
import { BlurImage } from "@/components/blur-image"
import { CircleProgress } from "@/components/circle-progressbar"
import { Icons } from "@/components/icons"

import { CopyMovieURL } from "./copy-movie"
import styles from "./single.module.scss"

export function MovieDetails(movie: Movie) {
  const { hours, minutes } = getClock(movie.runtime)
  return (
    <>
      <div className={styles.container}>
        <BlurImage
          className={styles.cover}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path!}`}
          alt={movie.title}
        />
        <div className="flex-1 space-y-5 text-muted-foreground">
          <h2 className={styles.title}>{movie.title}</h2>
          <div className={styles.genres}>
            {movie.genres.map((g) => (
              <span key={g.id}>{g.name}</span>
            ))}
          </div>
          <p className={styles.overview}>{movie.overview}</p>
          <div className="flex flex-wrap items-center gap-8">
            <p className={styles.detail}>
              <Icons.date />
              {movie.release_date}
            </p>
            <p className={styles.detail}>
              <Icons.clock />
              {`${hours}h ${minutes}m`}
            </p>
            <p className={styles.detail}>
              <Icons.command />
              <span>{movie.status}</span>
            </p>
          </div>
          <CircleProgress rate={movie.vote_average} />
          <div className="space-x-4">
            <Button variant={"default"}>
              <Icons.heart className="mr-2 h-4 w-4" /> Add to Favorite
            </Button>
            <CopyMovieURL />
          </div>
        </div>
      </div>
    </>
  )
}
