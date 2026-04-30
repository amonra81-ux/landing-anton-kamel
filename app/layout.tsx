import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CookieBanner from '@/components/CookieBanner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Dr. Anton Kamel — Medico Estetico a Verona | Consulto & Prenotazione',
  description:
    'Medicina estetica premium a Verona. Filler, botulino, rinofiller, biorivitalizzazione e trattamenti personalizzati con il Dr. Anton Kamel. Prenota il tuo consulto online.',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Anton Kamel',
  description: 'Medico estetico a Verona specializzato in medicina estetica non chirurgica: filler, botulino, rinofiller, biorivitalizzazione, fili di lifting.',
  url: 'https://antonkamel.it',
  telephone: '+39 380 103 5896',
  image: 'https://antonkamel.it/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Verona',
    addressRegion: 'VR',
    addressCountry: 'IT',
  },
  sameAs: [
    'https://www.instagram.com/dr.antonlips/',
  ],
  medicalSpecialty: 'PlasticSurgery',
  availableService: [
    { '@type': 'MedicalProcedure', 'name': 'Filler labbra' },
    { '@type': 'MedicalProcedure', 'name': 'Filler viso' },
    { '@type': 'MedicalProcedure', 'name': 'Rinofiller' },
    { '@type': 'MedicalProcedure', 'name': 'Tossina botulinica' },
    { '@type': 'MedicalProcedure', 'name': 'Biorivitalizzazione' },
    { '@type': 'MedicalProcedure', 'name': 'Fili di lifting riassorbibili' },
    { '@type': 'MedicalProcedure', 'name': 'Skinbooster' },
    { '@type': 'MedicalProcedure', 'name': 'Peeling chimico' },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
