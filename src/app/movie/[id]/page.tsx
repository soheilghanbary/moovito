import { Movie } from "@/types"

import { getAllMovieDataById } from "@/lib/fetcher"
import { Button } from "@/components/ui/button"
import { BlurImage } from "@/components/blur-image"
import { CastCard } from "@/components/cast-card"
import { Icons } from "@/components/icons"
import YouTubePlayer from "@/components/youtube-player"

const baseurl = "https://image.tmdb.org/t/p/w500/"
const convertToHoursAndMinutes = (minutes: any) => {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  return { hours, minutes: remainingMinutes }
}

export async function generateMetadata({ params }: { params: { id: number } }) {
  const movieData: Movie = await getAllMovieDataById(params.id)
  return {
    title: movieData.title,
    openGraph: {
      title: movieData.title,
      images: [`${baseurl}${movieData.poster_path}`],
      description: movieData.overview,
      siteName: "Moovito",
    },
  }
}

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

  const { hours, minutes } = convertToHoursAndMinutes(movie.runtime)

  return (
    <>
      <div className="mx-auto flex max-w-screen-lg flex-col gap-8 md:my-32 md:flex-row">
        <BlurImage
          className="h-[38rem] w-full rounded-lg md:h-[28rem] md:w-80"
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
            <Icons.clock className="mr-2 h-4 w-4" /> Runtime:
            <span className="pl-2 font-normal text-muted-foreground">
              {`${hours}h ${minutes}m`}
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
        <section className="mt-8 space-y-4">
          <h2 className="border-b pb-2 text-2xl font-bold md:text-4xl">
            Trailer
          </h2>
          <YouTubePlayer id={trailerVideo.key} />
          <h2 className="border-b pb-2 text-2xl font-bold md:text-4xl">
            Casts
          </h2>
          <div className="flex flex-wrap justify-evenly gap-4 md:justify-between">
            {castList?.map((cast, index) => <CastCard {...cast} key={index} />)}
          </div>
        </section>
      )}
    </>
  )
}
