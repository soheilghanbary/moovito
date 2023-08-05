import { Movie } from "@/types"

import YouTubePlayer from "@/components/youtube-player"

export function MovieTrailer(movie: Movie) {
  const trailerVideo = movie.videos?.results.find(
    (video) => video.type === "Trailer"
  )
  return (
    <>
      <h2 className="border-b pb-2 text-2xl font-bold md:text-4xl">Trailer</h2>
      <YouTubePlayer id={trailerVideo?.key ?? ""} />
    </>
  )
}
