import type { Metadata } from 'next'
import { site } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for day picnics and overnight boarding.',
  alternates: { canonical: `${site.url}/pricing` },
}

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold">Clear, Honest Pricing</h1>
      <p className="mt-3 text-slate-700">No hidden fees—just happy tails.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-semibold">Day Picnic</h2>
          <ul className="mt-4 space-y-2">
            <li>4-Hour Package: ₹XXX</li>
            <li>6-Hour Package: ₹XXX</li>
            <li>8-Hour Package: ₹XXX</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-semibold">Overnight Boarding</h2>
          <ul className="mt-4 space-y-2">
            <li>Per Night: ₹XXX</li>
            <li>Weekly Rate: ₹XXX (X% off)</li>
            <li>Monthly Rate: ₹XXX (X% off)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


