import { IntroHome } from "./components/intro"
import { Movies } from "./components/movies"

export default function Home() {
  return (
    <>
      <IntroHome />
      <div className="space-y-8">
        <Movies title="Now Playing" target="now_playing" />
        <Movies title="Upcoming" target="upcoming" />
        <Movies title="Top Rated" target="top_rated" />
        <Movies title="Popular" target="popular" />
      </div>
    </>
  )
}
