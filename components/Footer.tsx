'use client'

import { MapPin, Phone, Clock } from 'lucide-react'

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function WhatsappIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

const quickLinks = [
  { href: '/chi-sono', label: 'Chi sono', external: true },
  { href: '/#trattamenti', label: 'Trattamenti', external: true },
  { href: '/#faq', label: 'FAQ', external: true },
  { href: '/chiamami', label: 'Ti richiamo io', external: true },
  { href: '/#prenota', label: 'Prenota', external: true },
]

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Footer() {
  const handleClick = (href: string) => {
    if (href.startsWith('/#')) {
      // Cross-page hash navigation
      window.location.assign(`${BASE_PATH}${href}`)
      return
    }
    if (href.startsWith('/')) {
      window.location.assign(`${BASE_PATH}${href}`)
      return
    }
    const el = document.querySelector(href)
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
                href="tel:+393801035896"
                className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors tabular-nums"
              >
                <span className="text-[#C9A97A] shrink-0"><Phone size={14} /></span>
                <span>380 103 5896</span>
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
                    onClick={() => handleClick(link.href)}
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
                <span className="text-[#C9A97A] shrink-0"><InstagramIcon size={18} /></span>
                <span>@dr.antonlips</span>
              </a>
              <a
                href="https://wa.me/393801035896"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 text-sm hover:text-white transition-colors"
              >
                <span className="text-[#C9A97A] shrink-0"><WhatsappIcon size={18} /></span>
                <span>WhatsApp</span>
              </a>
              <p className="text-white/35 text-xs leading-relaxed pt-1 max-w-[180px]">
                WhatsApp solo per disdette o info su appuntamenti già prenotati.
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
              <span className="text-white/55">Iscrizione Albo Medici:</span> [VERONA — n° da verificare]
            </p>
            <p className="md:col-span-2">
              <span className="text-white/55">P.IVA / C.F.:</span> [DA INSERIRE]
              {' · '}
              <span className="text-white/55">Federazioni:</span> FMSI
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
          </p>
        </div>
      </div>
    </footer>
  )
}
