import { Movie, PageProps } from "@/types"

import { getAllMovieDataById } from "@/lib/fetcher"
import { baseImageURL } from "@/lib/utils"
import { Container } from "@/components/container"
import { MovieCast } from "@/components/movie/single/movie-cast"
import { MovieDetails } from "@/components/movie/single/movie-details"
import { MovieTrailer } from "@/components/movie/single/movie-trailer"

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
  return (
    <>
      <MovieDetails {...movie} />
      <section className="mt-8 space-y-4">
        <MovieTrailer {...movie} />
        <MovieCast {...movie} />
      </section>
    </>
  )
}
