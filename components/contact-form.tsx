"use client"
 
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/i18n"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init("ar5cgj-WPAl2SL9FD")
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await emailjs.send("service_ln3no4o", "template_6zgpr6k", {
        to_email: "hazemashraf.programming@gmail.com",
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        reply_to: data.email,
      })

      console.log("[v0] Email sent successfully")
      setSubmitStatus("success")
      setSubmitMessage(t("contact.success"))
      reset()
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      console.log("[v0] Contact form error:", error)
      setSubmitStatus("error")
      setSubmitMessage(t("contact.error"))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          {t("contact.name")}
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          placeholder={t("contact.placeholder.name")}
          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all"
        />
        {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          {t("contact.email")}
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          placeholder={t("contact.placeholder.email")}
          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all"
        />
        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          {t("contact.subject")}
        </label>
        <input
          {...register("subject")}
          type="text"
          id="subject"
          placeholder={t("contact.placeholder.subject")}
          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all"
        />
        {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          {t("contact.message")}
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={6}
          placeholder={t("contact.placeholder.message")}
          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground resize-none transition-all"
        />
        {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
      </div>

      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-primary/10 border border-primary/20 rounded-lg flex items-start gap-3"
        >
          <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
          <p className="text-primary text-sm">{submitMessage}</p>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-3"
        >
          <AlertCircle className="text-destructive flex-shrink-0 mt-0.5" size={20} />
          <p className="text-destructive text-sm">{submitMessage}</p>
        </motion.div>
      )}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            {t("contact.sending")}
          </>
        ) : (
          t("contact.send")
        )}
      </motion.button>
    </form>
  )
}
