'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { DayPackage } from '@/lib/pricing'

type FormValues = {
  package: DayPackage
  date: string
  timeSlot: 'morning' | 'afternoon' | 'full'
  petName: string
  ownerName: string
  ownerEmail: string
  ownerPhone: string
  addOns?: string[]
  acceptTerms: boolean
}

export default function DayPicnicBooking() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    defaultValues: {
      package: '6hr',
      timeSlot: 'morning',
      acceptTerms: false,
    }
  })
  const [result, setResult] = useState<{ref?: string; total?: number; error?: string}>({})

  async function onSubmit(values: FormValues) {
    setResult({})
    const body = {
      package: values.package,
      date: values.date,
      timeSlot: values.timeSlot,
      pets: [{ name: values.petName }],
      owner: { name: values.ownerName, email: values.ownerEmail, phone: values.ownerPhone },
      addOns: (values.addOns || []) as any,
      acceptTerms: values.acceptTerms,
    }
    const res = await fetch('/api/booking/day-picnic', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const json = await res.json()
    if (json.ok) {
      setResult({ ref: json.bookingReference, total: json.total })
    } else {
      setResult({ error: 'Please check your inputs.' })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700">Package</label>
          <select {...register('package', { required: true })} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-earth-500 focus:outline-none focus:ring-2 focus:ring-earth-200">
            <option value="4hr">4 Hours</option>
            <option value="6hr">6 Hours</option>
            <option value="8hr">8 Hours</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Date</label>
          <input type="date" {...register('date', { required: true })} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-earth-500 focus:outline-none focus:ring-2 focus:ring-earth-200" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Time Slot</label>
          <select {...register('timeSlot', { required: true })} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-earth-500 focus:outline-none focus:ring-2 focus:ring-earth-200">
            <option value="morning">9:00 AM – 1:00 PM</option>
            <option value="afternoon">1:00 PM – 7:00 PM</option>
            <option value="full">9:00 AM – 5:00 PM</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Pet Name</label>
          <input type="text" {...register('petName', { required: true })} placeholder="e.g., Bruno" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-earth-500 focus:outline-none focus:ring-2 focus:ring-earth-200" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Owner Name</label>
          <input type="text" {...register('ownerName', { required: true })} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-earth-500 focus:outline-none focus:ring-2 focus:ring-earth-200" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Owner Email</label>
          <input type="email" {...register('ownerEmail', { required: true })} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-earth-500 focus:outline-none focus:ring-2 focus:ring-earth-200" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Owner Phone</label>
          <input type="tel" {...register('ownerPhone', { required: true })} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-earth-500 focus:outline-none focus:ring-2 focus:ring-earth-200" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Add-ons</label>
          <div className="mt-1 grid grid-cols-1 gap-2">
            {['horseRiding','training','grooming','photos','specialMeal'].map((k) => (
              <label key={k} className="inline-flex items-center gap-2 text-sm">
                <input type="checkbox" value={k} {...register('addOns')} />
                <span className="capitalize">{k.replace(/([A-Z])/g,' $1')}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <label className="mt-4 inline-flex items-center gap-2 text-sm">
        <input type="checkbox" {...register('acceptTerms', { required: true })} />
        I accept the terms and cancellation policy
      </label>
      <div className="mt-4">
        <button disabled={isSubmitting} type="submit" className="inline-flex items-center justify-center rounded-full bg-park-600 px-5 py-2.5 font-semibold text-white ring-park-700/20 transition hover:bg-park-700 disabled:opacity-60">
          {isSubmitting ? 'Booking...' : 'Confirm Booking'}
        </button>
      </div>
      {result.ref && (
        <div className="mt-4 rounded-md bg-park-50 p-3 text-park-800 ring-1 ring-park-200">
          Booking confirmed! Ref: {result.ref} • Total: ₹{result.total}
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


