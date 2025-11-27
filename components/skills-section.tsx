"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/i18n"

const skillsData = {
  frontendCore: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  reactEcosystem: ["React", "Next.js", "Redux", "React Query"],
  uiLibraries: ["Tailwind CSS", "Shadcn/ui", "Material-UI"],
  backendSkills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  toolsDeployment: ["Git", "Docker", "Vercel", "AWS"],
}

const categoryKeys = {
  frontendCore: "frontendCore",
  reactEcosystem: "reactEcosystem",
  uiLibraries: "uiLibraries",
  backendSkills: "backendSkills",
  toolsDeployment: "toolsDeployment",
}

export function SkillsSection() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-2 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">{t("home.skillsTitle")}</h2>
          <p className="text-xl text-foreground/70">{t("home.skillsSubtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {Object.entries(skillsData).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-muted/50 border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-muted transition-all duration-300"
            >
              <h4 className="font-bold text-primary mb-4">
                {t(`home.${categoryKeys[category as keyof typeof categoryKeys]}`)}
              </h4>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="text-sm text-foreground/70 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
