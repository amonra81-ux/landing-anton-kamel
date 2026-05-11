import Navbar from '@/components/Navbar'
import WavesHero from '@/components/WavesHero'
import InfoStrip from '@/components/InfoStrip'
import PercheScegliere from '@/components/PercheScegliere'
import PerTeSection from '@/components/PerTeSection'
import Trattamenti from '@/components/Trattamenti'
import AntonLipsHighlight from '@/components/AntonLipsHighlight'
import SocialProof from '@/components/SocialProof'
import WidgetPrenotazione from '@/components/WidgetPrenotazione'
import FAQ from '@/components/FAQ'
import GlobalAcademy from '@/components/GlobalAcademy'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'

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
