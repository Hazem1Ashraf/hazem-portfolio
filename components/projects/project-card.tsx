"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, ArrowRight } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: { en: string; ar: string }
  description: { en: string; ar: string }
  image: string
  category: string
  tags: string[]
  demo: string
  github: string
  featured?: boolean
}

interface ProjectCardProps {
  project: Project
  language: string
  t: (key: string) => string
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hover: { y: -8, transition: { duration: 0.3 } },
}

export function ProjectCard({ project, language, t }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col h-full"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title[language]}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
            {project.title[language]}
          </h3>
          <p className="text-sm text-foreground/70 line-clamp-2">{project.description[language]}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-muted text-foreground/70 font-medium">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Footer - Links */}
        <div className="flex gap-3 pt-4 border-t border-border">
          <Link
            href={`/projects/${project.id}`}
            className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
          >
            {t("projects.viewProject") || "View"}
            <ArrowRight size={14} />
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 border border-border text-foreground hover:bg-muted rounded-lg transition-colors flex items-center justify-center"
          >
            <Github size={16} />
          </a>
        </div>
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-bold rounded-full">
          Featured
        </div>
      )}
    </motion.div>
  )
}
