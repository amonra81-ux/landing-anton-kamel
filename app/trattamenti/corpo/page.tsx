import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import PageHero from '@/components/PageHero'
import CategoriaTrattamenti from '@/components/CategoriaTrattamenti'

export const metadata: Metadata = {
  title: 'Nefertiti collo, Cellulite, Sudorazione, Adiposità Verona | Dr. Anton Kamel',
  description:
    'Trattamenti per il collo e il corpo a Verona: lift Nefertiti del collo, trattamento cellulite, mesoterapia drenante, sudorazione eccessiva, adiposità localizzata.',
  alternates: { canonical: 'https://antonkamel.it/trattamenti/corpo' },
}

export default function Page() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Trattamenti · Collo e corpo"
        title="Oltre il viso."
        subtitle="Collo, decoletté e zone del corpo. Cellulite, ritenzione, sudorazione eccessiva. Tutti i percorsi possono essere personalizzati in consulenza."
        accent
      />

      <CategoriaTrattamenti
        eyebrow="Cosa includo in questa area"
        title="Trattamenti per collo e corpo."
        subtitle="Si valuta sempre con visita preliminare. Percorsi a sedute multiple."
        trattamenti={[
          {
            nome: 'Nefertiti Lift — collo',
            durata: '30 min',
            prezzo: '380 €',
            descrizione:
              'Tecnica iniettiva di botulino con punti distribuiti lungo il muscolo platisma del collo. Rilassa le bande verticali del platisma e sostiene l\'ovale del viso. Effetto «lift» del collo non chirurgico.',
          },
          {
            nome: 'Trattamento cellulite',
            durata: '20 min · 3 sedute',
            prezzo: '250 € a seduta',
            descrizione:
              'Trattamento specifico per arti inferiori con cellulite «a buccia d\'arancia». Percorso 3 sedute distanziate di 3 settimane. Si esegue dopo visita preliminare.',
          },
          {
            nome: 'Mesoterapia drenante',
            durata: '20 min',
            prezzo: 'da 150 €',
            descrizione:
              'Microiniezioni con farmaci specifici per la ritenzione idrica negli arti inferiori. Cicli stagionali.',
          },
          {
            nome: 'Adiposità localizzata',
            durata: '30 min',
            prezzo: 'da 150 € a 350 €',
            descrizione:
              'Trattamento dell\'adiposità localizzata con acido desossicolato. Si valuta in consulenza l\'area e il numero di sedute.',
          },
          {
            nome: 'Sudorazione eccessiva',
            durata: '30 min',
            prezzo: 'da 700 €',
            descrizione:
              'Trattamento con tossina botulinica per iperidrosi (ascelle, mani, piedi). Effetto 4–8 mesi.',
          },
          {
            nome: 'Meso capelli (Juma Hair)',
            durata: '20 min',
            prezzo: '150 €',
            descrizione:
              'Trattamento di biorivitalizzazione del cuoio capelluto con Juma Hair. Per fragilità e diradamento del capello.',
          },
        ]}
      />

      <Footer />
      <StickyCTA />
    </main>
  )
}
