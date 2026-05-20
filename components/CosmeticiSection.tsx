'use client'

import { motion } from 'framer-motion'
import { Package, ArrowUpRight } from 'lucide-react'
import { InstagramOfficialIcon } from './BrandIcons'

/**
 * Experts Italy — linea cosmetici di Anton, riservata ai medici partner.
 * Anton CEO della linea.
 */
export default function CosmeticiSection() {
  return (
    <section
      id="cosmetici"
      className="relative bg-[#0a0a0a] border-t border-white/10 px-6 py-14 md:py-20 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C9A97A]/[0.04] blur-[140px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-4xl"
      >
        <div className="text-center mb-8">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
            Linea cosmetici · per medici
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/95 mb-4 leading-tight">
            Experts Italy.
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Linea di cosmetici professionali fondata e diretta dal Dr. Anton Kamel,
            distribuita ad altri medici e centri estetici. Selezione di prodotti pensati
            per protocolli di studio e home-care post-trattamento.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-[#C9A97A]/40 bg-[#C9A97A]/10 text-[#C9A97A]">
              <Package size={18} />
            </span>
            <div>
              <p className="text-white/90 font-semibold text-sm sm:text-base">
                Catalogo prodotti + informazioni B2B
              </p>
              <p className="text-white/50 text-xs sm:text-sm mt-0.5">
                Riservato a medici e operatori del settore.
              </p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/experts.italy"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full border border-[#C9A97A]/40 bg-[#C9A97A]/10 px-5 py-2.5 text-[#C9A97A] font-semibold text-sm hover:bg-[#C9A97A]/15 transition-colors"
          >
            <InstagramOfficialIcon size={14} />
            @experts.italy
            <ArrowUpRight size={14} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
