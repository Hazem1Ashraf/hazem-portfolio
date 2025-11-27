"use client"

import { motion, AnimatePresence } from "framer-motion"

interface FilterSidebarProps {
  selectedCategory: string
  selectedSubFilter: string | null
  onSubFilterChange: (filter: string | null) => void
  language: string
}

const filterOptions = {
  frontend: [
    "React",
    "Next.js",
    "HTML/CSS",
    "Bootstrap",
    "Tailwind",
    "JavaScript/TypeScript",
    "API Projects",
    "DOM/BOM Projects",
    "jQuery",
    "Sass",
  ],
  backend: [
    "Node.js",
    "Express",
    "Nest.js",
    "MongoDB",
    "SQL Server/MySQL",
    "Auth",
    "APIs",
    "REST APIs",
    "Payment Methods",
    "Admin Panel",
  ],
  fullstack: ["MERN Stack", "Next.js Full Stack", "React + Node", "Auth System", "E-commerce", "Dashboard"],
  wordpress: ["Theme Development", "Plugin Development", "WooCommerce", "Custom Post Types", "Gutenberg Blocks"],
}

const filterLabelsAr: Record<string, string> = {
  React: "ريأكت",
  "Next.js": "نكست",
  "HTML/CSS": "HTML/CSS",
  Bootstrap: "بوتستراب",
  Tailwind: "تيلويند",
  "JavaScript/TypeScript": "جافاسكريبت/تايبسكريبت",
  "API Projects": "مشاريع API",
  "DOM/BOM Projects": "مشاريع DOM/BOM",
  jQuery: "جي كويري",
  Sass: "ساس",
  "Node.js": "نود",
  Express: "إكسبريس",
  "Nest.js": "نست",
  MongoDB: "مونجو دي بي",
  "SQL Server/MySQL": "SQL Server/MySQL",
  Auth: "المصادقة",
  APIs: "واجهات برمجية",
  "REST APIs": "REST APIs",
  "Payment Methods": "طرق الدفع",
  "Admin Panel": "لوحة الإدارة",
  "MERN Stack": "MERN Stack",
  "Next.js Full Stack": "نكست فول ستاك",
  "React + Node": "ريأكت + نود",
  "Auth System": "نظام المصادقة",
  "E-commerce": "التجارة الإلكترونية",
  Dashboard: "لوحة التحكم",
  "Theme Development": "تطوير القوالب",
  "Plugin Development": "تطوير الإضافات",
  WooCommerce: "ووكومرس",
  "Custom Post Types": "أنواع المنشورات المخصصة",
  "Gutenberg Blocks": "كتل جوتنبرج",
}

export function FilterSidebar({
  selectedCategory,
  selectedSubFilter,
  onSubFilterChange,
  language,
}: FilterSidebarProps) {
  const currentFilters =
    selectedCategory === "all" ? [] : filterOptions[selectedCategory as keyof typeof filterOptions] || []

  if (selectedCategory === "all" || currentFilters.length === 0) {
    return null
  }

  return (
    <AnimatePresence mode="wait">
      <motion.aside
        key={selectedCategory}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full lg:w-64 shrink-0"
      >
        <div className="sticky top-24">
          <div className="bg-card border-2 border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Header */}
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5 border-b border-border">
              <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 text-primary text-xl">
                  ⚡
                </span>
                {language === "en" ? "Refine Results" : "تحسين النتائج"}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">
                {language === "en" ? "Filter by technology" : "فلتر حسب التقنية"}
              </p>
            </div>

            {/* Filters List */}
            <div className="max-h-[500px] overflow-y-auto p-4">
              <div className="space-y-2">
                {currentFilters.map((filter, index) => {
                  const isActive = selectedSubFilter === filter

                  return (
                    <motion.button
                      key={filter}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.3 }}
                      onClick={() => onSubFilterChange(isActive ? null : filter)}
                      className={`w-full group relative flex items-center gap-3 rounded-lg p-3 transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-md scale-[1.02]"
                          : "bg-muted/50 text-foreground hover:bg-muted hover:scale-[1.01] border border-transparent hover:border-primary/30"
                      }`}
                    >
                      {/* Checkbox indicator */}
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded border-2 transition-all ${
                          isActive
                            ? "border-primary-foreground bg-primary-foreground"
                            : "border-muted-foreground/30 bg-background group-hover:border-primary/50"
                        }`}
                      >
                        {isActive && (
                          <motion.svg
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="h-3 w-3 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </motion.svg>
                        )}
                      </div>

                      {/* Label */}
                      <span className="flex-1 text-left text-sm font-medium leading-tight">
                        {language === "ar" ? filterLabelsAr[filter] || filter : filter}
                      </span>

                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="h-2 w-2 rounded-full bg-primary-foreground"
                        />
                      )}
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* Active filter count */}
            {selectedSubFilter && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-t border-border bg-muted/30 p-3"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-muted-foreground">
                    {language === "en" ? "Active Filter" : "الفلتر النشط"}
                  </span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    1
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  )
}
