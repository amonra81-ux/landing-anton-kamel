'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const trattamenti = [
  {
    nome: 'Consulto / Prima visita',
    descrizione: 'Valutazione completa del viso, ascolto delle tue esigenze e piano di trattamento personalizzato.',
    durata: '45–60 min',
  },
  {
    nome: 'Filler labbra',
    descrizione: 'Volume, definizione e simmetria con acido ialuronico. Risultato naturale e proporzionato.',
    durata: '30–45 min',
  },
  {
    nome: 'Filler viso (zigomi, mento, mandibola)',
    descrizione: 'Armonizzazione e definizione dei volumi facciali per un effetto lifting non chirurgico.',
    durata: '45–60 min',
  },
  {
    nome: 'Rinofiller',
    descrizione: 'Correzione di gobba, punta o asimmetrie nasali senza chirurgia. Risultato immediato.',
    durata: '20–30 min',
  },
  {
    nome: 'Tossina botulinica (rughe frontali, zampe di gallina, glabella)',
    descrizione: 'Distensione delle rughe dinamiche mantenendo naturalezza delle espressioni.',
    durata: '20–30 min',
  },
  {
    nome: 'Botulino massetere (bruxismo / jaw slimming)',
    descrizione: 'Riduzione della tensione mascellare e rimodellamento dell\'ovale del viso.',
    durata: '20–30 min',
  },
  {
    nome: 'Biorivitalizzazione / Biostimolazione',
    descrizione: 'Idratazione profonda, rimpolpamento e miglioramento della qualità cutanea.',
    durata: '30–45 min',
  },
  {
    nome: 'Fili di lifting riassorbibili',
    descrizione: 'Tensore immediato con stimolazione naturale del collagene. Effetto durativo 12–18 mesi.',
    durata: '60–90 min',
  },
  {
    nome: 'Trattamento occhiaie',
    descrizione: 'Riduzione delle occhiaie e borse con filler specifici per la zona perioculare.',
    durata: '30–45 min',
  },
  {
    nome: 'Trattamento acne e cicatrici',
    descrizione: 'Protocolli combinati per migliorare la texture cutanea e ridurre i segni dell\'acne.',
    durata: '45–60 min',
  },
  {
    nome: 'Skinbooster',
    descrizione: 'Microiniezioni di acido ialuronico per una pelle luminosa, idratata e tonica.',
    durata: '30–45 min',
  },
  {
    nome: 'Peeling chimico',
    descrizione: 'Rinnovamento cellulare superficiale e profondo per uniformare il colorito e la texture.',
    durata: '30–45 min',
  },
  {
    nome: 'Profilazione del viso (armonizzazione facciale)',
    descrizione: 'Piano di trattamento completo e integrato per equilibrare le proporzioni del viso.',
    durata: '60–90 min',
  },
]

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

import { useBooking } from './BookingProvider'

export default function Trattamenti() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const rawY = useTransform(scrollYProgress, [0, 1], [20, -20])
  const titleY = useSpring(rawY, { stiffness: 60, damping: 20 })
  const { open } = useBooking()

  const handlePrenotaClick = (trattamento: string) => {
    window.fbq?.('track', 'ViewContent', {
      content_name: trattamento,
      content_category: 'Trattamento',
    })
    open(`Trattamento: ${trattamento}`)
  }

  return (
    <section ref={sectionRef} id="trattamenti" className="bg-[#0a0a0a] py-16 sm:py-24 md:py-32 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white/90 mb-4">
            I trattamenti.
          </h2>
          <p className="text-white/60 text-lg">
            Soluzioni personalizzate per ogni esigenza estetica.
          </p>
        </motion.div>

        {/* List */}
        <div>
          {trattamenti.map((t, i) => (
            <motion.div
              key={t.nome}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="border-b border-white/10 last:border-b-0"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center justify-between py-6 gap-4 cursor-pointer group">
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3
                      className={`text-lg font-semibold transition-colors duration-200 ${
                        hoveredIndex === i ? 'text-[#C9A97A]' : 'text-white/90'
                      }`}
                    >
                      {t.nome}
                    </h3>
                    <span className="text-xs text-white/30 shrink-0">{t.durata}</span>
                  </div>

                  <AnimatePresence>
                    {hoveredIndex === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-white/50 text-sm leading-relaxed mt-2 overflow-hidden"
                      >
                        {t.descrizione}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => handlePrenotaClick(t.nome)}
                  className={`shrink-0 flex items-center gap-1.5 text-sm font-medium rounded-full px-4 py-1.5 transition-all duration-200 cursor-pointer ${
                    hoveredIndex === i
                      ? 'bg-[#C9A97A] text-black'
                      : 'text-[#C9A97A] border border-[#C9A97A]/30'
                  }`}
                >
                  Scopri e prenota
                  <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
