import { Movie } from "@/types"

import { getClock } from "@/lib/convertors"
import { Button } from "@/components/ui/button"
import { BlurImage } from "@/components/blur-image"
import { Icons } from "@/components/icons"

import styles from "./movie-details.module.scss"

export function MovieDetails(movie: Movie) {
  const { hours, minutes } = getClock(movie.runtime)
  return (
    <div className={styles.container}>
      <BlurImage
        className={styles.cover}
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path!}`}
        alt={movie.title}
      />
      <div className="flex-1 space-y-5 text-muted-foreground">
        <h2 className={styles.title}>{movie.title}</h2>
        <p className={styles.overview}>{movie.overview}</p>
        <p className={styles.detail}>
          <Icons.date /> Release Date:
          <span>{movie.release_date}</span>
        </p>
        <p className={styles.detail}>
          <Icons.clock /> Runtime:
          <span>{`${hours}h ${minutes}m`}</span>
        </p>
        <p className={styles.detail}>
          <Icons.command /> Status:
          <span>{movie.status} 🟢</span>
        </p>
        <p className={styles.detail}>
          <Icons.date /> Geners:
          <span>
            {movie.genres.map((g) => (
              <span
                className="mr-2 cursor-pointer rounded-full bg-secondary/70 px-2 py-1 font-medium text-foreground/80 shadow-sm transition first:ml-2 hover:bg-secondary"
                key={g.id}
              >
                {g.name}
              </span>
            ))}
          </span>
        </p>
        <div className="space-x-4">
          <Button variant={"default"}>
            <Icons.heart className="mr-2 h-4 w-4" /> Add to Favorite
          </Button>
          <Button variant={"outline"}>
            <Icons.copy className="mr-2 h-4 w-4" /> Copy URL
          </Button>
        </div>
      </div>
    </div>
  )
}
