'use client'

import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const BOOKING_URL = 'https://skipres.com/steps/antonkamel/1266'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

interface BookingContextValue {
  open: (source?: string) => void
  close: () => void
  isOpen: boolean
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used inside BookingProvider')
  return ctx
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback((source = 'unknown') => {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
    window.fbq?.('track', 'InitiateCheckout', {
      content_name: source,
      content_category: 'Prenotazione',
    })
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }, [])

  // ESC chiude
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close])

  return (
    <BookingContext.Provider value={{ open, close, isOpen }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={close}
              className="fixed inset-0 z-[300] bg-black/85 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 35 }}
              className="fixed bottom-0 left-0 right-0 z-[301] bg-[#111] rounded-t-3xl overflow-hidden md:max-w-3xl md:left-1/2 md:-translate-x-1/2 md:bottom-4 md:rounded-3xl"
              style={{ maxHeight: '92vh' }}
            >
              <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10">
                <div>
                  <p className="text-white font-semibold text-sm">Prenota un appuntamento</p>
                  <p className="text-white/40 text-xs mt-0.5">Dr. Anton Kamel · Verona</p>
                </div>
                <button
                  onClick={close}
                  aria-label="Chiudi"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
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
    </BookingContext.Provider>
  )
}
