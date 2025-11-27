"use client" 
  
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { projects } from "@/lib/projects-data"
import { Github, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/i18n"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useMemo } from "react"
 
export default function ProjectDetailPage() {
  const params = useParams()
  const id = params.id as string

  const project = useMemo(() => {
    const projectId = Number.parseInt(id)
    return projects.find((p) => p.id === projectId)
  }, [id])

  const { language } = useLanguage()
  const { t } = useTranslation(language)

  if (!project) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">{language === "en" ? "Project Not Found" : "المشروع غير موجود"}</h1>
            <Link href="/projects" className="text-primary hover:text-primary/80 underline">
              {language === "en" ? "Back to Projects" : "العودة للمشاريع"}
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <ArrowLeft size={18} />
              {t("projects.backToProjects") || (language === "en" ? "Back to Projects" : "العودة للمشاريع")}
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold">{project.title[language]}</h1>
            <p className="text-xl text-foreground/70">{project.description[language]}</p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border border-border shadow-lg mb-12"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title[language]}
              width={800}
              height={500}
              className="w-full h-auto"
              priority
            />
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-8"
            >
              {/* Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{language === "en" ? "Overview" : "نظرة عامة"}</h2>
                <p className="text-foreground/70 leading-relaxed">{project.longDescription[language]}</p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">
                  {t("projects.features") || (language === "en" ? "Features" : "الميزات")}
                </h2>
                <ul className="space-y-2">
                  {[
                    language === "en" ? "Modern and responsive design" : "تصميم حديث وسريع الاستجابة",
                    language === "en" ? "High performance and optimization" : "أداء عالية والتحسين",
                    language === "en" ? "SEO friendly" : "متوافق مع محركات البحث",
                    language === "en" ? "Accessibility compliant" : "متوافق مع المعايير",
                    language === "en" ? "Real-time updates" : "تحديثات فورية",
                    language === "en" ? "Secure authentication" : "المصادقة الآمنة",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-foreground/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">
                  {t("projects.technologies") || (language === "en" ? "Technologies" : "التقنيات")}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Quick Info */}
              <div className="bg-muted/50 border border-border rounded-lg p-6 space-y-4">
                <h3 className="font-bold text-lg">{language === "en" ? "Project Info" : "معلومات المشروع"}</h3>

                <div>
                  <p className="text-sm text-foreground/60 mb-1">{language === "en" ? "Category" : "الفئة"}</p>
                  <p className="font-semibold text-primary capitalize">{project.category}</p>
                </div>

                <div>
                  <p className="text-sm text-foreground/60 mb-2">
                    {t("projects.technologies") || (language === "en" ? "Technologies" : "التقنيات")}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="space-y-3">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition-colors"
                >
                  <ExternalLink size={18} />
                  {t("projects.viewDemo") || (language === "en" ? "View Demo" : "عرض العرض التوضيحي")}
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border-2 border-primary text-primary hover:bg-primary/10 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Github size={18} />
                  {t("projects.viewCode") || (language === "en" ? "View Code" : "عرض الكود")}
                </motion.a>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
                  <p className="text-sm text-primary font-semibold">
                    {language === "en" ? "Featured Project" : "مشروع مميز"}
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Related Projects */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 pt-20 border-t border-border space-y-8"
          >
            <h2 className="text-3xl font-bold">{language === "en" ? "Other Projects" : "مشاريع أخرى"}</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {projects
                .filter((p) => p.id !== project.id)
                .slice(0, 3)
                .map((relatedProject, idx) => (
                  <motion.div
                    key={relatedProject.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="group overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all"
                  >
                    <Link href={`/projects/${relatedProject.id}`}>
                      <div className="relative h-40 overflow-hidden bg-muted">
                        <Image
                          src={relatedProject.image || "/placeholder.svg"}
                          alt={relatedProject.title[language]}
                          width={300}
                          height={200}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <div className="p-4 space-y-2">
                        <h3 className="font-bold group-hover:text-primary transition-colors">
                          {relatedProject.title[language]}
                        </h3>
                        <p className="text-sm text-foreground/70 line-clamp-2">
                          {relatedProject.description[language]}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </motion.section>
        </div>
      </section>

      <Footer />
    </main>
  )
}
