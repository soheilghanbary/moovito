import Link from "next/link"
import { Movie, PageProps } from "@/types"

import { getClock } from "@/lib/convertors"
import { getAllMovieDataById } from "@/lib/fetcher"
import { baseImageURL } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BlurImage } from "@/components/blur-image"
import { CircleProgress } from "@/components/circle-progressbar"
import { Icons } from "@/components/icons"
import { CopyMovieURL } from "@/components/movie/single/copy-movie"
import { Toaster } from "@/components/toaster"
import YouTubePlayer from "@/components/youtube-player"

export async function generateMetadata({ params }: PageProps) {
  const movieData: Movie = await getAllMovieDataById(params.id)
  return {
    title: movieData.title,
    openGraph: {
      title: movieData.title,
      images: [`${baseImageURL}${movieData.poster_path}`],
      description: movieData.overview,
      siteName: "Moovito",
    },
  }
}

export default async function MoviePage({ params }: PageProps) {
  const movie: Movie = await getAllMovieDataById(params.id)
  const { hours, minutes } = getClock(movie.runtime)
  const trailerVideo = movie.videos?.results.find(
    (video) => video.type === "Trailer"
  )
  const casts = movie.credits?.cast.slice(0, 12)
  return (
    <>
      <section
        style={{ contentVisibility: "auto" }}
        className="mx-auto flex max-w-screen-md flex-col gap-8 px-4 md:flex-row md:px-0"
      >
        <BlurImage
          className="h-96 w-64 rounded-xl"
          alt={movie.title}
          image={`${baseImageURL}${movie.poster_path}`}
        />
        <div className="flex flex-1 flex-col space-y-6">
          <h2 className="text-4xl font-black">{movie.title}</h2>
          <div className="flex items-center space-x-2">
            {movie.genres.map((g) => (
              <div
                className="rounded-full bg-secondary px-5 py-2 text-sm"
                key={g.id}
              >
                {g.name}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-8">
            <p className="flex items-center text-sm">
              <Icons.date className="mr-2 h-4 w-4" />
              {movie.release_date}
            </p>
            <p className="flex items-center text-sm">
              <Icons.clock className="mr-2 h-4 w-4" />
              {`${hours}h ${minutes}m`}
            </p>
            <p className="flex items-center text-sm">
              <Icons.command className="mr-2 h-4 w-4" />
              <span>{movie.status}</span>
            </p>
          </div>
          <CircleProgress rate={movie.vote_average} />
          <CopyMovieURL />
        </div>
      </section>
      <Card className="mx-auto mt-4 max-w-screen-md">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-7 text-muted-foreground">
            {movie.overview}
          </p>
        </CardContent>
      </Card>
      <Card className="mx-auto mt-4 max-w-screen-md">
        <CardHeader>
          <CardTitle>Trailer</CardTitle>
        </CardHeader>
        <CardContent>
          <YouTubePlayer id={trailerVideo?.key ?? ""} />
        </CardContent>
      </Card>
      <Card className="mx-auto mt-4 max-w-screen-md">
        <CardHeader>
          <CardTitle>Cast</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-4 gap-4">
          {casts?.map((c) => (
            <Link key={c.id} href={`/person/${c.id}`} className="space-y-2">
              <BlurImage
                className="h-56 w-full rounded-xl"
                alt={c.name}
                image={`${baseImageURL}${c.profile_path}`}
              />
              <h5 className="text-sm font-medium">{c.name}</h5>
            </Link>
          ))}
        </CardContent>
      </Card>
      <Toaster />
    </>
  )
}
