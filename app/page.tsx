import Navbar from '@/components/Navbar'
import AKHero from '@/components/AKHero'
import PercheScegliere from '@/components/PercheScegliere'
import Trattamenti from '@/components/Trattamenti'
import WidgetPrenotazione from '@/components/WidgetPrenotazione'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <AKHero />
      <PercheScegliere />
      <Trattamenti />
      <WidgetPrenotazione />
      <FAQ />
      <Footer />
    </main>
  )
}
