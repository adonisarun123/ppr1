import type { Metadata } from 'next'
import { site } from '@/lib/site-config'
import DayPicnicBooking from '@/components/booking/DayPicnicBooking'

export const metadata: Metadata = {
  title: 'Book Day Picnic',
  description: 'Choose your package, date & time, and share pet details.',
  alternates: { canonical: `${site.url}/day-picnic/booking` },
}

export default function DayPicnicBookingPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-display text-3xl font-extrabold">Book Your Day Picnic</h1>
      <p className="mt-3 text-slate-700">
        Reserve your slot by completing the form below. You’ll receive a confirmation by email.
      </p>
      <ol className="mt-6 list-decimal space-y-2 pl-6 text-slate-700">
        <li>Step 1: Time Package</li>
        <li>Step 2: Date & Time</li>
        <li>Step 3: Pet Details</li>
        <li>Step 4: Add-ons</li>
        <li>Step 5: Review & Confirm</li>
      </ol>

      <DayPicnicBooking />
    </div>
  )
}


