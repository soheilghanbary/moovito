import { Movie } from "@/types"

import { getAllMovieDataById } from "@/lib/fetcher"
import { Button } from "@/components/ui/button"
import { BlurImage } from "@/components/blur-image"
import { Icons } from "@/components/icons"

export default async function MoviePage({
  params,
}: {
  params: { id: number }
}) {
  const movie: Movie = await getAllMovieDataById(params.id)
  return (
    <div className="mx-auto my-32 flex max-w-screen-lg gap-8">
      <BlurImage
        className="h-[28rem] w-80 rounded-lg"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path!}`}
        alt={movie.title}
      />
      <div className="flex-1 space-y-4 text-muted-foreground">
        <h2 className="text-4xl font-black text-foreground">{movie.title}</h2>
        <p className="leading-6">{movie.overview}</p>
        <p className="flex items-center">
          <div className="font-semibold text-foreground flex items-center mr-2">
            <Icons.date className="mr-2 h-4 w-4" /> Release Date:
          </div>
          {movie.release_date}
        </p>
        <p className="flex items-center">
          <div className="text-foreground font-semibold mr-2">Status:</div>{" "}
          {movie.status} 🟢
        </p>
        <p className="flex items-center">
          <div className="text-foreground font-semibold mr-2">Geners:</div>
          {movie.genres.map((g) => (
            <span className="mr-2 first:ml-2" key={g.id}>
              {g.name}
            </span>
          ))}
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
