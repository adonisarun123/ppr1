import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { site } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Overnight Boarding',
  description:
    'Luxury farmland living for pets with spacious farmhouses, premium amenities, and 24/7 supervision.',
  alternates: { canonical: `${site.url}/overnight-boarding` },
}

export default function BoardingPage() {
  const accommodations = [
    { title: 'Standard Farmhouse Suite', desc: 'Comfortable stay for 1–2 pets.' },
    { title: 'Premium Villa', desc: 'Enhanced space and amenities.' },
    { title: 'Luxury Lodge', desc: 'Top-tier experience and privacy.' },
    { title: 'Group Accommodation', desc: 'Ideal for multiple pets/families.' },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h1 className="font-display text-4xl font-extrabold">Luxury Farmland Boarding</h1>
        <p className="mt-3 text-slate-700">
          100+ acres of open space, multiple farmhouse units, premium amenities, and 24/7 care—your
          pet’s second home.
        </p>
        <div className="mt-6">
          <Button asChild size="lg" variant="luxury">
            <Link href="/overnight-boarding/booking">Reserve Your Pet&apos;s Stay</Link>
          </Button>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-semibold">Accommodation Types</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {accommodations.map((a) => (
          <div key={a.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold">{a.title}</h3>
            <p className="mt-2 text-slate-700">{a.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold">What&apos;s Included</h2>
        <ul className="mt-3 grid list-disc grid-cols-1 gap-x-8 gap-y-2 pl-6 sm:grid-cols-2">
          <li>Spacious farmhouse stay</li>
          <li>24/7 supervision</li>
          <li>Meals (3× daily)</li>
          <li>Farmland access</li>
          <li>Basic grooming</li>
          <li>Daily updates</li>
        </ul>
      </div>
    </div>
  )
}


