import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import Chiamami from '@/components/Chiamami'

export const metadata: Metadata = {
  title: 'Scrivi ad Anton su WhatsApp — Dr. Anton Kamel Verona',
  description:
    'Hai dubbi prima di prenotare? Scrivi ad Anton su WhatsApp. Risponde personalmente in chat.',
  alternates: { canonical: 'https://antonkamel.it/chiamami' },
  robots: { index: true, follow: true },
}

export default function Page() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <Chiamami />
      <Footer />
      <StickyCTA />
    </main>
  )
}
