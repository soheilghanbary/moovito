import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function percent(value: number): number {
  const percentage = Math.round(value * 10)
  return percentage
}

export const baseImageURL = "https://image.tmdb.org/t/p/w500/"
