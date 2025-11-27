# Portfolio Setup & Customization Guide

## What's Been Built

Your professional portfolio website is now fully functional with:

✅ **All Pages & Features**
- Home page with hero section, about preview, skills, featured projects, testimonials, and CTA
- About page with journey, experience, and comprehensive skills showcase
- Projects page with filters (React, Next.js, Backend, Full-stack)
- Project detail pages with full project information
- Contact page with fully functional contact form
- Resume/CV page with PDF preview and download
- Custom 404 page
- Responsive navigation with theme & language switchers
- Two-section footer

✅ **Complete i18n System**
- Full English/Arabic translations
- RTL layout support for Arabic
- Language preference saved to localStorage
- All UI elements translated

✅ **Dark/Light Mode**
- Toggle in navbar
- Automatic system preference detection
- Theme preference saved to localStorage
- Works across all pages and components

✅ **Animations & Effects**
- Smooth scroll-in animations with Framer Motion
- Hover effects on all interactive elements
- Staggered reveal animations
- Smooth transitions between states

✅ **EmailJS Integration - Secure**
- Server-side email handling (credentials never exposed to client)
- Contact form with validation
- Loading states on form submission
- Success/error feedback messages
- Secure credential storage

## Quick Start

1. **Install dependencies** (if not done):
   \`\`\`bash
   npm install
   \`\`\`

2. **Set up environment variables**:
   - Go to the Vars section in the in-chat sidebar
   - Add these variables:
     - \`EMAILJS_SERVICE_ID\` = service_ln3no4o
     - \`EMAILJS_TEMPLATE_ID\` = template_6zgpr6k
     - \`EMAILJS_PUBLIC_KEY\` = ar5cgj-WPAl2SL9FD

3. **Run development server**:
   \`\`\`bash
   npm run dev
   \`\`\`
   Visit http://localhost:3000

4. **Customize content** (see sections below)

5. **Deploy** when ready!

## Environment Variables Setup

### For Local Development

Create a `.env.local` file in your project root:

\`\`\`bash
EMAILJS_SERVICE_ID=service_ln3no4o
EMAILJS_TEMPLATE_ID=template_6zgpr6k
EMAILJS_PUBLIC_KEY=ar5cgj-WPAl2SL9FD
\`\`\`

### For Deployment (Vercel)

1. Go to your Vercel project settings
2. Navigate to Environment Variables
3. Add these three variables with their values
4. They will automatically be available to your API routes

**Important**: These environment variables are **server-side only** and secure. They are never exposed to the client-side code.

## Customization Checklist

### 1. Update Personal Information

**Home Page** (\`app/page.tsx\`):
- [ ] Change your name and title
- [ ] Update hero description
- [ ] Add your real social media links (GitHub, LinkedIn, email)
- [ ] Update project showcase (currently showing placeholder projects)

**About Page** (\`app/about/page.tsx\`):
- [ ] Update your journey and experience text
- [ ] Modify years of experience, projects completed, etc.

**Contact Page** (\`app/contact/page.tsx\`):
- [ ] Update email address (currently: hazemashraf.programming@gmail.com)
- [ ] Add your real phone number
- [ ] Update location if needed
- [ ] Update social media links

### 2. Update Projects

**Edit** \`lib/projects-data.ts\`:
\`\`\`typescript
{
  id: 1,
  title: { en: "Your Project", ar: "مشروعك" },
  description: { en: "...", ar: "..." },
  image: "/your-image.png",
  category: "react", // or "next", "backend", "fullstack"
  tags: ["React", "TypeScript", ...],
  github: "https://github.com/your-repo",
  demo: "https://your-demo.com",
  featured: true, // shows in home featured section
}
\`\`\`

- [ ] Replace all placeholder projects with your real ones
- [ ] Add your project images to \`/public/\`
- [ ] Update GitHub links to your repositories
- [ ] Update demo links to your deployed projects

### 3. Add Your Resume

- [ ] Create a PDF of your resume
- [ ] Save as \`resume.pdf\` in \`/public/\` folder
- [ ] The download button on \`/resume\` page will work automatically

### 4. Update Skills

Edit \`app/page.tsx\` and \`app/about/page.tsx\` - the \`skills\` object:
\`\`\`typescript
const skills = {
  frontendCore: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  reactEcosystem: ["React", "Next.js", "Redux", "React Query"],
  // ... update these arrays with your real skills
}
\`\`\`

### 5. Update Profile Image

- [ ] Add your professional photo to \`/public/\` (e.g., \`profile.jpg\`)
- [ ] Update the image path in hero section:
  \`\`\`tsx
  <Image src="/your-image.jpg" alt="Hazem Ashraf" ... />
  \`\`\`

### 6. Design Customization

**Colors** (edit \`app/globals.css\`):
\`\`\`css
:root {
  --primary: oklch(0.5 0.15 240);      /* Blue - change the hue */
  --primary-foreground: oklch(0.99 0 0); /* White text on primary */
  /* ... other colors */
}
\`\`\`

**Fonts** (edit \`app/layout.tsx\`):
\`\`\`typescript
import { Geist, Geist_Mono } from 'next/font/google'
// Change to other Google Fonts
\`\`\`

### 7. Update Testimonials

In \`app/page.tsx\`, update the \`testimonials\` array:
\`\`\`typescript
{
  name: "Your Client Name",
  role: "Their Position",
  content: "What they said about you..."
}
\`\`\`

## EmailJS Setup Guide

Your EmailJS credentials are secure and stored as environment variables.

### Verify Your EmailJS Account

1. Visit [EmailJS](https://www.emailjs.com)
2. Sign up or log in
3. Go to **Email Services** → Create a new service
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps
4. Go to **Email Templates** → Create a new template
5. Use these template variables in your email body:
   - \`{{to_email}}\` - Recipient email
   - \`{{from_name}}\` - Visitor's name
   - \`{{from_email}}\` - Visitor's email
   - \`{{subject}}\` - Email subject
   - \`{{message}}\` - Email message

### Test the Contact Form

1. Start the dev server: \`npm run dev\`
2. Go to http://localhost:3000/contact
3. Fill out the form and click "Send Message"
4. You should see a success message
5. Check your email for the message

## File Structure Reference

\`\`\`
Portfolio/
├── app/
│   ├── page.tsx                 ← HOME PAGE (customize hero, skills, projects)
│   ├── about/page.tsx           ← ABOUT PAGE (customize experience)
│   ├── projects/page.tsx        ← PROJECTS LIST (filtered view)
│   ├── projects/[id]/page.tsx   ← PROJECT DETAIL PAGE
│   ├── contact/page.tsx         ← CONTACT PAGE
│   ├── resume/page.tsx          ← RESUME PAGE
│   ├── api/contact/route.ts     ← EMAIL ENDPOINT (secure, server-side)
│   ├── not-found.tsx            ← 404 PAGE
│   └── globals.css              ← COLORS & DESIGN TOKENS
├── components/
│   ├── navbar.tsx               ← NAVIGATION (has theme/language toggles)
│   ├── footer.tsx               ← FOOTER (update contact info)
│   ├── contact-form.tsx         ← CONTACT FORM
│   └── ui/                      ← Pre-built components
├── lib/
│   ├── i18n.ts                  ← TRANSLATIONS (add/modify here)
│   ├── language-context.tsx     ← Language state
│   └── projects-data.ts         ← PROJECT DATA (EDIT THIS!)
├── .env.example                 ← Copy to .env.local for local dev
└── public/
    ├── resume.pdf               ← ADD YOUR CV HERE
    └── project-*.png/.jpg       ← ADD PROJECT IMAGES
\`\`\`

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Visit https://vercel.com
3. Click "Add New..." → Select your repository
4. In Environment Variables, add:
   - \`EMAILJS_SERVICE_ID\` = \`service_ln3no4o\`
   - \`EMAILJS_TEMPLATE_ID\` = \`template_6zgpr6k\`
   - \`EMAILJS_PUBLIC_KEY\` = \`ar5cgj-WPAl2SL9FD\`
5. Click Deploy - done!

### Deploy to Other Platforms
- Netlify, AWS, Google Cloud, DigitalOcean all support Next.js
- Follow similar steps to add environment variables

## Testing

Before deploying:

1. **Dark Mode**: Click moon icon in navbar - should toggle
2. **Language**: Click EN/AR - page should switch languages
3. **Navigation**: Click menu items - should navigate smoothly
4. **Contact Form**: Fill and submit - should show loading/success states
5. **Mobile**: Test on phone screen - should be responsive
6. **Links**: Check all social links, GitHub, and demo links work

## Troubleshooting

**Translations not showing?**
- Clear browser cache
- Check \`lib/i18n.ts\` has all keys
- Verify language context is working (navbar toggle)

**Styles not applying?**
- Rebuild: \`npm run build\`
- Clear \`.next\` folder: \`rm -rf .next\`
- Restart dev server

**EmailJS not working?**
- Verify environment variables are set correctly
- Check the browser console for errors (F12)
- Check EmailJS dashboard for email template setup
- Ensure your email provider is properly configured in EmailJS
- Test on production (local dev should show success message)

**Dark mode not persisting?**
- Check localStorage is enabled in browser
- Try different browser
- Clear cookies/cache

## Next Steps

1. **Set up environment variables** in the Vars section
2. **Customize all content** using checklist above
3. **Test thoroughly** on mobile and desktop
4. **Deploy to Vercel** for free hosting
5. **Set up custom domain** (optional)
6. **Monitor analytics** (optional - add Vercel Analytics)
7. **Share your portfolio!**

## Tips & Tricks

- Use Cmd/Ctrl + K to search components in VS Code
- The \`useTranslation()\` hook gives you \`t()\` function for translations
- All animations are in components using \`motion\` from Framer Motion
- Theme colors use CSS variables - easy to customize
- Use \`/placeholder.svg?key=abc&query=description\` for AI-generated images
- Mobile breakpoints: \`sm: 640px\`, \`md: 768px\`, \`lg: 1024px\`

## Need Help?

- Check the README.md for more info
- Review Next.js docs: https://nextjs.org/docs
- Check Tailwind CSS: https://tailwindcss.com/docs
- Check Framer Motion: https://www.framer.com/motion/
- Check EmailJS docs: https://www.emailjs.com/docs/

Good luck with your portfolio! 🚀
