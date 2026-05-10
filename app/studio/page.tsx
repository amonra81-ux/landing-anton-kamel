import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import PageHero from '@/components/PageHero'
import CTAFinale from '@/components/CTAFinale'
import { MapPin, MessageCircle, Clock, Car, Train } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Studio Dr. Anton Kamel — Via San Lucillo 16, Verona | Mappa + orari',
  description:
    'Lo studio del Dr. Anton Kamel a Verona si trova in Via San Lucillo 16. Aperto su appuntamento. Indicazioni stradali, parcheggio, contatti.',
  alternates: { canonical: 'https://antonkamel.it/studio' },
}

const ADDRESS = 'Via San Lucillo 16, 37100 Verona VR'
const MAPS_URL =
  'https://www.google.com/maps/place/DR.+ANTON+KAMEL/@45.4425759,10.9410775,17z'
const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.521!2d10.94109!3d45.4425759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781e1c645ef0395%3A0xa1d3b7080627d4ad!2sDR.%20ANTON%20KAMEL!5e0!3m2!1sit!2sit!4v1720000000000'

export default function Page() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Studio Verona"
        title="Via San Lucillo 16."
        subtitle="Lo studio è in zona Santa Lucia, facilmente raggiungibile in auto e con i mezzi pubblici."
        accent
      />

      {/* Mappa + info */}
      <section className="py-12 md:py-16 px-6 bg-[#0a0a0a]">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Mappa */}
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] aspect-square lg:aspect-auto lg:min-h-[400px]">
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa studio Dr. Anton Kamel"
            />
          </div>

          {/* Info */}
          <div className="space-y-5">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#C9A97A]/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="text-[#C9A97A] shrink-0"><MapPin size={20} /></span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/45 mb-1">Indirizzo</p>
                  <p className="text-white text-base md:text-lg font-medium">{ADDRESS}</p>
                  <p className="text-white/45 text-xs mt-1">Apri in Google Maps →</p>
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/393801035896"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#25D366]/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="text-[#25D366] shrink-0"><MessageCircle size={20} /></span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/45 mb-1">WhatsApp</p>
                  <p className="text-white text-base md:text-lg font-medium tabular-nums">
                    380 103 5896
                  </p>
                  <p className="text-white/45 text-xs mt-1">Solo messaggi · no chiamate</p>
                </div>
              </div>
            </a>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-start gap-4">
                <span className="text-[#C9A97A] shrink-0"><Clock size={20} /></span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/45 mb-1">Orari</p>
                  <p className="text-white text-base md:text-lg font-medium">
                    Solo su appuntamento
                  </p>
                  <p className="text-white/45 text-xs mt-1">
                    Verifica disponibilità reale via Skipres
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Come arrivare */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
              Come arrivare
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/95">
              Indicazioni.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <Car size={22} className="text-[#C9A97A] mb-3" />
              <h3 className="text-white font-semibold mb-2">In auto</h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Uscita autostrada Verona Sud, poi seguire indicazioni Santa Lucia.
                Parcheggio in strada o nelle vicinanze.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <Train size={22} className="text-[#C9A97A] mb-3" />
              <h3 className="text-white font-semibold mb-2">Mezzi pubblici</h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Da Stazione Porta Nuova: bus linea 11 o 13 in direzione Santa Lucia.
                Fermata a 5 minuti a piedi dallo studio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTAFinale
        eyebrow="Vuoi venire a trovarmi?"
        title="Prenota una visita in studio."
      />

      <Footer />
      <StickyCTA />
    </main>
  )
}
