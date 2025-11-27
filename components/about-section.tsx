"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/i18n"

const statsData = [
  { key: "yearsExp", labelKey: "yearsExpLabel" },
  { key: "projectsCompleted", labelKey: "projectsCompletedLabel" },
  { key: "technologies", labelKey: "technologiesLabel" },
  { key: "repos", labelKey: "reposLabel" },
]

export function AboutSection() {
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
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">{t("home.aboutTitle")}</h2>
          <p className="text-xl text-foreground/70 max-w-2xl">{t("home.aboutText")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Journey */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">{t("home.journey")}</h3>
            <p className="text-foreground/70 leading-relaxed whitespace-pre-line">{t("home.journeyText")}</p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {statsData.map((stat, i) => (
              <motion.div
                key={stat.key}
                whileHover={{ y: -10 }}
                className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <p className="text-3xl font-bold text-primary mb-2">{t(`home.${stat.key}`)}</p>
                <p className="text-sm text-foreground/60">{t(`home.${stat.labelKey}`)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
