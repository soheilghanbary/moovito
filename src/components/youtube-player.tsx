export default function YouTubePlayer({ id }: { id: string }) {
  return (
    <div className="aspect-video rounded-xl">
      <iframe
        className="h-full w-full rounded-xl border-none"
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media; fullscreen;"
        title="Embedded YouTube video"
      />
    </div>
  )
}
