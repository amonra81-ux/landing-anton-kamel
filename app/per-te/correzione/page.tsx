import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import PageHero from '@/components/PageHero'
import CTAFinale from '@/components/CTAFinale'
import { AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Correzione filler altro medico — Verona | Dr. Anton Kamel',
  description:
    'Hai fatto un filler labbra che non ti convince? Migrazione, asimmetria, eccessivo volume? Il Dr. Anton Kamel a Verona corregge filler eseguiti da altri medici.',
  alternates: { canonical: 'https://antonkamel.it/per-te/correzione' },
}

export default function Page() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Correzione lavori altrui"
        title="Filler che non ti piace? Si corregge."
        subtitle="Migrazione, asimmetria, volume eccessivo: nella maggior parte dei casi è recuperabile."
        accent
      />

      {/* Problemi comuni */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a]">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
              Cosa risolvo
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/95">
              Problemi comuni.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { t: 'Migrazione del prodotto', d: 'Il filler è uscito dal labbro creando un «baffetto» o un bordo sopra il labbro superiore.' },
              { t: 'Asimmetria evidente', d: 'Un lato è più grosso dell\'altro, oppure il cupido non è più simmetrico.' },
              { t: 'Volume eccessivo', d: 'Effetto «papera» o labbra sproporzionate rispetto al resto del viso.' },
              { t: 'Bordi mal definiti', d: 'Labbra gonfie ma senza disegno, senza definizione del vermiglio.' },
              { t: 'Granulomi o noduli', d: 'Si percepiscono palline dure al tatto sotto la pelle.' },
              { t: 'Risultato non naturale', d: 'Le labbra «si vedono» — l\'opposto di quello che volevi.' },
            ].map((p) => (
              <div
                key={p.t}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <AlertTriangle size={20} className="text-[#C9A97A] mb-3" />
                <h3 className="text-white font-semibold mb-2">{p.t}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Iter correzione */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
              Come si corregge
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/95">
              Il percorso.
            </h2>
          </div>
          <ol className="space-y-5">
            {[
              { n: '01', t: 'Valutazione', d: 'Esamino il filler esistente. Foto, palpazione, mappatura. Capisco dove e come è stato iniettato il prodotto.' },
              { n: '02', t: 'Scioglimento (jaluronidasi)', d: 'Se serve, sciolgo il filler vecchio con jaluronidasi. Le labbra tornano in 7-14 giorni alla forma originale.' },
              { n: '03', t: 'Recupero del tessuto', d: 'Pausa di 2-4 settimane perché il labbro si rilassi e il tessuto si rigeneri.' },
              { n: '04', t: 'Nuovo filler con tecnica corretta', d: 'Russian Lips o Anton Lips Technique — su misura, senza ripetere errori passati.' },
            ].map((s) => (
              <li
                key={s.n}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
              >
                <span className="shrink-0 text-[#C9A97A] font-bold text-2xl md:text-3xl tabular-nums">{s.n}</span>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white/95 mb-1">{s.t}</h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonial Vanessa */}
      <section className="py-12 md:py-16 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-[#C9A97A]/30 bg-[#C9A97A]/[0.05] p-8 md:p-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase mb-5">
              Caso reale
            </p>
            <p className="text-white/85 text-lg md:text-xl leading-relaxed italic mb-5">
              «Dopo anni di filler avevo evidenti migrazioni. Anton ha sciolto tutto
              con jaluronidasi, due settimane dopo abbiamo rifatto. Ora ho labbra
              piatte e naturali come mai prima. Top.»
            </p>
            <p className="text-white text-sm font-medium">
              — Vanessa ·{' '}
              <span className="text-white/40">correzione + nuovo filler · 6 mesi fa</span>
            </p>
          </div>
        </div>
      </section>

      <CTAFinale
        eyebrow="Vuoi recuperarle?"
        title="Prenota una valutazione."
        subtitle="Porta foto del filler attuale (anche dello specchio). Capiamo insieme cosa fare."
      />

      <Footer />
      <StickyCTA />
    </main>
  )
}
