import type { Metadata } from 'next'
import { site } from '@/lib/site-config'
import { content } from '@/lib/content'
import Script from 'next/script'
import { getServiceJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Our story, mission, values, and the dedicated team behind Pet Paradise Park—an enrichment‑first countryside destination for pets.',
  alternates: { canonical: `${site.url}/about` },
  keywords: [
    'pet resort',
    'dog boarding',
    'dog daycare',
    'sensory garden',
    'pet care team',
  ],
}

export default function AboutPage() {
  const orgServiceJsonLd = getServiceJsonLd({
    name: 'Pet Daycare & Boarding',
    description:
      'Premium day picnics and luxury farmland boarding with enrichment‑first care.',
    urlPath: '/about',
    offers: [],
  })
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold">About Us</h1>
      <p className="mt-4 text-slate-700">{content.about.story}</p>
      <p className="mt-4 text-slate-700">{content.about.story2}</p>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="mt-2 text-slate-700">{content.about.mission}</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-semibold">Our Vision</h2>
          <p className="mt-2 text-slate-700">{content.about.vision}</p>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {content.about.values.map((v) => (
          <div key={v.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold">{v.title}</h3>
            <p className="mt-2 text-slate-700">{v.desc}</p>
          </div>
        ))}
      </div>
      <Script id="about-service-jsonld" type="application/ld+json">
        {JSON.stringify(orgServiceJsonLd)}
      </Script>
    </div>
  )
}



