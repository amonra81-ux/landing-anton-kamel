'use client'

import { motion } from 'framer-motion'
import { Award, ArrowUpRight } from 'lucide-react'

/**
 * Network strip compatto — social proof autorevolezza
 * (sostituisce sezione full-page con globo che generava confusione paziente B2C)
 */
export default function GlobalAcademy() {
  return (
    <section
      id="academy"
      className="relative bg-[#0a0a0a] border-t border-white/10 px-6 py-10 md:py-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 sm:px-7 py-5">
          {/* Left: icon + claim */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-[#C9A97A]/40 bg-[#C9A97A]/10 text-[#C9A97A]">
              <Award size={18} />
            </span>
            <div className="text-center sm:text-left">
              <p className="text-white/90 text-sm sm:text-base font-semibold leading-tight">
                Parte del network <span className="text-[#C9A97A]">Global Experts Academy</span>
              </p>
              <p className="text-white/50 text-xs sm:text-sm mt-1 leading-relaxed">
                Confronto clinico continuo con medici di riferimento in Italia, Egitto, Albania ·
                tecniche sempre aggiornate
              </p>
            </div>
          </div>

          {/* Right: subtle link */}
          <a
            href="https://www.instagram.com/dr.antonlips/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white/55 hover:text-[#C9A97A] transition-colors"
          >
            Vedi su Instagram
            <ArrowUpRight size={13} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
