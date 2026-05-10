'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import { Heart, Sparkles, Activity, Wand2, Plus, Minus, Calendar } from 'lucide-react'
import { useBooking } from './BookingProvider'

type Trattamento = {
  nome: string
  durata: string
  prezzo?: string
  descrizione: string
}

type Category = {
  id: string
  label: string
  icon: typeof Heart
  teaser: string
  trattamenti: Trattamento[]
}

const categories: Category[] = [
  {
    id: 'labbra',
    label: 'Labbra',
    icon: Heart,
    teaser: 'Filler labbra Anton Lips™ + Russian Lips. Correzione lavori altri.',
    trattamenti: [
      {
        nome: 'Anton Lips Technique™',
        durata: '30–45 min',
        prezzo: 'da 400 €',
        descrizione:
          'Tecnica iniettiva proprietaria. Definizione + simmetria, mai effetto «papera». Per chi vuole labbra «proprie» ma più presenti.',
      },
      {
        nome: 'Russian Lips Technique',
        durata: '30–45 min',
        prezzo: 'da 400 €',
        descrizione:
          'Disegno verticale del vermiglio. Labbra più alte e definite con minor volume. Per labbra naturalmente sottili.',
      },
      {
        nome: 'Correzione filler migrato',
        durata: '30–60 min',
        prezzo: 'da 250 €',
        descrizione:
          'Scioglimento del filler precedente con jaluronidasi + nuovo filler con tecnica corretta. Per chi viene da risultati deludenti.',
      },
      {
        nome: '«Codice Barre» — rughe perilabiali',
        durata: '25 min',
        prezzo: 'da 150 €',
        descrizione:
          'Botox + acido ialuronico specifico in 2 sedute distanziate. Attenua le rughe sopra e sotto le labbra.',
      },
    ],
  },
  {
    id: 'viso',
    label: 'Viso e profilo',
    icon: Wand2,
    teaser: 'Zigomi, mento, mandibola, rinofiller, armonizzazione facciale.',
    trattamenti: [
      {
        nome: 'Filler viso (zigomi, mento, mandibola)',
        durata: '45–60 min',
        prezzo: 'da 500 €',
        descrizione:
          'Armonizzazione e definizione dei volumi facciali. Effetto lifting non chirurgico. Una zona o piano integrato.',
      },
      {
        nome: 'Angolo mandibolare (jawline contouring)',
        durata: '45 min',
        prezzo: 'da 500 €',
        descrizione:
          'Definizione della linea mandibolare per un ovale più netto. Profilo più marcato.',
      },
      {
        nome: 'Rinofiller',
        durata: '20–30 min',
        prezzo: 'da 350 €',
        descrizione:
          'Correzione di gobba, punta o asimmetrie nasali con acido ialuronico. Risultato immediato, senza chirurgia.',
      },
      {
        nome: 'Fili di lifting riassorbibili',
        durata: '60–90 min',
        prezzo: 'da 700 €',
        descrizione:
          'Tensore immediato + stimolazione del collagene. Per il rilassamento cutaneo del viso e del collo.',
      },
      {
        nome: 'Armonizzazione facciale completa',
        durata: 'percorso 6–12 mesi',
        prezzo: 'piano personalizzato',
        descrizione:
          'Piano integrato su zigomi, mento, mandibola e labbra distribuito nel tempo. Per un risultato organico.',
      },
    ],
  },
  {
    id: 'rughe',
    label: 'Rughe e bruxismo',
    icon: Activity,
    teaser: 'Tossina botulinica avanzata. Espressioni naturali preservate.',
    trattamenti: [
      {
        nome: 'Botulino — rughe del viso',
        durata: '20–30 min',
        prezzo: 'da 250 €',
        descrizione:
          'Distensione di fronte, glabella e zampe di gallina. Espressioni naturali preservate. Effetto 4–6 mesi.',
      },
      {
        nome: 'Botulino massetere — bruxismo / jaw slimming',
        durata: '20–30 min',
        prezzo: 'da 350 €',
        descrizione:
          'Riduzione tensioni mandibolari + rimodellamento ovale del viso. Spesso meno cefalee e sonno migliore.',
      },
      {
        nome: 'Trattamento occhiaie',
        durata: '30–45 min',
        prezzo: 'da 300 €',
        descrizione:
          'Riduzione di occhiaie e borse con filler specifici per la zona perioculare.',
      },
    ],
  },
  {
    id: 'pelle',
    label: 'Qualità della pelle',
    icon: Sparkles,
    teaser: 'Biorivitalizzazione, skinbooster, peeling. Texture luminosa.',
    trattamenti: [
      {
        nome: 'Bioristrutturazione avanzata',
        durata: '30 min',
        prezzo: 'da 300 €',
        descrizione:
          'Mini invasiva. Riattiva il turn over cellulare con biostimolazione + biorigenerazione (acido ialuronico non cross-linkato).',
      },
      {
        nome: 'Biorivitalizzazione classica',
        durata: '30–45 min',
        prezzo: 'da 250 €',
        descrizione:
          'Idratazione profonda + rimpolpamento. Microiniezioni distribuite. Ciclo di sedute.',
      },
      {
        nome: 'Skinbooster',
        durata: '30–45 min',
        prezzo: 'da 280 €',
        descrizione:
          'Pelle luminosa, idratata, tonica. Trattamento «flash glow» in vista di eventi.',
      },
      {
        nome: 'Biorivitalizzazione contorno occhi',
        durata: '15 min',
        prezzo: 'da 200 €',
        descrizione: 'Prodotto specifico per il contorno occhi. Migliora la texture cutanea.',
      },
      {
        nome: 'Peeling chimico',
        durata: '30–45 min',
        prezzo: 'da 150 €',
        descrizione:
          'Rinnovamento cellulare. Uniforma colorito e texture cutanea. Cicli stagionali.',
      },
      {
        nome: 'Acne e cicatrici',
        durata: '45–60 min',
        prezzo: 'piano personalizzato',
        descrizione:
          'Protocolli combinati per migliorare texture e ridurre i segni dell\'acne.',
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

  const [openId, setOpenId] = useState<string | null>(null)
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
            Tocca una categoria per vedere i trattamenti. Si decide insieme in
            consulenza.
          </p>
        </motion.div>

        {/* Accordion categorie */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden divide-y divide-white/10">
          {categories.map((cat, ci) => {
            const isOpen = openId === cat.id
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: ci * 0.05 }}
              >
                {/* Trigger */}
                <button
                  onClick={() => setOpenId(isOpen ? null : cat.id)}
                  aria-expanded={isOpen}
                  className={`w-full flex items-start gap-4 px-5 sm:px-7 py-5 md:py-6 text-left transition-colors cursor-pointer ${
                    isOpen ? 'bg-[#C9A97A]/[0.06]' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <span
                    className={`shrink-0 mt-0.5 flex items-center justify-center w-10 h-10 rounded-xl border transition-colors ${
                      isOpen
                        ? 'border-[#C9A97A]/40 bg-[#C9A97A]/15 text-[#C9A97A]'
                        : 'border-white/10 bg-white/[0.03] text-white/55'
                    }`}
                  >
                    <Icon size={18} />
                  </span>

                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-bold text-lg md:text-xl leading-tight transition-colors ${
                        isOpen ? 'text-white' : 'text-white/90'
                      }`}
                    >
                      {cat.label}
                    </p>
                    <p className="text-white/45 text-xs md:text-sm mt-0.5 leading-relaxed">
                      {cat.teaser}
                    </p>
                  </div>

                  <span className="shrink-0 mt-2 text-[#C9A97A] relative w-4 h-4">
                    <Plus
                      size={16}
                      strokeWidth={2.5}
                      className={`absolute inset-0 transition-opacity duration-200 ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                    <Minus
                      size={16}
                      strokeWidth={2.5}
                      className={`absolute inset-0 transition-opacity duration-200 ${
                        isOpen ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </span>
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-7 pb-6 md:pb-8 space-y-3">
                        {cat.trattamenti.map((t) => (
                          <div
                            key={t.nome}
                            className="rounded-xl border border-white/10 bg-black/30 p-4 md:p-5"
                          >
                            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                              <h4 className="text-base md:text-lg font-semibold text-white/95 leading-tight">
                                {t.nome}
                              </h4>
                              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider whitespace-nowrap">
                                <span className="text-white/35">{t.durata}</span>
                                {t.prezzo && (
                                  <>
                                    <span className="text-white/15">·</span>
                                    <span className="text-[#C9A97A]">{t.prezzo}</span>
                                  </>
                                )}
                              </div>
                            </div>
                            <p className="text-white/55 text-sm leading-relaxed">
                              {t.descrizione}
                            </p>
                          </div>
                        ))}

                        {/* CTA categoria → Skipres modal bottom */}
                        <div className="pt-2">
                          <button
                            onClick={() => open(`Trattamenti — ${cat.label}`)}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A97A] px-7 py-3 text-black font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer"
                            style={{ boxShadow: '0 0 24px rgba(201,169,122,0.3)' }}
                          >
                            <Calendar size={14} />
                            Prenota la consulenza
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Note finale */}
        <p className="mt-6 text-center text-xs text-white/35 max-w-md mx-auto leading-relaxed">
          Non sai quale categoria scegliere? Lo decidiamo in consulenza —
          <span className="text-white/65"> 20 min · 80 €</span>.
        </p>
      </div>
    </section>
  )
}
