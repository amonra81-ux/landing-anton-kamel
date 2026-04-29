'use client'

import { motion, Variants } from 'framer-motion'
import { Stethoscope, Sparkles, ShieldCheck } from 'lucide-react'

const reasons = [
  {
    icon: Stethoscope,
    title: 'Medico prima di tutto',
    text: 'Anton Kamel non lavora sull\'aspetto. Lavora sulla persona. Ogni consulto parte dall\'ascolto: chi sei, cosa senti, cosa vuoi davvero.',
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
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

export default function PercheScegliere() {
  return (
    <section id="perche" className="bg-[#0a0a0a] py-32 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
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
              viewport={{ once: true }}
              variants={cardVariants}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-[#C9A97A]/30 hover:bg-white/[0.08]"
            >
              <div className="mb-6 inline-flex rounded-xl bg-[#C9A97A]/10 p-3">
                <Icon className="text-[#C9A97A]" size={28} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white/90">{title}</h3>
              <p className="text-white/55 text-base leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
