"use client"

import { MenuIcon } from "lucide-react"

import { useSidebar } from "@/hooks/use-sidebar"

import { Button } from "../ui/button"

export function MobileMenu() {
  const { openSidebar } = useSidebar()
  return (
    <Button
      onClick={openSidebar}
      variant={"ghost"}
      size={"icon"}
      className="mr-2 md:hidden"
    >
      <MenuIcon className="h-4 w-4" />
    </Button>
  )
}
