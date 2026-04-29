import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
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
  openGraph: {
    title: 'Dr. Anton Kamel — Medico Estetico a Verona',
    description:
      'Scopri i trattamenti di medicina estetica del Dr. Anton Kamel. Risultati naturali, approccio medico, massima trasparenza. Studio a Verona.',
    url: 'https://antonkamel.it',
    siteName: 'Anton Kamel Medico Estetico',
    locale: 'it_IT',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={inter.variable}>
      <head>
        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1957888308158186');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1957888308158186&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
