'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Heart, Sparkles, Activity, Wand2, Waves, ArrowUpRight, Calendar } from 'lucide-react'
import Link from 'next/link'
import { useBooking } from './BookingProvider'

const categories = [
  {
    slug: 'labbra',
    label: 'Labbra',
    icon: Heart,
    teaser: 'Filler labbra Anton Lips™ + Russian Lips. Correzione lavori altri.',
  },
  {
    slug: 'viso',
    label: 'Viso e profilo',
    icon: Wand2,
    teaser: 'Zigomi, mento, mandibola, armonizzazione facciale, polilattato.',
  },
  {
    slug: 'rughe',
    label: 'Rughe e bruxismo',
    icon: Activity,
    teaser: 'Tossina botulinica avanzata. Espressioni naturali preservate.',
  },
  {
    slug: 'pelle',
    label: 'Qualità della pelle',
    icon: Sparkles,
    teaser: 'Biorivitalizzazione, skinbooster, peeling. Texture luminosa.',
  },
  {
    slug: 'corpo',
    label: 'Collo e corpo',
    icon: Waves,
    teaser: 'Nefertiti collo, cellulite, adiposità, sudorazione eccessiva.',
  },
]

export default function Trattamenti() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const rawY = useTransform(scrollYProgress, [0, 1], [20, -20])
  const titleY = useSpring(rawY, { stiffness: 60, damping: 20 })
  const { open } = useBooking()

  return (
    <section
      ref={sectionRef}
      id="trattamenti"
      className="bg-[#0a0a0a] py-16 sm:py-24 md:py-32 px-6"
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
            Cosa faccio
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white/95 mb-4 leading-[1.05]">
            Trattamenti.
          </h2>
          <p className="text-white/55 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Tocca una categoria per vedere i trattamenti dedicati. Si decide
            insieme in consulenza.
          </p>
        </motion.div>

        {/* Lista verticale stile accordion ma cliccabile su pagine dedicate */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden divide-y divide-white/10">
          {categories.map((cat, ci) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: ci * 0.05 }}
              >
                <Link
                  href={`/trattamenti/${cat.slug}`}
                  className="group w-full flex items-start gap-4 px-5 sm:px-7 py-5 md:py-6 text-left transition-colors hover:bg-[#C9A97A]/[0.06] cursor-pointer"
                >
                  <span className="shrink-0 mt-0.5 flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] text-white/55 group-hover:border-[#C9A97A]/40 group-hover:bg-[#C9A97A]/15 group-hover:text-[#C9A97A] transition-colors">
                    <Icon size={18} />
                  </span>

                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-lg md:text-xl text-white/90 group-hover:text-white leading-tight transition-colors">
                      {cat.label}
                    </p>
                    <p className="text-white/45 text-xs md:text-sm mt-0.5 leading-relaxed">
                      {cat.teaser}
                    </p>
                  </div>

                  <span className="shrink-0 mt-2 text-white/30 group-hover:text-[#C9A97A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    <ArrowUpRight size={18} />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* CTA finale: niente spiegazioni, modal Skipres bottom-sheet */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 md:mt-12 text-center"
        >
          <p className="text-white/55 text-sm md:text-base mb-5 max-w-md mx-auto">
            Non sai quale fa per te? Lo decidiamo insieme — consulenza valutativa
            <span className="text-white/85"> 20 min · 80 €</span>.
          </p>
          <button
            onClick={() => open('Trattamenti home CTA')}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A97A] px-8 py-4 text-black font-bold text-base hover:scale-[1.03] active:scale-[0.98] transition-transform cursor-pointer"
            style={{ boxShadow: '0 0 30px rgba(201,169,122,0.35)' }}
          >
            <Calendar size={16} />
            Prenota la consulenza
          </button>
        </motion.div>
      </div>
    </section>
  )
}
