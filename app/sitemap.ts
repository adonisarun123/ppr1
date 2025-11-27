import type { MetadataRoute } from 'next'
import { site } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '',
    '/day-picnic',
    '/overnight-boarding',
    '/pricing',
    '/amenities',
    '/gallery',
    '/farmland-community',
    '/about',
    '/contact',
  ]

  const now = new Date()

  return pages.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.7,
  }))
}


