"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    portfolioTitle: "My Portfolio",
    portfolioSubtitle: "Showcasing my best work",
    All: "All Projects",
    "Front-End": "Front-End",
    "Back-End": "Back-End",
    "Full Stack": "Full Stack",
    WordPress: "WordPress",
    projects: "Projects",
    showing: "Showing",
    project: "project",
    projects: "projects",
    filterBy: "Filter By",
    refineResults: "Refine your search results",
    activeFilters: "Active Filters",
    clearAll: "Clear All",
    clearAllFilters: "Clear All Filters",
    noProjects: "No Projects Found",
    noProjectsDesc: "Try adjusting your filters to see more results",
    viewLive: "View Live",
    viewCode: "View Code",
    code: "Code",
    backToPortfolio: "Back to Portfolio",
    featuredProject: "Featured Project",
    technologiesUsed: "Technologies Used",
    aboutProject: "About This Project",
    projectDetailsParagraph1:
      "This project demonstrates advanced development techniques and best practices in modern web development. It showcases a comprehensive approach to building scalable and maintainable applications.",
    projectDetailsParagraph2:
      "The implementation focuses on performance optimization, user experience, and clean code architecture. Special attention was given to responsive design and accessibility standards.",
    projectDetailsParagraph3:
      "Throughout the development process, industry-standard tools and workflows were utilized to ensure high-quality deliverables and seamless deployment.",

    // Front-End filters
    React: "React",
    "Next.js": "Next.js",
    "HTML/CSS": "HTML/CSS",
    Bootstrap: "Bootstrap",
    Tailwind: "Tailwind CSS",
    "JavaScript/TypeScript": "JavaScript/TypeScript",
    "API Projects": "API Projects",
    "DOM/BOM Projects": "DOM/BOM Projects",
    jQuery: "jQuery",
    Sass: "Sass/SCSS",

    // Back-End filters
    "Node.js": "Node.js",
    Express: "Express.js",
    "Nest.js": "Nest.js",
    MongoDB: "MongoDB",
    "SQL Server/MySQL": "SQL Server/MySQL",
    Auth: "Authentication",
    APIs: "APIs",
    "REST APIs": "REST APIs",
    "Payment Methods": "Payment Integration",
    "Admin Panel": "Admin Panel",

    // Full Stack filters
    "MERN Stack": "MERN Stack",
    "Next.js Full Stack": "Next.js Full Stack",
    "React + Node": "React + Node.js",
    "Auth System": "Auth System",
    "E-commerce": "E-commerce",
    Dashboard: "Dashboard",

    // WordPress filters
    "Theme Development": "Theme Development",
    "Plugin Development": "Plugin Development",
    WooCommerce: "WooCommerce",
    "Custom Post Types": "Custom Post Types",
    "Gutenberg Blocks": "Gutenberg Blocks",
  },
  ar: {
    portfolioTitle: "أعمالي",
    portfolioSubtitle: "عرض أفضل مشاريعي",
    All: "كل المشاريع",
    "Front-End": "الواجهة الأمامية",
    "Back-End": "الخلفية",
    "Full Stack": "متكامل",
    WordPress: "ووردبريس",
    projects: "المشاريع",
    showing: "عرض",
    project: "مشروع",
    projects: "مشاريع",
    filterBy: "تصفية حسب",
    refineResults: "قم بتحسين نتائج البحث",
    activeFilters: "الفلاتر النشطة",
    clearAll: "مسح الكل",
    clearAllFilters: "مسح جميع الفلاتر",
    noProjects: "لا توجد مشاريع",
    noProjectsDesc: "حاول تعديل الفلاتر لرؤية المزيد من النتائج",
    viewLive: "عرض مباشر",
    viewCode: "عرض الكود",
    code: "الكود",
    backToPortfolio: "العودة للمشاريع",
    featuredProject: "مشروع مميز",
    technologiesUsed: "التقنيات المستخدمة",
    aboutProject: "حول هذا المشروع",
    projectDetailsParagraph1:
      "يوضح هذا المشروع تقنيات التطوير المتقدمة وأفضل الممارسات في تطوير الويب الحديث. يعرض نهجاً شاملاً لبناء تطبيقات قابلة للتوسع وسهلة الصيانة.",
    projectDetailsParagraph2:
      "يركز التنفيذ على تحسين الأداء وتجربة المستخدم وبنية الكود النظيفة. تم إيلاء اهتمام خاص للتصميم المتجاوب ومعايير إمكانية الوصول.",
    projectDetailsParagraph3:
      "خلال عملية التطوير، تم استخدام أدوات وسير عمل معايير الصناعة لضمان مخرجات عالية الجودة ونشر سلس.",

    // Front-End filters
    React: "React",
    "Next.js": "Next.js",
    "HTML/CSS": "HTML/CSS",
    Bootstrap: "Bootstrap",
    Tailwind: "Tailwind CSS",
    "JavaScript/TypeScript": "JavaScript/TypeScript",
    "API Projects": "مشاريع API",
    "DOM/BOM Projects": "مشاريع DOM/BOM",
    jQuery: "jQuery",
    Sass: "Sass/SCSS",

    // Back-End filters
    "Node.js": "Node.js",
    Express: "Express.js",
    "Nest.js": "Nest.js",
    MongoDB: "MongoDB",
    "SQL Server/MySQL": "SQL Server/MySQL",
    Auth: "المصادقة",
    APIs: "APIs",
    "REST APIs": "REST APIs",
    "Payment Methods": "طرق الدفع",
    "Admin Panel": "لوحة التحكم",

    // Full Stack filters
    "MERN Stack": "MERN Stack",
    "Next.js Full Stack": "Next.js متكامل",
    "React + Node": "React + Node.js",
    "Auth System": "نظام المصادقة",
    "E-commerce": "متجر إلكتروني",
    Dashboard: "لوحة التحكم",

    // WordPress filters
    "Theme Development": "تطوير القوالب",
    "Plugin Development": "تطوير الإضافات",
    WooCommerce: "WooCommerce",
    "Custom Post Types": "أنواع المنشورات المخصصة",
    "Gutenberg Blocks": "مكونات Gutenberg",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("language") as Language
    if (saved) {
      setLanguage(saved)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language)
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
      document.documentElement.lang = language
    }
  }, [language, mounted])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"))
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  // if (!context) {
  //   throw new Error("useLanguage must be used within LanguageProvider")
  // }
  return context
}
