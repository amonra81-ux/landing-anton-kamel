'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, ShieldCheck, Clock } from 'lucide-react'

const BOOKING_URL = 'https://skipres.com/steps/antonkamel/1266'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export default function WidgetPrenotazione() {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpen = () => {
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
    window.fbq?.('track', 'InitiateCheckout', {
      content_name: 'Widget Prenota',
      content_category: 'Prenotazione',
    })
  }

  const handleClose = () => {
    setModalOpen(false)
    document.body.style.overflow = ''
  }

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
            <p className="mb-4 text-xs font-semibold tracking-widest text-[#C9A97A] uppercase">
              Prenota online
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white/95 mb-4 leading-[1.05]">
              Prenota il tuo consulto.
            </h2>
            <p className="text-white/55 text-base sm:text-lg mb-8 md:mb-12 max-w-md mx-auto leading-relaxed">
              Primo passo: una conversazione. Senza impegno, in studio a Verona.
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
                <span className="text-xs text-white/55">45 min consulto</span>
              </div>
            </div>

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

      {/* Modal Skipres */}
      <AnimatePresence>
        {modalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={handleClose}
              className="fixed inset-0 z-[300] bg-black/85 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 35 }}
              className="fixed bottom-0 left-0 right-0 z-[301] bg-[#111] rounded-t-3xl overflow-hidden"
              style={{ maxHeight: '92vh' }}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div>
                  <p className="text-white font-semibold text-sm">Prenota un appuntamento</p>
                  <p className="text-white/40 text-xs mt-0.5">Dr. Anton Kamel · Verona</p>
                </div>
                <button
                  onClick={handleClose}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
                  aria-label="Chiudi"
                >
                  <X size={16} />
                </button>
              </div>
              <div style={{ height: 'calc(92vh - 73px)' }}>
                <iframe
                  src={BOOKING_URL}
                  width="100%"
                  height="100%"
                  title="Prenota con Dr. Anton Kamel"
                  className="border-0 block"
                  style={{ minHeight: 'calc(92vh - 73px)' }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
