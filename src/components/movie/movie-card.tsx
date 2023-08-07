import Link from "next/link"
import { Movie } from "@/types"
import { ZapIcon } from "lucide-react"

import { BlurImage } from "../blur-image"
import styles from "./movie.module.scss"

export const MovieCard = ({ id, title, poster_path, vote_count }: Movie) => (
  <Link href={`/movie/${id}`} className={styles["movie-card"]}>
    <BlurImage
      className={styles["movie-poster"]}
      image={`https://image.tmdb.org/t/p/w500${poster_path}`}
      alt={title}
    />
    <h2 className="w-[80%]">{title}</h2>
    <p>
      <ZapIcon />
      {vote_count}
    </p>
  </Link>
)
