'use client'

import { MapPin, Clock } from 'lucide-react'
const ADDRESS = 'Via S. Lucillo, 16 — Verona'
const MAPS_URL =
  'https://www.google.com/maps/place/DR.+ANTON+KAMEL/@45.4425759,10.9410775,17z'

export default function InfoStrip() {
  return (
    <section
      aria-label="Informazioni studio"
      className="relative bg-[#0a0a0a] border-y border-white/10"
    >
      <div className="mx-auto max-w-6xl px-6 py-5 md:py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-center sm:text-left">

          {/* Indirizzo */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start gap-2.5 group"
          >
            <span className="shrink-0 text-[#C9A97A]">
              <MapPin size={16} />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-widest text-white/40 leading-none mb-0.5">
                Studio
              </p>
              <p className="text-sm text-white/85 group-hover:text-[#C9A97A] transition-colors truncate">
                {ADDRESS}
              </p>
            </div>
          </a>

          {/* Orari */}
          <div className="flex items-center justify-center sm:justify-start gap-2.5 sm:border-l sm:border-white/10 sm:pl-6">
            <span className="shrink-0 text-[#C9A97A]">
              <Clock size={16} />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-widest text-white/40 leading-none mb-0.5">
                Aperto oggi
              </p>
              <p className="text-sm text-white/85">Fino alle 17:30</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
