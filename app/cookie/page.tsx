import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy — Dr. Anton Kamel',
  description: 'Informativa sull\'uso dei cookie sul sito del Dr. Anton Kamel, ai sensi del Provvedimento Garante Privacy.',
  robots: { index: false, follow: false },
}

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white/80 py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs text-white/30 tracking-widest uppercase mb-4">Ultimo aggiornamento: aprile 2026</p>
        <h1 className="text-4xl font-bold text-white mb-2">Cookie Policy</h1>
        <p className="text-white/50 text-sm mb-12">
          Ai sensi del Provvedimento del Garante Privacy dell&apos;8 maggio 2014 e delle Linee Guida cookie 2021
        </p>

        <div className="space-y-10 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Cosa sono i cookie?</h2>
            <p>
              I cookie sono piccoli file di testo salvati sul tuo dispositivo quando visiti un sito web. Consentono al sito di ricordare le tue preferenze e di raccogliere informazioni sulle modalità di utilizzo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Cookie utilizzati su questo sito</h2>

            <div className="space-y-4 mt-4">

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p className="font-semibold text-white/90">Cookie tecnici necessari</p>
                  <span className="shrink-0 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1">Sempre attivi</span>
                </div>
                <p className="text-white/50">
                  Necessari per il corretto funzionamento del sito e per memorizzare le tue preferenze cookie. Non raccolgono dati personali identificabili.
                </p>
                <p className="text-white/40 text-xs mt-2">Scadenza: sessione o 1 anno (preferenze cookie)</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p className="font-semibold text-white/90">Meta Pixel (Facebook/Instagram)</p>
                  <span className="shrink-0 text-xs rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-3 py-1">Richiede consenso</span>
                </div>
                <p className="text-white/50">
                  Cookie di profilazione di terze parti (Meta Platforms Ireland Ltd.) che tracciano le azioni degli utenti sul sito per misurare l&apos;efficacia delle campagne pubblicitarie su Facebook e Instagram. Attivati solo previo tuo consenso esplicito.
                </p>
                <div className="mt-3 space-y-1">
                  <p className="text-white/40 text-xs">Gestore: Meta Platforms Ireland Ltd. — <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-[#C9A97A] hover:underline">Privacy Policy Meta</a></p>
                  <p className="text-white/40 text-xs">Scadenza: fino a 180 giorni</p>
                  <p className="text-white/40 text-xs">Trasferimento dati: USA (Data Privacy Framework UE-USA)</p>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p className="font-semibold text-white/90">Cookie di terze parti (Skipres)</p>
                  <span className="shrink-0 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1">Tecnici</span>
                </div>
                <p className="text-white/50">
                  Il modulo di prenotazione è gestito da Skipres. Skipres potrebbe impostare cookie tecnici necessari al funzionamento del sistema di prenotazione.
                </p>
                <p className="text-white/40 text-xs mt-2">Gestore: Skipres — consulta la loro privacy policy per dettagli</p>
              </div>

            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Come gestire i cookie</h2>
            <p className="mb-3">
              Puoi modificare le tue preferenze in qualsiasi momento in questi modi:
            </p>
            <ul className="space-y-2 list-disc list-inside text-white/60">
              <li>
                <strong className="text-white/80">Banner cookie</strong> — al tuo prossimo accesso, se cancelli i cookie del browser, il banner verrà mostrato nuovamente
              </li>
              <li>
                <strong className="text-white/80">Impostazioni browser</strong> — puoi bloccare o eliminare tutti i cookie dalle impostazioni del tuo browser. Tieni presente che disabilitare i cookie tecnici potrebbe compromettere alcune funzionalità del sito
              </li>
              <li>
                <strong className="text-white/80">Opt-out Meta</strong> — puoi disattivare la personalizzazione degli annunci Meta visitando <a href="https://www.facebook.com/settings/?tab=ads" target="_blank" rel="noopener noreferrer" className="text-[#C9A97A] hover:underline">facebook.com/settings</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Modifiche a questa policy</h2>
            <p>
              Questa Cookie Policy può essere aggiornata. In caso di modifiche sostanziali, ti informeremo tramite il banner cookie al tuo prossimo accesso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contatti</h2>
            <p>
              Per domande sulla gestione dei cookie, contattaci tramite i canali indicati nella{' '}
              <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/privacy`} className="text-[#C9A97A] hover:underline">Privacy Policy</a>.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <a href="/" className="text-[#C9A97A] hover:text-white transition-colors">
            ← Torna alla Home
          </a>
        </div>
      </div>
    </main>
  )
}
