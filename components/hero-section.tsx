"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/i18n"

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export function HeroSection() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  const socialLinks = [
    { icon: Github, href: "https://github.com/Hazem1Ashraf", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hazem-rabie-98a741336/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hazemashraf.programming@gmail.com", label: "Email" },
  ]

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center" id="main-content">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="fixed top-20 right-4 md:right-8 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-sm text-primary font-medium z-40"
        >
          {t("home.available")}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div variants={slideInLeft} initial="hidden" animate="visible" className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-primary font-semibold text-lg">{t("home.greeting")}</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">{t("home.name")}</h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">{t("home.title")}</h2>
              <p className="text-lg text-foreground/60">{t("home.subtitle")}</p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-foreground/70 text-lg leading-relaxed max-w-md">
              {t("home.description")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div variants={itemVariants}>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  {t("home.viewWork")}
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  {t("home.downloadCV")}
                </a>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-8">
              <p className="text-foreground/60 font-medium">{t("home.contactMe")}:</p>
              <div className="flex gap-4" role="list">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    role="listitem"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="p-3 hover:bg-primary/10 rounded-full transition-colors"
                    aria-label={label}
                  >
                    <Icon className="text-primary" size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Image with Badges */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-xl overflow-hidden border-4 border-primary/20 shadow-2xl"
              >
                <Image
                  src="/developer-portrait.png"
                  alt="Hazem Ashraf - Frontend Developer"
                  width={400}
                  height={500}
                  priority
                  className="w-full"
                />
              </motion.div>

              {/* Tech Tags */}
              <motion.div
                whileHover={{ rotate: -5 }}
                className="absolute top-6 right-6 bg-background/80 backdrop-blur-md border border-border rounded-lg px-4 py-2"
              >
                <p className="text-sm font-semibold text-primary">JS & TS</p>
              </motion.div>

              <motion.div
                whileHover={{ rotate: 5 }}
                className="absolute bottom-6 left-6 bg-background/80 backdrop-blur-md border border-border rounded-lg px-4 py-2"
              >
                <p className="text-sm font-semibold text-primary">React & Next.js</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
