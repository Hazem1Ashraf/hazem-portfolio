"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Category {
  value: string
  label: string
}

interface SideFilterProps {
  categories: Category[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  language: string
}

const filterVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

const buttonVariants = {
  hover: { x: 4 },
  tap: { scale: 0.98 },
}

export function SideFilter({ categories, selectedCategory, onCategoryChange, language }: SideFilterProps) {
  return (
    <motion.aside
      variants={filterVariants}
      initial="hidden"
      animate="visible"
      className="w-full md:w-48 flex flex-col gap-4"
    >
      <div className="sticky top-8 space-y-2">
        <h3 className="text-sm font-bold text-foreground/70 uppercase tracking-wide">
          {language === "en" ? "Filter" : "تصفية"}
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <motion.button
              key={category.value}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => onCategoryChange(category.value)}
              className={cn(
                "w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300",
                selectedCategory === category.value
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted/50 text-foreground hover:bg-muted border border-border/50",
              )}
            >
              <span className="flex items-center gap-2">
                <span
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    selectedCategory === category.value
                      ? "bg-primary-foreground scale-100"
                      : "bg-muted-foreground scale-0",
                  )}
                />
                {category.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.aside>
  )
}
