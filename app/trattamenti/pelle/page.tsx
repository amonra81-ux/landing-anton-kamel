import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import PageHero from '@/components/PageHero'
import CategoriaTrattamenti from '@/components/CategoriaTrattamenti'

export const metadata: Metadata = {
  title: 'Biorivitalizzazione, Skinbooster, Peeling Verona | Dr. Anton Kamel',
  description:
    'Trattamenti per la qualità della pelle a Verona: biorivitalizzazione, skinbooster, peeling chimico, biorivitalizzazione contorno occhi.',
  alternates: { canonical: 'https://antonkamel.it/trattamenti/pelle' },
}

export default function Page() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Trattamenti · Qualità della pelle"
        title="Pelle che torna in forma."
        subtitle="Idratazione profonda, texture, luminosità. Per chi vuole rivitalizzare senza modificare i volumi."
        accent
      />

      <CategoriaTrattamenti
        eyebrow="Cosa includo in questa area"
        title="Trattamenti per la pelle."
        subtitle="Bioristrutturazione, skinbooster, peeling: protocolli scelti in base al tuo tipo di pelle e stagione."
        trattamenti={[
          {
            nome: 'Bioristrutturazione avanzata',
            durata: '30 min',
            prezzo: 'da 300 €',
            descrizione:
              'Procedura medico-estetica mini invasiva. Riattiva il turn over cellulare con biostimolazione + biorigenerazione (acido ialuronico non cross-linkato a livello del derma profondo). Indicata per visi magri o previa valutazione.',
          },
          {
            nome: 'Biorivitalizzazione classica',
            durata: '30–45 min',
            prezzo: 'da 250 €',
            descrizione:
              'Idratazione profonda + rimpolpamento + miglioramento qualità cutanea. Microiniezioni distribuite. Ciclo di sedute.',
          },
          {
            nome: 'Skinbooster',
            durata: '30–45 min',
            prezzo: 'da 280 €',
            descrizione:
              'Microiniezioni di acido ialuronico per pelle luminosa, idratata, tonica. Trattamento «flash glow» in vista di eventi.',
          },
          {
            nome: 'Biorivitalizzazione contorno occhi',
            durata: '15 min',
            prezzo: 'da 200 €',
            descrizione:
              'Prodotto specifico per il contorno occhi. Migliora la texture cutanea della zona perioculare.',
          },
          {
            nome: 'Peeling chimico',
            durata: '30–45 min',
            prezzo: 'da 150 €',
            descrizione:
              'Rinnovamento cellulare superficiale e profondo. Uniforma il colorito e migliora la texture cutanea. Cicli stagionali.',
          },
          {
            nome: 'Trattamento acne attiva',
            durata: '45–60 min',
            prezzo: 'piano personalizzato',
            descrizione:
              'Protocolli combinati per migliorare il quadro dermatologico dell\'acne in fase attiva. Si valuta in consulenza il protocollo più adatto.',
          },
        ]}
      />

      <Footer />
      <StickyCTA />
    </main>
  )
}
