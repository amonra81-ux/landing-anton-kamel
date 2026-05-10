import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import PageHero from '@/components/PageHero'
import CTAFinale from '@/components/CTAFinale'

export const metadata: Metadata = {
  title: 'Armonizzazione facciale completa — Verona | Dr. Anton Kamel',
  description:
    'Piano integrato di armonizzazione facciale a Verona: zigomi, mento, mandibola, labbra trattati in sequenza per equilibrio del viso. Dr. Anton Kamel.',
  alternates: { canonical: 'https://antonkamel.it/per-te/armonizzazione' },
}

export default function Page() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Armonizzazione facciale"
        title="Non un trattamento. Un percorso."
        subtitle="Piano integrato 6-12 mesi: zigomi, mento, mandibola, labbra. Per un viso che torna in equilibrio."
        accent
      />

      {/* Concetto */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a]">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 space-y-5">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
              Cosa è
            </p>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              L&apos;armonizzazione facciale non è la somma di singoli trattamenti.
              È un piano clinico che valuta il viso nella sua interezza — proporzioni,
              volumi, simmetrie — e lo riequilibra in più sedute distribuite nel tempo.
            </p>
            <p className="text-white/65 text-base leading-relaxed">
              È pensato per chi vuole un risultato organico, non un &quot;ritocco&quot; isolato.
              Si parte da una valutazione completa e si costruisce il percorso su misura.
            </p>
          </div>
        </div>
      </section>

      {/* Le 4 zone */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
              Le 4 zone chiave
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/95">
              Il viso come insieme.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { t: 'Zigomi', d: 'Definizione laterale del viso. Punti luce. Effetto lifting non chirurgico.' },
              { t: 'Mento', d: 'Proiezione e profilo. Riequilibrio in caso di mento sfuggente o asimmetrico.' },
              { t: 'Mandibola (jawline)', d: 'Definizione dell\'ovale + jaw slimming con botulino al massetere se necessario.' },
              { t: 'Labbra', d: 'Volume controllato e disegno (Anton Lips o Russian Lips) coerente con il resto del viso.' },
            ].map((z) => (
              <div
                key={z.t}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 hover:border-[#C9A97A]/25 transition-colors"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white/95 mb-2">{z.t}</h3>
                <p className="text-white/55 text-sm md:text-base leading-relaxed">{z.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Percorso tipo */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
              Esempio percorso 6 mesi
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/95">
              Step by step.
            </h2>
          </div>
          <ol className="space-y-5">
            {[
              { n: 'Mese 0', t: 'Consulto + foto + piano', d: 'Mappatura completa del viso, foto da più angolazioni, piano scritto e condiviso.' },
              { n: 'Mese 1', t: 'Zigomi + mento', d: 'Si parte dalla struttura: si lavora sui volumi profondi.' },
              { n: 'Mese 2', t: 'Controllo + ritocco', d: 'Verifica risultato, eventuali aggiustamenti.' },
              { n: 'Mese 3-4', t: 'Mandibola + labbra', d: 'Una volta stabilito il nuovo equilibrio strutturale, si raffina.' },
              { n: 'Mese 6', t: 'Foto finali + piano mantenimento', d: 'Confronto prima/dopo. Definiamo i prossimi 12 mesi.' },
            ].map((s) => (
              <li
                key={s.n}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
              >
                <span className="shrink-0 text-[#C9A97A] font-bold text-base md:text-lg tabular-nums whitespace-nowrap min-w-[80px]">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white/95 mb-1">{s.t}</h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonial Martina */}
      <section className="py-12 md:py-16 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-[#C9A97A]/30 bg-[#C9A97A]/[0.05] p-8 md:p-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase mb-5">
              Una paziente come te
            </p>
            <p className="text-white/85 text-lg md:text-xl leading-relaxed italic mb-5">
              «Piano completo: zigomi, mento e labbra. Risultato armonioso e naturale.
              Non sembro operata, sembro riposata e in forma. Migliore investimento
              degli ultimi anni.»
            </p>
            <p className="text-white text-sm font-medium">
              — Martina B. ·{' '}
              <span className="text-white/40">armonizzazione facciale completa</span>
            </p>
          </div>
        </div>
      </section>

      <CTAFinale
        eyebrow="Pronta a iniziare?"
        title="Prenota la valutazione iniziale."
        subtitle="Niente impegno. Solo capire se ha senso un percorso completo per te."
      />

      <Footer />
      <StickyCTA />
    </main>
  )
}
