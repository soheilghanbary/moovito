import { Skeleton } from "@/components/ui/skeleton"

export function InfiniteMovieLoader() {
  return (
    <section
      className={
        "mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5"
      }
    >
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="space-y-2">
          <Skeleton className="h-80 w-full rounded-2xl bg-secondary" />
          <Skeleton className="h-6 w-32 rounded-full bg-secondary" />
          <Skeleton className="h-6 w-24  rounded-full bg-secondary" />
        </div>
      ))}
    </section>
  )
}
