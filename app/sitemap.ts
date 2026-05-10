import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

// Quando Anton avrà dominio custom, cambia qui:
const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://amonra81-ux.github.io/landing-anton-kamel'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()
  const routes = [
    '',
    '/chi-sono',
    '/chiamami',
    '/contatti',
    '/studio',
    '/trattamenti/labbra',
    '/trattamenti/viso',
    '/trattamenti/rughe',
    '/trattamenti/pelle',
    '/tecniche/anton-lips',
    '/tecniche/russian-lips',
    '/per-te/prima-volta',
    '/per-te/correzione',
    '/per-te/armonizzazione',
    '/grazie',
    '/privacy',
    '/cookie',
  ]

  return routes.map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority:
      path === ''
        ? 1.0
        : path.startsWith('/trattamenti')
          ? 0.9
          : path.startsWith('/tecniche') || path.startsWith('/per-te')
            ? 0.8
            : 0.6,
  }))
}
