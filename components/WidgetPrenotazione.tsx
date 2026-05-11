'use client'

import { motion } from 'framer-motion'
import { Calendar, ShieldCheck, Clock, MessageCircle } from 'lucide-react'
import { useBooking } from './BookingProvider'

const SKIPRES_URL = 'https://skipres.com/steps/antonkamel/1266'

export default function WidgetPrenotazione() {
  const { open } = useBooking()
  const handleOpen = () => open('Widget Prenota Section')

  return (
    <>
      <section id="prenota" className="relative bg-[#0a0a0a] py-16 sm:py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A97A] opacity-[0.04] blur-[160px] rounded-full pointer-events-none" />

        <div className="relative mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9A97A]/30 bg-[#C9A97A]/[0.06] px-3 py-1 text-[10px] font-semibold tracking-widest text-[#C9A97A] uppercase">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A97A] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#C9A97A]" />
              </span>
              Disponibilità limitate · verifica nel calendario
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white/95 mb-4 leading-[1.05]">
              Prenota la tua consulenza.
            </h2>
            <p className="text-white/55 text-base sm:text-lg mb-8 max-w-md mx-auto leading-relaxed">
              Consulenza valutativa in studio a Verona. Valutazione clinica
              + piano di trattamento personalizzato.
            </p>

            {/* Trust pills */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                <ShieldCheck size={14} className="text-[#C9A97A]" />
                <span className="text-xs text-white/55">Conferma immediata</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                <Clock size={14} className="text-[#C9A97A]" />
                <span className="text-xs text-white/55">20 min · 80 €</span>
              </div>
            </div>
          </motion.div>

          {/* CALENDAR EMBED INLINE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#0f0f0f]">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-[#C9A97A]" />
                <p className="text-white/80 text-xs font-semibold tracking-wide">Calendario disponibilità</p>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-white/35">Live · Skipres</span>
            </div>
            <iframe
              src={SKIPRES_URL}
              title="Calendario prenotazione Dr. Anton Kamel"
              className="w-full border-0 block bg-white"
              style={{ height: '680px' }}
              loading="lazy"
            />
          </motion.div>

          {/* Fallback CTA + WhatsApp reassurance */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <button
              onClick={handleOpen}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C9A97A]/40 bg-[#C9A97A]/10 px-6 py-3 text-[#C9A97A] font-semibold text-sm hover:bg-[#C9A97A]/15 transition-colors cursor-pointer"
            >
              <Calendar size={15} />
              Apri calendario a schermo intero
            </button>

            <p className="mt-5 inline-flex items-center gap-2 text-white/55 text-sm">
              <MessageCircle size={14} className="text-[#25D366]" />
              <span>
                Conferma via WhatsApp entro 2h —{' '}
                <a
                  href="https://wa.me/393801035896"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 underline underline-offset-2 hover:text-[#C9A97A]"
                >
                  380 103 5896
                </a>
              </span>
            </p>

            <p className="mt-4 text-white/35 text-xs leading-relaxed max-w-md mx-auto">
              Consulenza valutativa 80€. Per altri trattamenti durata e prezzo nel calendario.
              Per disdette o info su appuntamenti già prenotati, scrivere su WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
