'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

/**
 * Highlight Anton Lips™ — 3 righe, differenziatore proprietario.
 * Inserito dopo Trattamenti come da brief P10.
 */
export default function AntonLipsHighlight() {
  return (
    <section
      id="anton-lips"
      className="relative bg-[#0a0a0a] border-t border-white/10 px-6 py-12 md:py-16 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C9A97A]/[0.05] blur-[140px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A97A]/15 border border-[#C9A97A]/40 px-3 py-1 mb-4">
          <Sparkles size={11} className="text-[#C9A97A]" />
          <span className="text-[10px] tracking-wider text-[#C9A97A] font-semibold uppercase">
            Tecnica firmata
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
          <span className="bg-gradient-to-r from-[#C9A97A] via-[#E5C998] to-[#C9A97A] bg-clip-text text-transparent">
            Anton Lips™
          </span>
          <span className="text-white/85"> — tecnica proprietaria.</span>
        </h2>

        <p className="mt-4 text-white/65 text-base sm:text-lg leading-relaxed">
          Sviluppata in 12 anni di pratica su centinaia di labbra.
          <br />
          Risultato: naturale anche da vicino.
        </p>

        <Link
          href="/tecniche/anton-lips"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#C9A97A]/40 bg-[#C9A97A]/10 px-5 py-2.5 text-[#C9A97A] font-semibold text-sm hover:bg-[#C9A97A]/15 transition-colors"
        >
          Scopri la tecnica
          <ArrowRight size={13} />
        </Link>
      </motion.div>
    </section>
  )
}
