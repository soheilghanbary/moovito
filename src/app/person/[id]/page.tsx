import { Suspense } from "react"
import { Metadata } from "next"
import { Person } from "@/types"

import { getCastById } from "@/lib/fetcher"

import { CastDetails } from "./cast-details"

const baseurl = "https://image.tmdb.org/t/p/w500/"

export async function generateMetadata({
  params,
}: {
  params: { id: number }
}): Promise<Metadata> {
  const person: Person = await getCastById(params.id)
  return {
    title: person.name,
    openGraph: {
      title: person.name,
      images: [`${baseurl}${person.profile_path}`],
      description: person.biography,
      siteName: "Moovito",
    },
  }
}

export default function CastPage({ params }: { params: { id: number } }) {
  return (
    <div>
      <Suspense fallback={<p>loading user</p>}>
        <CastDetails id={params.id} />
      </Suspense>
    </div>
  )
}
