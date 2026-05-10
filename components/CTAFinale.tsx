'use client'

import Link from 'next/link'
import { Calendar, Phone } from 'lucide-react'
import { useBooking } from './BookingProvider'

interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
}

export default function CTAFinale({ eyebrow = 'Pronta?', title, subtitle }: Props) {
  const { open } = useBooking()

  return (
    <section className="py-14 md:py-20 px-6 bg-[#0a0a0a] border-t border-white/10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
          {eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/95 mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="inline-flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={() => open(`CTA Finale: ${title}`)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A97A] px-8 py-4 text-black font-bold text-base hover:scale-[1.03] active:scale-[0.98] transition-transform cursor-pointer"
            style={{ boxShadow: '0 0 30px rgba(201,169,122,0.35)' }}
          >
            <Calendar size={16} />
            Prenota consulto
          </button>
          <Link
            href="/chiamami"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-white font-medium text-base hover:bg-white/10 transition-colors"
          >
            <Phone size={16} />
            Ti richiamo io
          </Link>
        </div>
      </div>
    </section>
  )
}
