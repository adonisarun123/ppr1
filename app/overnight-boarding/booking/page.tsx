import type { Metadata } from 'next'
import { site } from '@/lib/site-config'
import BoardingBooking from '@/components/booking/BoardingBooking'

export const metadata: Metadata = {
  title: 'Book Boarding',
  description: 'Select accommodation, dates, and pet details.',
  alternates: { canonical: `${site.url}/overnight-boarding/booking` },
}

export default function BoardingBookingPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-display text-3xl font-extrabold">Reserve Your Pet&apos;s Stay</h1>
      <p className="mt-3 text-slate-700">
        Complete the form below to reserve your pet’s stay. We’ll confirm availability by email.
      </p>
      <ol className="mt-6 list-decimal space-y-2 pl-6 text-slate-700">
        <li>Step 1: Accommodation Type</li>
        <li>Step 2: Check-in / Check-out</li>
        <li>Step 3: Pet Details</li>
        <li>Step 4: Amenities</li>
        <li>Step 5: Review & Confirm</li>
      </ol>

      <BoardingBooking />
    </div>
  )
}


