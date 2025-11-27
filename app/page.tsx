import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
