import Link from 'next/link'
import { PawPrint, Sun, Moon, Map, Dog, Trees, Waves, UtensilsCrossed, ShieldCheck, Dumbbell } from 'lucide-react'
import Button from '@/components/ui/Button'
import FadeIn from '@/components/animations/FadeIn'
import FloatingPaws from '@/components/animations/FloatingPaws'

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-sand-100 to-earth-50">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <PawPrint className="absolute -left-6 top-6 h-24 w-24 animate-paw-print text-park-400" />
          <PawPrint className="absolute right-10 bottom-10 h-16 w-16 animate-paw-print text-park-300" />
        </div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=2400&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.75)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-earth-900/35"
          aria-hidden="true"
        />
        <FloatingPaws />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 sm:py-28">
          <div className="mb-6 flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 text-sm text-earth-900 ring-1 ring-earth-300 backdrop-blur">
            <Dog className="h-4 w-4" />
            Where Every Tail Wags with Joy
          </div>
          <h1 className="text-center font-display text-4xl font-extrabold leading-tight text-white drop-shadow sm:text-5xl lg:text-6xl">
            Day Adventures & Luxury Farmland Stays
          </h1>
          <p className="mt-6 max-w-2xl text-center text-lg text-white/90 drop-shadow">
            Premium day picnic experiences (4–8 hours) and overnight boarding on a 100+ acre
            community with horse riding, sensory gardens, and supervised fun.
          </p>
          <div className="mt-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
            <FadeIn>
            <div className="group rounded-2xl bg-white/95 p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-sunshine-100 p-3 text-sunshine-600">
                  <Sun className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-earth-100 px-3 py-1 text-xs font-semibold text-earth-700 ring-1 ring-earth-200">
                  From 4 hours
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold">Day Picnic Adventures</h3>
              <p className="mt-2 text-slate-600">
                Sensory garden, supervised playtime, pet café & treats. Flexible 4/6/8-hour packages.
              </p>
              <div className="mt-5">
                <Button asChild variant="primary">
                  <Link href="/day-picnic">Book Day Visit</Link>
                </Button>
              </div>
            </div>
            </FadeIn>
            <FadeIn delay={0.1}>
            <div className="group rounded-2xl bg-white/95 p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-luxury-100 p-3 text-luxury-600">
                  <Moon className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200">
                  100+ Acres
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold">Luxury Farmland Boarding</h3>
              <p className="mt-2 text-slate-600">
                Spacious farmhouses, premium amenities, 24/7 supervision. A resort stay for your pet.
              </p>
              <div className="mt-5">
                <Button asChild variant="luxury">
                  <Link href="/overnight-boarding">Book Stay</Link>
                </Button>
              </div>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-8 flex items-center gap-3">
          <Map className="h-6 w-6 text-earth-700" />
          <h2 className="font-display text-3xl font-extrabold">Premium Amenities & Activities</h2>
        </div>
        <FadeIn>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Sensory Garden',
                desc: 'Scientifically designed for enrichment.',
                icon: <Trees className="h-5 w-5 text-park-700" />,
                img: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1400&auto=format&fit=crop",
              },
              {
                title: 'Horse Riding',
                desc: 'Unique, premium experience for boarders.',
                icon: <ShieldCheck className="h-5 w-5 text-luxury-700" />,
                img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1400&auto=format&fit=crop",
              },
              {
                title: 'Nature Trails',
                desc: 'Forest walks and meadows to explore.',
                icon: <Map className="h-5 w-5 text-sky-700" />,
                img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1400&auto=format&fit=crop",
              },
              {
                title: 'Swimming Areas',
                desc: 'Dog-safe pools & water play.',
                icon: <Waves className="h-5 w-5 text-sky-600" />,
                img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1400&auto=format&fit=crop",
              },
              {
                title: 'Training Grounds',
                desc: 'Agility and obedience facilities.',
                icon: <Dumbbell className="h-5 w-5 text-park-700" />,
                img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1400&auto=format&fit=crop",
              },
              {
                title: 'Pet Café',
                desc: 'Treats for dogs, snacks for humans.',
                icon: <UtensilsCrossed className="h-5 w-5 text-sunshine-600" />,
                img: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1400&auto=format&fit=crop",
              },
            ].map((a) => (
              <div key={a.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-park-100 p-2">{a.icon}</div>
                  <h3 className="text-xl font-semibold">{a.title}</h3>
                </div>
                <p className="mt-2 text-slate-600">{a.desc}</p>
                <div
                  className="mt-4 h-40 w-full rounded-xl bg-cover bg-center ring-1 ring-earth-100"
                  style={{
                    backgroundImage: `url('${a.img}')`,
                  }}
                />
              </div>
            ))}
          </div>
        </FadeIn>
        <div className="mt-10">
          <Button asChild size="lg" variant="secondary">
            <Link href="/amenities">View All Amenities</Link>
          </Button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="font-display text-3xl font-extrabold">Ready to Make Tails Wag?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Book your pet’s day adventure or luxury stay today and join our happy community.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="primary">
              <Link href="/day-picnic">Book Day Picnic</Link>
            </Button>
            <Button asChild size="lg" variant="luxury">
              <Link href="/overnight-boarding">Book Boarding</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}


