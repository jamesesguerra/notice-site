"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollManager() {
  const pathname = usePathname()

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches

    if (isMobile) {
      // iOS/Android handle smooth scrollTo poorly — manually animate it
      const start = window.scrollY
      const duration = 1000
      const startTime = performance.now()

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        // ease-out curve
        const ease = 1 - Math.pow(1 - progress, 3)
        window.scrollTo(0, start * (1 - ease))

        if (progress < 1) requestAnimationFrame(step)
      }

      requestAnimationFrame(step)
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [pathname])

  return null
}
