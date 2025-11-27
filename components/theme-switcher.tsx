"use client"

import { Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("theme")
    const isDarkMode = saved === "dark" || document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    const newIsDark = !isDark

    if (newIsDark) {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }

    setIsDark(newIsDark)
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
