import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import PageHero from '@/components/PageHero'
import CategoriaTrattamenti from '@/components/CategoriaTrattamenti'

export const metadata: Metadata = {
  title: 'Filler viso, Rinofiller, Armonizzazione facciale Verona | Dr. Anton Kamel',
  description:
    'Filler viso (zigomi, mento, mandibola), rinofiller, fili di lifting e armonizzazione facciale a Verona. Effetto lifting non chirurgico naturale.',
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
            nome: 'Filler viso (zigomi, mento, mandibola)',
            durata: '45–60 min',
            prezzo: 'da 500 €',
            descrizione:
              'Armonizzazione e definizione dei volumi facciali. Effetto lifting non chirurgico. Si tratta una zona alla volta o più zone in un unico piano.',
          },
          {
            nome: 'Angolo mandibolare (jawline contouring)',
            durata: '45 min',
            prezzo: 'da 500 €',
            descrizione:
              'Definizione della linea mandibolare per un ovale più netto. Adatto a chi cerca un profilo più marcato.',
          },
          {
            nome: 'Rinofiller — correzione naso',
            durata: '20–30 min',
            prezzo: 'da 350 €',
            descrizione:
              'Correzione di gobba, punta o asimmetrie nasali con acido ialuronico. Risultato immediato, senza chirurgia. Effetto 12–18 mesi.',
          },
          {
            nome: 'Fili di lifting riassorbibili',
            durata: '60–90 min',
            prezzo: 'da 700 €',
            descrizione:
              'Tensore immediato + stimolazione del collagene. Per il rilassamento cutaneo del viso e del collo. Effetto durativo 12–18 mesi.',
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
