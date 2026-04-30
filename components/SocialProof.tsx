'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

// TODO: sostituisci con le recensioni reali da Google My Business
const testimonials = [
  {
    name: 'Valentina M.',
    treatment: 'Filler Labbra',
    text: 'Prima ero terrorizzata dall\'idea. Anton mi ha spiegato tutto con calma, senza fretta. Risultato super naturale, proporzionato. Le labbra sembrano le mie ma più definite.',
    rating: 5,
  },
  {
    name: 'Giorgia T.',
    treatment: 'Rinofiller',
    text: 'Avevo una piccola gobba che mi ha sempre un po\' disturbato. In 20 minuti, senza dolore, risolta. Non sembra rifatto per niente. Sono contentissima del risultato.',
    rating: 5,
  },
  {
    name: 'Alessia R.',
    treatment: 'Tossina Botulinica',
    text: 'Terza volta da Anton. Il risultato è sempre naturale, il viso rilassato senza quell\'effetto congelato che temevo. Studio pulitissimo, professionalità massima.',
    rating: 5,
  },
  {
    name: 'Federica C.',
    treatment: 'Biorivitalizzazione',
    text: 'Pelle spenta e disidratata dopo l\'inverno. Dopo il trattamento, letteralmente luminosa. Il dottore ha un approccio molto medico: spiega tutto, non spinge su trattamenti inutili.',
    rating: 5,
  },
  {
    name: 'Martina B.',
    treatment: 'Armonizzazione Facciale',
    text: 'Piano completo: zigomi, mento e labbra. Risultato armonioso e naturale. Non sembro operata, sembro riposata e in forma. Migliore investimento degli ultimi anni.',
    rating: 5,
  },
  {
    name: 'Chiara F.',
    treatment: 'Botulino Massetere',
    text: 'Bruxismo da anni. Con il botulino nel massetere le tensioni sono sparite e l\'ovale del viso si è assottigliato. Effetto immediato. Tornerò sicuramente.',
    rating: 5,
  },
]

const VISIBLE = 3
const AUTO_INTERVAL = 4000

export default function SocialProof() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [direction, setDirection] = useState(1)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const total = testimonials.length

  const go = useCallback((dir: 1 | -1) => {
    setDirection(dir)
    setCurrent((c) => (c + dir + total) % total)
  }, [total])

  const goTo = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }, [current])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => go(1), AUTO_INTERVAL)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused, go])

  // Indici delle 3 card visibili (con wrap)
  const visibleIndices = Array.from({ length: VISIBLE }, (_, i) => (current + i) % total)

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -80 : 80 }),
  }

  return (
    <section
      className="py-24 bg-[#0a0a0a] border-t border-white/10 relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A97A] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10 px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Cosa dicono i pazienti.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            Risultati reali e storie vere.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Arrow left */}
          <button
            onClick={() => { go(-1); setPaused(true) }}
            aria-label="Recensione precedente"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0a0a0a] text-white/60 hover:border-[#C9A97A]/50 hover:text-[#C9A97A] transition-all duration-200 cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Cards */}
          <div className="overflow-hidden px-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AnimatePresence mode="popLayout" custom={direction}>
                {visibleIndices.map((idx) => {
                  const t = testimonials[idx]
                  return (
                    <motion.div
                      key={`${idx}-${current}`}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 flex flex-col hover:bg-white/[0.05] hover:border-[#C9A97A]/30 transition-colors duration-300 h-[280px]"
                    >
                      <Quote className="absolute top-6 right-6 text-white/10 w-7 h-7" />

                      <div className="flex gap-1 mb-5">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} size={14} className="fill-[#C9A97A] text-[#C9A97A]" />
                        ))}
                      </div>

                      <p className="text-white/75 text-sm leading-relaxed flex-grow">
                        &ldquo;{t.text}&rdquo;
                      </p>

                      <div className="mt-auto border-t border-white/10 pt-4">
                        <p className="text-white font-medium text-sm">{t.name}</p>
                        <p className="text-[#C9A97A] text-xs mt-0.5">{t.treatment}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Arrow right */}
          <button
            onClick={() => { go(1); setPaused(true) }}
            aria-label="Recensione successiva"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0a0a0a] text-white/60 hover:border-[#C9A97A]/50 hover:text-[#C9A97A] transition-all duration-200 cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots + mobile arrows */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={() => { go(-1); setPaused(true) }}
            aria-label="Precedente"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/60 hover:border-[#C9A97A]/50 hover:text-[#C9A97A] transition-all cursor-pointer"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); setPaused(true) }}
                aria-label={`Vai alla recensione ${i + 1}`}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? 'w-6 h-2 bg-[#C9A97A]'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => { go(1); setPaused(true) }}
            aria-label="Successiva"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/60 hover:border-[#C9A97A]/50 hover:text-[#C9A97A] transition-all cursor-pointer"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  )
}
