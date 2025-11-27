"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Moon, Sun, Globe } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/i18n"
import { motion } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()
  const { t } = useTranslation(language)

  useEffect(() => {
    setMounted(true)
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "dark" : "light")
  }, [])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark")
    if (isDark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setTheme("light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setTheme("dark")
    }
  }

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/contact", label: t("nav.contact") },
  ]

  if (!mounted) return null

  return (
    <nav
      className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-primary-foreground p-2 z-50"
          >
            Skip to main content
          </a>

          <Link
            href="/"
            className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            aria-label="Hazem Ashraf - Home"
          >
            Hazem.
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  isActive(item.href) ? "text-blue-500" : "text-foreground/70 hover:text-primary"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  aria-hidden="true"
                ></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="p-2 hover:bg-muted rounded-lg transition-colors flex items-center gap-1"
              aria-label={`Switch to ${language === "en" ? "Arabic" : "English"}`}
              title={`Switch to ${language === "en" ? "Arabic" : "English"}`}
            >
              <Globe size={20} />
              <span className="text-sm font-medium">{language === "en" ? "AR" : "EN"}</span>
            </motion.button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 space-y-2 border-t border-border"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 text-sm rounded transition-colors ${
                  isActive(item.href)
                    ? "bg-blue-500/20 text-blue-500 font-medium"
                    : "text-foreground/70 hover:text-primary hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}

            <div className="px-4 py-2 flex gap-2 pt-4 border-t border-border">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 hover:bg-muted rounded-lg transition-colors flex-1 flex items-center justify-center"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                className="p-2 hover:bg-muted rounded-lg transition-colors flex-1 flex items-center justify-center gap-1"
                aria-label={`Switch to ${language === "en" ? "Arabic" : "English"}`}
              >
                <Globe size={20} />
                <span className="text-sm font-medium">{language === "en" ? "AR" : "EN"}</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
