import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Note Legali — Dr. Anton Kamel',
  description:
    'Note legali, identificazione del titolare, direttore sanitario, Ordine Medici, informativa pubblicità sanitaria L. 145/2018.',
  robots: { index: false, follow: false },
}

export default function NoteLegali() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white/80 py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs text-white/30 tracking-widest uppercase mb-4">
          Ultimo aggiornamento: maggio 2026
        </p>
        <h1 className="text-4xl font-bold text-white mb-2">Note Legali</h1>
        <p className="text-white/50 text-sm mb-12">
          Informazioni obbligatorie ai sensi della normativa italiana — D.Lgs.
          70/2003 (commercio elettronico) e L. 145/2018 (pubblicità sanitaria).
        </p>

        <div className="space-y-10 text-sm leading-relaxed">

          {/* Identificazione */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Identificazione del titolare
            </h2>
            <ul className="space-y-1 text-white/65">
              <li><strong className="text-white/85">Denominazione:</strong> Dott. Anton Kamel</li>
              <li><strong className="text-white/85">Qualifica:</strong> Medico Chirurgo specialista in Medicina Estetica</li>
              <li><strong className="text-white/85">Sede legale:</strong> Via Vincenzo Monti 1, 37015 Sant&apos;Ambrogio di Valpolicella (VR)</li>
              <li><strong className="text-white/85">Studio operativo:</strong> Via San Lucillo 16, 37100 Verona (VR)</li>
              <li><strong className="text-white/85">P. IVA:</strong> <span className="tabular-nums">04276600238</span></li>
              <li><strong className="text-white/85">C.F.:</strong> <span className="tabular-nums">NTNKML83D23Z226B</span></li>
              <li><strong className="text-white/85">Tel / WhatsApp:</strong> +39 380 103 5896 (solo messaggi)</li>
              <li>
                <strong className="text-white/85">Sito web:</strong>{' '}
                <a href="/" className="text-[#C9A97A] hover:underline">antonkamel.it</a>
              </li>
            </ul>
          </section>

          {/* Direttore sanitario */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Direttore sanitario
            </h2>
            <p>
              Direttore sanitario dello studio:{' '}
              <strong className="text-white/90">Dott. Anton Kamel</strong>, medico
              chirurgo, iscritto all&apos;Ordine dei Medici Chirurghi e degli
              Odontoiatri della Provincia di Verona{' '}
              <span className="text-white/40">[n° iscrizione da inserire]</span>.
            </p>
            <p className="mt-2 text-white/55">
              Laurea in Medicina e Chirurgia conseguita presso l&apos;Università degli
              Studi di Verona (2014). Master di II livello in Medicina Estetica:
              Università degli Studi di Padova (2017) e Università degli Studi di
              Verona (2019).
            </p>
          </section>

          {/* Pubblicità sanitaria */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Pubblicità sanitaria informativa
            </h2>
            <p>
              Le informazioni sui trattamenti pubblicate su questo sito hanno
              esclusiva natura{' '}
              <strong className="text-white/90">informativa e non promozionale</strong>{' '}
              e sono diffuse ai sensi della Legge 30 dicembre 2018, n. 145 (art. 1
              co. 525) e nel rispetto del Codice di Deontologia Medica della
              FNOMCeO.
            </p>
            <p className="mt-3">
              I contenuti rispettano i principi di:
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-white/60">
              <li>trasparenza, veridicità, correttezza e non equivocità</li>
              <li>tutela della salute pubblica come bene primario</li>
              <li>divieto di induzione di prestazioni superflue</li>
              <li>divieto di sfruttare la fiducia o la suggestione dei pazienti</li>
            </ul>
          </section>

          {/* Disclaimer trattamenti */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Disclaimer sui trattamenti
            </h2>
            <ul className="space-y-2 list-disc list-inside text-white/60">
              <li>
                I trattamenti di medicina estetica iniettiva sono riservati a
                soggetti maggiorenni (<strong className="text-white/85">18+</strong>)
                e richiedono valutazione clinica preliminare in studio.
              </li>
              <li>
                I risultati indicati e le immagini eventualmente pubblicate hanno
                carattere indicativo e non vincolante:{' '}
                <strong className="text-white/85">
                  i risultati possono variare
                </strong>{' '}
                in base alle caratteristiche individuali del paziente.
              </li>
              <li>
                Le informazioni divulgative su prestazioni e tecniche{' '}
                <strong className="text-white/85">
                  non sostituiscono il consulto medico
                </strong>
                : controindicazioni, rischi e tempi di recupero vengono illustrati
                personalmente in fase di consulenza.
              </li>
              <li>
                I trattamenti sono controindicati in gravidanza e allattamento e
                in presenza di alcune patologie / terapie farmacologiche. Va
                sempre dichiarato lo stato di salute completo al medico.
              </li>
            </ul>
          </section>

          {/* Sistema booking esterno */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Sistema di prenotazione
            </h2>
            <p>
              Il sistema di prenotazione online utilizzato è{' '}
              <a
                href="https://skipres.com/antonkamel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A97A] hover:underline"
              >
                Skipres
              </a>
              , gestito da terzi in qualità di responsabile del trattamento ex
              art. 28 GDPR. Per i dettagli sui dati raccolti tramite il sistema di
              prenotazione consulta la{' '}
              <a href="/privacy" className="text-[#C9A97A] hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </section>

          {/* Proprietà intellettuale */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Proprietà intellettuale
            </h2>
            <p>
              Tutti i contenuti del sito (testi, immagini, logo, denominazioni
              quali «Anton Lips Technique™» e relativa metodica clinica) sono di
              esclusiva proprietà del Dott. Anton Kamel o dei rispettivi titolari
              e sono tutelati dalla normativa nazionale e internazionale sul
              diritto d&apos;autore e sui marchi.
            </p>
            <p className="mt-2 text-white/55">
              È vietata la riproduzione, anche parziale, senza autorizzazione
              scritta.
            </p>
          </section>

          {/* Limitazione responsabilità */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Limitazione di responsabilità
            </h2>
            <p>
              Il sito può contenere collegamenti a risorse esterne. Il titolare
              non è responsabile dei contenuti di tali siti né di eventuali danni
              derivanti dalla loro consultazione.
            </p>
            <p className="mt-2">
              Nonostante l&apos;impegno a mantenere le informazioni aggiornate,
              non si garantisce la totale assenza di errori. In caso di
              segnalazioni o errori contattare i recapiti indicati al punto 1.
            </p>
          </section>

          {/* Foro competente */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Legge applicabile e foro competente
            </h2>
            <p>
              Il presente sito è regolato dalla{' '}
              <strong className="text-white/85">legge italiana</strong>. Per ogni
              controversia è competente in via esclusiva il{' '}
              <strong className="text-white/85">Foro di Verona</strong>.
            </p>
          </section>

          {/* Reclami */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Segnalazioni e reclami
            </h2>
            <p>
              Per segnalazioni o reclami di natura sanitaria è possibile rivolgersi
              all&apos;Ordine dei Medici Chirurghi e degli Odontoiatri della
              Provincia di Verona (
              <a
                href="https://www.omceovr.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A97A] hover:underline"
              >
                omceovr.it
              </a>
              ).
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
