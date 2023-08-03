"use client"

import { useTheme } from "next-themes"

import { Icons } from "@/components/icons"

import { Button } from "./ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variant={"outline"}
      size={"icon"}
    >
      <Icons.sun className="animate-fade-in hidden h-5 w-5 dark:inline" />
      <Icons.moon className="animate-fade-in h-5 w-5 dark:hidden" />
    </Button>
  )
}
