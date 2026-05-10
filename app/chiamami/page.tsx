import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import Chiamami from '@/components/Chiamami'

export const metadata: Metadata = {
  title: 'Ti richiamo io — Dr. Anton Kamel Verona',
  description:
    'Lascia il tuo numero e Anton ti richiama personalmente entro 24h. Senza impegno, senza calendario.',
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
