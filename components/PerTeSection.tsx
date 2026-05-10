'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, HeartHandshake, Wrench, Sparkles } from 'lucide-react'

const personas = [
  {
    icon: HeartHandshake,
    href: '/per-te/prima-volta',
    eyebrow: 'Prima volta',
    title: 'Ho paura.',
    desc:
      'Mai fatto trattamenti estetici. Paura aghi, di esagerare, del giudizio. Voglio capire prima.',
  },
  {
    icon: Wrench,
    href: '/per-te/correzione',
    eyebrow: 'Correzione',
    title: 'Filler che non mi piace.',
    desc:
      'Ho fatto trattamenti altrove con risultato deludente. Migrazione, asimmetria, troppo volume.',
  },
  {
    icon: Sparkles,
    href: '/per-te/armonizzazione',
    eyebrow: 'Armonizzazione',
    title: 'Voglio un percorso completo.',
    desc:
      'Non un singolo ritocco — un piano integrato 6-12 mesi su zigomi, mento, mandibola, labbra.',
  },
]

export default function PerTeSection() {
  return (
    <section className="relative bg-[#0a0a0a] py-16 sm:py-24 md:py-32 px-6 border-t border-white/10 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
            Per chi è questo studio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/95">
            In quale ti riconosci?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {personas.map((p, i) => (
            <motion.div
              key={p.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                href={p.href}
                className="group block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-[#C9A97A]/40 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#C9A97A]/10 text-[#C9A97A] group-hover:bg-[#C9A97A]/20 transition-colors">
                    <p.icon size={22} />
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-white/30 group-hover:text-[#C9A97A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-[#C9A97A]/70 mb-2">
                  {p.eyebrow}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white/95 mb-3 leading-tight">
                  {p.title}
                </h3>
                <p className="text-white/55 text-sm md:text-base leading-relaxed">{p.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
