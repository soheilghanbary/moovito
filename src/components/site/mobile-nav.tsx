"use client"

import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { useSidebar } from "@/hooks/use-sidebar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Icons } from "../icons"
import { Button } from "../ui/button"
import { Logo } from "./site-layout"

const navs = ["All", "Action", "Funny", "Scary", "Drama", "Love"]

export function MobileNav() {
  const { open, closeSidebar } = useSidebar()
  return (
    <div>
      <div
        onClick={closeSidebar}
        className={cn(
          "fixed left-0 top-0 h-full w-full bg-background/80 backdrop-blur duration-300",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      ></div>
      <div
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-72 bg-background duration-300",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="space-y-2 p-4">
          <div className="flex items-center justify-between border-b pb-2">
            <Logo />
            <Button onClick={closeSidebar} variant={"ghost"} size={"icon"}>
              <XIcon className="h-4 w-4" />
            </Button>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline">
                Geners
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {navs.map((n) => (
                    <li
                      key={n}
                      className="cursor-pointer rounded-lg px-3 py-2 font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:no-underline">
                Getting Started
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <p className="flex items-center py-2 font-medium">
            <Icons.heart className="mr-2 h-4 w-4 fill-muted-foreground" />
            My Favorite List
          </p>
        </div>
      </div>
    </div>
  )
}
