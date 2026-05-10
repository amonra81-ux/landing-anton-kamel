import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import ChiSono from '@/components/ChiSono'

export const metadata: Metadata = {
  title: 'Chi è Dr. Anton Kamel | Medico Estetico Verona — Anton Lips Technique',
  description:
    'Dr. Anton Kamel: medico chirurgo laureato a Verona, ideatore della tecnica Anton Lips, esperto Russian Lips. Studio in Via San Lucillo 16, Verona. 10+ anni esperienza, 4.7★ Google.',
  alternates: { canonical: 'https://antonkamel.it/chi-sono' },
}

export default function Page() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <ChiSono />
      <Footer />
      <StickyCTA />
    </main>
  )
}
