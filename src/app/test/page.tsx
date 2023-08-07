"use client"

import { Drawer } from "vaul"

import { genres } from "@/config/genres"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function Test() {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button>Open Drawer</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-background border-t flex flex-col rounded-t-[10px] h-[56%] mt-24 fixed bottom-0 left-0 right-0 p-4">
          <div className="p-4 rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-secondary mb-8" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">
                Avanced Search
              </Drawer.Title>
              <section className="flex flex-col gap-4">
                <hr className="my-2" />
                <Input type="text" placeholder="Movie Name" />
                <Select>
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
                    <Label>2023</Label>
                  </div>
                  <Slider max={2023} min={1940} step={1} />
                </div>
              </section>
            </div>
          </div>
          <Button className="mt-auto w-full">Filter</Button>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
