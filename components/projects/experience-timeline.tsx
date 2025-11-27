"use client"

import { motion } from "framer-motion"

interface Experience {
  id: number
  title: { en: string; ar: string }
  company: { en: string; ar: string }
  description: { en: string; ar: string }
  startDate: string
  endDate?: string
  current?: boolean
  skills: string[]
}

interface ExperienceTimelineProps {
  experiences: Experience[]
  language: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

export function ExperienceTimeline({ experiences, language }: ExperienceTimelineProps) {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          variants={itemVariants}
          className="relative pl-8 md:pl-0 md:grid md:grid-cols-[1fr,auto,1fr] md:gap-8 items-start"
        >
          {/* Timeline dot - visible on all screens */}
          <div className="absolute left-0 top-2 md:col-start-2 md:col-end-3 md:justify-self-center w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg md:relative md:top-3" />

          {/* Content - alternates sides on desktop */}
          <motion.div
            whileHover={{ x: index % 2 === 0 ? 8 : -8 }}
            className={`space-y-2 ${index % 2 === 1 ? "md:col-start-1" : "md:col-start-3 md:text-right"}`}
          >
            <div className="space-y-1">
              <h3 className="font-bold text-lg text-foreground">{exp.title[language]}</h3>
              <p className="text-primary font-semibold">{exp.company[language]}</p>
              <p className="text-sm text-foreground/60">
                {exp.startDate} {exp.endDate ? `- ${exp.endDate}` : `- ${language === "en" ? "Present" : "الآن"}`}
                {exp.current && (
                  <span className="ml-2 inline-block px-2 py-0.5 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                    {language === "en" ? "Current" : "الحالي"}
                  </span>
                )}
              </p>
            </div>

            <p className="text-foreground/70 text-sm leading-relaxed">{exp.description[language]}</p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 pt-3">
              {exp.skills.map((skill) => (
                <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Line connecting dots */}
          {index < experiences.length - 1 && (
            <div className="absolute left-1.5 top-6 md:col-start-2 md:col-end-3 md:justify-self-center hidden md:block h-24 w-0.5 bg-gradient-to-b from-primary to-primary/20 -bottom-12" />
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}
