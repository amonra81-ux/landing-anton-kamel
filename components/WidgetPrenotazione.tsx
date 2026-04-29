'use client'

export default function WidgetPrenotazione() {
  return (
    <section id="prenota" className="bg-[#0a0a0a] py-32 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white/90 mb-4">
            Prenota il tuo consulto.
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Scegli il trattamento, il giorno e l&apos;orario. In meno di 2 minuti.
          </p>
        </div>

        {/* Widget container */}
        <div className="max-w-2xl mx-auto border border-white/10 rounded-2xl overflow-hidden">
          <iframe
            src="https://skipres.com/steps/antonkamel/1266"
            width="100%"
            height="700"
            frameBorder="0"
            title="Prenota un appuntamento con Anton Kamel"
            style={{
              borderRadius: '16px',
              background: 'transparent',
              display: 'block',
            }}
          />
        </div>

        {/* Trust note */}
        <p className="text-center text-white/30 text-xs mt-6">
          Prenotazione sicura · Riceverai conferma via email o SMS
        </p>
      </div>
    </section>
  )
}
