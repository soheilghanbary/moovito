import { Movie } from "@/types"
import { Player } from "@lottiefiles/react-lottie-player"

import { getAllMovieDataById } from "@/lib/fetcher"
import { Button } from "@/components/ui/button"
import { BlurImage } from "@/components/blur-image"
import { CastCard } from "@/components/cast-card"
import { Icons } from "@/components/icons"
import YouTubePlayer from "@/components/youtube-player"

export default async function MoviePage({
  params,
}: {
  params: { id: number }
}) {
  const movie: Movie = await getAllMovieDataById(params.id)

  const trailerVideo = movie.videos?.results.find(
    (video) => video.type === "Trailer"
  )
  const castList = movie.credits?.cast.slice(0, 12)

  return (
    <>
      <div className="mx-auto my-32 flex max-w-screen-lg gap-8">
        <BlurImage
          className="h-[28rem] w-80 rounded-lg"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path!}`}
          alt={movie.title}
        />
        <div className="flex-1 space-y-5 text-muted-foreground">
          <h2 className="text-4xl font-black text-foreground">{movie.title}</h2>
          <p className="leading-6">{movie.overview}</p>
          <p className="flex items-center text-sm font-medium text-foreground">
            <Icons.date className="mr-2 h-4 w-4" /> Release Date:
            <span className="pl-2 font-normal text-muted-foreground">
              {movie.release_date}
            </span>
          </p>
          <p className="flex items-center text-sm font-medium text-foreground">
            <Icons.command className="mr-2 h-4 w-4" /> Status:
            <span className="pl-2 font-normal text-muted-foreground">
              {movie.status} 🟢
            </span>
          </p>
          <p className="flex items-center text-sm font-medium text-foreground">
            <Icons.date className="mr-2 h-4 w-4" /> Geners:
            <span className="pl-2 font-normal text-muted-foreground">
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
      {trailerVideo?.key && (
        <>
          <h2 className="border-b pb-4 text-4xl font-bold">Trailer</h2>
          <div className="px-4">
            <YouTubePlayer id={trailerVideo.key} />
          </div>
          <section className="mt-4">
            <h2 className="my-2 scroll-m-20 border-b py-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Cast
            </h2>
            <div className="flex flex-wrap justify-evenly gap-2">
              {castList?.map((cast, index) => (
                <CastCard {...cast} key={index} />
              ))}
            </div>
          </section>
        </>
      )}
    </>
  )
}
