import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import PageHero from '@/components/PageHero'
import CategoriaTrattamenti from '@/components/CategoriaTrattamenti'

export const metadata: Metadata = {
  title: 'Botox Verona — Rughe del viso, bruxismo, jaw slimming | Dr. Anton Kamel',
  description:
    'Tossina botulinica a Verona: distensione delle rughe del viso, botulino al massetere per bruxismo e rimodellamento ovale (jaw slimming).',
  alternates: { canonical: 'https://antonkamel.it/trattamenti/rughe' },
}

export default function Page() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Trattamenti · Rughe e bruxismo"
        title="Tossina botulinica avanzata."
        subtitle="Distensione delle rughe dinamiche senza perdere le espressioni. Riduzione delle tensioni mascellari per chi soffre di bruxismo."
        accent
      />

      <CategoriaTrattamenti
        eyebrow="Cosa includo in questa area"
        title="Trattamenti con botulino."
        subtitle="Tecnica selettiva: si trattano solo i muscoli responsabili delle rughe dinamiche, mai l'espressività generale del viso."
        trattamenti={[
          {
            nome: 'Tossina botulinica — rughe del viso',
            durata: '20–30 min',
            prezzo: 'da 250 €',
            descrizione:
              'Distensione delle rughe dinamiche di fronte, glabella («rughe del leone») e zampe di gallina. Espressioni naturali preservate. Effetto 4–6 mesi.',
          },
          {
            nome: 'Botulino massetere — bruxismo / jaw slimming',
            durata: '20–30 min',
            prezzo: 'da 350 €',
            descrizione:
              'Iniezione nel muscolo massetere. Riduzione del digrignamento dei denti e delle tensioni mandibolari. Beneficio estetico: rimodellamento dell\'ovale del viso (jaw slimming). Molti pazienti riferiscono meno cefalee e sonno migliore.',
          },
          {
            nome: 'Trattamento occhiaie con G-Pointlift (laterale)',
            durata: '30–45 min',
            prezzo: 'da 300 €',
            descrizione:
              'Trattamento delle occhiaie con tecnica G-Pointlift in zona laterale. Approccio mirato e poco invasivo per ridurre l\'occhiaia colorata e migliorare la zona perioculare. Tecnica delicata in tessuto molto sottile.',
          },
        ]}
      />

      <Footer />
      <StickyCTA />
    </main>
  )
}
