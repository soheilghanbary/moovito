import { Skeleton } from "../ui/skeleton"
import styles from "./movie.module.scss"

export function InfiniteMovieLoader() {
  return (
    <section className={styles["movie-loader"]}>
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="space-y-2">
          <Skeleton className="h-64 w-full rounded-2xl bg-secondary" />
          <Skeleton className="h-6 w-32 rounded-full bg-secondary" />
          <Skeleton className="h-6 w-24  rounded-full bg-secondary" />
        </div>
      ))}
    </section>
  )
}
