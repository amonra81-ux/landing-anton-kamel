'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, Calendar } from 'lucide-react'
import { useBooking } from './BookingProvider'

// Recensioni reali da Google My Business (https://g.co/kgs/AntonKamel)
const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/place/DR.+ANTON+KAMEL/@45.4425759,10.9410775,17z'
const TOTAL_REVIEWS = 79
const AVG_RATING = 4.7

const testimonials = [
  {
    name: 'Aurora G.',
    age: 28,
    city: 'Verona',
    treatment: 'Prima volta filler labbra',
    story: 'Aveva paura. Si è affidata. Ora lo rifarebbe.',
    text:
      'È la prima volta che facevo il filler e mi sono affidata a lui. Tornassi indietro lo sceglierei ancora: super alla mano, disponibile e paziente. Lo consiglio davvero.',
    rating: 5,
    when: '2 mesi fa',
  },
  {
    name: 'Vanessa',
    age: 35,
    city: 'Vicenza',
    treatment: 'Correzione filler migrato',
    story: 'Aveva migrazioni dopo anni di filler altrove. Risultato finale: labbra naturali come mai prima.',
    text:
      'Dopo anni di filler avevo evidenti migrazioni. Anton ha sciolto tutto con jaluronidasi, due settimane dopo abbiamo rifatto. Ora ho labbra piatte e naturali come mai prima. Top.',
    rating: 5,
    when: '6 mesi fa',
  },
  {
    name: 'Cristina Z.',
    age: 41,
    city: 'Treviso',
    treatment: 'Filler Labbra · cliente dal 2021',
    story: 'Cliente dal 2021. Fa 1h30 di strada per venire a Verona.',
    text:
      'Sono sua cliente dal 2021. Faccio più di un\'ora e mezza di strada da Treviso per venire a Verona, e continuo senza esitazione: la fiducia che ho nel suo lavoro è totale.',
    rating: 5,
    when: '2 mesi fa',
  },
  {
    name: 'Vanessa S.',
    age: 38,
    city: 'Verona',
    treatment: 'Filler Labbra + Botox · 3 anni',
    story: '3 anni di trattamenti combinati. Risultato continuativo nel tempo.',
    text:
      'Migliore dottore di Verona. Sono tre anni che mi esegue il filler labbra e mi ha cambiato il viso. Settimana scorsa abbiamo ripreso il Botox: espressioni più rilassate, pelle più giovane.',
    rating: 5,
    when: '2 mesi fa',
  },
  {
    name: 'Sara D.',
    age: 32,
    city: 'Verona',
    treatment: 'Filler Labbra · cliente dal 2023',
    story: '3 trattamenti, sempre lo stesso medico.',
    text:
      'Professionalità, naturalezza e fiducia totale. Dopo tre trattamenti di filler labbra confermo che non cambierei professionista per nulla al mondo. Sa valorizzare i lineamenti senza stravolgerli.',
    rating: 5,
    when: '2 mesi fa',
  },
  {
    name: 'Alice C.',
    age: 36,
    city: 'Padova',
    treatment: 'Percorso continuativo',
    story: 'Trattamento dopo trattamento, non solo tecnica — relazione.',
    text:
      'Prima di essere un dottore è una persona d\'oro con grande umanità. Seduta dopo seduta sta riportando le mie labbra a uno stato che pensavo non fosse più possibile. Grato.',
    rating: 5,
    when: '5 mesi fa',
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
  const { open } = useBooking()

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
      className="py-16 sm:py-20 md:py-24 bg-[#0a0a0a] border-t border-white/10 relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A97A] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10 px-6">
        {/* Header */}
        <div className="mb-10 md:mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Cosa dicono i pazienti.
          </motion.h2>

          {/* Google rating badge */}
          <motion.a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 hover:border-[#C9A97A]/40 hover:bg-white/[0.07] transition-colors"
          >
            <span className="text-2xl font-bold text-white tabular-nums">{AVG_RATING}</span>
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={
                    i < Math.round(AVG_RATING)
                      ? 'fill-[#C9A97A] text-[#C9A97A]'
                      : 'text-white/20'
                  }
                />
              ))}
            </span>
            <span className="text-sm text-white/65">
              su {TOTAL_REVIEWS} recensioni Google
            </span>
          </motion.a>
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
                      className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-7 flex flex-col hover:bg-white/[0.05] hover:border-[#C9A97A]/30 transition-colors duration-300 h-[360px]"
                    >
                      <Quote className="absolute top-6 right-6 text-white/10 w-7 h-7" />

                      <div className="flex gap-1 mb-3">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} size={14} className="fill-[#C9A97A] text-[#C9A97A]" />
                        ))}
                      </div>

                      {/* Story line — Yasmin storyfication */}
                      <p className="text-[#C9A97A]/85 text-xs italic leading-relaxed mb-3">
                        {t.story}
                      </p>

                      <p className="text-white/75 text-sm leading-relaxed flex-grow">
                        &ldquo;{t.text}&rdquo;
                      </p>

                      <div className="mt-auto border-t border-white/10 pt-4">
                        <div className="flex items-baseline justify-between gap-3">
                          <p className="text-white font-medium text-sm truncate">
                            {t.name}, {t.age} anni
                          </p>
                          <p className="text-white/30 text-xs shrink-0">{t.when}</p>
                        </div>
                        <p className="text-white/40 text-[11px] mt-0.5">{t.city}</p>
                        <p className="text-[#C9A97A] text-xs mt-1">{t.treatment}</p>
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

        {/* Leggi tutte + Mid-CTA */}
        <div className="mt-10 flex flex-col items-center gap-6">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-[#C9A97A] transition-colors"
          >
            Leggi tutte le {TOTAL_REVIEWS} recensioni su Google
            <ChevronRight size={14} />
          </a>

          {/* Mid-page CTA dopo testimonianze */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 flex flex-col items-center gap-2 rounded-2xl border border-[#C9A97A]/25 bg-[#C9A97A]/[0.05] px-6 py-5"
          >
            <p className="text-white/70 text-sm text-center max-w-md">
              Prenota anche tu · posti limitati questo mese
            </p>
            <button
              onClick={() => open('SocialProof Mid CTA')}
              className="inline-flex items-center gap-2 rounded-full bg-[#C9A97A] px-6 py-3 text-black font-bold text-sm hover:scale-[1.03] active:scale-[0.98] transition-transform cursor-pointer"
            >
              <Calendar size={14} />
              Prenota la consulenza · 80 €
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
