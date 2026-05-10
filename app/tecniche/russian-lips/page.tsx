import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import PageHero from '@/components/PageHero'
import CTAFinale from '@/components/CTAFinale'

export const metadata: Metadata = {
  title: 'Russian Lips Verona — Tecnica avanzata filler labbra | Dr. Anton Kamel',
  description:
    'Russian Lips Technique a Verona: tecnica iniettiva avanzata di origine russa per labbra alte, definite e simmetriche con minor volume rispetto al filler classico.',
  alternates: { canonical: 'https://antonkamel.it/tecniche/russian-lips' },
}

export default function Page() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Tecnica avanzata"
        title="Russian Lips."
        subtitle="Filler labbra ad alta definizione — meno prodotto, più disegno."
        accent
      />

      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a]">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase mb-5">
              Cosa è
            </p>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              La Russian Lips Technique è un metodo iniettivo di origine russa che
              privilegia il <strong className="text-white">disegno verticale</strong> del
              labbro rispetto al volume orizzontale. L&apos;effetto è di labbra più
              alte, più definite, più «aperte» — con minore quantità di prodotto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-widest text-[#C9A97A] mb-2">
                Per chi
              </p>
              <ul className="text-white/75 text-sm leading-relaxed space-y-2">
                <li>• Labbra naturalmente sottili</li>
                <li>• Vermiglio poco visibile</li>
                <li>• Asimmetrie da correggere</li>
                <li>• Chi vuole &quot;altezza&quot; senza gonfiore</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-widest text-[#C9A97A] mb-2">
                Cosa aspettarsi
              </p>
              <ul className="text-white/75 text-sm leading-relaxed space-y-2">
                <li>• Durata 30-45 min</li>
                <li>• Anestetico topico + lidocaina</li>
                <li>• Risultato visibile subito</li>
                <li>• Gonfiore 3-5 giorni</li>
                <li>• Durata 9-15 mesi</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-[#C9A97A]/30 bg-[#C9A97A]/[0.05] p-8 md:p-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase mb-5">
              Russian Lips o Anton Lips?
            </p>
            <p className="text-white/80 text-base leading-relaxed mb-3">
              In studio uso entrambe. La scelta dipende dalla tua anatomia di partenza
              e dal risultato desiderato. La <strong className="text-white">Russian Lips </strong>
              dà più «altezza» visiva. La <strong className="text-white">Anton Lips </strong>
              gioca su definizione + simmetria con un approccio italiano alla naturalezza.
            </p>
            <p className="text-white/55 text-sm italic">
              Nel consulto ti mostro le differenze e scegliamo insieme.
            </p>
          </div>
        </div>
      </section>

      <CTAFinale
        eyebrow="Pronta?"
        title="Prenota consulto Russian Lips."
      />

      <Footer />
      <StickyCTA />
    </main>
  )
}
