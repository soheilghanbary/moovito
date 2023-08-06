import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { InfiniteMovie } from "@/components/movie/infinite-movie"

export default function MoviesPage({
  searchParams,
}: {
  searchParams: { genre: string }
}) {
  return (
    <div className="flex gap-8">
      <div className="w-72">
        <Card className="sticky top-24 w-full">
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Input type="number" placeholder="1994" />
              <span className="text-sm text-muted-foreground">Until</span>
              <Input type="number" placeholder="2023" />
            </div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Genres</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* <Sele */}
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={"default"}>
              Filter
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="flex-1">
        <InfiniteMovie genre={searchParams.genre} />
      </div>
    </div>
  )
}
