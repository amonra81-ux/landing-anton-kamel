'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faq = [
  {
    q: 'È necessario un consulto prima di qualsiasi trattamento?',
    a: 'Sì, sempre. Prima di procedere con qualsiasi trattamento, Anton Kamel effettua una visita conoscitiva per capire le tue esigenze, valutare le caratteristiche del tuo viso e spiegarti in modo chiaro cosa aspettarti. Non si inizia mai senza una conversazione.',
  },
  {
    q: 'I risultati sembreranno naturali?',
    a: 'È la priorità assoluta. L\'obiettivo non è cambiare il tuo viso, ma valorizzarlo. I trattamenti sono calibrati sulle tue proporzioni naturali: nessun effetto "gonfiato" o "rifatto", solo una versione più riposata e armoniosa di te.',
  },
  {
    q: 'I trattamenti fanno male?',
    a: 'La maggior parte dei trattamenti iniettivi prevede l\'uso di creme anestetiche topiche o di prodotti già contenenti anestetico locale (come la lidocaina nei filler). Il fastidio è generalmente molto lieve e tollerabile.',
  },
  {
    q: 'Quanto durano i risultati del filler?',
    a: 'Dipende dal tipo di filler, dalla zona trattata e dal metabolismo individuale. In media, i filler con acido ialuronico durano tra i 9 e i 18 mesi. Il botox ha una durata di circa 4–6 mesi. Durante il consulto riceverai indicazioni precise per il tuo caso.',
  },
  {
    q: 'Posso fare i trattamenti se sono in gravidanza o allattamento?',
    a: 'No. I trattamenti di medicina estetica iniettiva (filler, botulino, biostimolatori) non sono indicati durante la gravidanza e l\'allattamento. È consigliabile attendere il termine del periodo.',
  },
  {
    q: 'Cosa sono i fili riassorbibili?',
    a: 'I fili riassorbibili sono sottili filamenti inseriti sotto la pelle con un ago, che creano un effetto tensore immediato e stimolano la produzione di collagene nel tempo. Si riassorbono naturalmente in 12–18 mesi. Sono indicati per il rilassamento cutaneo del viso e del collo.',
  },
  {
    q: 'Il botulino blocca le espressioni del viso?',
    a: 'Se eseguito correttamente, no. La tossina botulinica agisce selettivamente sui muscoli responsabili delle rughe dinamiche, senza eliminare le espressioni naturali. Il risultato è un viso più rilassato, non immobile.',
  },
  {
    q: 'Cos\'è il rinofiller e come funziona?',
    a: 'Il rinofiller è una tecnica di medicina estetica che utilizza filler a base di acido ialuronico per correggere piccole irregolarità del naso (gobba, punta, asimmetrie) senza intervento chirurgico. Il risultato è immediato, il recupero minimo e l\'effetto dura mediamente 12–18 mesi.',
  },
  {
    q: 'Il botulino per il bruxismo funziona davvero?',
    a: 'Sì. L\'iniezione di tossina botulinica nel muscolo massetere riduce la contrazione involontaria che causa il digrignamento dei denti e le tensioni alla mandibola. Oltre al beneficio estetico (jaw slimming), molti pazienti riferiscono un significativo miglioramento dei sintomi: meno cefalee, meno tensioni al collo, sonno migliore.',
  },
  {
    q: 'Posso combinare più trattamenti nella stessa seduta?',
    a: 'In molti casi sì, e spesso è la scelta più efficace. Durante il consulto verrà valutato insieme a te un piano di trattamento completo, stabilendo eventuali sequenze e tempistiche ottimali per ottenere il risultato migliore in sicurezza.',
  },
  {
    q: 'Ci sono controindicazioni?',
    a: 'Alcune malattie croniche, terapie farmacologiche in corso e allergie accertate possono rappresentare controindicazioni o richiedere un approccio modificato. È fondamentale comunicare al medico il proprio stato di salute completo durante il consulto. La visita preliminare serve proprio a questo.',
  },
  {
    q: 'Come mi preparo alla prima visita?',
    a: 'Non è necessaria alcuna preparazione speciale. Vieni senza trucco se possibile (per una valutazione più precisa della pelle), portando con te l\'elenco di eventuali farmaci che assumi e qualsiasi informazione utile sulla tua storia clinica. Il resto lo facciamo insieme.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-[#0a0a0a] py-32 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white/90 mb-4">
            Hai qualche domanda?
          </h2>
          <p className="text-white/60 text-lg">
            Le risposte più comuni. Per arrivare al consulto già informata/o.
          </p>
        </motion.div>

        {/* Accordion */}
        <div>
          {faq.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="border-b border-white/10 last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left gap-4 group cursor-pointer"
                aria-expanded={openIndex === i}
              >
                <span
                  className={`text-base md:text-lg font-medium transition-colors duration-200 ${
                    openIndex === i ? 'text-white' : 'text-white/80 group-hover:text-white'
                  }`}
                >
                  {item.q}
                </span>
                <span className="shrink-0 text-[#C9A97A]">
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-white/60 text-base leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
