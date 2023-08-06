import { useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useMovieFilterStore } from "@/store"

import { genres } from "@/config/genres"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import { SearchBox } from "@/components/search-box"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { ScrollArea } from "../ui/scroll-area"

export function MovieFilter() {
  const { query, genre, year, setYear, rate, setRate, setQuery, setGenre } =
    useMovieFilterStore()
  const pathname = usePathname()
  const params = useSearchParams()
  const router = useRouter()
  const onUpdate = () =>
    router.push(`/movie?genre=${genre}&min_year=${year[0]}&max_year=${year[1]}`)
  // &primary_release_date.gte=1990-01-01&primary_release_date.lte=1990-12-31

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button>Filter</Button>
        </DialogTrigger>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Advanced Search</DialogTitle>
          </DialogHeader>
          <hr className="my-2" />
          <Input
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
          <div>
            <div className="mb-4 flex items-center justify-between text-muted-foreground">
              <Label>Rate</Label>
              <Label>
                {rate[0]} - {rate[1]}
              </Label>
            </div>
            <Slider
              defaultValue={rate}
              onValueChange={setRate}
              max={10.0}
              min={1.0}
              step={0.1}
            />
          </div>
          <DialogFooter className="space-x-4">
            <Button variant={"outline"}>Reset</Button>
            <Button onClick={onUpdate} variant={"default"}>
              Update
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
