import type { Metadata } from 'next'
import { site } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Programs',
  description: 'Puppy program, adult socialization, and senior dog care.',
  alternates: { canonical: `${site.url}/programs` },
}

export default function ProgramsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold">Programs</h1>
      <p className="mt-3 text-slate-700">
        Structured programs for every life stage—designed for confidence and wellbeing.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          { title: 'Puppy Program', desc: 'Early socialization and basics.' },
          { title: 'Adult Socialization', desc: 'Confidence and friendly behavior.' },
          { title: 'Senior Dog Program', desc: 'Gentle activities and care.' },
        ].map((p) => (
          <div key={p.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-slate-700">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


