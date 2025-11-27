# Hazem Ashraf - Frontend Developer Portfolio

A modern, fully-featured portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Features

✨ **Complete Implementation**
- Bilingual support (English/Arabic) with RTL layout
- Dark/Light mode toggle with persistence
- Smooth animations using Framer Motion
- Fully responsive design (mobile-first)
- SEO optimized
- Type-safe with TypeScript
- Server-side EmailJS integration

📄 **Pages**
- **Home**: Hero section, about summary, skills showcase, featured projects, testimonials, CTA
- **About**: Detailed journey, experience timeline, statistics, complete skills breakdown
- **Projects**: Filterable project gallery, detailed project pages, technology tags
- **Contact**: Contact form with validation, EmailJS integration, contact info, social links
- **Resume**: PDF preview and download functionality
- **404**: Custom error page with navigation options

🎨 **Design**
- Modern color palette (blue/cyan primary)
- Smooth hover effects and transitions
- Animated scroll-in effects
- Professional layout with consistent spacing
- Touch-friendly UI for mobile devices

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: EmailJS (server-side)
- **i18n**: Custom context-based solution

## Getting Started

### 1. Installation

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 2. Environment Variables

Create `.env.local` in the root directory and add:

\`\`\`env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_ln3no4o
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_6zgpr6k
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=ar5cgj-WPAl2SL9FD
\`\`\`

### 3. EmailJS Setup

The EmailJS integration is already configured in `/app/api/contact/route.ts`.

**Your EmailJS Credentials:**
- Service ID: `service_ln3no4o`
- Template ID: `template_6zgpr6k`
- Public Key: `ar5cgj-WPAl2SL9FD`

To verify it's working:
1. Go to [EmailJS](https://www.emailjs.com)
2. Sign in with your account
3. Set up your email template with the variables: `to_email`, `from_name`, `from_email`, `subject`, `message`

### 4. Development

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Home page with all sections
│   ├── globals.css             # Tailwind & design tokens
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── projects/
│   │   ├── page.tsx            # Projects listing & filters
│   │   └── [id]/
│   │       └── page.tsx        # Project detail page
│   ├── contact/
│   │   └── page.tsx            # Contact page with form
│   ├── resume/
│   │   └── page.tsx            # Resume/CV page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # EmailJS endpoint
│   └── not-found.tsx           # 404 page
├── components/
│   ├── navbar.tsx              # Navigation with theme/language
│   ├── footer.tsx              # Two-section footer
│   ├── contact-form.tsx        # Form with validation
│   ├── providers.tsx           # Client providers wrapper
│   ├── theme-provider.tsx      # Dark mode provider
│   └── ui/                     # shadcn/ui components
├── lib/
│   ├── i18n.ts                 # Translation system
│   ├── language-context.tsx    # Language state management
│   └── projects-data.ts        # Projects data
├── public/
│   ├── resume.pdf              # Your resume (add here)
│   └── *.png/*.jpg             # Project images
├── styles/
│   └── globals.css             # Global styles
└── package.json
\`\`\`

## Customization

### Update Personal Information

1. **Home Page** (`app/page.tsx`):
   - Change hero text, social links
   - Update skills and technologies
   - Modify testimonials

2. **About Page** (`app/about/page.tsx`):
   - Update journey and experience text
   - Modify statistics

3. **Contact** (`app/contact/page.tsx`):
   - Update contact information
   - Change social media links
   - Modify response time/availability

4. **Projects** (`lib/projects-data.ts`):
   - Add/remove projects
   - Update project details, images, links
   - Modify categories and tags

### Languages

Translations are in `lib/i18n.ts`. Add or modify translations:

\`\`\`typescript
export const translations = {
  en: { ... },
  ar: { ... }
}
\`\`\`

### Design Customization

Update color tokens in `app/globals.css`:

\`\`\`css
:root {
  --primary: oklch(0.5 0.15 240);
  --primary-foreground: oklch(0.99 0 0);
  /* ... other colors */
}
\`\`\`

## Dark Mode

- Automatically detects system preference on first visit
- User preference is saved to localStorage
- Toggle in navbar (Sun/Moon icon)
- Works across all pages

## Multilingual Support

- English & Arabic supported
- RTL layout for Arabic
- Toggle in navbar (EN/AR button)
- User preference saved to localStorage
- All content is translated

## Forms & Validation

Contact form uses:
- **React Hook Form**: Efficient form state management
- **Zod**: TypeScript-first validation schema
- **Server-side validation**: Additional safety layer
- **Error messages**: User-friendly feedback

## Animations

Built with Framer Motion:
- Scroll-triggered animations on sections
- Hover effects on interactive elements
- Smooth page transitions
- Staggered content reveals

## SEO

- Semantic HTML structure
- Open Graph meta tags
- Mobile-responsive
- Fast loading times
- Proper heading hierarchy

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Visit [Vercel](https://vercel.com)
3. Connect your repository
4. Add environment variables
5. Deploy!

\`\`\`bash
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
\`\`\`

### Deploy to Other Platforms

Works with any platform supporting Node.js (Netlify, AWS, Google Cloud, etc.)

## Performance

- Next.js 16 with Turbopack (default bundler)
- Image optimization with Next.js Image
- Code splitting & lazy loading
- Minimal bundle size
- ~90+ Lighthouse score

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- IE not supported (uses modern JavaScript features)

## License

Feel free to use this template for your own portfolio!

## Support

For issues or questions:
1. Check the code comments
2. Review the [Next.js documentation](https://nextjs.org/docs)
3. Check [Tailwind CSS docs](https://tailwindcss.com/docs)
4. Review [Framer Motion](https://www.framer.com/motion/)

## Tips for Customization

1. **Add your resume**: Place `resume.pdf` in `/public/resume.pdf`
2. **Update images**: Replace placeholder images in `/public/`
3. **Customize projects**: Edit `lib/projects-data.ts`
4. **Change colors**: Update CSS variables in `app/globals.css`
5. **Add more sections**: Create new page routes in `app/`
6. **Modify animations**: Adjust Framer Motion variants

---

Built with ❤️ using Next.js & TypeScript
