import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import PageHero from '@/components/PageHero'
import CTAFinale from '@/components/CTAFinale'
import { Heart, ShieldCheck, MessageCircle, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prima volta dal medico estetico — Hai paura? | Dr. Anton Kamel Verona',
  description:
    'Mai fatto un trattamento estetico? Paura degli aghi, di esagerare, del giudizio? La prima consulenza è solo una conversazione. Studio del Dr. Anton Kamel a Verona.',
  alternates: { canonical: 'https://antonkamel.it/per-te/prima-volta' },
}

export default function Page() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Prima volta"
        title="Hai paura. È normale."
        subtitle="La prima consulenza è solo una conversazione. Niente decisioni, niente fretta."
        accent
      />

      {/* Paure comuni */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a]">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
              Cosa senti
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/95">
              Paure normali. Risposte vere.
            </h2>
          </div>

          <div className="space-y-5">
            {[
              {
                fear: '«Ho paura degli aghi»',
                answer:
                  'Anche tante mie pazienti, le prime volte. Si usano aghi sottili e creme anestetiche. Il fastidio è simile a una piccola puntura — molto meno di quanto immagini.',
              },
              {
                fear: '«Voglio risultato naturale, non da rifatta»',
                answer:
                  'È esattamente la mia filosofia. Si parte sempre con poco prodotto. Se serve, aggiungiamo. Mai eccessi al primo trattamento.',
              },
              {
                fear: '«Mi vergogno a chiedere informazioni»',
                answer:
                  'Non c\'è nulla da nascondere. La consulenza serve proprio a porre domande senza giudizio. Anche quelle che ti sembrano «stupide».',
              },
              {
                fear: '«E se poi non mi piace?»',
                answer:
                  'Con il filler ad acido ialuronico esiste l\'antidoto (jaluronidasi) che lo scioglie in pochi giorni. Niente è permanente.',
              },
              {
                fear: '«Non so se è il momento giusto»',
                answer:
                  'La consulenza valutativa serve a questo: capire se ha senso ora, fra 3 mesi o mai. Anche dirti «no, non serve» fa parte del lavoro.',
              },
            ].map((q, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7"
              >
                <p className="text-[#C9A97A] font-semibold text-base md:text-lg mb-2">
                  {q.fear}
                </p>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  {q.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Aurora */}
      <section className="py-12 md:py-16 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-[#C9A97A]/30 bg-[#C9A97A]/[0.05] p-8 md:p-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase mb-5">
              Una paziente come te
            </p>
            <p className="text-white/85 text-lg md:text-xl leading-relaxed italic mb-5">
              «È la prima volta che facevo il filler e mi sono affidata a lui. Tornassi
              indietro lo sceglierei ancora — super alla mano, disponibile e paziente.
              Lo consiglio davvero.»
            </p>
            <p className="text-white text-sm font-medium">
              — Aurora G. ·{' '}
              <span className="text-white/40">prima volta filler labbra · 2 mesi fa</span>
            </p>
          </div>
        </div>
      </section>

      {/* Cosa succede alla prima consulenza */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
              Cosa aspettarsi
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/95">
              Il primo incontro.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: MessageCircle, t: 'Solo conversazione', d: 'Nessun trattamento alla prima consulenza. Solo ascolto e valutazione.' },
              { icon: Clock, t: '30-45 minuti', d: 'Tempo per capirti e per spiegarti tutto, senza fretta.' },
              { icon: Heart, t: 'Niente pressione', d: 'Decidi tu se procedere e quando. Anche dopo settimane.' },
              { icon: ShieldCheck, t: 'Trasparenza', d: 'Costi, tempi, risultati attesi e rischi — tutto chiaro prima di iniziare.' },
            ].map((b) => (
              <div
                key={b.t}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#C9A97A]/25 transition-colors"
              >
                <b.icon size={22} className="text-[#C9A97A] mb-3" />
                <h3 className="text-white font-semibold mb-2">{b.t}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAFinale
        eyebrow="Pronta a parlarne?"
        title="Prenota la tua prima consulenza."
        subtitle="Niente decisioni affrettate. Decidi tu se procedere col trattamento dopo la consulenza."
      />

      <Footer />
      <StickyCTA />
    </main>
  )
}
