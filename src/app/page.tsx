import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ClientsSection } from "@/components/clients-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { StatsSection } from "@/components/stats-section"
import { HireExpertSection } from "@/components/hire-expert-section"
import { BlogSection } from "@/components/blog-section"
import { ConsultationSection } from "@/components/consultation-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ClientsSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <StatsSection />
      <ConsultationSection />
      <HireExpertSection />
      <BlogSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
