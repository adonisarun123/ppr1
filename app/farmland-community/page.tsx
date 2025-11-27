import type { Metadata } from 'next'
import { site } from '@/lib/site-config'
import { content } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Farmland Community',
  description: 'Explore our 100+ acre pet paradise community.',
  alternates: { canonical: `${site.url}/farmland-community` },
  keywords: ['farmland for dogs', 'pet community', 'dog nature trails', 'pet resort acreage'],
}

export default function FarmlandPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold">100+ Acres of Pet Paradise</h1>
      <p className="mt-3 text-slate-700">{content.farmland.description}</p>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {content.farmland.zones.map((z) => (
          <div key={z} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold">{z}</h3>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold">Sustainability</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          {content.farmland.sustainability.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}


