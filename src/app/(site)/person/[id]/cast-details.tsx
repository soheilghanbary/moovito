import { Person } from "@/types"

import { getCastById } from "@/lib/fetcher"
import { Button } from "@/components/ui/button"
import { BlurImage } from "@/components/blur-image"
import { Icons } from "@/components/icons"

function getAge(birthdate: string): number {
  const birthDate = new Date(birthdate)
  const currentDate = new Date()
  let age = currentDate.getFullYear() - birthDate.getFullYear()

  // Check if the birthday has occurred this year or not
  const currentMonth = currentDate.getMonth()
  const birthMonth = birthDate.getMonth()
  const currentDay = currentDate.getDate()
  const birthDay = birthDate.getDate()

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--
  }

  return age
}

export async function CastDetails({ id }: { id: number }) {
  const person: Person = await getCastById(id)
  const age = getAge(person.birthday)
  return (
    <div className="mx-auto flex max-w-screen-lg flex-col gap-8 md:my-32 md:flex-row">
      <BlurImage
        className="h-[38rem] w-full rounded-lg md:h-[28rem] md:w-80"
        image={`https://image.tmdb.org/t/p/w500${person.profile_path!}`}
        alt={person.name}
      />
      <div className="flex-1 space-y-5 text-muted-foreground">
        <h2 className="text-4xl font-black text-foreground">{person.name}</h2>
        <p className="leading-6 line-clamp-4">{person.biography}</p>
        <p className="flex items-center text-sm font-medium text-foreground">
          <Icons.cake className="mr-2 h-5 w-5" /> Birthday:
          <span className="pl-2 font-normal text-muted-foreground">
            {person.birthday} ({age} age now)
          </span>
        </p>
        <p className="flex items-center text-sm font-medium text-foreground">
          <Icons.user className="mr-2 h-5 w-5" /> Gender:
          <span className="pl-2 font-normal text-muted-foreground">
            {person.gender === 1 ? "Woman" : "Male"}
          </span>
        </p>
        <p className="flex items-center text-sm font-medium text-foreground">
          <Icons.building className="mr-2 h-5 w-5" /> Place of Birth:
          <span className="pl-2 font-normal text-muted-foreground">
            {person.place_of_birth}
          </span>
        </p>
        <div className="space-x-4">
          <Button variant={"default"}>
            <Icons.heart className="mr-2 h-4 w-4" /> Add to Favorite
          </Button>
          <Button variant={"outline"}>
            <Icons.copy className="mr-2 h-4 w-4" /> Copy URL
          </Button>
        </div>
      </div>
    </div>
  )
}
