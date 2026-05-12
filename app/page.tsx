import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import WavesHero from '@/components/WavesHero'
import InfoStrip from '@/components/InfoStrip'
import PercheScegliere from '@/components/PercheScegliere'
import PerTeSection from '@/components/PerTeSection'
import Trattamenti from '@/components/Trattamenti'
import AntonLipsHighlight from '@/components/AntonLipsHighlight'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'

// Below-fold heavy components — lazy loaded
const SocialProof = dynamic(() => import('@/components/SocialProof'), { ssr: true })
const WidgetPrenotazione = dynamic(() => import('@/components/WidgetPrenotazione'), { ssr: true })
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: true })
const GlobalAcademy = dynamic(() => import('@/components/GlobalAcademy'))

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
      <GlobalAcademy />
      <Footer />
      <StickyCTA />
    </main>
  )
}
