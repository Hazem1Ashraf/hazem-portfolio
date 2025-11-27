"use client"

import { useState } from "react"
import { Globe, Check } from "lucide-react"

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState("en")

  const changeLanguage = (lang: string) => {
    setCurrentLang(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    setIsOpen(false)
    // In a real implementation, this would trigger i18n context update
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors flex items-center gap-2"
        aria-label="Change language"
      >
        <Globe size={20} />
        <span className="text-sm font-medium">{currentLang.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50">
          {["en", "ar"].map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className="w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors flex items-center justify-between first:rounded-t-lg last:rounded-b-lg"
            >
              <span>{lang === "en" ? "English" : "العربية"}</span>
              {currentLang === lang && <Check size={18} className="text-primary" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
