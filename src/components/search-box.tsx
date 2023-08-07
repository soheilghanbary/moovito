"use client"

import { FormEvent, useRef } from "react"
import { useRouter } from "next/navigation"

import { Input } from "./ui/input"

export function SearchBox() {
  const formRef = useRef<HTMLFormElement>(null)
  const queryRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const onSearch = (e: FormEvent) => {
    e.preventDefault()
    if (!queryRef.current?.value.length) return
    const query = queryRef.current.value
    router.push(`/search?keywords=${query}`)
    queryRef.current.blur()
    return formRef.current?.reset()
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSearch}
      className="flex max-w-sm flex-1 items-center"
    >
      <Input ref={queryRef} type="text" placeholder="Search Movie" />
    </form>
  )
}
