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
    <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <div className="flex justify-center">
        <h2 className="text-20xl font-museo font-bold">Our Works</h2>
      </div>

      <div className="-mt-[30px] mb-15 flex justify-center gap-5">
        {categories.map((item) => {
          const isActive = selected === item

          return (
            <Button
              key={item}
              onClick={() => handleCategoryChange(item)}
              className={`border transition-colors duration-300 ease-in-out ${
                isActive
                  ? categoryColors[item]
                  : `border-gray bg-transparent text-black ${categoryHoverColors[item]}`
              }`}
            >
              {item}
            </Button>
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
