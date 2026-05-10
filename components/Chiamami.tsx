'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, CheckCircle2, Clock, ShieldCheck } from 'lucide-react'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

// Formspree endpoint placeholder — sostituire con ID reale dopo crea form
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'

const trattamenti = [
  'Filler labbra (Anton Lips / Russian Lips)',
  'Filler viso (zigomi, mento, mandibola)',
  'Rinofiller',
  'Tossina botulinica',
  'Botulino massetere / bruxismo',
  'Biorivitalizzazione / Skinbooster',
  'Fili di lifting',
  'Armonizzazione completa',
  'Non lo so ancora — voglio un consiglio',
]

export default function Chiamami() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [topic, setTopic] = useState('')
  const [note, setNote] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const valid = name.trim().length >= 2 && /^\+?[0-9 ]{8,}$/.test(phone.replace(/\s/g, ''))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!valid) return
    setSending(true)
    setError(null)

    try {
      // Pixel Lead event
      window.fbq?.('track', 'Lead', {
        content_name: 'Form Chiamami',
        content_category: topic || 'Non specificato',
      })

      // Submit Formspree
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: name, telefono: phone, trattamento: topic, nota: note }),
      })
      if (!res.ok) throw new Error('Errore invio')
      setSent(true)
    } catch (err) {
      setError('Errore invio. Chiama direttamente: 380 103 5896')
      console.error(err)
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 px-6 bg-[#0a0a0a] overflow-hidden min-h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C9A97A] opacity-[0.04] blur-[180px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
            Senza calendario, senza impegno
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white/95 leading-[1.05] mb-4">
            Ti richiamo io.
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Lasciami il tuo numero. Anton ti chiama personalmente entro 24h
            (lavorative). Niente automation, niente call center.
          </p>
        </motion.div>

        {/* Form */}
        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 space-y-5"
            >
              <label className="block">
                <span className="block text-xs uppercase tracking-widest text-white/55 mb-2">
                  Nome *
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="given-name"
                  className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder-white/30 focus:border-[#C9A97A]/60 focus:outline-none transition-colors"
                  placeholder="Es. Maria"
                />
              </label>

              <label className="block">
                <span className="block text-xs uppercase tracking-widest text-white/55 mb-2">
                  Telefono *
                </span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder-white/30 focus:border-[#C9A97A]/60 focus:outline-none transition-colors tabular-nums"
                  placeholder="Es. 340 1234567"
                />
              </label>

              <label className="block">
                <span className="block text-xs uppercase tracking-widest text-white/55 mb-2">
                  Trattamento di interesse
                </span>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white focus:border-[#C9A97A]/60 focus:outline-none transition-colors"
                >
                  <option value="">Seleziona…</option>
                  {trattamenti.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="block text-xs uppercase tracking-widest text-white/55 mb-2">
                  Note (opzionale)
                </span>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={3}
                  className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder-white/30 focus:border-[#C9A97A]/60 focus:outline-none transition-colors resize-none"
                  placeholder="Es. preferirei essere chiamata dopo le 18, oppure ho già fatto filler altrove…"
                />
              </label>

              <button
                type="submit"
                disabled={!valid || sending}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A97A] px-6 py-4 text-black font-bold text-base disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] transition-transform"
                style={{ boxShadow: valid ? '0 0 30px rgba(201,169,122,0.35)' : 'none' }}
              >
                <Phone size={18} />
                {sending ? 'Invio…' : 'Richiedi richiamo'}
              </button>

              {error && <p className="text-red-400 text-sm text-center">{error}</p>}

              <p className="text-white/35 text-xs text-center pt-2">
                I tuoi dati sono trattati secondo il GDPR. Non saranno mai venduti.
              </p>
            </motion.form>
          ) : (
            <motion.div
              key="sent"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-[#C9A97A]/40 bg-[#C9A97A]/[0.06] p-8 md:p-10 text-center"
            >
              <CheckCircle2 size={48} className="mx-auto mb-4 text-[#C9A97A]" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Richiesta inviata.
              </h2>
              <p className="text-white/65 text-base mb-2">
                Anton ti chiamerà personalmente entro 24h lavorative.
              </p>
              <p className="text-white/40 text-sm">
                Se preferisci, puoi anche prenotare direttamente online.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trust */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {[
            { icon: Clock, label: 'Risposta entro 24h' },
            { icon: ShieldCheck, label: 'Senza impegno' },
            { icon: Phone, label: 'Anton in persona' },
          ].map((t) => (
            <div
              key={t.label}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5"
            >
              <t.icon size={14} className="text-[#C9A97A] shrink-0" />
              <span className="text-xs sm:text-sm text-white/65">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
