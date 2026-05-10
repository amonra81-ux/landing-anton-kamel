import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import PageHero from '@/components/PageHero'
import CTAFinale from '@/components/CTAFinale'
import { Sparkles, Target, Heart, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Anton Lips Technique™ — Filler Labbra Verona | Dr. Anton Kamel',
  description:
    'Anton Lips Technique è la tecnica proprietaria ideata dal Dr. Anton Kamel per filler labbra naturale, definito e simmetrico. Senza effetto «papera». Studio a Verona.',
  alternates: { canonical: 'https://antonkamel.it/tecniche/anton-lips' },
}

const principi = [
  {
    icon: Target,
    title: 'Precisione anatomica',
    text:
      'Mappatura individuale del vermiglio e dei punti di sostegno. Nessun protocollo standard.',
  },
  {
    icon: Heart,
    title: 'Naturalezza prima di tutto',
    text:
      'Il risultato deve apparire come labbra TUE, solo più definite. Mai effetto «papera».',
  },
  {
    icon: Sparkles,
    title: 'Definizione del bordo',
    text:
      'Lavoro di precisione sul cupido e sull\'arco labiale superiore per un disegno netto ma morbido.',
  },
  {
    icon: ShieldCheck,
    title: 'Volume controllato',
    text:
      'Si parte sempre da poco prodotto. Aggiustiamo nelle sedute successive in base al risultato.',
  },
]

export default function Page() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Tecnica proprietaria"
        title="Anton Lips Technique™"
        subtitle="Filler labbra naturale, definito, simmetrico — ideato dal Dr. Anton Kamel."
        accent
      />

      {/* What is */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a]">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-[#C9A97A]/30 bg-[#C9A97A]/[0.05] p-8 md:p-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase mb-6">
              Cosa è
            </p>
            <div className="space-y-5 text-white/80 text-base sm:text-lg leading-relaxed">
              <p>
                Anton Lips è una tecnica iniettiva di filler labbra che ho sviluppato
                personalmente in oltre dieci anni di pratica clinica. Combina la
                precisione anatomica della Russian Lips con un approccio italiano
                alla naturalezza.
              </p>
              <p>
                L&apos;obiettivo non è cambiare le labbra del paziente. È restituirgli
                la versione migliore delle labbra che ha — più definite, più simmetriche,
                più presenti — senza che sia evidente l&apos;intervento.
              </p>
              <p className="text-white/55 italic text-base">
                «Le labbra giuste sono quelle che nessuno si accorge che hai rifatto.»
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 principi */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10 md:mb-14">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
              I 4 principi
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/95">
              Cosa la rende diversa.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {principi.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 hover:border-[#C9A97A]/25 transition-colors"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <p.icon size={24} className="text-[#C9A97A] mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-white/95 mb-2">
                  {p.title}
                </h3>
                <p className="text-white/55 text-sm md:text-base leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Iter trattamento */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
              Come si svolge
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/95">
              Iter trattamento.
            </h2>
          </div>
          <ol className="space-y-6">
            {[
              {
                n: '01',
                title: 'Consulto valutativo',
                text:
                  'Conversazione di 30-45 minuti. Valuto la tua anatomia, ascolto cosa vorresti, ti spiego cosa è possibile e cosa no.',
              },
              {
                n: '02',
                title: 'Disegno personalizzato',
                text:
                  'Mappo il labbro superiore e inferiore, segno i punti di iniezione su misura. Ti mostro il piano prima di procedere.',
              },
              {
                n: '03',
                title: 'Trattamento (30-45 min)',
                text:
                  'Crema anestetica + filler con lidocaina. Tecnica «multi-punto» con micro-iniezioni precise. Risultato visibile subito.',
              },
              {
                n: '04',
                title: 'Controllo a 14-21 giorni',
                text:
                  'Verifico il risultato finale (post-gonfiore). Se serve, aggiustiamo in seduta gratuita. Mai eccessi al primo colpo.',
              },
            ].map((s) => (
              <li
                key={s.n}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
              >
                <span className="shrink-0 text-[#C9A97A] font-bold text-2xl md:text-3xl tabular-nums">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white/95 mb-1">
                    {s.title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTAFinale
        eyebrow="Vuoi provarla?"
        title="Prenota un consulto Anton Lips."
        subtitle="Prenota il consulto in studio. Decidi tu se procedere col trattamento."
      />

      <Footer />
      <StickyCTA />
    </main>
  )
}
