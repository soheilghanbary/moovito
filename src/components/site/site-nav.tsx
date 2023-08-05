"use client"

import * as React from "react"
import Link from "next/link"
import { MoviesResponse } from "@/types"

import { getMovieDataByParams } from "@/lib/fetcher"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Icons } from "@/components/icons"

const components: {
  title: string
  id: any
}[] = [
  {
    id: "all",
    title: "All",
  },
  {
    id: 28,
    title: "Action",
  },
  {
    id: 12,
    title: "Adventure",
  },
  {
    id: 16,
    title: "Animation",
  },
  {
    id: 35,
    title: "Comedy",
  },
  {
    id: 80,
    title: "Crime",
  },
  {
    id: 99,
    title: "Documentary",
  },
  {
    id: 18,
    title: "Drama",
  },
  {
    id: 10751,
    title: "Family",
  },
  {
    id: 14,
    title: "Fantasy",
  },
  {
    id: 36,
    title: "History",
  },
  {
    id: 27,
    title: "Horror",
  },
  {
    id: 10402,
    title: "Music",
  },
  {
    id: 9648,
    title: "Mystery",
  },
  {
    id: 10749,
    title: "Romance",
  },
  {
    id: 878,
    title: "Science Fiction",
  },
  {
    id: 10770,
    title: "TV Movie",
  },
  {
    id: 53,
    title: "Thriller",
  },
  {
    id: 10752,
    title: "War",
  },
  {
    id: 37,
    title: "Western",
  },
]

export function SiteNav() {
  const navs = components.map((genre) => ({
    ...genre,
    href: `/movie?genre=${genre.id}`,
  }))

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/movie" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Movies
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Geners</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[320px] gap-3 p-4 md:w-[320px] md:grid-cols-2">
              {navs.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Favorite List
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
