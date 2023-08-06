"use client"

import { Player } from "@lottiefiles/react-lottie-player"

export function MovieLottie() {
  return <Player src="/movie.json" className="player" loop autoplay />
}
