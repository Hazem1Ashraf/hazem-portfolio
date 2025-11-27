export const projects = [
  // Front-End Projects
  {
    id: 1,
    title: { en: "E-commerce React App", ar: "تطبيق متجر إلكتروني بريأكت" },
    description: {
      en: "Modern e-commerce platform built with React and Redux for state management",
      ar: "منصة تجارة إلكترونية حديثة مبنية بريأكت و Redux لإدارة الحالة",
    },
    longDescription: {
      en: "A comprehensive e-commerce solution featuring product catalogs, shopping cart, wishlist, and user authentication. Built with React 18, Redux Toolkit for state management, and integrated with REST APIs for real-time data fetching.",
      ar: "حل تجارة إلكترونية شامل يتضمن كتالوجات المنتجات وسلة التسوق وقائمة الأمنيات والمصادقة. مبني بريأكت 18 و Redux Toolkit.",
    },
    category: "frontend",
    tags: ["React", "Tailwind", "API Projects"],
    image: "/modern-ecommerce-website-with-shopping-cart.jpg",
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    id: 2,
    title: { en: "Next.js Portfolio", ar: "محفظة أعمال بنكست" },
    description: {
      en: "Personal portfolio website with blog functionality using Next.js 15",
      ar: "موقع محفظة أعمال شخصية مع وظيفة المدونة باستخدام نكست 15",
    },
    longDescription: {
      en: "Modern portfolio website built with Next.js 15 App Router, featuring server-side rendering, dynamic blog posts, project showcases, and contact forms with email integration.",
      ar: "موقع محفظة حديث مبني بنكست 15 مع العرض من جانب الخادم والمدونة الديناميكية وعرض المشاريع.",
    },
    category: "frontend",
    tags: ["Next.js", "Tailwind", "React"],
    image: "/modern-portfolio-website.png",
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    title: { en: "Landing Page Template", ar: "قالب صفحة هبوط" },
    description: {
      en: "Responsive landing page template with Bootstrap components",
      ar: "قالب صفحة هبوط متجاوب مع مكونات بوتستراب",
    },
    longDescription: {
      en: "Professional landing page template featuring hero sections, feature cards, testimonials, pricing tables, and contact forms. Fully responsive and built with Bootstrap 5 and custom CSS.",
      ar: "قالب صفحة هبوط احترافي يتضمن أقسام البطل وبطاقات المميزات والشهادات وجداول الأسعار ونماذج الاتصال.",
    },
    category: "frontend",
    tags: ["HTML/CSS", "Bootstrap", "JavaScript/TypeScript"],
    image: "/professional-landing-page-template.jpg",
    demo: "#",
    github: "#",
  },
  {
    id: 4,
    title: { en: "Weather App", ar: "تطبيق الطقس" },
    description: {
      en: "Real-time weather application using OpenWeather API",
      ar: "تطبيق طقس فوري باستخدام OpenWeather API",
    },
    longDescription: {
      en: "Real-time weather forecasting app with current conditions, 5-day forecast, hourly updates, and location-based weather data. Integrated with OpenWeather API and features beautiful weather animations.",
      ar: "تطبيق توقعات الطقس الفوري مع الظروف الحالية والتوقعات لمدة 5 أيام والتحديثات كل ساعة.",
    },
    category: "frontend",
    tags: ["React", "API Projects", "Tailwind"],
    image: "/weather-app-forecast.png",
    demo: "#",
    github: "#",
  },
  {
    id: 5,
    title: { en: "Task Manager", ar: "مدير المهام" },
    description: {
      en: "Interactive task management app with drag and drop functionality",
      ar: "تطبيق إدارة المهام التفاعلي مع وظيفة السحب والإفلات",
    },
    longDescription: {
      en: "Kanban-style task manager with drag-and-drop functionality, task categories, priority levels, due dates, and local storage persistence. Built with React and custom DOM manipulation.",
      ar: "مدير مهام بنمط كانبان مع وظيفة السحب والإفلات وفئات المهام ومستويات الأولوية والتواريخ.",
    },
    category: "frontend",
    tags: ["React", "DOM/BOM Projects", "Sass"],
    image: "/task-manager-app-with-kanban-board.jpg",
    demo: "#",
    github: "#",
  },
  {
    id: 6,
    title: { en: "Gallery Slider", ar: "معرض الصور المنزلق" },
    description: {
      en: "Image gallery with jQuery animations and transitions",
      ar: "معرض صور مع رسوم متحركة بجي كويري",
    },
    longDescription: {
      en: "Elegant image gallery featuring smooth transitions, lightbox functionality, thumbnail navigation, and touch gesture support. Built with jQuery and custom CSS animations.",
      ar: "معرض صور أنيق يتضمن انتقالات سلسة ووظيفة اللايت بوكس والتنقل بالصور المصغرة.",
    },
    category: "frontend",
    tags: ["jQuery", "HTML/CSS", "JavaScript/TypeScript"],
    image: "/image-gallery-slider-with-thumbnails.jpg",
    demo: "#",
    github: "#",
  },

  // Back-End Projects
  {
    id: 7,
    title: { en: "REST API Server", ar: "خادم REST API" },
    description: {
      en: "RESTful API built with Node.js and Express for blog management",
      ar: "واجهة REST API مبنية بنود و إكسبريس لإدارة المدونة",
    },
    longDescription: {
      en: "Complete RESTful API with CRUD operations, authentication, authorization, input validation, error handling, and MongoDB integration. Built following best practices and MVC architecture.",
      ar: "واجهة REST API كاملة مع عمليات CRUD والمصادقة والترخيص والتحقق من المدخلات ومعالجة الأخطاء.",
    },
    category: "backend",
    tags: ["Node.js", "Express", "REST APIs"],
    image: "/api-server-code-with-endpoints.jpg",
    github: "#",
    featured: true,
  },
  {
    id: 8,
    title: { en: "Authentication System", ar: "نظام المصادقة" },
    description: {
      en: "Secure authentication system with JWT and bcrypt",
      ar: "نظام مصادقة آمن مع JWT و bcrypt",
    },
    longDescription: {
      en: "Robust authentication system featuring user registration, login, password reset, email verification, JWT token management, refresh tokens, and role-based access control.",
      ar: "نظام مصادقة قوي يتضمن تسجيل المستخدم والدخول وإعادة تعيين كلمة المرور والتحقق من البريد.",
    },
    category: "backend",
    tags: ["Node.js", "Auth", "MongoDB"],
    image: "/secure-authentication-system-login.jpg",
    github: "#",
  },
  {
    id: 9,
    title: { en: "Payment Gateway Integration", ar: "تكامل بوابة الدفع" },
    description: {
      en: "Stripe payment integration with webhook handling",
      ar: "تكامل الدفع بسترايب مع معالجة الـ webhook",
    },
    longDescription: {
      en: "Complete payment processing system with Stripe integration, webhook handling for payment events, subscription management, invoice generation, and secure payment flow.",
      ar: "نظام معالجة دفع كامل مع تكامل سترايب ومعالجة الأحداث وإدارة الاشتراكات وتوليد الفواتير.",
    },
    category: "backend",
    tags: ["Express", "Payment Methods", "APIs"],
    image: "/payment-gateway-integration-interface.jpg",
    github: "#",
  },
  {
    id: 10,
    title: { en: "Admin Dashboard API", ar: "واجهة لوحة الإدارة" },
    description: {
      en: "Complete API for admin dashboard with role-based access",
      ar: "واجهة كاملة للوحة الإدارة مع الوصول المبني على الأدوار",
    },
    longDescription: {
      en: "Comprehensive admin API with user management, analytics endpoints, content moderation, activity logs, and role-based permissions. Built with Nest.js and MySQL.",
      ar: "واجهة إدارة شاملة مع إدارة المستخدمين ونقاط التحليلات وإدارة المحتوى وسجلات النشاط.",
    },
    category: "backend",
    tags: ["Nest.js", "Admin Panel", "SQL Server/MySQL"],
    image: "/admin-dashboard-with-analytics.jpg",
    github: "#",
  },
  {
    id: 11,
    title: { en: "Real-time Chat Backend", ar: "خادم الدردشة الفورية" },
    description: {
      en: "WebSocket-based real-time chat server with MongoDB",
      ar: "خادم دردشة فوري مبني على WebSocket مع مونجو",
    },
    longDescription: {
      en: "Real-time messaging backend with WebSocket connections, message history, typing indicators, read receipts, file uploads, and group chat functionality.",
      ar: "خادم رسائل فوري مع اتصالات WebSocket وسجل الرسائل ومؤشرات الكتابة وإيصالات القراءة.",
    },
    category: "backend",
    tags: ["Node.js", "MongoDB", "APIs"],
    image: "/chat-application-interface-with-messages.jpg",
    github: "#",
  },

  // Full Stack Projects
  {
    id: 12,
    title: { en: "Social Media Platform", ar: "منصة التواصل الاجتماعي" },
    description: {
      en: "Full-featured social media app with posts, comments, and likes",
      ar: "تطبيق تواصل اجتماعي كامل مع المنشورات والتعليقات والإعجابات",
    },
    longDescription: {
      en: "Complete social media platform with user profiles, posts, comments, likes, followers, real-time notifications, image uploads, and feed algorithm. Built with MERN stack.",
      ar: "منصة تواصل اجتماعي كاملة مع ملفات المستخدمين والمنشورات والتعليقات والإعجابات والمتابعين.",
    },
    category: "fullstack",
    tags: ["MERN Stack", "Auth System", "React + Node"],
    image: "/social-media-platform-with-posts-and-feeds.jpg",
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    id: 13,
    title: { en: "E-commerce Store", ar: "متجر التجارة الإلكترونية" },
    description: {
      en: "Complete online store with cart, checkout, and payment processing",
      ar: "متجر إلكتروني كامل مع السلة والدفع ومعالجة الدفع",
    },
    longDescription: {
      en: "Full-stack e-commerce platform with product management, shopping cart, order processing, payment integration, user accounts, order tracking, and admin dashboard.",
      ar: "منصة تجارة إلكترونية كاملة مع إدارة المنتجات وسلة التسوق ومعالجة الطلبات وتكامل الدفع.",
    },
    category: "fullstack",
    tags: ["Next.js Full Stack", "E-commerce", "Auth System"],
    image: "/ecommerce-store-with-products-grid.jpg",
    demo: "#",
    github: "#",
  },
  {
    id: 14,
    title: { en: "Project Management Dashboard", ar: "لوحة إدارة المشاريع" },
    description: {
      en: "Comprehensive dashboard for managing projects and teams",
      ar: "لوحة شاملة لإدارة المشاريع والفرق",
    },
    longDescription: {
      en: "Full-featured project management system with task tracking, team collaboration, time tracking, file sharing, reports, and analytics. Built with MERN stack and real-time updates.",
      ar: "نظام إدارة مشاريع كامل مع تتبع المهام والتعاون الجماعي وتتبع الوقت ومشاركة الملفات.",
    },
    category: "fullstack",
    tags: ["MERN Stack", "Dashboard", "Auth System"],
    image: "/project-management-dashboard.png",
    demo: "#",
    github: "#",
  },
  {
    id: 15,
    title: { en: "Booking System", ar: "نظام الحجز" },
    description: {
      en: "Restaurant booking system with real-time availability",
      ar: "نظام حجز مطاعم مع التوفر الفوري",
    },
    longDescription: {
      en: "Complete booking platform with calendar view, real-time availability, automated confirmations, customer management, table management, and reporting features.",
      ar: "منصة حجز كاملة مع عرض التقويم والتوفر الفوري والتأكيدات التلقائية وإدارة العملاء.",
    },
    category: "fullstack",
    tags: ["React + Node", "Next.js Full Stack", "Dashboard"],
    image: "/booking-system-with-calendar-view.jpg",
    demo: "#",
    github: "#",
  },
  {
    id: 16,
    title: { en: "Learning Management System", ar: "نظام إدارة التعلم" },
    description: {
      en: "Online course platform with video streaming and progress tracking",
      ar: "منصة دورات إلكترونية مع بث الفيديو وتتبع التقدم",
    },
    longDescription: {
      en: "Comprehensive LMS with course creation, video streaming, quizzes, assignments, progress tracking, certificates, payment integration, and student/instructor dashboards.",
      ar: "نظام إدارة تعلم شامل مع إنشاء الدورات وبث الفيديو والاختبارات والواجبات وتتبع التقدم.",
    },
    category: "fullstack",
    tags: ["MERN Stack", "Dashboard", "E-commerce"],
    image: "/online-learning-platform.png",
    demo: "#",
    github: "#",
  },

  // WordPress Projects
  {
    id: 17,
    title: { en: "Custom Business Theme", ar: "قالب أعمال مخصص" },
    description: {
      en: "Professional WordPress theme for business websites",
      ar: "قالب ووردبريس احترافي لمواقع الأعمال",
    },
    longDescription: {
      en: "Custom WordPress theme designed for business websites featuring page builder compatibility, custom post types, widget areas, theme customizer options, and responsive design.",
      ar: "قالب ووردبريس مخصص مصمم لمواقع الأعمال يتضمن توافق منشئ الصفحات وأنواع المنشورات المخصصة.",
    },
    category: "wordpress",
    tags: ["Theme Development", "Custom Post Types"],
    image: "/wordpress-business-theme-homepage.jpg",
    demo: "#",
    github: "#",
  },
  {
    id: 18,
    title: { en: "WooCommerce Store", ar: "متجر ووكومرس" },
    description: {
      en: "Full-featured online store built with WooCommerce",
      ar: "متجر إلكتروني كامل مبني بووكومرس",
    },
    longDescription: {
      en: "Complete e-commerce solution using WooCommerce with custom product pages, checkout customization, payment gateway integration, shipping options, and inventory management.",
      ar: "حل تجارة إلكترونية كامل باستخدام ووكومرس مع صفحات منتجات مخصصة وتخصيص الدفع وتكامل بوابة الدفع.",
    },
    category: "wordpress",
    tags: ["WooCommerce", "Theme Development"],
    image: "/woocommerce-store-with-products.jpg",
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    id: 19,
    title: { en: "Custom Gutenberg Blocks", ar: "كتل جوتنبرج مخصصة" },
    description: {
      en: "Collection of custom blocks for WordPress block editor",
      ar: "مجموعة من الكتل المخصصة لمحرر كتل ووردبريس",
    },
    longDescription: {
      en: "Custom Gutenberg blocks collection including testimonials, pricing tables, call-to-action, team members, and advanced content blocks with full customization options.",
      ar: "مجموعة كتل جوتنبرج مخصصة تتضمن الشهادات وجداول الأسعار ودعوة العمل وأعضاء الفريق.",
    },
    category: "wordpress",
    tags: ["Gutenberg Blocks", "Plugin Development"],
    image: "/wordpress-gutenberg-custom-blocks.jpg",
    github: "#",
  },
  {
    id: 20,
    title: { en: "Membership Plugin", ar: "إضافة العضويات" },
    description: {
      en: "Custom plugin for managing site memberships and subscriptions",
      ar: "إضافة مخصصة لإدارة عضويات الموقع والاشتراكات",
    },
    longDescription: {
      en: "WordPress membership plugin with subscription tiers, content restriction, payment integration, member dashboard, renewal management, and email notifications.",
      ar: "إضافة عضويات ووردبريس مع مستويات الاشتراك وتقييد المحتوى وتكامل الدفع ولوحة الأعضاء.",
    },
    category: "wordpress",
    tags: ["Plugin Development", "Custom Post Types"],
    image: "/wordpress-membership-plugin-dashboard.jpg",
    github: "#",
  },
]
