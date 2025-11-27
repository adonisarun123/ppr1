import type { Metadata } from 'next'
import { site } from '@/lib/site-config'
import { content } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Programs',
  description: 'Puppy socialization, adult confidence building, and senior dog care programs.',
  alternates: { canonical: `${site.url}/programs` },
  keywords: ['puppy program', 'adult dog socialization', 'senior dog care'],
}

export default function ProgramsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold">Programs</h1>
      <p className="mt-3 text-slate-700">Structured programs for every life stage—designed for confidence and wellbeing.</p>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          { title: 'Puppy Program', desc: content.programs.puppy, bullets: ['Safe exposure & play', 'Basic cues & recall', 'Handling & grooming desensitization'] },
          { title: 'Adult Socialization', desc: content.programs.adult, bullets: ['Polite greetings', 'Calm group time', 'Decompression walks'] },
          { title: 'Senior Dog Program', desc: content.programs.senior, bullets: ['Gentle mobility work', 'Sensory enrichment', 'Close monitoring'] },
        ].map((p) => (
          <div key={p.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-slate-700">{p.desc}</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-700">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}


