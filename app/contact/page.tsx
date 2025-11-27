"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, Linkedin, Github, ArrowLeft, Clock, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/i18n"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function ContactPage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  const contactMethods = [
    {
      icon: Mail,
      title: t("contact.info.email"),
      value: "hazemashraf.programming@gmail.com",
      link: "mailto:hazemashraf.programming@gmail.com",
    },
    {
      icon: Phone,
      title: t("contact.info.phone"),
      value: language === "en" ? "+20 1013974594" : "٠١٠١٣٩٧٤٥٩٤",
      link: "tel:+201013974594",
    },
    {
      icon: MapPin,
      title: t("contact.info.location"),
      value: language === "en" ? "Giza, Egypt" : "الجيزة، مصر",
      link: "#",
    },
  ]

  const infoCards = [
    {
      title: t("contact.info.availability"),
      value: language === "en" ? "Monday - Friday" : "الإثنين - الجمعة",
      icon: Clock,
    },
    {
      title: t("contact.info.responseTime"),
      value: language === "en" ? "Within 24 hours" : "خلال 24 ساعة",
      icon: Clock,
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
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
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold">{t("contact.title")}</h1>
            <p className="text-xl text-foreground/70 max-w-2xl">{t("contact.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{t("contact.info.getInTouch")}</h2>
                <p className="text-foreground/70">
                  {language === "en"
                    ? "Reach out through any of these channels:"
                    : "تواصل معي من خلال أي من هذه الطرق:"}
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, idx) => {
                  const Icon = method.icon
                  return (
                    <motion.a
                      key={idx}
                      variants={itemVariants}
                      href={method.link}
                      className="group flex items-start gap-4 p-4 bg-muted/50 border border-border rounded-lg hover:border-primary/50 hover:bg-muted transition-all duration-300"
                    >
                      <Icon
                        className="text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                        size={24}
                      />
                      <div>
                        <p className="text-sm text-foreground/60 group-hover:text-primary transition-colors">
                          {method.title}
                        </p>
                        <p className="font-semibold text-foreground break-all">{method.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Info Cards */}
              <div className="space-y-4 pt-4 border-t border-border">
                {infoCards.map((card, idx) => {
                  const Icon = card.icon
                  return (
                    <motion.div key={idx} variants={itemVariants} className="flex items-start gap-4">
                      <Icon className="text-primary flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="text-sm text-foreground/60">{card.title}</p>
                        <p className="font-semibold text-foreground">{card.value}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="space-y-4 pt-4 border-t border-border">
                <p className="text-sm text-foreground/60 font-medium">{t("contact.info.connectWith")}:</p>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/Hazem1Ashraf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted hover:bg-primary/10 border border-border hover:border-primary rounded-full transition-all"
                  >
                    <Github className="text-primary" size={20} />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/hazem-rabie-98a741336/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted hover:bg-primary/10 border border-border hover:border-primary rounded-full transition-all"
                  >
                    <Linkedin className="text-primary" size={20} />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:hazemashraf.programming@gmail.com"
                    className="p-3 bg-muted hover:bg-primary/10 border border-border hover:border-primary rounded-full transition-all"
                  >
                    <Mail className="text-primary" size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="bg-muted/50 border border-border rounded-lg p-8 hover:border-primary/50 transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-6">{t("contact.info.getInTouch")}</h3>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
