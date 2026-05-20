import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CookieBanner from '@/components/CookieBanner'
import { BookingProvider } from '@/components/BookingProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Dr. Anton Kamel — Medico Estetico a Verona | Consulenza & Prenotazione',
  description:
    'Medicina estetica premium a Verona. Filler, botulino, biorivitalizzazione e trattamenti personalizzati con il Dr. Anton Kamel. Prenota la tua consulenza online.',
  alternates: {
    canonical: 'https://antonkamel.it',
  },
  openGraph: {
    title: 'Dr. Anton Kamel — Medico Estetico a Verona',
    description:
      'Scopri i trattamenti di medicina estetica del Dr. Anton Kamel. Risultati naturali, approccio medico, massima trasparenza. Studio a Verona.',
    url: 'https://antonkamel.it',
    siteName: 'Anton Kamel Medico Estetico',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: 'https://antonkamel.it/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Anton Kamel — Medico Estetico a Verona',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Anton Kamel — Medico Estetico a Verona',
    description: 'Medicina estetica premium a Verona. Risultati naturali, approccio medico.',
    images: ['https://antonkamel.it/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Anton Kamel',
  description:
    'Medico chirurgo specializzato in medicina estetica a Verona. Ideatore della tecnica Anton Lips, esperto Russian Lips. Filler, botulino, biorivitalizzazione.',
  url: 'https://antonkamel.it',
  telephone: '+39 380 103 5896',
  image: 'https://antonkamel.it/og-image.jpg',
  priceRange: '€€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via San Lucillo 16',
    addressLocality: 'Verona',
    postalCode: '37100',
    addressRegion: 'VR',
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.4425759,
    longitude: 10.9410775,
  },
  sameAs: [
    'https://www.instagram.com/dr.antonlips/',
    'https://www.facebook.com/dott.antonkamel/',
    'https://www.doctolib.it/medico-estetico/verona/anton-kamel',
    'https://skipres.com/antonkamel',
  ],
  medicalSpecialty: 'PlasticSurgery',
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Università degli Studi di Verona' },
    { '@type': 'CollegeOrUniversity', name: 'Università degli Studi di Padova' },
  ],
  knowsLanguage: ['it', 'en', 'ar'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '79',
    bestRating: '5',
    worstRating: '1',
  },
  availableService: [
    { '@type': 'MedicalProcedure', name: 'Filler labbra (Anton Lips Technique)' },
    { '@type': 'MedicalProcedure', name: 'Filler labbra (Russian Lips Technique)' },
    { '@type': 'MedicalProcedure', name: 'Filler viso (zigomi, mento, mandibola)' },
    { '@type': 'MedicalProcedure', name: 'Tossina botulinica' },
    { '@type': 'MedicalProcedure', name: 'Polilattato (stimolatore collagene)' },
    { '@type': 'MedicalProcedure', name: 'Nefertiti lift collo' },
    { '@type': 'MedicalProcedure', name: 'Trattamento cellulite' },
    { '@type': 'MedicalProcedure', name: 'Botulino massetere (bruxismo)' },
    { '@type': 'MedicalProcedure', name: 'Biorivitalizzazione' },
    { '@type': 'MedicalProcedure', name: 'Fili di lifting riassorbibili' },
    { '@type': 'MedicalProcedure', name: 'Skinbooster' },
    { '@type': 'MedicalProcedure', name: 'Peeling chimico' },
    { '@type': 'MedicalProcedure', name: 'Armonizzazione facciale' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'È necessaria una consulenza prima di qualsiasi trattamento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì, sempre. Prima di qualsiasi trattamento il Dr. Anton Kamel effettua una visita conoscitiva per valutare le tue esigenze, le caratteristiche del viso e spiegare cosa aspettarsi.',
      },
    },
    {
      '@type': 'Question',
      name: 'I risultati sembreranno naturali?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'È la priorità assoluta. I trattamenti sono calibrati sulle proporzioni naturali del paziente: nessun effetto gonfiato o rifatto, solo una versione più riposata e armoniosa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto durano i risultati del filler?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I filler con acido ialuronico durano in media tra i 9 e i 18 mesi, a seconda del tipo, della zona trattata e del metabolismo individuale. Il botox dura circa 4–6 mesi.',
      },
    },
    {
      '@type': 'Question',
      name: 'I trattamenti fanno male?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La maggior parte dei trattamenti iniettivi prevede creme anestetiche topiche o prodotti già contenenti anestetico locale (lidocaina nei filler). Il fastidio è generalmente lieve e tollerabile.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cos\'è la tecnica Anton Lips?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anton Lips Technique è una tecnica proprietaria di filler labbra ideata dal Dr. Anton Kamel. Punta a un risultato naturale, definito e simmetrico, evitando l\'effetto «papera» tipico di tecniche standard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dove si trova lo studio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lo studio del Dr. Anton Kamel è in Via San Lucillo 16, 37100 Verona. Si prenota online tramite Skipres o telefonicamente al 380 103 5896.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={inter.variable}>
      <head>
        {/* Preconnect risorse esterne critiche */}
        <link rel="preconnect" href="https://skipres.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link
          rel="preload"
          as="image"
          href="/landing-anton-kamel/anton-avatar.jpg?v=3"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <BookingProvider>
          {children}
          <CookieBanner />
        </BookingProvider>
      </body>
    </html>
  )
}
