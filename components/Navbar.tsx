'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#perche', label: 'Perché scegliermi', cta: false },
  { href: '#trattamenti', label: 'Trattamenti', cta: false },
  { href: '#faq', label: 'FAQ', cta: false },
  { href: '#prenota', label: 'Prenota', cta: true },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
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
          <div className="hidden items-center gap-8 md:flex">
            {desktopLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick(ctaLink.href)}
              className="rounded-full border border-[#C9A97A] px-4 py-1.5 text-sm text-[#C9A97A] transition-all duration-200 hover:bg-[#C9A97A]/10 cursor-pointer"
            >
              {ctaLink.label}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white/80 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
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
                onClick={() => handleNavClick(link.href)}
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
