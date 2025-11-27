import type { Metadata } from 'next'
import { site } from '@/lib/site-config'
import { content } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Training, socialization, grooming, and consultation services focused on canine wellbeing.',
  alternates: { canonical: `${site.url}/services` },
  keywords: ['dog training', 'dog grooming', 'dog socialization', 'pet behavior consultation'],
}

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold">Services</h1>
      <p className="mt-3 text-slate-700">Comprehensive offerings for happy, healthy pets.</p>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {[
          { title: 'Training', desc: content.services.training },
          { title: 'Socialization', desc: content.services.socialization },
          { title: 'Grooming', desc: content.services.grooming },
          { title: 'Consultation', desc: content.services.consultation },
        ].map((s) => (
          <div key={s.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-slate-700">{s.desc}</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-700">
              {s.title === 'Training' && (
                <>
                  <li>Obedience basics and recall</li>
                  <li>Loose‑leash walking</li>
                  <li>Confidence games & enrichment</li>
                </>
              )}
              {s.title === 'Grooming' && (
                <>
                  <li>Bath & blow‑dry</li>
                  <li>Nail trim & ear cleaning</li>
                  <li>De‑shedding (breed dependent)</li>
                </>
              )}
              {s.title === 'Consultation' && (
                <>
                  <li>Behavior assessments & plans</li>
                  <li>Nutrition guidance</li>
                  <li>Follow‑up support</li>
                </>
              )}
              {s.title === 'Socialization' && (
                <>
                  <li>Small, matched playgroups</li>
                  <li>Calm introductions & decompression</li>
                  <li>Confidence‑building activities</li>
                </>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}


