import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import WavesHero from '@/components/WavesHero'
import StickyCTA from '@/components/StickyCTA'

// Solo Navbar + Hero + StickyCTA eager (above-fold first paint)
// Tutto resto lazy: ogni sezione si carica solo quando serve
const InfoStrip = dynamic(() => import('@/components/InfoStrip'))
const PercheScegliere = dynamic(() => import('@/components/PercheScegliere'))
const PerTeSection = dynamic(() => import('@/components/PerTeSection'))
const Trattamenti = dynamic(() => import('@/components/Trattamenti'))
const AntonLipsHighlight = dynamic(() => import('@/components/AntonLipsHighlight'))
const SocialProof = dynamic(() => import('@/components/SocialProof'))
const WidgetPrenotazione = dynamic(() => import('@/components/WidgetPrenotazione'))
const FAQ = dynamic(() => import('@/components/FAQ'))
const AcademySection = dynamic(() => import('@/components/AcademySection'))
const CosmeticiSection = dynamic(() => import('@/components/CosmeticiSection'))
const GlobalAcademy = dynamic(() => import('@/components/GlobalAcademy'))
const Footer = dynamic(() => import('@/components/Footer'))

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <WavesHero />
      <InfoStrip />
      <PercheScegliere />
      <PerTeSection />
      <Trattamenti />
      <AntonLipsHighlight />
      <SocialProof />
      <WidgetPrenotazione />
      <FAQ />
      <AcademySection />
      <GlobalAcademy />
      <CosmeticiSection />
      <Footer />
      <StickyCTA />
    </main>
  )
}
