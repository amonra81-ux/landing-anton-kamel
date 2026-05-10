'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Phone } from 'lucide-react'
import { useBooking } from './BookingProvider'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

const TEL = '+393801035896'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const { open, isOpen } = useBooking()

  useEffect(() => {
    const onScroll = () => {
      // Mostra dopo che hero esce dal viewport (~80% dell'altezza schermo)
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handlePrenota = () => open('Sticky Mobile CTA')

  const handleCall = () => {
    window.fbq?.('track', 'Contact', {
      content_name: 'Click telefono',
    })
  }

  // Non mostrare la sticky se modal aperto
  const show = visible && !isOpen

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-white/10 bg-[#0a0a0a]/95 backdrop-blur-md"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="flex items-center gap-2 px-3 py-3">
            <a
              href={`tel:${TEL}`}
              onClick={handleCall}
              aria-label="Chiama lo studio"
              className="flex shrink-0 items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white/80 active:scale-95 transition-transform"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={handlePrenota}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A97A] px-5 py-3.5 text-black font-semibold text-base active:scale-[0.98] transition-transform"
              style={{ boxShadow: '0 0 24px rgba(201,169,122,0.35)' }}
            >
              <Calendar size={18} />
              Prenota consulto
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
