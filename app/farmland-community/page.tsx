import type { Metadata } from 'next'
import { site } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Farmland Community',
  description: 'Explore our 100+ acre pet paradise community.',
  alternates: { canonical: `${site.url}/farmland-community` },
}

export default function FarmlandPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold">100+ Acres of Pet Paradise</h1>
      <p className="mt-3 text-slate-700">
        Spacious meadows, activity zones, nature trails, and cozy farmhouses. A community designed
        for joyful, safe pet living.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          'Accommodation Zone',
          'Activity Zone',
          'Nature Trails',
          'Social Areas',
          'Swimming Areas',
          'Training Grounds',
        ].map((z) => (
          <div key={z} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold">{z}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}


