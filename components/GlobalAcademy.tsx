'use client'

import { motion } from 'framer-motion'
import { Globe } from './Globe'
import { Users, Award, Globe as GlobeIcon, ArrowUpRight } from 'lucide-react'

// Coordinate [latitudine, longitudine]
const ANTON: [number, number] = [45.4425, 10.9911] // Verona

const members = [
  {
    id: 'anton',
    name: 'Dr. Anton Kamel',
    city: 'Verona, Italia',
    handle: '@dr.antonlips',
    url: 'https://www.instagram.com/dr.antonlips/',
    location: ANTON,
    you: true,
  },
  {
    id: 'latifi',
    name: 'Dr. Latifi Radwan',
    city: 'Modena, Italia',
    handle: '@dr.latilips',
    url: 'https://www.instagram.com/dr.latilips/',
    location: [44.6471, 10.9252] as [number, number],
  },
  {
    id: 'ghofran',
    name: 'Dr. Ghofran',
    city: 'Italia',
    handle: '@thedrghofran',
    url: 'https://www.instagram.com/thedrghofran/',
    location: [41.9028, 12.4964] as [number, number], // Roma area
    badge: '81k follower',
  },
  {
    id: 'nahla',
    name: 'Dr. Nahla Elsantawy',
    city: 'Cairo, Egitto',
    handle: '@dr.nahla_elsantawy',
    url: 'https://www.instagram.com/dr.nahla_elsantawy/',
    location: [30.0444, 31.2357] as [number, number],
    badge: '124k follower',
  },
  {
    id: 'arisa',
    name: 'Dr. Arisa Sinanaj',
    city: 'Tirana, Albania',
    handle: '@dr.arisa_',
    url: 'https://www.instagram.com/dr.arisa_/',
    location: [41.3275, 19.8187] as [number, number],
    badge: '73k follower',
  },
]

const globeMarkers = members.map((m) => ({
  id: m.id,
  location: m.location,
  label: m.city.split(',')[0],
}))

// Anton è il centro: archi da Anton verso ogni altro
const globeArcs = members
  .filter((m) => !m.you)
  .map((m) => ({
    id: `arc-${m.id}`,
    from: ANTON,
    to: m.location,
  }))

export default function GlobalAcademy() {
  return (
    <section
      id="academy"
      className="relative bg-[#0a0a0a] py-16 sm:py-24 md:py-32 px-6 border-t border-white/10 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C9A97A] opacity-[0.03] blur-[180px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
            Network internazionale
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/95 mb-4">
            Global Experts Academy.
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Anton è membro di un network di medici estetici internazionale che condivide
            tecniche, formazione e protocolli. Aggiornamento continuo, confronto costante.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-3 gap-3 sm:gap-6 mb-10 md:mb-14 max-w-3xl mx-auto"
        >
          {[
            { icon: GlobeIcon, value: '4', label: 'Paesi' },
            { icon: Users, value: '300k+', label: 'Follower combinati' },
            { icon: Award, value: '5000+', label: 'Medici formati' },
          ].map((s) => (
            <div
              key={s.label}
              className="text-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-5"
            >
              <s.icon size={18} className="mx-auto mb-2 text-[#C9A97A]" />
              <p className="text-xl md:text-2xl font-bold text-white tabular-nums">{s.value}</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/45">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Globe + members */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Globo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mx-auto w-full max-w-[440px]"
          >
            <Globe markers={globeMarkers} arcs={globeArcs} />
            <p className="mt-4 text-center text-xs text-white/35 italic">
              Trascina il globo per esplorare
            </p>
          </motion.div>

          {/* Lista membri */}
          <div className="space-y-3">
            {members.map((m, i) => (
              <motion.a
                key={m.id}
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group flex items-center gap-4 rounded-2xl border p-4 md:p-5 transition-colors ${
                  m.you
                    ? 'border-[#C9A97A]/40 bg-[#C9A97A]/[0.06]'
                    : 'border-white/10 bg-white/[0.03] hover:border-[#C9A97A]/30 hover:bg-white/[0.06]'
                }`}
              >
                {/* Pin */}
                <div
                  className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full border ${
                    m.you ? 'border-[#C9A97A] bg-[#C9A97A]/15' : 'border-white/15 bg-white/5'
                  }`}
                >
                  <span className={`text-xs font-bold ${m.you ? 'text-[#C9A97A]' : 'text-white/55'}`}>
                    {m.id === 'anton' ? 'AK' : m.name.split(' ').slice(-1)[0][0] + (m.name.split(' ')[1]?.[0] || '')}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <p className={`font-semibold text-sm md:text-base truncate ${m.you ? 'text-white' : 'text-white/90'}`}>
                      {m.name}
                    </p>
                    {m.you && (
                      <span className="inline-flex items-center text-[9px] font-bold uppercase tracking-wider rounded-full bg-[#C9A97A] text-black px-2 py-0.5">
                        Anton
                      </span>
                    )}
                    {m.badge && (
                      <span className="text-[10px] uppercase tracking-wider text-[#C9A97A]/80 tabular-nums">
                        {m.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-white/45 text-xs mt-0.5">
                    {m.city} · <span className="text-white/55">{m.handle}</span>
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-white/30 group-hover:text-[#C9A97A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </motion.a>
            ))}

            {/* Link academy */}
            <motion.a
              href="https://www.instagram.com/global.experts.academy/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="block text-center pt-3 text-xs text-white/40 hover:text-[#C9A97A] transition-colors"
            >
              Scopri @global.experts.academy →
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
