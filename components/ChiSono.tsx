'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Sparkles, Languages, Award, Calendar, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { useBooking } from './BookingProvider'

const formacao = [
  { year: '2014', title: 'Laurea in Medicina e Chirurgia', institution: 'Università di Verona' },
  { year: '2017', title: 'Master in Medicina Estetica', institution: 'Università di Padova' },
  { year: '2019', title: 'Master in Medicina Estetica', institution: 'Università di Verona' },
]

const techniques = [
  {
    name: 'Anton Lips Technique™',
    desc: 'Tecnica proprietaria, ideata personalmente. Filler labbra naturale, definito, simmetrico — senza effetto «papera».',
    proprietary: true,
  },
  {
    name: 'Russian Lips Technique',
    desc: 'Tecnica avanzata di filler labbra di origine russa. Definizione superiore con minor volume.',
    proprietary: false,
  },
  {
    name: 'Armonizzazione facciale',
    desc: 'Approccio integrato su zigomi, mento, mandibola e labbra per equilibrio del viso.',
    proprietary: false,
  },
  {
    name: 'Tossina botulinica avanzata',
    desc: 'Distensione rughe + jaw slimming + bruxismo — sempre con espressione naturale preservata.',
    proprietary: false,
  },
]

export default function ChiSono() {
  const { open } = useBooking()
  return (
    <>
      {/* Hero introduttivo */}
      <section className="relative pt-28 md:pt-32 pb-12 md:pb-16 px-6 bg-[#0a0a0a]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A97A] opacity-[0.04] blur-[160px] rounded-full pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase"
          >
            Chi sono
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white/95 leading-[1.05]"
          >
            Dr. Anton Kamel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-white/65 leading-relaxed"
          >
            Medico chirurgo, specialista in medicina estetica.
            Ideatore della tecnica <span className="text-[#C9A97A]">Anton Lips</span>™.
            Studio a Verona dal 2014.
          </motion.p>
        </div>
      </section>

      {/* Approccio personale */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a]">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase mb-6">
              Il mio approccio
            </p>
            <div className="space-y-5 text-white/80 text-base sm:text-lg leading-relaxed">
              <p>
                Non lavoro sull&apos;aspetto. Lavoro sulla persona.
              </p>
              <p>
                Ogni paziente che entra nel mio studio merita più di un trattamento standard:
                merita una conversazione, una valutazione clinica vera, un piano costruito sulle
                sue proporzioni — non su un modello ideale prestabilito.
              </p>
              <p>
                Negli anni mi sono specializzato in tecniche che mettono al primo posto la
                naturalezza: il risultato dev&apos;essere quello che il paziente vede allo specchio
                la mattina, non un viso diverso. Questa filosofia mi ha portato a sviluppare la
                tecnica <span className="text-[#C9A97A] font-medium">Anton Lips</span>, oggi
                riconosciuta come metodo proprietario.
              </p>
              <p className="text-white/60 italic">
                «Trasparenza, ascolto, naturalezza — in quest&apos;ordine.»
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tecniche */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-14"
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
              Specializzazioni
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/95">
              Tecniche di riferimento.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {techniques.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-2xl border p-6 md:p-8 transition-colors ${
                  t.proprietary
                    ? 'border-[#C9A97A]/40 bg-[#C9A97A]/[0.06]'
                    : 'border-white/10 bg-white/[0.03] hover:border-[#C9A97A]/25'
                }`}
              >
                {t.proprietary && (
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-[#C9A97A] px-2.5 py-0.5 text-[10px] font-bold text-black uppercase tracking-wider">
                    <Sparkles size={10} />
                    Proprietaria
                  </span>
                )}
                <h3 className="text-lg md:text-xl font-semibold text-white/95 mb-2">{t.name}</h3>
                <p className="text-white/55 text-sm md:text-base leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formazione */}
      <section className="py-12 md:py-20 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
              Formazione
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/95">
              Percorso accademico.
            </h2>
          </motion.div>

          <div className="relative pl-6 md:pl-8">
            <div className="absolute left-2 top-2 bottom-2 w-px bg-white/10" />
            {formacao.map((f, i) => (
              <motion.div
                key={f.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative mb-8 last:mb-0"
              >
                <span className="absolute -left-6 md:-left-8 top-1.5 flex items-center justify-center w-4 h-4 rounded-full border-2 border-[#C9A97A] bg-[#0a0a0a]" />
                <div className="flex items-baseline gap-3 flex-wrap mb-1">
                  <span className="text-[#C9A97A] font-bold text-lg tabular-nums">{f.year}</span>
                  <span className="text-white/40 text-xs">·</span>
                  <span className="text-white/55 text-sm">{f.institution}</span>
                </div>
                <p className="text-white text-base md:text-lg font-medium">{f.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="py-12 md:py-16 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { icon: Calendar, label: 'Anni di esperienza', value: '10+' },
            { icon: Award, label: 'Recensioni Google', value: '4.7 / 5' },
            { icon: GraduationCap, label: 'Master in Med. Estetica', value: '2' },
            { icon: Languages, label: 'Lingue', value: 'IT · EN · AR' },
          ].map((f) => (
            <div
              key={f.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center"
            >
              <f.icon size={20} className="mx-auto mb-3 text-[#C9A97A]" />
              <p className="text-2xl md:text-3xl font-bold text-white tabular-nums">{f.value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-white/45">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Studio + CTA */}
      <section className="py-14 md:py-20 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
            Lo studio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/95 mb-4">
            Verona, Via S. Lucillo 16.
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Il primo passo è una conversazione. Prenota online o lasciami il tuo numero —
            ti richiamo personalmente.
          </p>

          <div className="inline-flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => open('Chi Sono CTA')}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A97A] px-8 py-4 text-black font-bold text-base hover:scale-[1.03] active:scale-[0.98] transition-transform cursor-pointer"
              style={{ boxShadow: '0 0 30px rgba(201,169,122,0.35)' }}
            >
              <Calendar size={16} />
              Prenota la consulenza            </button>
            <Link
              href="/chiamami"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/[0.08] px-8 py-4 text-[#25D366] font-medium text-base hover:bg-[#25D366]/[0.15] transition-colors"
            >
              <MessageCircle size={16} />
              Scrivimi su WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
