import type { Metadata } from 'next'
import { site } from '@/lib/site-config'
import FadeIn from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Happy moments from day picnics and boarding life.',
  alternates: { canonical: `${site.url}/gallery` },
}

export default function GalleryPage() {
  const imgs = [
    'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558944351-c7251825c27b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1200&auto=format&fit=crop'
  ]
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold">Happy Moments</h1>
      <p className="mt-3 text-slate-700">
        A glimpse into daily adventures—more photos coming soon.
      </p>
      <FadeIn>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {imgs.map((src, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl bg-cover bg-center ring-1 ring-park-200"
              style={{ backgroundImage: `url('${src}')` }}
            />
          ))}
        </div>
      </FadeIn>
    </div>
  )
}


