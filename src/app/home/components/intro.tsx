import Link from "next/link"
import Balancer from "react-wrap-balancer"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MovieLottie } from "@/components/movie/movie-lottie"
import { SearchBox } from "@/components/search-box"

export function IntroHome() {
  return (
    <div className="mb-4 items-center md:flex">
      <div className="md:w-1/3">
        <MovieLottie />
      </div>
      <div className="w-full flex-1 space-y-4 md:w-2/3">
        <Balancer
          ratio={0}
          className="text-center text-3xl font-black md:text-5xl"
        >
          {siteConfig.description}
        </Balancer>
        <SearchBox />
        <Link
          href={"/movie"}
          className={buttonVariants({ variant: "default" })}
        >
          Browse Movies
        </Link>
      </div>
    </div>
  )
}
