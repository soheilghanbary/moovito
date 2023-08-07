"use client"

import { usePathname } from "next/navigation"
import { toast, Toaster } from "sonner"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function CopyMovieURL() {
  const pathname = usePathname()

  const onCopyURL = () => {
    navigator.clipboard
      .writeText(`${process.env.PUBLIC_URL}${pathname}`)
      .then(() => {
        toast.success("URL Has been Copy to Clipboard!")
      })
      .catch((error) => {
        console.error("Failed to copy URL:", error)
      })
  }

  return (
    <div>
      <Button onClick={onCopyURL}>
        <Icons.copy className="mr-2 h-4 w-4" /> Copy URL
      </Button>
    </div>
  )
}
