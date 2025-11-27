"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/i18n"

const projectsData = [
  {
    id: 1,
    titleEn: "E-Commerce Platform",
    titleAr: "منصة التجارة الإلكترونية",
    descEn:
      "A full-stack e-commerce solution built with Next.js, featuring product catalogs, shopping cart, and payment integration.",
    descAr: "حل تجارة إلكترونية كامل مبني بـ Next.js، يتضمن كتالوجات المنتجات والسلة والدفع المتكامل.",
    image: "/ecommerce-concept.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe"],
  },
  {
    id: 2,
    titleEn: "Project Dashboard",
    titleAr: "لوحة المشاريع",
    descEn:
      "Interactive dashboard for project management with real-time updates, charts, and team collaboration features.",
    descAr: "لوحة تحكم تفاعلية لإدارة المشاريع مع التحديثات الفورية والرسوم البيانية.",
    image: "/general-data-dashboard.png",
    technologies: ["React", "Next.js", "Chart.js", "WebSocket", "Tailwind CSS"],
  },
  {
    id: 3,
    titleEn: "Freelance Website",
    titleAr: "موقع العمل الحر",
    descEn: "Professional website for freelancers to showcase their portfolio, skills, and connect with clients.",
    descAr: "موقع احترافي للعاملين بحسابهم الخاص لعرض محافظهم والمهارات والتواصل مع العملاء.",
    image: "/creative-portfolio-layout.png",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"],
  },
]

export function FeaturedProjects() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-2 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">{t("home.featuredProjects")}</h2>
          <p className="text-xl text-foreground/70">{t("home.featuredDesc")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={language === "en" ? project.titleEn : project.titleAr}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6 bg-background">
                <h3 className="text-xl font-bold mb-2">{language === "en" ? project.titleEn : project.titleAr}</h3>
                <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                  {language === "en" ? project.descEn : project.descAr}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex-1 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded font-semibold text-sm transition-colors text-center"
                  >
                    {t("projects.viewDemo")}
                  </a>
                  <a
                    href="#"
                    className="flex-1 py-2 border border-primary text-primary hover:bg-primary/10 rounded font-semibold text-sm transition-colors text-center"
                  >
                    {t("projects.viewCode")}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {t("home.viewAllProjects")}
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
