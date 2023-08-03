import { PropsWithChildren } from "react"
import Link from "next/link"
import { ClapperboardIcon, SearchIcon } from "lucide-react"

import { ThemeToggle } from "../theme-toggle"
import { Button } from "../ui/button"
import { SiteFooter } from "./site-footer"
import { SiteNav } from "./site-nav"

export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto my-2">{children}</main>
      <SiteFooter />
    </>
  )
}

const SiteHeader = () => (
  <header className="sticky top-0 z-50 border-b bg-background">
    <nav className="container mx-auto flex items-center justify-between py-4">
      <Logo />
      <div className="flex-1">
        <SiteNav />
      </div>
      <div className="flex items-center space-x-4">
        <SearchBox />
        <ThemeToggle />
      </div>
    </nav>
  </header>
)

const Logo = () => (
  <Link href={"/"} className="mr-8 flex items-center">
    <ClapperboardIcon className="mr-3 h-5 w-5 text-teal-500" />
    <h3 className="font-semibold">Moovito</h3>
  </Link>
)

const SearchBox = () => (
  <Button
    variant={"outline"}
    className="flex w-52 justify-start gap-2 text-muted-foreground"
  >
    <SearchIcon className="h-4 w-4" />
    Search Movie Name
  </Button>
)
