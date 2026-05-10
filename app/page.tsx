import Navbar from '@/components/Navbar'
import HeroLight from '@/components/HeroLight'
import InfoStrip from '@/components/InfoStrip'
import PercheScegliere from '@/components/PercheScegliere'
import PerTeSection from '@/components/PerTeSection'
import Trattamenti from '@/components/Trattamenti'
import SocialProof from '@/components/SocialProof'
import WidgetPrenotazione from '@/components/WidgetPrenotazione'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <HeroLight />
      <InfoStrip />
      <PercheScegliere />
      <PerTeSection />
      <Trattamenti />
      <SocialProof />
      <WidgetPrenotazione />
      <FAQ />
      <Footer />
      <StickyCTA />
    </main>
  )
}
