"use client"

import { FormEvent, useRef } from "react"
import { useRouter } from "next/navigation"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function SearchBox() {
  const queryRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const onSearch = (e: FormEvent) => {
    e.preventDefault()
    if (!queryRef.current?.value.length) return
    const query = queryRef.current.value
    return router.push(`/search?keywords=${query}`)
  }

  return (
    <form onSubmit={onSearch} className="flex max-w-sm items-center space-x-4">
      <Input
        ref={queryRef}
        type="text"
        placeholder="Search Movie Name"
        className="flex-1"
      />
      <Button type="submit">Search</Button>
    </form>
  )
}
