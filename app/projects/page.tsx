"use client"

import { useState, useMemo, useCallback } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, Github, ExternalLink, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/i18n"
import { projects } from "@/lib/projects-data"
import { FilterSidebar } from "@/components/projects/filter-sidebar"

export default function ProjectsPage() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSubFilter, setSelectedSubFilter] = useState<string | null>(null)
  const languageCtx = useLanguage()
  const language = languageCtx?.language ?? "en"
  const { t } = useTranslation(language)

  const categories = [
    { value: "all", label: language === "en" ? "All Projects" : "جميع المشاريع" },
    { value: "frontend", label: language === "en" ? "Front-End" : "واجهة أمامية" },
    { value: "backend", label: language === "en" ? "Back-End" : "واجهة خلفية" },
    { value: "wordpress", label: "WordPress" },
    { value: "fullstack", label: "Full Stack" },
  ]

  const handleClearFilters = useCallback(() => {
    setSelectedCategory("all")
    setSelectedSubFilter(null)
  }, [])

  const filteredProjects = useMemo(() => {
    let filtered = projects

    // Filter by main category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    // Filter by sub-filter
    if (selectedSubFilter) {
      filtered = filtered.filter((p) =>
        p.tags.some((tag) => tag.toLowerCase().includes(selectedSubFilter.toLowerCase())),
      )
    }

    return filtered
  }, [selectedCategory, selectedSubFilter])

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category)
    setSelectedSubFilter(null) // Reset sub-filter when changing main category
  }, [])

  const handleProjectClick = useCallback(
    (projectId: number) => {
      router.push(`/projects/${projectId}`)
    },
    [router],
  )

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
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {language === "en" ? "Back to home" : "العودة للرئيسية"}
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t("projects.title")}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl text-pretty">{t("projects.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Main Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="text-sm font-medium text-muted-foreground">{t("projects.filterBy")}:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => handleCategoryChange(cat.value)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === cat.value
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-muted text-foreground hover:bg-muted/80 border border-border hover:border-primary/50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
              {(selectedCategory !== "all" || selectedSubFilter) && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={handleClearFilters}
                  className="px-5 py-2 rounded-full font-medium transition-all duration-300 bg-destructive/10 text-destructive hover:bg-destructive/20 border border-destructive/30 hover:border-destructive/50 flex items-center gap-2 group"
                >
                  <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                  {language === "en" ? "Clear All" : "مسح الكل"}
                </motion.button>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Side Filter */}
            <FilterSidebar
              selectedCategory={selectedCategory}
              selectedSubFilter={selectedSubFilter}
              onSubFilterChange={setSelectedSubFilter}
              language={language}
            />

            {/* Animated Projects Grid */}
            <div className="flex-1">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      layout
                      exit="exit"
                      onClick={() => handleProjectClick(project.id)}
                      className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                    >
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden bg-muted">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title[language]}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {project.featured && (
                          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                            {language === "en" ? "Featured" : "مميز"}
                          </div>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title[language]}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2 text-pretty">
                          {project.description[language]}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              {t("projects.viewDemo")}
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Github className="w-4 h-4" />
                              {t("projects.viewCode")}
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* No Results Message */}
              {filteredProjects.length === 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                  <p className="text-muted-foreground text-lg">
                    {language === "en" ? "No projects found." : "لم يتم العثور على مشاريع."}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
