"use server"

import { revalidatePath } from "next/cache"

export async function filterMovies() {
  return revalidatePath("/movie")
}
