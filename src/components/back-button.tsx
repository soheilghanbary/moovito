"use client"

import { useRouter } from "next/navigation"

import { Icons } from "./icons"
import { Button } from "./ui/button"

export function BackButton() {
  const router = useRouter()
  return (
    <Button onClick={() => router.back()} variant={"ghost"}>
      <Icons.chevronLeft className="mr-2 h-4 w-4" />
      Back
    </Button>
  )
}
