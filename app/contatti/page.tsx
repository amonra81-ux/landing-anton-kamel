import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, MessageCircle, Calendar, Clock } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import PageHero from '@/components/PageHero'
import {
  WhatsAppOfficialIcon,
  InstagramOfficialIcon,
  FacebookOfficialIcon,
} from '@/components/BrandIcons'

export const metadata: Metadata = {
  title: 'Contatti — Studio Dr. Anton Kamel Verona',
  description:
    'Studio in Via San Lucillo 16, Verona. WhatsApp, Instagram, prenotazione online Skipres. Anton risponde personalmente in chat.',
  alternates: { canonical: 'https://antonkamel.it/contatti' },
}

const ADDRESS = 'Via San Lucillo 16, 37100 Verona VR'
const MAPS_URL =
  'https://www.google.com/maps/place/DR.+ANTON+KAMEL/@45.4425759,10.9410775,17z'
const WA = 'https://wa.me/393801035896'
const SKIPRES = 'https://skipres.com/antonkamel'

export default function Page() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Contatti"
        title="Studio in Verona."
        subtitle="Via San Lucillo 16. Solo su appuntamento. Anton riceve di persona."
        accent
      />

      {/* Cards canali */}
      <section className="py-10 md:py-16 px-6 bg-[#0a0a0a]">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">

          {/* PRIMARY: prenota online */}
          <Link
            href="/"
            className="group relative md:col-span-2 rounded-2xl border border-[#C9A97A]/40 bg-[#C9A97A]/[0.06] p-6 md:p-8 hover:border-[#C9A97A]/70 hover:bg-[#C9A97A]/[0.1] transition-all"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#C9A97A] text-black shrink-0">
                <Calendar size={26} />
              </span>
              <div className="flex-1">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#C9A97A] uppercase mb-1">
                  Modo più rapido
                </p>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                  Prenota la consulenza online
                </h2>
                <p className="text-white/65 text-sm md:text-base">
                  Calendario reale, conferma immediata.{' '}
                  <span className="text-white/85">20 min · 80 €</span>
                </p>
              </div>
            </div>
          </Link>

          {/* WhatsApp */}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#25D366]/40 transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="shrink-0">
                <WhatsAppOfficialIcon size={28} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/45 mb-1">
                  WhatsApp
                </p>
                <p className="text-white text-base md:text-lg font-medium tabular-nums mb-1">
                  380 103 5896
                </p>
                <p className="text-white/45 text-xs leading-relaxed">
                  Solo messaggi (no chiamate). Per dubbi prima di prenotare.
                </p>
              </div>
            </div>
          </a>

          {/* Studio + maps */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#C9A97A]/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#C9A97A]/10 text-[#C9A97A]">
                <MapPin size={20} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/45 mb-1">
                  Studio
                </p>
                <p className="text-white text-base md:text-lg font-medium mb-1">
                  {ADDRESS}
                </p>
                <p className="text-white/45 text-xs">Apri in Google Maps →</p>
              </div>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/dr.antonlips/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#E4405F]/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="shrink-0">
                <InstagramOfficialIcon size={28} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/45 mb-1">
                  Instagram
                </p>
                <p className="text-white text-base md:text-lg font-medium mb-1">
                  @dr.antonlips
                </p>
                <p className="text-white/45 text-xs">Casi reali, reel, dietro le quinte</p>
              </div>
            </div>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/dott.antonkamel/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#0866FF]/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="shrink-0">
                <FacebookOfficialIcon size={28} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/45 mb-1">
                  Facebook
                </p>
                <p className="text-white text-base md:text-lg font-medium mb-1">
                  Dott. Anton Kamel
                </p>
                <p className="text-white/45 text-xs">Pagina ufficiale studio</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Orari */}
      <section className="py-10 md:py-14 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#C9A97A]/10 text-[#C9A97A]">
                <Clock size={20} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/45 mb-2">
                  Orari studio
                </p>
                <p className="text-white text-base md:text-lg font-medium mb-2">
                  Solo su appuntamento
                </p>
                <p className="text-white/55 text-sm leading-relaxed">
                  Le disponibilità reali sono visibili nel calendario di prenotazione
                  online (Skipres). Per disdette o urgenze: WhatsApp.
                </p>
                <a
                  href={SKIPRES}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-sm text-[#C9A97A] hover:text-[#C9A97A]/80"
                >
                  Apri calendario Skipres →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="py-10 md:py-14 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-white/45 text-sm leading-relaxed flex items-center justify-center gap-2">
            <MessageCircle size={14} className="text-[#25D366]" />
            Anton risponde personalmente su WhatsApp negli orari studio.
          </p>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </main>
  )
}
