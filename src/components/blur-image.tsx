"use client"

import { FC, HTMLAttributes, useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

interface Props extends HTMLAttributes<HTMLImageElement> {
  alt: string
  image: string
}

export const BlurImage: FC<Props> = ({ image, alt, className }) => {
  const [isReady, setIsReady] = useState(false)

  const onLoadCallback = () => {
    setIsReady(true)
  }

  return (
    <div
      className={cn(
        "group relative cursor-pointer overflow-hidden bg-secondary/60",
        className
      )}
    >
      <Image
        fill
        alt={alt}
        src={image}
        loading="lazy"
        className={cn(
          "h-full w-full rounded-[inherit] object-cover shadow transition duration-300 group-hover:scale-110"
        )}
        onLoadingComplete={onLoadCallback}
      />
    </div>
  )
}
