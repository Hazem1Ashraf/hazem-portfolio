"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/i18n"
import Image from "next/image"
import { Star } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Autoplay } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"

// بيانات العملاء
const testimonialsData = [
  { nameEn: "Ahmed Hassan", nameAr: "أحمد حسن", roleEn: "CEO, Tech Startup", roleAr: "الرئيس التنفيذي، شركة تكنولوجيا", contentEn: "Hazem delivered an exceptional website that exceeded our expectations...", contentAr: "قدم حازم موقعاً استثنائياً تجاوز توقعاتنا...", img: "", gender: "male", rating: 4 },
  { nameEn: "Sara Mohamed", nameAr: "سارة محمد", roleEn: "Product Manager", roleAr: "مدير المنتج", contentEn: "Working with Hazem was a pleasure...", contentAr: "كان التعاون مع حازم ممتعاً...", img: "", gender: "female", rating: 5 },
  { nameEn: "John Doe", nameAr: "جون دو", roleEn: "CTO, Tech Corp", roleAr: "المدير التقني، شركة تكنولوجيا", contentEn: "Excellent work and timely delivery!", contentAr: "عمل ممتاز وتسليم في الوقت المحدد!", img: "", gender: "male", rating: 4 },
  { nameEn: "Mary Jane", nameAr: "ماري جين", roleEn: "Project Manager", roleAr: "مدير المشروع", contentEn: "Creative and professional developer.", contentAr: "مطور مبدع واحترافي.", img: "", gender: "female", rating: 5 },
  { nameEn: "Ali Khan", nameAr: "علي خان", roleEn: "Designer", roleAr: "مصمم", contentEn: "Great design insights and collaboration.", contentAr: "رؤى تصميم رائعة وتعاون ممتاز.", img: "", gender: "male", rating: 4 },
  { nameEn: "Fatima Noor", nameAr: "فاطمة نور", roleEn: "Marketing Lead", roleAr: "مديرة التسويق", contentEn: "Very responsive and skilled developer.", contentAr: "مطور سريع الاستجابة وماهر.", img: "", gender: "female", rating: 5 },
]

// افاتار افتراضي حسب الجنس
const getDefaultAvatar = (gender: string) => gender === "female" ? "/clients/icon-women.png" : "/clients/icon-man.png"

export function Testimonials() {
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">{t("home.whatClientsSay")}</h2>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">{t("home.whatClientsDesc")}</p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        navigation={{ nextEl: ".swiper-button-next-custom", prevEl: ".swiper-button-prev-custom" }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
      >
        {testimonialsData.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-muted/50 border border-border rounded-xl p-6 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 min-h-[420px]">
              
              {/* صورة العميل أو الافاتار الافتراضي */}
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4">
                <Image
                  src={testimonial.img || getDefaultAvatar(testimonial.gender)}
                  alt={language === "en" ? testimonial.nameEn : testimonial.nameAr}
                  width={112}
                  height={112}
                  className="object-cover"
                  onError={(e) => { e.currentTarget.src = getDefaultAvatar(testimonial.gender) }}
                />
              </div>

              {/* الاسم والدور */}
              <div className="mb-2">
                <p className="font-bold text-lg">{language === "en" ? testimonial.nameEn : testimonial.nameAr}</p>
                <p className="text-sm text-foreground/60">{language === "en" ? testimonial.roleEn : testimonial.roleAr}</p>
              </div>

              {/* محتوى رأي العميل */}
              <p className="text-foreground/80 italic mb-4 leading-relaxed">
                "{language === "en" ? testimonial.contentEn : testimonial.contentAr}"
              </p>

              {/* النجوم */}
              <div className="flex justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5"
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                    stroke="currentColor"
                    style={{ color: i < testimonial.rating ? "#FACC15" : "#D1D5DB", strokeWidth: 2 }}
                  />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}

     {/* custom navigation buttons */}
        <div className="swiper-button-prev-custom absolute top-1/2 left-2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary/70 flex items-center justify-center text-white cursor-pointer hover:bg-primary transition-all">
<div className="swiper-button-prev-custom ...">
  <ChevronLeft className="w-6 h-6 text-white" />
</div>        </div>
        <div className="swiper-button-next-custom absolute top-1/2 right-2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary/70 flex items-center justify-center text-white cursor-pointer hover:bg-primary transition-all">
<div className="swiper-button-next-custom ...">
  <ChevronRight className="w-6 h-6 text-white" />
</div>        </div>
      </Swiper>
    </section>
  )
}
