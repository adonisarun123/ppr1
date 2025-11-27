'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AccommodationType } from '@/lib/pricing'

type FormValues = {
  accommodationType: AccommodationType
  checkInDate: string
  checkOutDate: string
  petName: string
  ownerName: string
  ownerEmail: string
  ownerPhone: string
  amenities?: string[]
  preBoardingVisit?: boolean
  acceptTerms: boolean
}

export default function BoardingBooking() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<FormValues>({
    defaultValues: {
      accommodationType: 'premium',
      preBoardingVisit: false,
      acceptTerms: false,
    }
  })
  const [result, setResult] = useState<{ref?: string; total?: number; nights?: number; error?: string}>({})

  async function onSubmit(values: FormValues) {
    setResult({})
    const body = {
      accommodationType: values.accommodationType,
      checkInDate: values.checkInDate,
      checkOutDate: values.checkOutDate,
      pets: [{ name: values.petName }],
      owner: { name: values.ownerName, email: values.ownerEmail, phone: values.ownerPhone },
      amenities: (values.amenities || []) as any,
      preBoardingVisit: !!values.preBoardingVisit,
      acceptTerms: values.acceptTerms,
    }
    const res = await fetch('/api/booking/boarding', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const json = await res.json()
    if (json.ok) {
      setResult({ ref: json.bookingReference, total: json.total, nights: json.nights })
    } else {
      setResult({ error: 'Please check your inputs.' })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700">Accommodation</label>
          <select {...register('accommodationType', { required: true })} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-luxury-500 focus:outline-none focus:ring-2 focus:ring-luxury-200">
            <option value="standard">Standard Farmhouse</option>
            <option value="premium">Premium Villa</option>
            <option value="luxury">Luxury Lodge</option>
            <option value="group">Group Accommodation</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Check-in</label>
          <input type="date" {...register('checkInDate', { required: true })} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-luxury-500 focus:outline-none focus:ring-2 focus:ring-luxury-200" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Check-out</label>
          <input type="date" {...register('checkOutDate', { required: true })} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-luxury-500 focus:outline-none focus:ring-2 focus:ring-luxury-200" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Pet Name</label>
          <input type="text" {...register('petName', { required: true })} placeholder="e.g., Coco" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-luxury-500 focus:outline-none focus:ring-2 focus:ring-luxury-200" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Owner Name</label>
          <input type="text" {...register('ownerName', { required: true })} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-luxury-500 focus:outline-none focus:ring-2 focus:ring-luxury-200" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Owner Email</label>
          <input type="email" {...register('ownerEmail', { required: true })} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-luxury-500 focus:outline-none focus:ring-2 focus:ring-luxury-200" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Owner Phone</label>
          <input type="tel" {...register('ownerPhone', { required: true })} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-luxury-500 focus:outline-none focus:ring-2 focus:ring-luxury-200" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Amenities</label>
          <div className="mt-1 grid grid-cols-1 gap-2">
            {['horseRiding','training','grooming','photos','specialMeal'].map((k) => (
              <label key={k} className="inline-flex items-center gap-2 text-sm">
                <input type="checkbox" value={k} {...register('amenities')} />
                <span className="capitalize">{k.replace(/([A-Z])/g,' $1')}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <label className="mt-4 inline-flex items-center gap-2 text-sm">
        <input type="checkbox" {...register('preBoardingVisit')} />
        Request pre-boarding visit
      </label>
      <label className="mt-2 block text-sm">
        <input type="checkbox" className="mr-2" {...register('acceptTerms', { required: true })} />
        I accept the terms and cancellation policy
      </label>
      <div className="mt-4">
        <button disabled={isSubmitting} type="submit" className="inline-flex items-center justify-center rounded-full bg-luxury-600 px-5 py-2.5 font-semibold text-white ring-luxury-700/20 transition hover:bg-luxury-700 disabled:opacity-60">
          {isSubmitting ? 'Booking...' : 'Confirm Booking'}
        </button>
      </div>
      {result.ref && (
        <div className="mt-4 rounded-md bg-luxury-50 p-3 text-luxury-800 ring-1 ring-luxury-200">
          Booking confirmed! Ref: {result.ref} • Nights: {result.nights} • Total: ₹{result.total}
        </div>
      )}
      {result.error && (
        <div className="mt-4 rounded-md bg-red-50 p-3 text-red-700 ring-1 ring-red-200">
          {result.error}
        </div>
      )}
    </form>
  )
}


