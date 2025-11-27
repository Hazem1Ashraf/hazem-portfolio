export interface Project {
  id: number
  title: { en: string; ar: string }
  description: { en: string; ar: string }
  longDescription: { en: string; ar: string }
  image: string
  category: string
  tags: string[]
  demo: string
  github: string
  featured?: boolean
}

export interface Experience {
  id: number
  title: { en: string; ar: string }
  company: { en: string; ar: string }
  description: { en: string; ar: string }
  startDate: string
  endDate?: string
  current?: boolean
  skills: string[]
}

export const categories = [
  { value: "all", label: "All" },
  { value: "react", label: "React" },
  { value: "next", label: "Next.js" },
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Full Stack" },
]

export const projects: Project[] = [
  {
    id: 1,
    title: { en: "E-Commerce Platform", ar: "منصة التجارة الإلكترونية" },
    description: {
      en: "A full-stack e-commerce solution built with Next.js, featuring product catalogs, shopping cart, and payment integration.",
      ar: "حل تجارة إلكترونية كامل مبني بـ Next.js، يتضمن كتالوجات المنتجات والسلة والدفع المتكامل.",
    },
    longDescription: {
      en: "Complete e-commerce platform with advanced features including product filtering, user authentication, shopping cart management, and secure Stripe payment integration. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.",
      ar: "منصة تجارة إلكترونية كاملة مع ميزات متقدمة تشمل تصفية المنتجات والمصادقة والسلة الآمنة والدفع المتكامل عبر Stripe.",
    },
    image: "/placeholder.svg?key=ecom",
    category: "fullstack",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 2,
    title: { en: "Project Dashboard", ar: "لوحة المشاريع" },
    description: {
      en: "Interactive dashboard for project management with real-time updates, charts, and team collaboration features.",
      ar: "لوحة تحكم تفاعلية لإدارة المشاريع مع التحديثات الفورية والرسوم البيانية.",
    },
    longDescription: {
      en: "Real-time project management dashboard with live collaboration, task tracking, progress visualization, and team communication. Features WebSocket integration for instant updates and Chart.js for analytics.",
      ar: "لوحة تحكم لإدارة المشاريع بالتعاون الفوري والتتبع والتصور والتواصل الفوري.",
    },
    image: "/placeholder.svg?key=dashboard",
    category: "next",
    tags: ["React", "Next.js", "WebSocket", "Chart.js", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 3,
    title: { en: "Freelance Portfolio", ar: "محفظة العمل الحر" },
    description: {
      en: "Professional website for freelancers to showcase portfolio and connect with clients.",
      ar: "موقع احترافي للعاملين بحسابهم الخاص لعرض محافظهم والتواصل مع العملاء.",
    },
    longDescription: {
      en: "Elegant portfolio website for freelancers featuring portfolio showcase, client testimonials, contact forms, and service listings. Built with Next.js, Prisma ORM, and PostgreSQL.",
      ar: "موقع محفظة أنيق للعاملين بحسابهم الخاص يعرض المشاريع والشهادات والخدمات.",
    },
    image: "/placeholder.svg?key=portfolio",
    category: "next",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 4,
    title: { en: "Mobile UI Kit", ar: "مجموعة واجهات تطبيق الجوال" },
    description: {
      en: "Comprehensive UI component library for mobile applications with animations and accessibility.",
      ar: "مكتبة مكونات واجهات شاملة لتطبيقات الجوال مع رسوم متحركة.",
    },
    longDescription: {
      en: "Extensive React component library with 50+ reusable components for mobile apps. Includes animations, accessibility features, and responsive design. Published on npm.",
      ar: "مكتبة مكونات React شاملة لتطبيقات الجوال مع الرسوم المتحركة وإمكانية الوصول.",
    },
    image: "/placeholder.svg?key=uikit",
    category: "react",
    tags: ["React", "TypeScript", "Storybook", "npm", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
]

export const experiences: Experience[] = [
  {
    id: 1,
    title: { en: "Senior Frontend Engineer", ar: "كبير مهندسي الواجهة الأمامية" },
    company: { en: "Tech Company", ar: "شركة التكنولوجيا" },
    description: {
      en: "Led frontend architecture and mentored junior developers. Built scalable React applications with TypeScript.",
      ar: "قاد معمارية الواجهة الأمامية وأشرف على المطورين الجدد. بنى تطبيقات React قابلة للتطوير.",
    },
    startDate: "2022",
    current: true,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Leadership"],
  },
  {
    id: 2,
    title: { en: "Full Stack Developer", ar: "مطور Full Stack" },
    company: { en: "Startup Lab", ar: "مختبر الشركات الناشئة" },
    description: {
      en: "Developed and maintained full-stack applications. Worked with modern JavaScript frameworks and databases.",
      ar: "طور وحافظ على تطبيقات Full Stack. عمل مع أطر عمل JavaScript الحديثة وقواعد البيانات.",
    },
    startDate: "2020",
    endDate: "2022",
    skills: ["Node.js", "React", "MongoDB", "PostgreSQL", "AWS"],
  },
  {
    id: 3,
    title: { en: "Junior Frontend Developer", ar: "مطور واجهة أمامية جونيور" },
    company: { en: "Design Studio", ar: "استوديو التصميم" },
    description: {
      en: "Started career building responsive web applications. Learned best practices in HTML, CSS, and JavaScript.",
      ar: "بدأ المسيرة ببناء تطبيقات ويب متجاوبة. تعلم أفضل الممارسات في HTML و CSS و JavaScript.",
    },
    startDate: "2019",
    endDate: "2020",
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
  },
]
