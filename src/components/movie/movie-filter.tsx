"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { useMovieFilterStore } from "@/store"

import { genres } from "@/config/genres"
import { filterMovies } from "@/lib/action"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { ScrollArea } from "../ui/scroll-area"

export function MovieFilter() {
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()
  const { query, genre, year, setYear, setQuery, setGenre } =
    useMovieFilterStore()
  const router = useRouter()
  const onUpdate = () => {
    // update data on production
    startTransition(() => {
      filterMovies()
      router.push(
        `/movie?query=${query}&genre=${genre}&min_year=${year[0]}&max_year=${year[1]}`
      )
    })
    setOpen(false)
  }

  return (
    <>
      <Button
        className="fixed bottom-10 left-1/2 z-50 -translate-x-1/2"
        onClick={() => setOpen(!open)}
      >
        Filter Movie List
      </Button>
      <Dialog open={open} onOpenChange={() => setOpen(false)}>
        <DialogContent className="max-w-sm space-y-2">
          <DialogHeader>
            <DialogTitle>Advanced Search</DialogTitle>
          </DialogHeader>
          <hr className="my-2" />
          <Input
            autoFocus={false}
            type="text"
            placeholder="Movie Name"
            defaultValue={query}
            onChange={setQuery}
          />
          <Select onValueChange={setGenre}>
            <SelectTrigger>
              <SelectValue placeholder="Select Genre" />
            </SelectTrigger>
            <SelectContent>
              <ScrollArea className="h-64">
                {genres.map((g) => (
                  <SelectItem key={g.id} value={g.id}>
                    {g.title}
                  </SelectItem>
                ))}
              </ScrollArea>
            </SelectContent>
          </Select>
          <div>
            <div className="mb-4 flex items-center justify-between text-muted-foreground">
              <Label>Year</Label>
              <Label>
                {year[0]} - {year[1]}
              </Label>
            </div>
            <Slider
              defaultValue={year}
              onValueChange={setYear}
              max={2023}
              min={1940}
              step={1}
            />
          </div>
          <DialogFooter className="mt-4 grid grid-cols-2 gap-4">
            <Button variant={"outline"}>Reset</Button>
            <Button disabled={isPending} onClick={onUpdate} variant={"default"}>
              Update
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
