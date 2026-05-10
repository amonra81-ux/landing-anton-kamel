'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Plus,
  Minus,
  Stethoscope,
  Sparkles,
  Clock,
  AlertCircle,
  Heart,
  HelpCircle,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type FAQItem = {
  q: string
  a: string
  icon: LucideIcon
}

const faq: FAQItem[] = [
  {
    icon: Stethoscope,
    q: 'È necessaria una consulenza prima di qualsiasi trattamento?',
    a: 'Sì, sempre. Prima di procedere con qualsiasi trattamento, Anton Kamel effettua una visita conoscitiva per capire le tue esigenze, valutare le caratteristiche del tuo viso e spiegarti in modo chiaro cosa aspettarti. Non si inizia mai senza una conversazione.',
  },
  {
    icon: Sparkles,
    q: 'I risultati sembreranno naturali?',
    a: 'È la priorità assoluta. L\'obiettivo non è cambiare il tuo viso, ma valorizzarlo. I trattamenti sono calibrati sulle tue proporzioni naturali: nessun effetto «gonfiato» o «rifatto», solo una versione più riposata e armoniosa di te.',
  },
  {
    icon: AlertCircle,
    q: 'I trattamenti fanno male?',
    a: 'La maggior parte dei trattamenti iniettivi prevede l\'uso di creme anestetiche topiche o di prodotti già contenenti anestetico locale (come la lidocaina nei filler). Il fastidio è generalmente molto lieve e tollerabile.',
  },
  {
    icon: Clock,
    q: 'Quanto durano i risultati del filler?',
    a: 'Dipende dal tipo di filler, dalla zona trattata e dal metabolismo individuale. In media, i filler con acido ialuronico durano tra i 9 e i 18 mesi. Il botox ha una durata di circa 4–6 mesi. Durante la consulenza riceverai indicazioni precise per il tuo caso.',
  },
  {
    icon: AlertCircle,
    q: 'Posso fare i trattamenti se sono in gravidanza o allattamento?',
    a: 'No. I trattamenti di medicina estetica iniettiva (filler, botulino, biostimolatori) non sono indicati durante la gravidanza e l\'allattamento. È consigliabile attendere il termine del periodo.',
  },
  {
    icon: Sparkles,
    q: 'Cosa sono i fili riassorbibili?',
    a: 'I fili riassorbibili sono sottili filamenti inseriti sotto la pelle con un ago, che creano un effetto tensore immediato e stimolano la produzione di collagene nel tempo. Si riassorbono naturalmente in 12–18 mesi. Sono indicati per il rilassamento cutaneo del viso e del collo.',
  },
  {
    icon: Heart,
    q: 'Il botulino blocca le espressioni del viso?',
    a: 'Se eseguito correttamente, no. La tossina botulinica agisce selettivamente sui muscoli responsabili delle rughe dinamiche, senza eliminare le espressioni naturali. Il risultato è un viso più rilassato, non immobile.',
  },
  {
    icon: Sparkles,
    q: 'Cos\'è il rinofiller e come funziona?',
    a: 'Il rinofiller è una tecnica di medicina estetica che utilizza filler a base di acido ialuronico per correggere piccole irregolarità del naso (gobba, punta, asimmetrie) senza intervento chirurgico. Il risultato è immediato, il recupero minimo e l\'effetto dura mediamente 12–18 mesi.',
  },
  {
    icon: Heart,
    q: 'Il botulino per il bruxismo funziona davvero?',
    a: 'Sì. L\'iniezione di tossina botulinica nel muscolo massetere riduce la contrazione involontaria che causa il digrignamento dei denti e le tensioni alla mandibola. Oltre al beneficio estetico (jaw slimming), molti pazienti riferiscono un significativo miglioramento dei sintomi: meno cefalee, meno tensioni al collo, sonno migliore.',
  },
  {
    icon: Stethoscope,
    q: 'Posso combinare più trattamenti nella stessa seduta?',
    a: 'In molti casi sì, e spesso è la scelta più efficace. Durante la consulenza verrà valutato insieme a te un piano di trattamento completo, stabilendo eventuali sequenze e tempistiche ottimali per ottenere il risultato migliore in sicurezza.',
  },
  {
    icon: AlertCircle,
    q: 'Ci sono controindicazioni?',
    a: 'Alcune malattie croniche, terapie farmacologiche in corso e allergie accertate possono rappresentare controindicazioni o richiedere un approccio modificato. È fondamentale comunicare al medico il proprio stato di salute completo durante la consulenza. La visita preliminare serve proprio a questo.',
  },
  {
    icon: HelpCircle,
    q: 'Come mi preparo alla prima visita?',
    a: 'Non è necessaria alcuna preparazione speciale. Vieni senza trucco se possibile (per una valutazione più precisa della pelle), portando con te l\'elenco di eventuali farmaci che assumi e qualsiasi informazione utile sulla tua storia clinica. Il resto lo facciamo insieme.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="relative bg-[#0a0a0a] py-16 sm:py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A97A] opacity-[0.025] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A97A] uppercase">
            Domande frequenti
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white/95 mb-4 leading-[1.05]">
            Hai qualche dubbio?
          </h2>
          <p className="text-white/55 text-base md:text-lg">
            Le risposte più comuni. Per arrivare alla consulenza già informata/o.
          </p>
        </motion.div>

        {/* Glass cards */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden divide-y divide-white/10">
          {faq.map((item, i) => {
            const isOpen = openIndex === i
            const Icon = item.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={`w-full flex items-start gap-4 px-5 sm:px-7 py-5 text-left transition-colors cursor-pointer ${
                    isOpen
                      ? 'bg-[#C9A97A]/[0.04]'
                      : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <span
                    className={`shrink-0 mt-0.5 flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${
                      isOpen
                        ? 'border-[#C9A97A]/40 bg-[#C9A97A]/15 text-[#C9A97A]'
                        : 'border-white/10 bg-white/[0.03] text-white/55'
                    }`}
                  >
                    <Icon size={14} strokeWidth={2} aria-hidden />
                  </span>

                  <span
                    className={`flex-1 text-base md:text-lg font-medium leading-snug transition-colors ${
                      isOpen ? 'text-white' : 'text-white/85'
                    }`}
                  >
                    {item.q}
                  </span>

                  <span className="shrink-0 mt-0.5 text-[#C9A97A] relative w-4 h-4">
                    <Plus
                      size={16}
                      strokeWidth={2.5}
                      className={`absolute inset-0 transition-opacity duration-200 ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                    <Minus
                      size={16}
                      strokeWidth={2.5}
                      className={`absolute inset-0 transition-opacity duration-200 ${
                        isOpen ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 px-5 sm:px-7 pl-[calc(0.5rem+2rem+1rem)] sm:pl-[calc(1.75rem+2rem+1rem)] text-white/65 text-base leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-xs text-white/35 max-w-md mx-auto leading-relaxed">
          Non hai trovato la risposta? Scrivi su WhatsApp o prenota la consulenza:
          chiarisco volentieri di persona.
        </p>
      </div>
    </section>
  )
}
