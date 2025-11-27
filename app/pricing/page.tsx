import type { Metadata } from 'next'
import { site } from '@/lib/site-config'
import { dayPicnicPricing, accommodationPricing, offers, amenityPricing } from '@/lib/pricing'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for day picnics and overnight boarding, plus add‑ons and discounts.',
  alternates: { canonical: `${site.url}/pricing` },
  keywords: ['dog daycare pricing', 'pet boarding rates', 'dog resort offers'],
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
            <li>4‑Hour Package: ₹{dayPicnicPricing['4hr']}</li>
            <li>6‑Hour Package: ₹{dayPicnicPricing['6hr']}</li>
            <li>8‑Hour Package: ₹{dayPicnicPricing['8hr']} <span className="text-xs text-slate-600">(Best Value)</span></li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-semibold">Overnight Boarding</h2>
          <ul className="mt-4 space-y-2">
            <li>Standard Suite: ₹{accommodationPricing.standard}/night</li>
            <li>Premium Villa: ₹{accommodationPricing.premium}/night</li>
            <li>Luxury Lodge: ₹{accommodationPricing.luxury}/night</li>
            <li>Group Accommodation: ₹{accommodationPricing.group}/night</li>
            <li className="text-slate-700 mt-2">Weekly: {offers.boarding.weeklyDiscountPercent}% off &middot; Monthly: {offers.boarding.monthlyDiscountPercent}% off</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-xl font-semibold">Add‑Ons</h2>
        <ul className="mt-3 grid grid-cols-1 gap-y-2 sm:grid-cols-2">
          <li>Horse Riding: ₹{amenityPricing.horseRiding.price}/session</li>
          <li>Training: ₹{amenityPricing.training.price}/day</li>
          <li>Grooming: ₹{amenityPricing.grooming.price}</li>
          <li>Professional Photos: ₹{amenityPricing.photos.price}</li>
          <li>Special Meal Plans: ₹{amenityPricing.specialMeal.price}/day</li>
        </ul>
      </div>
    </div>
  )
}


