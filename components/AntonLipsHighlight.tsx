'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

/**
 * Sezione highlight Anton Lips™ — differenziatore unico, va enfatizzato.
 * Sviluppata in 12 anni pratica clinica, oggi insegnata in academy.
 */
export default function AntonLipsHighlight() {
  return (
    <section
      id="anton-lips"
      className="relative bg-[#0a0a0a] border-t border-white/10 px-6 py-16 md:py-24 overflow-hidden"
    >
      {/* Subtle gold radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C9A97A]/[0.06] blur-[160px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-3xl"
      >
        <div className="rounded-3xl border border-[#C9A97A]/25 bg-gradient-to-br from-[#C9A97A]/[0.06] via-white/[0.02] to-white/[0.03] backdrop-blur-sm p-8 md:p-12 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A97A]/15 border border-[#C9A97A]/40 px-3 py-1 mb-5">
            <Sparkles size={11} className="text-[#C9A97A]" />
            <span className="text-[10px] tracking-wider text-[#C9A97A] font-semibold uppercase">
              Tecnica firmata
            </span>
          </div>

          {/* Brand mark */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05]">
            <span className="bg-gradient-to-r from-[#C9A97A] via-[#E5C998] to-[#C9A97A] bg-clip-text text-transparent">
              Anton Lips™
            </span>
          </h2>
          <p className="mt-2 text-white/55 text-sm uppercase tracking-[0.25em]">
            Filler labbra · approccio proprietario
          </p>

          {/* Pitch */}
          <p className="mt-6 text-white/80 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Tecnica proprietaria sviluppata da Dr. Anton Kamel in 12 anni di pratica clinica.
            Volume calibrato sulle proporzioni naturali del viso — niente effetto papera,
            niente migrazioni.
          </p>

          {/* Mini-list */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/55">
            <span>· Volume naturale</span>
            <span>· Forma simmetrica</span>
            <span>· Durata 9–14 mesi</span>
          </div>

          {/* CTA */}
          <Link
            href="/tecniche/anton-lips"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#C9A97A]/40 bg-[#C9A97A]/10 px-6 py-3 text-[#C9A97A] font-semibold text-sm hover:bg-[#C9A97A]/15 transition-colors"
          >
            Scopri la tecnica
            <ArrowRight size={14} />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
