"use client"

import { motion } from "framer-motion"

interface CategoryOption {
  value: string
  label: string
}

interface ProjectFiltersProps {
  categories: CategoryOption[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  language: string
  t: (key: string) => string
}

export function ProjectFilters({ categories, selectedCategory, onCategoryChange, language, t }: ProjectFiltersProps) {
  return (
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
            onClick={() => onCategoryChange(cat.value)}
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
  )
}
