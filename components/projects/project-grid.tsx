"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "./project-card"

interface Project {
  id: number
  title: { en: string; ar: string }
  description: { en: string; ar: string }
  category: string
  tags: string[]
  demo: string
  github: string
  featured?: boolean
}

interface ProjectGridProps {
  projects: Project[]
  language: string
  t: (key: string) => string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export function ProjectGrid({ projects, language, t }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
        <p className="text-lg text-foreground/60">
          {language === "en" ? "No projects found." : "لم يتم العثور على مشاريع."}
        </p>
      </motion.div>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} language={language} t={t} />
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
