'use client'

import { motion, Variants, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { Stethoscope, Sparkles, ShieldCheck } from 'lucide-react'

const reasons = [
  {
    icon: Stethoscope,
    title: 'Medico prima di tutto',
    text: 'Anton Kamel non lavora sull\'aspetto. Lavora sulla persona. Ogni consulenza parte dall\'ascolto: chi sei, cosa senti, cosa vuoi davvero.',
  },
  {
    icon: Sparkles,
    title: 'Nessun risultato standard',
    text: 'Ogni viso racconta una storia diversa. I trattamenti sono costruiti attorno alle tue proporzioni, non su un modello ideale prestabilito.',
  },
  {
    icon: ShieldCheck,
    title: 'Trasparenza totale',
    text: 'Prima di qualsiasi trattamento, una conversazione aperta su aspettative, tempi, rischi e risultati attesi. Nessuna sorpresa.',
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function PercheScegliere() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const rawY = useTransform(scrollYProgress, [0, 1], [30, -30])
  const bgY = useSpring(rawY, { stiffness: 60, damping: 20 })

  return (
    <section ref={sectionRef} id="perche" className="relative bg-[#0a0a0a] py-16 sm:py-24 md:py-32 px-6 overflow-hidden">
      {/* Soft parallax glow */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div className="w-[700px] h-[400px] rounded-full bg-[#C9A97A] opacity-[0.025] blur-[140px]" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white/90 mb-5">
            Perché scegliere Anton Kamel.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Medicina estetica non significa cambiare. Significa riconoscersi.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors duration-300 hover:border-[#C9A97A]/30 hover:bg-white/[0.08] cursor-default"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.18 + 0.2, ease: 'backOut' }}
                className="mb-6 inline-flex rounded-xl bg-[#C9A97A]/10 p-3 group-hover:bg-[#C9A97A]/20 transition-colors duration-300"
              >
                <Icon className="text-[#C9A97A]" size={28} />
              </motion.div>
              <h3 className="mb-3 text-xl font-semibold text-white/90">{title}</h3>
              <p className="text-white/55 text-base leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
