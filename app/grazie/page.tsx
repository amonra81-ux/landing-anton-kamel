'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ChevronRight } from 'lucide-react'

// ─── Inline SVG Icons ────────────────────────────────────────────────────────
function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsappIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

// ─── Types ────────────────────────────────────────────────────────────────────
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const checklist = [
  'Vieni senza trucco se possibile — ci permette di valutare meglio la pelle',
  "Porta l'elenco dei farmaci che assumi, se presenti",
  'Se hai allergie accertate, segnalalo anche in anticipo',
  "Non è necessaria nessun'altra preparazione speciale",
  'Il consulto è un momento di ascolto — non ci sono domande sbagliate',
  "Porta con te eventuali foto di riferimento se hai un'idea di risultato in mente",
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function GraziePage() {
  const [trattamentoPre, setTrattamentoPre] = useState<null | 'si' | 'no'>(null)
  const [notaLibera, setNotaLibera] = useState('')
  const [inviato, setInviato] = useState(false)

  // Fire Meta Pixel CompleteRegistration event
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'CompleteRegistration', {
        content_name: 'Prenotazione Consulto Anton Kamel',
        status: 'confirmed',
      })
    }
  }, [])

  const handleInvia = () => {
    if (!notaLibera.trim()) return
    setInviato(true)
  }

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">

      {/* ── SECTION 1: Conferma ──────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">

        {/* Animated checkmark */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-8"
        >
          <div className="relative inline-flex items-center justify-center">
            <div
              className="absolute rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(201,169,122,0.15) 0%, transparent 70%)',
                width: 120, height: 120,
                top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)',
              }}
            />
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="36" stroke="rgba(201,169,122,0.2)" strokeWidth="2" />
              <motion.circle
                cx="40" cy="40" r="36"
                stroke="#C9A97A" strokeWidth="2" strokeLinecap="round"
                strokeDasharray="226"
                initial={{ strokeDashoffset: 226 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                style={{ transformOrigin: 'center', transform: 'rotate(-90deg)' }}
              />
              <motion.path
                d="M26 40 L36 50 L54 30"
                stroke="#C9A97A" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
              />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/90 mb-4">
            Prenotazione confermata.
          </h1>
          <p className="text-white/60 text-xl mb-10">
            A presto nello studio. Hai fatto il primo passo.
          </p>

          {/* Confirm card */}
          <div className="mx-auto max-w-lg rounded-2xl border border-[#C9A97A]/30 bg-white/5 p-8 mb-8 text-left">
            <p className="text-white/70 text-base leading-relaxed">
              Riceverai a breve una conferma via email o SMS con tutti i dettagli del tuo appuntamento.
              Se hai domande nel frattempo, scrivimi su Instagram o WhatsApp.
            </p>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/393801035896"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 font-semibold text-white text-base transition-all duration-300 hover:scale-105"
            style={{ background: '#25D366', boxShadow: '0 0 24px rgba(37,211,102,0.3)' }}
          >
            <WhatsappIcon size={20} />
            Scrivi su WhatsApp →
          </a>
        </motion.div>
      </section>

      {/* ── SECTION 2: Come prepararsi ───────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="mx-auto max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white/90 mb-10"
          >
            Prima di venire, tieni a mente:
          </motion.h2>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-5"
          >
            {checklist.map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                className="flex items-start gap-4"
              >
                <span className="mt-0.5 shrink-0 text-[#C9A97A]">
                  <CheckCircle2 size={20} />
                </span>
                <span className="text-white/70 text-lg leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── SECTION 3: Social ────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white/90 mb-4">
              Nel frattempo, seguimi.
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
              Condivido casi reali, risposte a domande frequenti e il dietro le quinte dello studio. Senza filtri.
            </p>

            <div className="grid grid-cols-1 max-w-sm mx-auto gap-6">
              {/* Instagram */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col items-start gap-4 hover:border-[#C9A97A]/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <span className="text-[#C9A97A]"><InstagramIcon size={24} /></span>
                  <span className="font-semibold text-white/90">@dr.antonlips</span>
                </div>
                <p className="text-white/55 text-sm leading-relaxed text-left">
                  Reel, risultati, storie di pazienti veri.
                </p>
                <a
                  href="https://www.instagram.com/dr.antonlips/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm text-white/70 hover:border-[#C9A97A]/50 hover:text-white transition-all duration-200"
                >
                  Seguimi su Instagram
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 4: Domanda rapida ────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="mx-auto max-w-xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-white/90 mb-8">
              Hai già in mente il trattamento?
            </h2>

            <div className="flex gap-4 justify-center mb-8 flex-wrap">
              {[
                { key: 'si', label: "Sì, ho già un'idea" },
                { key: 'no', label: 'Lo decideremo insieme' },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setTrattamentoPre(key as 'si' | 'no')}
                  className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 cursor-pointer ${
                    trattamentoPre === key
                      ? 'bg-[#C9A97A] text-black'
                      : 'border border-white/20 text-white/60 hover:border-white/40 hover:text-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <AnimatePresence>
              {trattamentoPre === 'si' && !inviato && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-4">
                    <textarea
                      value={notaLibera}
                      onChange={(e) => setNotaLibera(e.target.value)}
                      placeholder="Scrivilo qui (facoltativo)..."
                      rows={3}
                      className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white/80 text-sm leading-relaxed placeholder-white/30 focus:border-[#C9A97A]/50 focus:outline-none resize-none transition-colors"
                    />
                    <button
                      onClick={handleInvia}
                      disabled={!notaLibera.trim()}
                      className="self-center rounded-full bg-[#C9A97A] px-8 py-3 text-black font-semibold text-sm transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                      style={{ boxShadow: '0 0 20px rgba(201,169,122,0.3)' }}
                    >
                      Invia → Anton
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {inviato && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[#C9A97A] text-sm mt-2"
                >
                  Grazie! Anton lo leggerà prima del tuo appuntamento. 🌿
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Footer minimal */}
      <div className="py-8 px-6 text-center border-t border-white/10">
        <p className="text-white/25 text-xs">
          © 2025 Anton Kamel · Medico Estetico · Verona
        </p>
      </div>
    </main>
  )
}
