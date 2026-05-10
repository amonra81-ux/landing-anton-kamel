'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Heart, Sparkles, Activity, Wand2, ArrowUpRight, Calendar } from 'lucide-react'
import Link from 'next/link'
import { useBooking } from './BookingProvider'

const categories = [
  {
    slug: 'labbra',
    label: 'Labbra',
    icon: Heart,
    teaser: 'Filler labbra Anton Lips™ + Russian Lips. Correzione lavori altri.',
    items: ['Anton Lips Technique™', 'Russian Lips', 'Correzione filler migrato'],
  },
  {
    slug: 'viso',
    label: 'Viso e profilo',
    icon: Wand2,
    teaser: 'Zigomi, mento, mandibola, rinofiller. Armonizzazione integrale.',
    items: ['Filler viso', 'Rinofiller', 'Profilazione facciale', 'Fili di lifting'],
  },
  {
    slug: 'rughe',
    label: 'Rughe e bruxismo',
    icon: Activity,
    teaser: 'Tossina botulinica avanzata. Espressioni naturali preservate.',
    items: ['Botulino rughe', 'Botulino massetere (jaw slimming)', 'Trattamento occhiaie'],
  },
  {
    slug: 'pelle',
    label: 'Qualità della pelle',
    icon: Sparkles,
    teaser: 'Biorivitalizzazione, skinbooster, peeling. Texture luminosa.',
    items: ['Biorivitalizzazione', 'Skinbooster', 'Peeling chimico', 'Acne e cicatrici'],
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
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
            Cosa faccio
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white/95 mb-4 leading-[1.05]">
            Trattamenti.
          </h2>
          <p className="text-white/55 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Ogni trattamento si decide insieme in consulenza. Esplora per area
            di intervento.
          </p>
        </motion.div>

        {/* 4 cards categoria */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {categories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/trattamenti/${cat.slug}`}
                  className="group block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7 hover:border-[#C9A97A]/40 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-5">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#C9A97A]/10 text-[#C9A97A] group-hover:bg-[#C9A97A]/20 transition-colors">
                      <Icon size={22} />
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-white/30 group-hover:text-[#C9A97A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white/95 mb-2 leading-tight">
                    {cat.label}
                  </h3>
                  <p className="text-white/55 text-sm md:text-base leading-relaxed mb-4">
                    {cat.teaser}
                  </p>

                  {/* Item chips */}
                  <ul className="flex flex-wrap gap-1.5">
                    {cat.items.slice(0, 3).map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center text-[11px] text-white/55 bg-white/[0.04] border border-white/10 rounded-full px-2.5 py-0.5"
                      >
                        {item}
                      </li>
                    ))}
                    {cat.items.length > 3 && (
                      <li className="inline-flex items-center text-[11px] text-[#C9A97A]/70 bg-[#C9A97A]/[0.06] border border-[#C9A97A]/20 rounded-full px-2.5 py-0.5">
                        +{cat.items.length - 3}
                      </li>
                    )}
                  </ul>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* CTA finale unico */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-white/55 text-sm md:text-base mb-5 max-w-md mx-auto">
            Non sai quale fa per te? Lo decidiamo insieme — consulenza valutativa
            <span className="text-white/85"> 20 min · 80€</span>.
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
