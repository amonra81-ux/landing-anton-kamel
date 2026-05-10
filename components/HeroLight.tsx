'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, ChevronDown } from 'lucide-react'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

const trust = [
  { value: '12+', label: 'Anni di esperienza' },
  { value: '1500+', label: 'Pazienti trattati' },
  { value: '4.7', label: '79 recensioni Google', icon: Star },
]

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export default function HeroLight() {
  const handlePrenotaClick = () => {
    window.fbq?.('track', 'InitiateCheckout', {
      content_name: 'Hero CTA',
      content_category: 'Prenotazione',
    })
    const el = document.querySelector('#prenota')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScopriClick = () => {
    const el = document.querySelector('#trattamenti')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]"
    >
      {/* Photo background */}
      <div className="absolute inset-0">
        <Image
          src={`${BASE_PATH}/hero-image.jpg`}
          alt="Medicina estetica Verona — Dr. Anton Kamel"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_22%] md:object-[55%_30%]"
          style={{ filter: 'brightness(0.82) contrast(1.05) saturate(1.05)' }}
        />
        {/* Gradient overlays — più scuri in basso per leggere CTA */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-end px-6 pt-20 pb-20 md:justify-center md:pt-32 md:pb-32">
        <div className="mx-auto max-w-4xl text-center">

          {/* Brand label */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/30 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A97A]" />
            <span className="text-[11px] tracking-[0.2em] text-white/80 uppercase">
              Dr. Anton Kamel · Verona
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.05]"
          >
            Risultati naturali.
            <br />
            <span className="text-[#C9A97A]">Mai maschere.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="mt-6 mx-auto max-w-xl text-base sm:text-lg md:text-xl text-white/80 leading-relaxed"
          >
            Medicina estetica costruita su di te. Filler, botulino, rinofiller
            e trattamenti su misura — con un approccio medico, mai standard.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              onClick={handlePrenotaClick}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#C9A97A] px-8 py-4 text-black font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              style={{ boxShadow: '0 0 30px rgba(201,169,122,0.4)' }}
            >
              Prenota il consulto →
            </button>
            <button
              onClick={handleScopriClick}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 backdrop-blur-md px-8 py-4 text-white font-medium text-base sm:text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 cursor-pointer"
            >
              Vedi trattamenti
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-10"
          >
            {trust.map((t) => (
              <div key={t.label} className="flex flex-col items-center text-center">
                <div className="flex items-center gap-1.5">
                  {t.icon && <t.icon size={18} className="fill-[#C9A97A] text-[#C9A97A]" />}
                  <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                    {t.value}
                  </span>
                </div>
                <span className="mt-1 text-[11px] sm:text-xs uppercase tracking-wider text-white/55">
                  {t.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none"
      >
        <span className="text-[10px] tracking-widest uppercase text-white/40">
          Scorri
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
