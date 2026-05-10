'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Clock, ShieldCheck, MessageCircle } from 'lucide-react'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

const WA_NUMBER = '393801035896'

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

const tempistiche = [
  'Prima possibile',
  'Entro 30 giorni',
  'Entro 60 giorni',
  'Entro 6 mesi',
  'Sto ancora valutando',
]

function buildWhatsappMessage(opts: {
  name: string
  topic: string
  timing: string
  note: string
}) {
  const lines: string[] = [`Ciao Anton, sono ${opts.name}.`]
  if (opts.topic) lines.push(`Trattamento di interesse: ${opts.topic}.`)
  if (opts.timing) lines.push(`Quando vorrei farlo: ${opts.timing}.`)
  if (opts.note) lines.push(`Note / dubbi: ${opts.note}`)
  lines.push('Ti scrivo dal sito antonkamel.it. Grazie!')
  return encodeURIComponent(lines.join('\n\n'))
}

export default function Chiamami() {
  const [name, setName] = useState('')
  const [topic, setTopic] = useState('')
  const [timing, setTiming] = useState('')
  const [note, setNote] = useState('')
  const [sent, setSent] = useState(false)

  const valid = name.trim().length >= 2 && timing.length > 0

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!valid) return

    window.fbq?.('track', 'Lead', {
      content_name: 'Form WhatsApp',
      content_category: topic || 'Non specificato',
      timing: timing,
    })

    const msg = buildWhatsappMessage({
      name: name.trim(),
      topic,
      timing,
      note: note.trim(),
    })
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer')
    setSent(true)
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
            Domande prima di prenotare?
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white/95 leading-[1.05] mb-4">
            Scrivimi su WhatsApp.
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Anton risponde personalmente in chat. Niente call center,
            niente automation che ti lascia in attesa.
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

              <fieldset>
                <legend className="block text-xs uppercase tracking-widest text-white/55 mb-3">
                  Quando vorresti eseguire il trattamento? *
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {tempistiche.map((opt) => {
                    const selected = timing === opt
                    return (
                      <label
                        key={opt}
                        className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-colors ${
                          selected
                            ? 'border-[#C9A97A]/60 bg-[#C9A97A]/[0.08]'
                            : 'border-white/15 bg-black/30 hover:border-white/25'
                        }`}
                      >
                        <input
                          type="radio"
                          name="timing"
                          value={opt}
                          checked={selected}
                          onChange={() => setTiming(opt)}
                          className="sr-only"
                          required
                        />
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                            selected
                              ? 'border-[#C9A97A] bg-[#C9A97A]'
                              : 'border-white/30'
                          }`}
                        >
                          {selected && (
                            <span className="h-1.5 w-1.5 rounded-full bg-black" />
                          )}
                        </span>
                        <span
                          className={`text-sm ${
                            selected ? 'text-white' : 'text-white/70'
                          }`}
                        >
                          {opt}
                        </span>
                      </label>
                    )
                  })}
                </div>
              </fieldset>

              <label className="block">
                <span className="block text-xs uppercase tracking-widest text-white/55 mb-2">
                  Cosa vuoi sapere?
                </span>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={4}
                  className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder-white/30 focus:border-[#C9A97A]/60 focus:outline-none transition-colors resize-none"
                  placeholder="Es. ho già fatto filler ma non mi piace il risultato. Si può correggere?"
                />
              </label>

              <button
                type="submit"
                disabled={!valid}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-white font-bold text-base disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer"
                style={{ boxShadow: valid ? '0 0 30px rgba(37,211,102,0.35)' : 'none' }}
              >
                <MessageCircle size={18} />
                Apri WhatsApp con messaggio precompilato
              </button>

              <p className="text-white/35 text-xs text-center pt-2">
                Il messaggio si apre nella tua app WhatsApp con i dati già scritti.
                Lo invii tu confermando.
              </p>
            </motion.form>
          ) : (
            <motion.div
              key="sent"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-[#25D366]/40 bg-[#25D366]/[0.06] p-8 md:p-10 text-center"
            >
              <CheckCircle2 size={48} className="mx-auto mb-4 text-[#25D366]" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                WhatsApp aperto.
              </h2>
              <p className="text-white/65 text-base mb-2">
                Conferma l&apos;invio del messaggio dalla tua app.
              </p>
              <p className="text-white/40 text-sm">
                Anton risponde personalmente in chat (orari studio).
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trust pills */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {[
            { icon: MessageCircle, label: 'Risponde in chat' },
            { icon: ShieldCheck, label: 'Senza impegno' },
            { icon: Clock, label: 'Orari studio' },
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

        {/* Note onesta */}
        <p className="mt-8 text-center text-xs text-white/35 italic max-w-md mx-auto leading-relaxed">
          Pronta a prenotare direttamente? Apri il calendario online —
          è il modo più rapido per fissare la consulenza.
        </p>
      </div>
    </section>
  )
}
