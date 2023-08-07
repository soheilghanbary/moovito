import { PropsWithChildren } from "react"
import Link from "next/link"
import { ClapperboardIcon, MenuIcon, SearchIcon } from "lucide-react"

import { SearchBox } from "../search-box"
import { ThemeToggle } from "../theme-toggle"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { MobileMenu } from "./menu-button"
import { MobileNav } from "./mobile-nav"
import { SiteFooter } from "./site-footer"
import { SiteNav } from "./site-nav"

export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <>
      <SiteHeader />
      <Main>{children}</Main>
      <SiteFooter />
      <MobileNav />
    </>
  )
}

const Main = ({ children }: PropsWithChildren) => (
  <main className="container mx-auto my-4">{children}</main>
)

const SiteHeader = () => (
  <header className="border-b">
    <nav className="container mx-auto flex items-center justify-between py-4">
      <MobileMenu />
      <Logo />
      <div className="hidden flex-1 md:block">
        <SiteNav />
      </div>
      <div className="flex items-center space-x-2">
        <SearchBox />
        <ThemeToggle />
      </div>
    </nav>
  </header>
)

export const Logo = () => (
  <Link href={"/"} className="mr-8 flex flex-1 items-center md:grow-0">
    <ClapperboardIcon className="mr-3 h-5 w-5 text-teal-500" />
    <h3 className="font-semibold">Moovito</h3>
  </Link>
)
