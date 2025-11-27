"use client"

import type React from "react"
import { useEffect, useState } from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    const prefer = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    const theme = saved || prefer
 
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    setMounted(true)
  }, [])

  if (!mounted) return null

  return <>{children}</>
}
