import { ChangeEvent } from "react"
import create from "zustand"

type MovieFilterState = {
  genre: string
  query: string
  year: [number, number]
  rate: [number, number]
  setYear: (value: [number, number]) => void
  setRate: (rate: [number, number]) => void
  setQuery: (e: ChangeEvent<HTMLInputElement>) => void
  setGenre: (genre: string) => void
}

export const useMovieFilterStore = create<MovieFilterState>((set) => ({
  genre: "all",
  query: "Game of Throns",
  year: [1940, 2023],
  rate: [1.0, 10.0],
  setYear: (year) => set({ year }),
  setRate: (rate) => set({ rate }),
  setQuery: (e) => set({ query: e.target.value }),
  setGenre: (genre) => set({ genre }),
}))
