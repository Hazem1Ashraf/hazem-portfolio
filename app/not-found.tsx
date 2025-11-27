"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/i18n"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="text-8xl font-bold text-primary mb-4">404</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("notFound.title")}</h1>
            <p className="text-xl text-foreground/70">{t("notFound.subtitle")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Home size={20} />
              {t("notFound.goHome")}
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <ArrowLeft size={20} />
              {t("notFound.goBack")}
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
