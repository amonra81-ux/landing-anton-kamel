import React from 'react'

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white/80 py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
        
        <div className="space-y-6 text-sm leading-relaxed">
          <p>
            Questa Cookie Policy spiega cosa sono i cookie e come li utilizziamo sul sito del Dott. Anton Kamel. Ti invitiamo a leggere questa policy per comprendere quali tipi di cookie utilizziamo, le informazioni che raccogliamo usando i cookie e come tali informazioni vengono utilizzate.
          </p>

          <h2 className="text-2xl text-white mt-8 mb-4">Cosa sono i cookie?</h2>
          <p>
            I cookie sono piccoli file di testo che vengono utilizzati per memorizzare piccole informazioni. Vengono memorizzati sul tuo dispositivo quando il sito web viene caricato sul tuo browser. Questi cookie ci aiutano a far funzionare correttamente il sito web, a renderlo più sicuro, a fornire un'esperienza utente migliore e a capire come il sito web si comporta.
          </p>

          <h2 className="text-2xl text-white mt-8 mb-4">Come utilizziamo i cookie?</h2>
          <p>
            Come la maggior parte dei servizi online, il nostro sito web utilizza cookie di prima parte e di terze parti per diversi scopi. I cookie di prima parte sono per lo più necessari affinché il sito web funzioni correttamente e non raccolgono alcun tuo dato personale identificabile.
          </p>
          <p>
            I cookie di terze parti utilizzati sul nostro sito web servono principalmente a capire come si comporta il sito web, come interagisci con il nostro sito, a mantenere i nostri servizi sicuri e a fornirti un'esperienza utente migliore e migliorata, oltre ad aiutarti a velocizzare le tue interazioni future con il nostro sito.
          </p>

          <h2 className="text-2xl text-white mt-8 mb-4">Cookie di Monitoraggio e Analisi (Meta Pixel)</h2>
          <p>
            Questo sito utilizza tecnologie di tracciamento come il Meta Pixel per analizzare il traffico, misurare l'efficacia delle campagne pubblicitarie e capire meglio il comportamento degli utenti. Questi strumenti possono raccogliere informazioni anonimizzate sulle tue interazioni con il sito.
          </p>

          <h2 className="text-2xl text-white mt-8 mb-4">Come posso controllare le preferenze dei cookie?</h2>
          <p>
            Puoi gestire le tue preferenze sui cookie in qualsiasi momento modificando le impostazioni del tuo browser per bloccare o eliminare i cookie. Tuttavia, tieni presente che se scegli di bloccare i cookie, potresti non essere in grado di utilizzare appieno tutte le funzionalità del nostro sito web.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <a href="/" className="text-[#C9A97A] hover:text-white transition-colors">
            &larr; Torna alla Home
          </a>
        </div>
      </div>
    </main>
  )
}
