import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import Capabilities from '@/components/Capabilities'
import Team from '@/components/Team'
import { CTA, Footer } from '@/components/CtaFooter'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <Work />
      <Capabilities />
      <Team />
      <CTA />
      <Footer />
    </>
  )
}
