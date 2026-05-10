import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import PageHero from '@/components/PageHero'
import CategoriaTrattamenti from '@/components/CategoriaTrattamenti'

export const metadata: Metadata = {
  title: 'Filler labbra Verona — Anton Lips, Russian Lips, correzioni | Dr. Anton Kamel',
  description:
    'Filler labbra a Verona: Anton Lips Technique™ proprietaria, Russian Lips, correzione lavori altrove. Risultati naturali, mai effetto «papera». Studio del Dr. Anton Kamel.',
  alternates: { canonical: 'https://antonkamel.it/trattamenti/labbra' },
}

export default function Page() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Trattamenti · Labbra"
        title="Labbra naturali, definite, simmetriche."
        subtitle="Filler labbra calibrato sulla tua anatomia. Anton Lips Technique™ è la tecnica proprietaria che ho sviluppato in oltre 10 anni di pratica."
        accent
      />

      <CategoriaTrattamenti
        eyebrow="Cosa includo in questa area"
        title="Trattamenti per le labbra."
        subtitle="Ogni labbra ha una storia anatomica diversa. Tecnica e dosaggio cambiano di conseguenza."
        trattamenti={[
          {
            nome: 'Anton Lips Technique™ — filler labbra naturale',
            durata: '30–45 min',
            prezzo: 'da 400 €',
            descrizione:
              'Tecnica iniettiva proprietaria. Combina precisione anatomica della Russian Lips con un approccio italiano alla naturalezza. Definizione + simmetria, mai effetto «papera». Per chi vuole labbra «proprie» ma più presenti.',
          },
          {
            nome: 'Russian Lips Technique',
            durata: '30–45 min',
            prezzo: 'da 400 €',
            descrizione:
              'Tecnica avanzata di origine russa. Disegno verticale del vermiglio per labbra più alte e definite con minor volume. Indicata per chi ha labbra naturalmente sottili.',
          },
          {
            nome: 'Correzione filler migrato',
            durata: '30–60 min',
            prezzo: 'da 250 €',
            descrizione:
              'Scioglimento del filler precedente con jaluronidasi quando necessario. Recupero del tessuto + nuovo filler con tecnica corretta. Per chi viene da risultati deludenti altrove.',
          },
          {
            nome: 'Trattamento «Codice Barre» — rughe perilabiali',
            durata: '25 min',
            prezzo: 'da 150 €',
            descrizione:
              'Protocollo combinato per attenuare le rughe sopra e sotto le labbra. Botox + acido ialuronico specifico in 2 sedute distanziate.',
          },
        ]}
        approfondimento={
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
              Approfondisci
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  href: '/tecniche/anton-lips',
                  title: 'Anton Lips Technique™',
                  desc: 'I 4 principi della tecnica firmata.',
                  proprietary: true,
                },
                {
                  href: '/tecniche/russian-lips',
                  title: 'Russian Lips',
                  desc: 'Tecnica avanzata di origine russa.',
                },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`group flex items-start gap-3 rounded-2xl border p-4 transition-colors ${
                    l.proprietary
                      ? 'border-[#C9A97A]/30 bg-[#C9A97A]/[0.06] hover:border-[#C9A97A]/50'
                      : 'border-white/10 bg-white/[0.03] hover:border-[#C9A97A]/25'
                  }`}
                >
                  <span className="shrink-0 text-[#C9A97A]">
                    <Sparkles size={16} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm md:text-base">{l.title}</p>
                    <p className="text-white/55 text-xs md:text-sm mt-0.5">{l.desc}</p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="shrink-0 text-white/30 group-hover:text-[#C9A97A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </Link>
              ))}
            </div>
          </div>
        }
      />

      <Footer />
      <StickyCTA />
    </main>
  )
}
