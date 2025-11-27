"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/i18n"

export function CTASection() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("home.callToAction")}</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{t("home.callToActionDesc")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {t("home.getInTouch")}
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {t("home.viewMyWork")}
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
