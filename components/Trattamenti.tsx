'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Calendar, Heart, Sparkles, Activity, Wand2 } from 'lucide-react'
import { useBooking } from './BookingProvider'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

type Treatment = {
  nome: string
  descrizione: string
  durata: string
}

type Category = {
  id: string
  label: string
  icon: typeof Heart
  treatments: Treatment[]
}

const categories: Category[] = [
  {
    id: 'labbra',
    label: 'Labbra',
    icon: Heart,
    treatments: [
      {
        nome: 'Filler labbra — Anton Lips Technique™',
        descrizione:
          'Tecnica proprietaria. Definizione + simmetria, mai effetto «papera».',
        durata: '30–45 min',
      },
      {
        nome: 'Filler labbra — Russian Lips',
        descrizione:
          'Disegno verticale. Labbra più alte e definite con minor volume.',
        durata: '30–45 min',
      },
      {
        nome: 'Correzione filler migrato',
        descrizione:
          'Scioglimento con jaluronidasi + nuovo filler con tecnica corretta.',
        durata: '30–60 min',
      },
    ],
  },
  {
    id: 'viso',
    label: 'Viso e profilo',
    icon: Wand2,
    treatments: [
      {
        nome: 'Filler viso (zigomi, mento, mandibola)',
        descrizione:
          'Armonizzazione e definizione dei volumi facciali. Effetto lifting non chirurgico.',
        durata: '45–60 min',
      },
      {
        nome: 'Rinofiller',
        descrizione:
          'Correzione di gobba, punta o asimmetrie nasali senza chirurgia.',
        durata: '20–30 min',
      },
      {
        nome: 'Profilazione completa (armonizzazione)',
        descrizione:
          'Piano integrato di trattamento per equilibrare le proporzioni del viso.',
        durata: '60–90 min',
      },
      {
        nome: 'Fili di lifting riassorbibili',
        descrizione:
          'Tensore immediato + stimolazione collagene. Effetto 12–18 mesi.',
        durata: '60–90 min',
      },
    ],
  },
  {
    id: 'rughe',
    label: 'Rughe e tensioni',
    icon: Activity,
    treatments: [
      {
        nome: 'Tossina botulinica (rughe del viso)',
        descrizione:
          'Distensione delle rughe dinamiche. Naturalezza espressioni preservata.',
        durata: '20–30 min',
      },
      {
        nome: 'Botulino massetere (bruxismo / jaw slimming)',
        descrizione:
          'Riduzione tensione mascellare + rimodellamento ovale del viso.',
        durata: '20–30 min',
      },
      {
        nome: 'Trattamento occhiaie',
        descrizione:
          'Riduzione di occhiaie e borse con filler specifici per la zona perioculare.',
        durata: '30–45 min',
      },
    ],
  },
  {
    id: 'pelle',
    label: 'Qualità della pelle',
    icon: Sparkles,
    treatments: [
      {
        nome: 'Biorivitalizzazione / Biostimolazione',
        descrizione:
          'Idratazione profonda, rimpolpamento, miglioramento della texture.',
        durata: '30–45 min',
      },
      {
        nome: 'Skinbooster',
        descrizione:
          'Microiniezioni di acido ialuronico per pelle luminosa e tonica.',
        durata: '30–45 min',
      },
      {
        nome: 'Peeling chimico',
        descrizione:
          'Rinnovamento cellulare. Uniforma colorito e texture cutanea.',
        durata: '30–45 min',
      },
      {
        nome: 'Trattamento acne e cicatrici',
        descrizione:
          'Protocolli combinati per migliorare texture + ridurre i segni dell&apos;acne.',
        durata: '45–60 min',
      },
    ],
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

  const handleOpen = () => {
    window.fbq?.('track', 'ViewContent', {
      content_name: 'Trattamenti — generale',
      content_category: 'Trattamento',
    })
    open('Trattamenti CTA')
  }

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
            Trattamenti
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white/95 mb-4 leading-[1.05]">
            Cosa faccio.
          </h2>
          <p className="text-white/55 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Ogni trattamento è scelto e calibrato in consulenza. Quello che vedi qui
            è la mappa — il piano è personale.
          </p>
        </motion.div>

        {/* Categorie */}
        <div className="space-y-12 md:space-y-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: ci * 0.05 }}
            >
              {/* Categoria header */}
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#C9A97A]/15 border border-[#C9A97A]/30 text-[#C9A97A]">
                  <cat.icon size={16} />
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                  {cat.label}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
              </div>

              {/* Lista trattamenti */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {cat.treatments.map((t) => (
                  <div
                    key={t.nome}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6 hover:border-[#C9A97A]/25 transition-colors"
                  >
                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <h4 className="text-base md:text-lg font-semibold text-white/95 leading-tight">
                        {t.nome}
                      </h4>
                      <span className="shrink-0 text-[10px] font-mono uppercase tracking-wider text-white/35 whitespace-nowrap">
                        {t.durata}
                      </span>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">
                      {t.descrizione}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA finale unica */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 md:mt-20 text-center"
        >
          <p className="text-white/55 text-sm md:text-base mb-5 max-w-md mx-auto">
            Non sai quale fa per te? Lo decidiamo insieme in consulenza.
          </p>
          <button
            onClick={handleOpen}
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
