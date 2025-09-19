import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import SolutionsSection from "@/components/solutions-section"
import ExpertiseSection from "@/components/expertise-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SolutionsSection />
      <ExpertiseSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
