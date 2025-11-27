import type { Metadata } from 'next'
import { site } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Training, socialization, grooming, consultation, and more.',
  alternates: { canonical: `${site.url}/services` },
}

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold">Services</h1>
      <p className="mt-3 text-slate-700">Comprehensive offerings for happy, healthy pets.</p>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {[
          { title: 'Training', desc: 'Group and private sessions.' },
          { title: 'Socialization', desc: 'Confident, friendly pets.' },
          { title: 'Grooming', desc: 'Spa and pampering.' },
          { title: 'Consultation', desc: 'Behavior and nutrition.' },
        ].map((s) => (
          <div key={s.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-slate-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


