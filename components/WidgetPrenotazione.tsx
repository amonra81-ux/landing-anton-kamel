'use client'

import { motion } from 'framer-motion'
import { Calendar, ShieldCheck, Clock } from 'lucide-react'
import { useBooking } from './BookingProvider'

export default function WidgetPrenotazione() {
  const { open } = useBooking()
  const handleOpen = () => open('Widget Prenota Section')

  return (
    <>
      <section id="prenota" className="relative bg-[#0a0a0a] py-16 sm:py-24 md:py-32 px-6 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A97A] opacity-[0.04] blur-[160px] rounded-full pointer-events-none" />

        <div className="relative mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
            <p className="text-white/55 text-base sm:text-lg mb-8 md:mb-12 max-w-md mx-auto leading-relaxed">
              Consulenza valutativa in studio a Verona. Valutazione clinica
              + piano di trattamento personalizzato.
            </p>

            <motion.button
              onClick={handleOpen}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-full bg-[#C9A97A] px-10 py-5 text-black font-bold text-lg cursor-pointer"
              style={{ boxShadow: '0 0 40px rgba(201,169,122,0.4)' }}
            >
              <Calendar size={20} />
              Scegli data e orario
            </motion.button>

            {/* Trust pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                <ShieldCheck size={14} className="text-[#C9A97A]" />
                <span className="text-xs text-white/55">Conferma immediata</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                <Clock size={14} className="text-[#C9A97A]" />
                <span className="text-xs text-white/55">20 min · 80 €</span>
              </div>
            </div>

            <p className="mt-5 text-white/40 text-xs leading-relaxed max-w-xs mx-auto">
              Consulenza valutativa. Per altri trattamenti durata e prezzo nel
              calendario di prenotazione.
            </p>

            <p className="mt-10 text-white/30 text-xs leading-relaxed max-w-sm mx-auto">
              Per disdette o info su appuntamenti già prenotati:{' '}
              <a
                href="https://wa.me/393801035896"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#C9A97A] underline underline-offset-2 transition-colors"
              >
                WhatsApp
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
