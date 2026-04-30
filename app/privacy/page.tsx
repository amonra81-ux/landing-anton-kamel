import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Dr. Anton Kamel',
  description: 'Informativa sul trattamento dei dati personali ai sensi del GDPR (Reg. UE 2016/679).',
  robots: { index: false, follow: false },
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white/80 py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs text-white/30 tracking-widest uppercase mb-4">Ultimo aggiornamento: aprile 2026</p>
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-white/50 text-sm mb-12">
          Informativa ai sensi dell&apos;art. 13 del Regolamento UE 2016/679 (GDPR)
        </p>

        <div className="space-y-10 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Titolare del Trattamento</h2>
            <p>
              Il titolare del trattamento è il <strong className="text-white">Dott. Anton Kamel</strong>, medico estetico con studio a Verona (VR), Italia.
            </p>
            <p className="mt-2">
              Per esercitare i tuoi diritti o richiedere informazioni, puoi contattarci tramite:
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-white/60">
              <li>WhatsApp: <a href="https://wa.me/393801035896" className="text-[#C9A97A] hover:underline">+39 380 103 5896</a></li>
              <li>Instagram: <a href="https://www.instagram.com/dr.antonlips/" target="_blank" rel="noopener noreferrer" className="text-[#C9A97A] hover:underline">@dr.antonlips</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Dati Raccolti</h2>
            <p>Questo sito raccoglie le seguenti categorie di dati:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/60">
              <li><strong className="text-white/80">Dati di navigazione</strong> — indirizzo IP, tipo di browser, pagine visitate, orario di accesso. Raccolti automaticamente dai sistemi informatici.</li>
              <li><strong className="text-white/80">Dati forniti volontariamente</strong> — nome, numero di telefono, email, note sul trattamento desiderato, inseriti tramite il sistema di prenotazione (Skipres) o messaggistica.</li>
              <li><strong className="text-white/80">Dati di profilazione (solo con consenso)</strong> — comportamento di navigazione raccolto tramite Meta Pixel (Facebook/Instagram) per misurare l&apos;efficacia delle campagne pubblicitarie.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Finalità e Base Giuridica</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="font-medium text-white/90">Gestione delle prenotazioni</p>
                <p className="text-white/50 mt-1">Base giuridica: esecuzione di un contratto (art. 6 lett. b GDPR). Dati conservati per la durata del rapporto + 10 anni per obblighi fiscali.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="font-medium text-white/90">Analisi del traffico e sicurezza del sito</p>
                <p className="text-white/50 mt-1">Base giuridica: legittimo interesse (art. 6 lett. f GDPR). Dati anonimi conservati per 30 giorni.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="font-medium text-white/90">Marketing e campagne pubblicitarie (Meta Pixel)</p>
                <p className="text-white/50 mt-1">Base giuridica: consenso (art. 6 lett. a GDPR). Puoi revocare il consenso in qualsiasi momento dal banner cookie o dalle impostazioni del browser.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Condivisione dei Dati</h2>
            <p>I dati personali non vengono venduti a terzi. Possono essere condivisi con:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-white/60">
              <li><strong className="text-white/80">Skipres</strong> (sistema di prenotazione) — responsabile del trattamento ai sensi dell&apos;art. 28 GDPR</li>
              <li><strong className="text-white/80">Meta Platforms Ireland Ltd.</strong> — solo previo tuo consenso esplicito, per la gestione del Meta Pixel</li>
              <li><strong className="text-white/80">Autorità competenti</strong> — quando richiesto dalla legge</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Trasferimento Internazionale dei Dati</h2>
            <p>
              Meta Platforms può trasferire dati negli USA. Tale trasferimento avviene nel rispetto delle garanzie previste dal Data Privacy Framework UE-USA e dalle clausole contrattuali standard approvate dalla Commissione Europea.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. I Tuoi Diritti (art. 15–22 GDPR)</h2>
            <p>Hai il diritto di:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-white/60">
              <li>Accedere ai tuoi dati personali</li>
              <li>Chiederne la rettifica o l&apos;aggiornamento</li>
              <li>Chiederne la cancellazione (&ldquo;diritto all&apos;oblio&rdquo;)</li>
              <li>Opporti al trattamento o chiederne la limitazione</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Revocare il consenso in qualsiasi momento senza pregiudizio per la liceità del trattamento precedente</li>
              <li>Proporre reclamo al Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#C9A97A] hover:underline">garanteprivacy.it</a>)</li>
            </ul>
            <p className="mt-3">
              Per esercitare questi diritti, contattaci tramite i canali indicati al punto 1. Risponderemo entro 30 giorni.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Cookie</h2>
            <p>
              Per informazioni dettagliate sui cookie utilizzati, consulta la nostra{' '}
              <a href="/cookie" className="text-[#C9A97A] hover:underline">Cookie Policy</a>.
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
