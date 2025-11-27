export const i18n = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    home: {
      greeting: "Welcome to my portfolio",
      title: "Crafting Digital Experiences",
      subtitle:
        "I'm a frontend developer passionate about building beautiful, performant web applications. Specialized in React, Next.js, and modern web technologies.",
      viewWork: "View My Work",
      getInTouch: "Get in Touch",
      skillsTitle: "Skills & Expertise",
      frontend: "Frontend",
      tools: "Tools & Libraries",
      webTech: "Web Technologies",
    },
    about: {
      title: "About Me",
      intro:
        "I am a passionate frontend developer with 4+ years of experience building modern web applications. I love creating beautiful, functional user interfaces that solve real problems.",
      journey:
        "My journey in web development started with curiosity and a desire to understand how websites work. Over the years, I have refined my skills in React, TypeScript, and modern web technologies, always staying updated with industry best practices.",
      philosophy:
        "I believe great web applications are a combination of clean code, thoughtful design, and excellent user experience. I am committed to writing maintainable code and collaborating with teams to deliver outstanding results.",
      hobbies:
        "When I am not coding, you will find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.",
    },
    ar: {
      nav: {
        home: "الرئيسية",
        about: "عني",
        projects: "المشاريع",
        contact: "اتصل",
      },
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عني",
      projects: "المشاريع",
      contact: "اتصل",
    },
    home: {
      greeting: "مرحبا بك في ملفي الشخصي",
      title: "صياغة التجارب الرقمية",
      subtitle:
        "أنا مطور واجهات أمامية متحمس ببناء تطبيقات ويب جميلة وفعالة. متخصص في React و Next.js والتقنيات الويب الحديثة.",
      viewWork: "عرض أعمالي",
      getInTouch: "تواصل معي",
      skillsTitle: "المهارات والخبرات",
      frontend: "الواجهة الأمامية",
      tools: "الأدوات والمكتبات",
      webTech: "تقنيات الويب",
    },
    about: {
      title: "عني",
      intro:
        "أنا مطور واجهات أمامية متحمس لديّ أكثر من 4 سنوات من الخبرة في بناء تطبيقات ويب حديثة. أحب إنشاء واجهات مستخدم جميلة وفعالة تحل المشاكل الحقيقية.",
      journey:
        "بدأت رحلتي في تطوير الويب بفضول ورغبة في فهم كيفية عمل المواقع. على مدار السنين، حسنت مهاراتي في React و TypeScript والتقنيات الويب الحديثة، مع البقاء دائماً على اطلاع بأفضل الممارسات في الصناعة.",
      philosophy:
        "أعتقد أن تطبيقات الويب الرائعة هي مزيج من الكود النظيف والتصميم المدروس وتجربة المستخدم الممتازة. أنا ملتزم بكتابة كود قابل للصيانة والتعاون مع الفريق لتحقيق نتائج استثنائية.",
      hobbies:
        "عندما لا أكون أكتب أكوداً، ستجدني أستكشف التقنيات الجديدة أو أساهم في المشاريع مفتوحة المصدر أو أشارك المعرفة مع مجتمع المطورين.",
    },
  },
}

export function getTranslation(lang: string, key: string) {
  const keys = key.split(".")
  let value: any = i18n[lang as keyof typeof i18n]

  for (const k of keys) {
    value = value?.[k]
  }

  return value || key
}
