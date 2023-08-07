import { ChangeEvent } from "react"
import { create } from "zustand"

type MovieFilterState = {
  genre: string
  query: string
  year: [number, number]
  setYear: (value: [number, number]) => void
  setQuery: (e: ChangeEvent<HTMLInputElement>) => void
  setGenre: (genre: string) => void
}

export const useMovieFilterStore = create<MovieFilterState>((set) => ({
  genre: "all",
  query: "",
  year: [1940, 2023],
  setYear: (year) => set({ year }),
  setQuery: (e) => set({ query: e.target.value }),
  setGenre: (genre) => set({ genre }),
}))
