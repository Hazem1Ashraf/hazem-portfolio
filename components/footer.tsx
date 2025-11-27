"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/i18n"
import { useState } from "react"

export function Footer() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const [showScroll, setShowScroll] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* First Footer - Links and Info */}
      <footer className="bg-muted/50 border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Column 1: About */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h3 className="font-bold text-lg mb-4">{language === "en" ? "Hazem Ashraf" : "حازم أشرف"}</h3>
              <p className="text-foreground/70 mb-4">{t("home.aboutText")}</p>
              <p className="text-sm text-foreground/60">{language === "en" ? "Giza, Egypt" : "الجيزة، مصر"}</p>
              <div className="flex gap-4 mt-4">
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href="https://github.com/Hazem1Ashraf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href="https://www.linkedin.com/in/hazem-rabie-98a741336/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href="mailto:hazemashraf.programming@gmail.com"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h4 className="font-bold mb-6">{t("home.quickLinks")}</h4>
              <ul className="space-y-3">
                {[
                  { href: "/", label: t("nav.home") },
                  { href: "/about", label: t("nav.about") },
                  { href: "/projects", label: t("nav.projects") },
                  { href: "/contact", label: t("nav.contact") },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-foreground/70 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Get In Touch */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h4 className="font-bold mb-6">{t("home.getInTouchFooter")}</h4>
              <a
                href="mailto:hazemashraf.programming@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors block mb-4 break-all"
              >
                hazemashraf.programming@gmail.com
              </a>
              <p className="text-sm text-foreground/60 mb-4">{t("home.availableFreelance")}</p>
            </motion.div>
          </div>

          <div className="border-t border-border pt-8 flex justify-between items-center">
            <p className="text-sm text-foreground/60">
              {t("home.copyright")} <span className="text-primary font-semibold">Next.js & TypeScript</span>
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="p-2 hover:bg-primary/10 rounded-full transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="text-primary" />
            </motion.button>
          </div>
        </div>
      </footer>

      {/* Second Footer - Copyright */}
      <div className="bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-foreground/60">
            © 2025 {language === "en" ? "Hazem Ashraf" : "حازم أشرف"}. {t("home.copyright")}{" "}
            <span className="text-primary font-semibold">Next.js & TypeScript</span>
          </p>
        </div>
      </div>
    </>
  )
}
