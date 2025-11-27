import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { site } from '@/lib/site-config'
import { content } from '@/lib/content'
import { dayPicnicPricing } from '@/lib/pricing'
import Script from 'next/script'
import { getServiceJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Day Picnic',
  description:
    'Flexible 4, 6, or 8-hour dog day picnic packages with sensory garden access, supervised play, enrichment, and café treats.',
  alternates: { canonical: `${site.url}/day-picnic` },
  keywords: [
    'day picnic for dogs',
    'dog daycare',
    '4 hour dog package',
    'sensory garden',
    'pet cafe',
  ],
}

export default function DayPicnicPage() {
  const packages = [
    { name: '4 Hours', desc: `Half Day • ₹${dayPicnicPricing['4hr']}`, popular: false },
    { name: '6 Hours', desc: `Extended • ₹${dayPicnicPricing['6hr']}`, popular: true },
    { name: '8 Hours', desc: `Full Day • ₹${dayPicnicPricing['8hr']}`, popular: false },
  ]
  const jsonLd = getServiceJsonLd({
    name: 'Dog Day Picnic',
    description:
      'Flexible 4/6/8 hour day picnic packages with enrichment and supervised play.',
    urlPath: '/day-picnic',
    offers: [
      { name: '4 Hours', price: dayPicnicPricing['4hr'] },
      { name: '6 Hours', price: dayPicnicPricing['6hr'] },
      { name: '8 Hours', price: dayPicnicPricing['8hr'] },
    ],
  })

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h1 className="font-display text-4xl font-extrabold">Day Picnic Adventures</h1>
        <p className="mt-3 text-slate-700">{content.dayPicnic.intro}</p>
        <div className="mt-6">
          <Button asChild size="lg" variant="primary">
            <Link href="/day-picnic/booking">Book Your Day Picnic</Link>
          </Button>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-semibold">Time Packages</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
        {packages.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              {p.popular && (
                <span className="rounded-full bg-sunshine-100 px-3 py-1 text-xs font-semibold text-sunshine-700 ring-1 ring-sunshine-200">
                  Most Popular
                </span>
              )}
            </div>
            <p className="mt-2 text-slate-700">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold">What&apos;s Included</h2>
        <ul className="mt-3 grid list-disc grid-cols-1 gap-x-8 gap-y-2 pl-6 sm:grid-cols-2">
          {content.dayPicnic.included.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold">Typical Day Schedule</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          {content.dayPicnic.schedule.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold">Rules & Requirements</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          {content.dayPicnic.rules.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold">FAQs</h2>
        <dl className="mt-3 space-y-3">
          {content.dayPicnic.faqs.map((f) => (
            <div key={f.q}>
              <dt className="font-medium">{f.q}</dt>
              <dd className="text-slate-700">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
      <Script id="day-picnic-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </div>
  )
}


