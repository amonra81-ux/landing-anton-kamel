import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://amonra81-ux.github.io/landing-anton-kamel'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/grazie/'], // pagina post-conversione, no indicizzazione
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  }
}
