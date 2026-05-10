'use client'

import { MapPin, Phone, Clock } from 'lucide-react'
import { useBooking } from './BookingProvider'
import {
  WhatsAppOfficialIcon,
  InstagramOfficialIcon,
  FacebookOfficialIcon,
} from './BrandIcons'

type QuickLink = {
  href: string
  label: string
  bookingTrigger?: boolean
}
const quickLinks: QuickLink[] = [
  { href: '/chi-sono', label: 'Chi sono' },
  { href: '/#trattamenti', label: 'Trattamenti' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/chiamami', label: 'Scrivimi su WhatsApp' },
  { href: '#booking', label: 'Prenota', bookingTrigger: true },
]

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Footer() {
  const { open } = useBooking()

  const handleClick = (link: QuickLink) => {
    if (link.bookingTrigger) {
      open('Footer Prenota')
      return
    }
    if (link.href.startsWith('/')) {
      window.location.assign(`${BASE_PATH}${link.href}`)
      return
    }
    const el = document.querySelector(link.href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-12 md:py-16 px-6 pb-28 md:pb-16">
      <div className="mx-auto max-w-6xl">
        {/* Top grid: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">
          {/* Brand */}
          <div>
            <p className="text-sm font-bold tracking-widest text-white mb-1">DR. ANTON KAMEL</p>
            <p className="text-white/40 text-sm mb-1">Medico chirurgo</p>
            <p className="text-white/40 text-sm mb-4">Specialista in medicina estetica</p>
            <p className="text-white/30 text-sm italic leading-relaxed max-w-xs">
              &ldquo;Risultati naturali. Mai maschere.&rdquo;
            </p>
          </div>

          {/* Studio */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-5">
              Studio
            </p>
            <div className="space-y-3">
              <a
                href="https://www.google.com/maps/place/DR.+ANTON+KAMEL/@45.4425759,10.9410775,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/60 text-sm hover:text-white transition-colors"
              >
                <span className="text-[#C9A97A] shrink-0 mt-0.5"><MapPin size={14} /></span>
                <span>
                  Via San Lucillo 16<br />
                  37100 Verona
                </span>
              </a>
              <a
                href="https://wa.me/393801035896"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/60 text-sm hover:text-white transition-colors"
              >
                <span className="text-[#25D366] shrink-0 mt-0.5"><Phone size={14} /></span>
                <span>
                  <span className="tabular-nums">380 103 5896</span>
                  <br />
                  <span className="text-white/35 text-xs">Solo WhatsApp · no chiamate</span>
                </span>
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <span className="text-[#C9A97A] shrink-0 mt-0.5"><Clock size={14} /></span>
                <span>
                  Aperto su appuntamento<br />
                  <span className="text-white/35 text-xs">Verifica orari su Skipres</span>
                </span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-5">
              Naviga
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link)}
                    className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-5">
              Social
            </p>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/dr.antonlips/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 text-sm hover:text-white transition-colors"
              >
                <span className="shrink-0"><InstagramOfficialIcon size={20} /></span>
                <span>@dr.antonlips</span>
              </a>
              <a
                href="https://www.facebook.com/dott.antonkamel/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 text-sm hover:text-white transition-colors"
              >
                <span className="shrink-0"><FacebookOfficialIcon size={20} /></span>
                <span>Dott. Anton Kamel</span>
              </a>
              <a
                href="https://wa.me/393801035896"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 text-sm hover:text-white transition-colors"
              >
                <span className="shrink-0"><WhatsAppOfficialIcon size={20} /></span>
                <span>WhatsApp</span>
              </a>
              <p className="text-white/35 text-xs leading-relaxed pt-1 max-w-[200px]">
                WhatsApp solo per messaggi (no chiamate). Per prenotazioni usa il calendario.
              </p>
            </div>
          </div>
        </div>

        {/* Compliance medica (Legge Boldi 2018) */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
            Informazioni sanitarie
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1.5 text-white/35 text-xs leading-relaxed">
            <p>
              <span className="text-white/55">Direttore sanitario:</span> Dr. Anton Kamel
            </p>
            <p>
              <span className="text-white/55">Laurea:</span> Medicina e Chirurgia, Univ. Verona (2014)
            </p>
            <p>
              <span className="text-white/55">Master:</span> Medicina Estetica · Padova (2017) + Verona (2019)
            </p>
            <p>
              <span className="text-white/55">Iscrizione Albo Medici:</span>{' '}
              [Verona — n° da fornire]
            </p>
            <p>
              <span className="text-white/55">P. IVA:</span>{' '}
              <span className="tabular-nums">04276600238</span>
            </p>
            <p>
              <span className="text-white/55">C.F.:</span>{' '}
              <span className="tabular-nums">NTNKML83D23Z226B</span>
            </p>
            <p>
              <span className="text-white/55">Federazioni:</span> FMSI
            </p>
            <p className="md:col-span-2">
              <span className="text-white/55">Sede legale:</span> Via Vincenzo Monti 1,
              37015 Sant&apos;Ambrogio di Valpolicella (VR){' '}
              <span className="text-white/30">·</span>{' '}
              <span className="text-white/55">Studio:</span> Via San Lucillo 16, 37100 Verona
            </p>
          </div>
          <p className="text-white/30 text-[11px] mt-3 italic">
            Pubblicità sanitaria informativa ai sensi della L. 145/2018 (Legge di Bilancio 2019,
            art. 1 co. 525) e Codice Deontologico FNOMCeO.
          </p>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} Dr. Anton Kamel. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-4">
              <a href={`${BASE_PATH}/privacy`} className="text-white/30 text-xs hover:text-white/60 transition-colors">
                Privacy Policy
              </a>
              <span className="text-white/20 text-xs">·</span>
              <a href={`${BASE_PATH}/cookie`} className="text-white/30 text-xs hover:text-white/60 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
          <p className="text-white/25 text-xs mt-4 leading-relaxed max-w-3xl">
            Le informazioni presenti in questo sito hanno finalità informative e non sostituiscono
            in alcun modo una visita medica. Le immagini di trattamenti e risultati sono indicative;
            i risultati possono variare in base alle caratteristiche individuali del paziente.
            I trattamenti di medicina estetica sono riservati a soggetti maggiorenni (18+).
          </p>
        </div>
      </div>
    </footer>
  )
}
