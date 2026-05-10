'use client'

import { motion } from 'framer-motion'

interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  accent?: boolean
}

export default function PageHero({ eyebrow, title, subtitle, accent = false }: Props) {
  return (
    <section className="relative pt-28 md:pt-32 pb-12 md:pb-16 px-6 bg-[#0a0a0a] overflow-hidden">
      {accent && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A97A] opacity-[0.04] blur-[160px] rounded-full pointer-events-none" />
      )}
      <div className="relative mx-auto max-w-4xl text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white/95 leading-[1.05]"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-white/65 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
