'use client'

import { Star, Quote, Calendar } from 'lucide-react'

// Abbiamo preparato un template con recensioni altamente performanti per la medicina estetica.
// Puoi inserire i testi esatti prendendoli da Google My Business.
const testimonials = [
  {
    name: "Marta R.",
    treatment: "Filler Labbra",
    text: "Il Dott. Kamel ha capito perfettamente cosa volevo. Il risultato è super naturale e armonioso con il mio viso. Non potrei essere più felice!",
    rating: 5,
  },
  {
    name: "Giulia B.",
    treatment: "Rinofiller",
    text: "Professionalità e gentilezza uniche. Mi sono sentita subito a mio agio fin dalla prima consulenza. Il risultato ha superato le mie aspettative.",
    rating: 5,
  },
  {
    name: "Chiara V.",
    treatment: "Tossina Botulinica",
    text: "Mani d'oro! Nessun dolore e un effetto finale wow, ma senza sembrare finta o artefatta. Tornerò sicuramente per altri trattamenti.",
    rating: 5,
  },
  {
    name: "Elena S.",
    treatment: "Biorivitalizzazione",
    text: "La mia pelle è letteralmente rinata. Luminosa, compatta e idratata. Un'esperienza a 5 stelle che consiglio a tutte le mie amiche.",
    rating: 5,
  },
  {
    name: "Francesca L.",
    treatment: "Armonizzazione Viso",
    text: "Risultato eccezionale e naturale. L'attenzione ai dettagli del dottore è incredibile. Mi sento molto più sicura di me stessa.",
    rating: 5,
  }
]

export default function SocialProof() {
  const handlePrenotaClick = () => {
    const el = document.querySelector('#prenota')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/10 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A97A] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10 px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Cosa dicono i pazienti.
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          Risultati reali e storie vere. La soddisfazione di chi si affida a noi è la nostra migliore garanzia.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group mb-16">
        {/* Gradient fades for edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap py-4">
          {/* Triplichiamo l'array per un loop continuo perfetto */}
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[400px] flex-none bg-white/[0.03] border border-white/10 rounded-2xl p-8 mx-4 relative hover:bg-white/[0.05] hover:border-[#C9A97A]/30 transition-all duration-300 flex flex-col whitespace-normal h-[300px]"
            >
              <Quote className="absolute top-6 right-6 text-white/10 w-8 h-8 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#C9A97A] text-[#C9A97A]" />
                ))}
              </div>
              
              <p className="text-white/80 text-sm leading-relaxed mb-8 flex-grow">
                "{testimonial.text}"
              </p>
              
              <div className="mt-auto border-t border-white/10 pt-4">
                <p className="text-white font-medium text-sm">{testimonial.name}</p>
                <p className="text-[#C9A97A] text-xs mt-1">{testimonial.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA section to push for booking */}
      <div className="mx-auto max-w-xl px-6 text-center mt-12 relative z-10">
        <button
          onClick={handlePrenotaClick}
          className="inline-flex items-center justify-center gap-3 bg-[#C9A97A] hover:bg-white text-black px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(201,169,122,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] cursor-pointer w-full sm:w-auto"
        >
          <Calendar size={20} />
          Prenota la tua consulenza
        </button>
        <p className="text-white/40 text-sm mt-4">
          I posti disponibili ogni mese sono limitati.
        </p>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33333%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
      `}} />
    </section>
  )
}
