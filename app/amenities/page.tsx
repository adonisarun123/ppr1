import type { Metadata } from 'next'
import { site } from '@/lib/site-config'
import { Trees, Waves, UtensilsCrossed, ShieldCheck, Dumbbell, PawPrint } from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'Amenities',
  description: 'Explore premium amenities: horse riding, trails, swimming, grooming, and more.',
  alternates: { canonical: `${site.url}/amenities` },
}

export default function AmenitiesPage() {
  const amenities = [
    { title: 'Horse Riding', desc: 'Premium sessions for boarders.', icon: <ShieldCheck className="h-5 w-5 text-luxury-700" /> },
    { title: 'Nature Trails', desc: 'Forest walks and meadows.', icon: <Trees className="h-5 w-5 text-park-700" /> },
    { title: 'Sensory Garden', desc: 'Enrichment-focused design.', icon: <PawPrint className="h-5 w-5 text-park-700" /> },
    { title: 'Swimming Areas', desc: 'Dog-safe pools & water play.', icon: <Waves className="h-5 w-5 text-sky-700" /> },
    { title: 'Training Facilities', desc: 'Agility & obedience.', icon: <Dumbbell className="h-5 w-5 text-park-700" /> },
    { title: 'Pet Café', desc: 'Treats for dogs, snacks for humans.', icon: <UtensilsCrossed className="h-5 w-5 text-sunshine-700" /> },
    { title: 'Grooming & Spa', desc: 'Pampering and care.', icon: <PawPrint className="h-5 w-5 text-luxury-700" /> },
    { title: 'Medical Facility', desc: 'On-call vet and care.', icon: <ShieldCheck className="h-5 w-5 text-park-700" /> },
  ]
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold">Amenities</h1>
      <p className="mt-3 text-slate-700">Everything your pet needs and more.</p>
      <FadeIn>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((a) => (
            <div key={a.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-park-100 p-2">{a.icon}</div>
                <h3 className="text-xl font-semibold">{a.title}</h3>
              </div>
              <p className="mt-2 text-slate-700">{a.desc}</p>
              <div
                className="mt-4 h-40 w-full rounded-xl bg-cover bg-center ring-1 ring-earth-100"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop')`,
                }}
              />
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  )
}


