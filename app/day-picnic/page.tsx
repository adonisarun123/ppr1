import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { site } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Day Picnic',
  description:
    'Perfect day adventures for dogs: 4, 6, or 8-hour packages with sensory garden, supervised playtime, and pet café.',
  alternates: { canonical: `${site.url}/day-picnic` },
}

export default function DayPicnicPage() {
  const packages = [
    { name: '4 Hours', desc: 'Half Day • Flexible slots', popular: false },
    { name: '6 Hours', desc: 'Extended • Most popular', popular: true },
    { name: '8 Hours', desc: 'Full Day • Premium', popular: false },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h1 className="font-display text-4xl font-extrabold">Day Picnic Adventures</h1>
        <p className="mt-3 text-slate-700">
          Sensory garden exploration, supervised playtime, and café treats in a safe, joyful
          environment. Choose from flexible 4/6/8-hour packages.
        </p>
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
          <li>Sensory garden access</li>
          <li>Supervised playtime</li>
          <li>Pet café & treats</li>
          <li>Professional photos (optional)</li>
        </ul>
      </div>
    </div>
  )
}


