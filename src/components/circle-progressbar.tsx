"use client"

import { useMemo } from "react"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"

import { percent } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const CircleProgress = ({ rate }: { rate: number }) => {
  const progress = useMemo(() => percent(rate), [rate])

  const getColor = (rate: number) => {
    if (rate >= 80) {
      return "#10b981"
    } else if (rate >= 85) {
      return "#38bdf8"
    } else if (rate >= 70) {
      return "#4ade80"
    } else if (rate >= 50) {
      return "#fb923c"
    } else {
      return "#f43f5e"
    }
  }

  const color = getColor(progress)

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <CircularProgressbar
            className="h-12 w-12 duration-150 hover:scale-125"
            value={progress}
            text={`${progress}%`}
            styles={buildStyles({
              rotation: 0,
              strokeLinecap: "round",
              textSize: "24px",
              pathTransitionDuration: 0.5,
              pathColor: color,
              textColor: color,
              trailColor: "transparent",
            })}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>User Ratings</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
