'use client'

import { motion } from 'framer-motion'
import { useBooking } from './BookingProvider'
import { Calendar } from 'lucide-react'

export type Trattamento = {
  nome: string
  descrizione: string
  durata: string
  prezzo?: string
}

interface Props {
  eyebrow: string
  title: string
  subtitle: string
  trattamenti: Trattamento[]
  /** Optional sub-section di approfondimento (es. link Anton Lips) */
  approfondimento?: React.ReactNode
}

export default function CategoriaTrattamenti({
  eyebrow,
  title,
  subtitle,
  trattamenti,
  approfondimento,
}: Props) {
  const { open } = useBooking()

  return (
    <>
      {/* Lista trattamenti — info SEMPRE visibile */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10 md:mb-14">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
              {eyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/95 mb-4 leading-[1.05]">
              {title}
            </h2>
            <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {trattamenti.map((t, i) => (
              <motion.div
                key={t.nome}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                  <h3 className="text-lg md:text-xl font-semibold text-white/95 leading-tight">
                    {t.nome}
                  </h3>
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider">
                    <span className="text-white/35">{t.durata}</span>
                    {t.prezzo && (
                      <>
                        <span className="text-white/15">·</span>
                        <span className="text-[#C9A97A]">{t.prezzo}</span>
                      </>
                    )}
                  </div>
                </div>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {t.descrizione}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eventuale approfondimento (link a pagine tecniche) */}
      {approfondimento && (
        <section className="py-10 md:py-14 px-6 bg-[#0a0a0a] border-t border-white/10">
          <div className="mx-auto max-w-3xl">{approfondimento}</div>
        </section>
      )}

      {/* CTA finale — consulenza 80€ */}
      <section className="py-14 md:py-20 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
            Primo passo
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/95 mb-4 leading-[1.05]">
            Si decide in consulenza.
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6 max-w-md mx-auto">
            <span className="text-white/85">20 minuti · 80 €</span> di valutazione clinica
            con il Dr. Anton Kamel in studio a Verona.
          </p>
          <button
            onClick={() => open(`Categoria: ${title}`)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A97A] px-8 py-4 text-black font-bold text-base hover:scale-[1.03] active:scale-[0.98] transition-transform cursor-pointer"
            style={{ boxShadow: '0 0 30px rgba(201,169,122,0.35)' }}
          >
            <Calendar size={16} />
            Prenota la consulenza
          </button>
        </div>
      </section>
    </>
  )
}
