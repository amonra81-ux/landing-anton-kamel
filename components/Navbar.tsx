'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { useBooking } from './BookingProvider'

const TEL = '+393801035896'
const TEL_DISPLAY = '380 103 5896'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

interface NavLink {
  href: string
  label: string
  cta: boolean
  page: boolean
  bookingTrigger?: boolean
}

const navLinks: NavLink[] = [
  { href: '/chi-sono', label: 'Chi sono', cta: false, page: true },
  { href: '#trattamenti', label: 'Trattamenti', cta: false, page: false },
  { href: '#faq', label: 'FAQ', cta: false, page: false },
  { href: '/chiamami', label: 'Ti richiamo', cta: false, page: true },
  { href: '#booking', label: 'Prenota', cta: true, page: false, bookingTrigger: true },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { open: openBooking } = useBooking()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (link: NavLink) => {
    setMobileOpen(false)

    // CTA Prenota → apre modal direttamente, NO scroll
    if (link.bookingTrigger) {
      openBooking('Navbar Prenota')
      return
    }

    if (link.page) {
      window.location.assign(`${BASE_PATH}${link.href}`)
      return
    }

    // Hash link
    if (typeof window !== 'undefined') {
      const isHome = window.location.pathname === `${BASE_PATH}/` || window.location.pathname === '/'
      if (isHome) {
        const el = document.querySelector(link.href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        return
      }
      window.location.assign(`${BASE_PATH}/${link.href}`)
    }
  }

  const desktopLinks = navLinks.filter((l) => !l.cta)
  const ctaLink = navLinks.find((l) => l.cta)!

  return (
    <>
      <nav
        aria-label="Navigazione principale"
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-black/40 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <div>
            <p className="text-sm font-bold tracking-widest text-white">ANTON KAMEL</p>
            <p className="text-xs text-white/40 tracking-wide">Medico Estetico · Verona</p>
          </div>

          {/* Desktop Links */}
          <div className="hidden items-center gap-7 md:flex">
            {desktopLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link)}
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`tel:${TEL}`}
              className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Phone size={14} className="text-[#C9A97A]" />
              {TEL_DISPLAY}
            </a>
            <button
              onClick={() => handleNavClick(ctaLink)}
              className="rounded-full bg-[#C9A97A] px-4 py-1.5 text-sm text-black font-semibold transition-all duration-200 hover:scale-[1.03] cursor-pointer"
            >
              {ctaLink.label}
            </button>
          </div>

          {/* Mobile right side: phone + hamburger */}
          <div className="flex items-center gap-1 md:hidden">
            <a
              href={`tel:${TEL}`}
              aria-label={`Chiama ${TEL_DISPLAY}`}
              className="flex items-center justify-center w-10 h-10 rounded-full text-[#C9A97A] active:scale-95 transition-transform"
            >
              <Phone size={18} />
            </a>
            <button
              className="text-white/80 hover:text-white transition-colors p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-black/95 backdrop-blur-lg border-b border-white/10 px-6 py-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link)}
                className={`text-left text-lg font-medium transition-colors ${
                  link.cta ? 'text-[#C9A97A]' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
