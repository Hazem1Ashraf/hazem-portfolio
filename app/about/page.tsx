"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/i18n"
import { Testimonials } from "@/components/testimonials"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function AboutPage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  const stats = [
    { value: t("about.yearsExp"), label: t("about.yearsExpLabel") },
    { value: t("about.projectsCompleted"), label: t("about.projectsCompletedLabel") },
    { value: t("about.technologies"), label: t("about.technologiesLabel") },
    { value: t("about.repos"), label: t("about.reposLabel") },
  ]

  const skills = {
    frontendCore: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    reactEcosystem: ["React", "Next.js", "Redux", "React Query"],
    uiLibraries: ["Tailwind CSS", "Shadcn/ui", "Material-UI"],
    backendSkills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    toolsDeployment: ["Git", "Docker", "Vercel", "AWS"],
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <ArrowLeft size={18} />
              {language === "en" ? "Back to home" : "العودة للرئيسية"}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold">{t("about.title")}</h1>
            <p className="text-xl text-foreground/70">{t("about.intro")}</p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Journey Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">{t("about.journey")}</h2>
                <p className="text-foreground/70 leading-relaxed whitespace-pre-line">{t("about.journeyText")}</p>
              </div>

              <p className="text-foreground/70 leading-relaxed">{t("about.fullStack")}</p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-foreground/60">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("about.skillsTitle")}</h2>
            <p className="text-foreground/70">{t("about.skillsSubtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-muted/50 border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              >
                <h4 className="font-bold text-primary mb-4 text-sm">
                  {category === "frontendCore"
                    ? t("about.frontendCore")
                    : category === "reactEcosystem"
                      ? t("about.reactEcosystem")
                      : category === "uiLibraries"
                        ? t("about.uiLibraries")
                        : category === "backendSkills"
                          ? t("about.backendSkills")
                          : t("about.toolsDeployment")}
                </h4>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="text-sm text-foreground/70 flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
            <Testimonials />
      

      <Footer />
    </main>
  )
}
