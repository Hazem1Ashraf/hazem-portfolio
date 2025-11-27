"use client"
  
import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"
 
interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isArabic: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null
    if (saved) {
      setLanguageState(saved)
      document.documentElement.lang = saved
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr"
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  }

  if (!mounted) return null

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isArabic: language === "ar" }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
