"use client"
 
import { useState, useMemo, useCallback } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/i18n"
import { projects } from "@/lib/projects-data"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  const categories = [
    { value: "all", label: language === "en" ? "All" : "الكل" },
    { value: "react", label: "React" },
    { value: "next", label: "Next.js" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" },
  ]

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projects
    return projects.filter((p) => p.category === selectedCategory)
  }, [selectedCategory])

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.25, ease: "easeInOut" } },
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold">{t("projects.title")}</h1>
            <p className="text-xl text-foreground/70">{t("projects.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-sm text-foreground/60 mb-4 font-medium">{t("projects.filterBy")}:</p>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <motion.button
                  key={cat.value}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategoryChange(cat.value)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === cat.value
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-foreground hover:bg-muted/80 border border-border hover:border-primary/50"
                  }`}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Animated Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  exit="exit"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300 bg-muted/20 shadow-sm hover:shadow-lg"
                >
                  <Link href={`/projects/${project.id}`} className="block">
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500 flex items-center justify-center">
                      <motion.span
                        initial={{ opacity: 0.3 }}
                        whileHover={{ opacity: 0.8 }}
                        transition={{ duration: 0.4 }}
                        className="text-primary/40 font-semibold text-lg"
                      >
                        {project.title[language]}
                      </motion.span>
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title[language]}
                      </h3>
                      <p className="text-sm text-foreground/70 line-clamp-2">{project.description[language]}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-border">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-sm flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        {t("projects.viewDemo")}
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 border border-primary text-primary hover:bg-primary/10 rounded-lg font-semibold text-sm flex items-center justify-center gap-2"
                      >
                        <Github size={16} />
                        {t("projects.viewCode")}
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-lg text-foreground/60">
                {language === "en" ? "No projects found." : "لم يتم العثور على مشاريع."}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
