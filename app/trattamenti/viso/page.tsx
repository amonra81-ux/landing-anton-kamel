import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import PageHero from '@/components/PageHero'
import CategoriaTrattamenti from '@/components/CategoriaTrattamenti'

export const metadata: Metadata = {
  title: 'Filler viso, Mentoplastica, Polilattato, Armonizzazione Verona | Dr. Anton Kamel',
  description:
    'Filler viso (zigomi, mento, mandibola), mentoplastica liquida, polilattato stimolatore collagene e armonizzazione facciale a Verona.',
  alternates: { canonical: 'https://antonkamel.it/trattamenti/viso' },
}

export default function Page() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Trattamenti · Viso e profilo"
        title="Equilibrio del viso, senza chirurgia."
        subtitle="Volumi profondi, profilo, rilassamento cutaneo. Si lavora dove serve, mai dove non serve."
        accent
      />

      <CategoriaTrattamenti
        eyebrow="Cosa includo in questa area"
        title="Trattamenti per il viso."
        subtitle="Si valuta il viso nel suo insieme — proporzioni, volumi, simmetria. Si interviene per zone."
        trattamenti={[
          {
            nome: 'Zigomi — acido ialuronico',
            durata: '60 min',
            prezzo: 'da 500 €',
            descrizione:
              'Trattamento dell\'area zigomatica per definizione e rinfresco del terzo medio del viso. Volumi calibrati sull\'anatomia.',
          },
          {
            nome: 'Mentoplastica liquida',
            durata: '30 min',
            prezzo: 'da 280 €',
            descrizione:
              'Allungamento e proiezione del mento con acido ialuronico. Migliora il profilo senza chirurgia.',
          },
          {
            nome: 'Angolo mandibolare (jawline contouring)',
            durata: '45 min',
            prezzo: 'da 500 €',
            descrizione:
              'Definizione della linea mandibolare per un ovale più netto. Adatto a chi cerca un profilo più marcato.',
          },
          {
            nome: 'Polilattato — stimolatore di collagene',
            durata: '45–60 min',
            prezzo: 'piano personalizzato',
            descrizione:
              'Acido polilattico (PLA) per stimolare la produzione di collagene endogeno. Effetto progressivo nel tempo, rivitalizza pelle del viso e dell\'ovale. Percorso di sedute.',
          },
          {
            nome: 'Armonizzazione facciale completa',
            durata: 'percorso 6–12 mesi',
            prezzo: 'piano personalizzato',
            descrizione:
              'Piano integrato su zigomi, mento, mandibola e labbra distribuito nel tempo. Per chi vuole un risultato organico, non un singolo ritocco.',
          },
        ]}
      />

      <Footer />
      <StickyCTA />
    </main>
  )
}
