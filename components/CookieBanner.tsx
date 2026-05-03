'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

const PIXEL_ID = '1957888308158186'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export default function CookieBanner() {
  const [consent, setConsent] = useState<'granted' | 'denied' | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const stored = localStorage.getItem('cookie_consent')
    if (stored === 'granted' || stored === 'denied') {
      setConsent(stored)
    }
  }, [])

  // Rifire PageView ad ogni navigazione SPA
  useEffect(() => {
    if (consent !== 'granted') return
    window.fbq?.('track', 'PageView')
  }, [pathname, consent])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'granted')
    setConsent('granted')
  }

  const refuse = () => {
    localStorage.setItem('cookie_consent', 'denied')
    setConsent('denied')
  }

  return (
    <>
      {consent === 'granted' && (
        <>
          <Script
            id="facebook-pixel"
            strategy="afterInteractive"
            onReady={() => {
              // Segnala alle pagine che fbq è pronto
              window.dispatchEvent(new Event('fbq:ready'))
            }}
          >
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {consent === null && (
        <div
          role="dialog"
          aria-label="Preferenze cookie"
          className="fixed bottom-0 left-0 right-0 z-[200] border-t border-white/10 bg-[#111]/95 backdrop-blur-md px-6 py-5"
        >
          <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <p className="text-white/65 text-sm leading-relaxed">
              Utilizziamo cookie tecnici necessari e, previo consenso, cookie di profilazione (Meta Pixel) per misurare l&apos;efficacia delle campagne pubblicitarie.{' '}
              <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/cookie`} className="text-[#C9A97A] hover:underline underline-offset-2">
                Cookie Policy
              </a>{' '}
              ·{' '}
              <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/privacy`} className="text-[#C9A97A] hover:underline underline-offset-2">
                Privacy Policy
              </a>
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={refuse}
                className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/50 hover:text-white hover:border-white/40 transition-colors cursor-pointer"
              >
                Rifiuta
              </button>
              <button
                onClick={accept}
                className="rounded-full bg-[#C9A97A] px-5 py-2 text-sm font-semibold text-black hover:bg-white transition-colors cursor-pointer"
              >
                Accetta
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
