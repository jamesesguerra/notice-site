"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import WorkItem from "./workItem"

const categories = ["Branding", "Packaging", "Video", "Illustration"]

const categoryColors: Record<string, string> = {
  Branding: "bg-orange text-white border-orange hover:bg-orange",
  Packaging: "bg-customBlue text-white border-customBlue hover:bg-customBlue",
  Video: "bg-customGreen text-white border-customGreen hover:bg-customGreen",
  Illustration:
    "bg-customYellow text-white border-customYellow hover:bg-customYellow",
}

const categoryHoverColors: Record<string, string> = {
  Branding: "hover:bg-orange hover:text-white hover:border-orange",
  Packaging: "hover:bg-customBlue hover:text-white hover:border-customBlue",
  Video: "hover:bg-customGreen hover:text-white hover:border-customGreen",
  Illustration:
    "hover:bg-customYellow hover:text-white hover:border-customYellow",
}

const Work = () => {
  const [selected, setSelected] = useState(categories[0])
  const [isFading, setIsFading] = useState(false)

  const handleCategoryChange = (item: string) => {
    if (item === selected) return

    setIsFading(true)

    setTimeout(() => {
      setSelected(item)
      setIsFading(false)
    }, 300)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pt-10 pb-20 sm:px-6 lg:pt-0">
      <div className="flex justify-center pb-5">
        <h2 className="font-museo text-5xl font-bold md:text-8xl lg:text-[200px]">
          Our Work
        </h2>
      </div>

      <div className="mb-15 flex justify-center gap-5">
        {categories.map((item) => {
          const isActive = selected === item

          return (
            <div key={item}>
              <div
                onClick={() => handleCategoryChange(item)}
                className={`h-20 w-20 cursor-pointer rounded-full border border-gray-400 transition-colors sm:hidden ${isActive ? categoryColors[item] : ""} `}
              />

              <Button
                onClick={() => handleCategoryChange(item)}
                className={`hidden border px-4 py-2 transition-colors duration-300 ease-in-out sm:flex ${
                  isActive
                    ? categoryColors[item]
                    : `border-gray bg-transparent text-black ${categoryHoverColors[item]}`
                } `}
              >
                {item}
              </Button>
            </div>
          )
        })}
      </div>

      <div
        className={`grid grid-cols-1 gap-15 transition-all duration-700 ease-in-out md:grid-cols-2 ${
          isFading ? "opacity-0 blur-sm" : "blur-0 opacity-100"
        }`}
      >
        <WorkItem imageSrc="/images/rectangle1.png" />
        <WorkItem imageSrc="/images/rectangle2.png" />
        <WorkItem imageSrc="/images/rectangle1.png" />
        <WorkItem imageSrc="/images/rectangle2.png" />
        <WorkItem imageSrc="/images/rectangle1.png" />
        <WorkItem imageSrc="/images/rectangle2.png" />
      </div>
    </div>
  )
}

export default Work
