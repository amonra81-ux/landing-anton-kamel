'use client'

import { motion } from 'framer-motion'
import { GraduationCap, ArrowUpRight } from 'lucide-react'
import { InstagramOfficialIcon } from './BrandIcons'

/**
 * Global Experts Academy — sezione formazione per medici.
 * Anton CEO + professore a contratto Università di Verona.
 */
export default function AcademySection() {
  return (
    <section
      id="academy"
      className="relative bg-[#0a0a0a] border-t border-white/10 px-6 py-14 md:py-20 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C9A97A]/[0.05] blur-[160px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-4xl"
      >
        <div className="text-center mb-8 md:mb-10">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
            Formazione · per medici
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/95 mb-4 leading-tight">
            Global Experts Academy.
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Dr. Anton Kamel è CEO di Global Experts (Verona + Dubai) e{' '}
            <span className="text-white/85">professore a contratto presso l&apos;Università di Verona</span>.
            In Academy insegna ad altri medici botox, biorivitalizzazione e tecniche labbra.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
          {[
            { label: 'Botox avanzato', desc: 'Tecnica selettiva, jaw slimming, Nefertiti' },
            { label: 'Biorivitalizzazione', desc: 'Protocolli stagionali, skinbooster' },
            { label: 'Labbra', desc: 'Anton Lips Technique™ + Russian Lips' },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap size={16} className="text-[#C9A97A]" />
                <p className="text-white/90 font-semibold text-sm">{m.label}</p>
              </div>
              <p className="text-white/50 text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-[#C9A97A]/25 bg-[#C9A97A]/[0.05] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-white/85 text-sm sm:text-base font-semibold">
              Ogni percorso formativo viene personalizzato in base all&apos;esperienza del medico.
            </p>
            <p className="text-white/50 text-xs sm:text-sm mt-1">
              Per info iscrizioni e calendario corsi consulta i canali ufficiali.
            </p>
          </div>
          <a
            href="https://www.instagram.com/global.experts.academy"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#C9A97A] px-5 py-2.5 text-black font-bold text-sm hover:scale-[1.03] active:scale-[0.98] transition-transform"
          >
            <InstagramOfficialIcon size={14} />
            @global.experts.academy
            <ArrowUpRight size={14} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
