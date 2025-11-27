import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { site } from '@/lib/site-config'
import { content } from '@/lib/content'
import { accommodationPricing, amenityPricing, offers } from '@/lib/pricing'
import Script from 'next/script'
import { getServiceJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Overnight Boarding',
  description:
    'Luxury farmland living for pets with spacious farmhouses, premium amenities, and 24/7 supervision.',
  alternates: { canonical: `${site.url}/overnight-boarding` },
  keywords: [
    'pet boarding',
    'dog hotel',
    'farmhouse pet stay',
    '24/7 supervision',
    'dog resort',
  ],
}

export default function BoardingPage() {
  const accommodations = [
    { title: 'Standard Farmhouse Suite', desc: 'Comfortable stay for 1–2 pets.' },
    { title: 'Premium Villa', desc: 'Enhanced space and amenities.' },
    { title: 'Luxury Lodge', desc: 'Top-tier experience and privacy.' },
    { title: 'Group Accommodation', desc: 'Ideal for multiple pets/families.' },
  ]
  const jsonLd = getServiceJsonLd({
    name: 'Overnight Pet Boarding',
    description:
      'Farmhouse accommodation with premium amenities and round‑the‑clock care.',
    urlPath: '/overnight-boarding',
    offers: [
      { name: 'Standard Suite (per night)', price: accommodationPricing.standard },
      { name: 'Premium Villa (per night)', price: accommodationPricing.premium },
      { name: 'Luxury Lodge (per night)', price: accommodationPricing.luxury },
      { name: 'Group Accommodation (per night)', price: accommodationPricing.group },
    ],
  })

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h1 className="font-display text-4xl font-extrabold">Luxury Farmland Boarding</h1>
        <p className="mt-3 text-slate-700">{content.boarding.intro}</p>
        <div className="mt-6">
          <Button asChild size="lg" variant="luxury">
            <Link href="/overnight-boarding/booking">Reserve Your Pet&apos;s Stay</Link>
          </Button>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-semibold">Accommodation Types</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {accommodations.map((a, idx) => (
          <div key={a.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold">{a.title}</h3>
            <p className="mt-2 text-slate-700">{a.desc}</p>
            <p className="mt-2 text-slate-700">
              Per Night: ₹
              {[
                accommodationPricing.standard,
                accommodationPricing.premium,
                accommodationPricing.luxury,
                accommodationPricing.group,
              ][idx]}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold">What&apos;s Included</h2>
        <ul className="mt-3 grid list-disc grid-cols-1 gap-x-8 gap-y-2 pl-6 sm:grid-cols-2">
          {content.boarding.included.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold">Premium Amenities</h2>
        <ul className="mt-3 grid list-disc grid-cols-1 gap-x-8 gap-y-2 pl-6 sm:grid-cols-2">
          {content.boarding.amenities.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <p className="mt-3 text-slate-700">
          Add‑ons (per session/day): Horse Riding ₹{amenityPricing.horseRiding.price}, Training ₹
          {amenityPricing.training.price}, Grooming ₹{amenityPricing.grooming.price}, Photos ₹
          {amenityPricing.photos.price}, Special Meal ₹{amenityPricing.specialMeal.price}/day.
        </p>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold">Safety & Care</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          {content.boarding.safety.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold">Booking Requirements</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          {content.boarding.requirements.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <p className="mt-3 text-slate-700">
          Weekly package: {offers.boarding.weeklyDiscountPercent}% off • Monthly package:{' '}
          {offers.boarding.monthlyDiscountPercent}% off.
        </p>
      </div>
      <Script id="boarding-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </div>
  )
}


