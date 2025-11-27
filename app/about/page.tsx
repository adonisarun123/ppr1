import type { Metadata } from 'next'
import { site } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Our story, mission, values, and the dedicated team behind Pet Paradise Park.',
  alternates: { canonical: `${site.url}/about` },
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold">About Us</h1>
      <p className="mt-4 text-slate-700">
        {site.name} was created to give dogs the space, stimulation, and care they truly deserve.
        From day picnics in our sensory gardens to premium overnight stays across a 100+ acre
        farmland community, we exist to make tails wag.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="mt-2 text-slate-700">
            Safety, happiness, and natural living—every experience is designed around a dog’s needs.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-semibold">Our Vision</h2>
          <p className="mt-2 text-slate-700">
            To be the most loved pet destination, known for space, enrichment, and premium care.
          </p>
        </div>
      </div>
    </div>
  )
}


