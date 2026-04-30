'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const BOOKING_URL = 'https://skipres.com/steps/antonkamel/1266'
const WA_NUMBER = '393801035896'

export default function WidgetPrenotazione() {
  const [scelta, setScelta] = useState<'si' | 'no' | null>(null)
  const [nota, setNota] = useState('')
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpen = () => {
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const handleClose = () => {
    setModalOpen(false)
    document.body.style.overflow = ''
  }

  const handleInviaMessaggio = () => {
    if (nota.trim()) {
      const msg = encodeURIComponent(`Ciao Anton, vorrei un consiglio sui trattamenti. ${nota}`)
      window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <>
      <section id="prenota" className="relative bg-[#0a0a0a] py-32 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A97A] opacity-[0.03] blur-[160px] rounded-full pointer-events-none" />

        <div className="relative mx-auto max-w-xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-xs font-semibold tracking-widest text-[#C9A97A] uppercase">
              Prenota online
            </p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white/90 mb-4">
              Prenota il tuo consulto.
            </h2>
            <p className="text-white/50 text-lg mb-12">
              Primo passo: una conversazione. Senza impegno.
            </p>

            {/* Domanda */}
            <p className="text-white/80 text-base font-medium mb-6">
              Hai già in mente il trattamento?
            </p>

            <div className="flex gap-4 justify-center mb-6 flex-wrap">
              <button
                onClick={() => {
                  setScelta('si')
                  handleOpen()
                }}
                className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 cursor-pointer ${
                  scelta === 'si'
                    ? 'bg-[#C9A97A] text-black'
                    : 'border border-white/20 text-white/60 hover:border-white/40 hover:text-white'
                }`}
              >
                Sì, ho già un'idea
              </button>
              <button
                onClick={() => setScelta('no')}
                className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 cursor-pointer ${
                  scelta === 'no'
                    ? 'bg-[#C9A97A] text-black'
                    : 'border border-white/20 text-white/60 hover:border-white/40 hover:text-white'
                }`}
              >
                Vorrei un consiglio
              </button>
            </div>

            {/* Textarea se "no" (consiglio) */}
            <AnimatePresence mode="wait">
              {scelta === 'no' && (
                <motion.div
                  key="consiglio"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="overflow-hidden mb-6"
                >
                  <textarea
                    value={nota}
                    onChange={(e) => setNota(e.target.value)}
                    placeholder="Dimmi cosa ti piacerebbe migliorare (es. filler labbra, viso stanco, rughe)..."
                    rows={3}
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white/80 text-sm leading-relaxed placeholder-white/30 focus:border-[#C9A97A]/50 focus:outline-none resize-none transition-colors mb-4"
                    autoFocus
                  />
                  <motion.button
                    onClick={handleInviaMessaggio}
                    disabled={!nota.trim()}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-full bg-[#C9A97A] px-10 py-4 text-black font-bold text-lg cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ boxShadow: '0 0 30px rgba(201,169,122,0.3)' }}
                  >
                    Invia messaggio su WhatsApp
                  </motion.button>
                </motion.div>
              )}

              {/* Se "sì", mostra solo il pulsante per riaprire il widget in caso lo chiudano */}
              {scelta === 'si' && (
                <motion.div
                  key="prenota"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    onClick={handleOpen}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-full bg-[#C9A97A] px-10 py-5 text-black font-bold text-lg cursor-pointer"
                    style={{ boxShadow: '0 0 40px rgba(201,169,122,0.35)' }}
                  >
                    Scegli data e orario →
                  </motion.button>
                  <p className="text-white/25 text-xs mt-4">
                    Prenotazione sicura · Conferma immediata
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Se non ha ancora scelto, mostra testo neutro */}
            {scelta === null && (
              <p className="text-white/25 text-xs mt-8">
                Scegli un'opzione per continuare
              </p>
            )}
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
              className="fixed inset-0 z-[300] bg-black/80 backdrop-blur-sm"
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
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
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
