"use client"

import { useEffect, useState } from "react"

/**
 * Hook to detect current screen size
 * Useful for conditional rendering based on breakpoints
 */
export function useResponsive() {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setScreenSize("mobile")
        setIsMobile(true)
      } else if (width < 1024) {
        setScreenSize("tablet")
        setIsMobile(false)
      } else {
        setScreenSize("desktop")
        setIsMobile(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { screenSize, isMobile }
}

/**
 * Hook to detect if screen matches a specific breakpoint
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => setMatches(media.matches)
    window.addEventListener("resize", listener)
    return () => window.removeEventListener("resize", listener)
  }, [matches])

  return matches
}
