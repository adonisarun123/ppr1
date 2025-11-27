'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, PawPrint } from 'lucide-react'
import Button from '@/components/ui/Button'

const nav = [
  { href: '/day-picnic', label: 'Day Picnic' },
  { href: '/overnight-boarding', label: 'Overnight Boarding' },
  { href: '/farmland-community', label: 'Farmland' },
  { href: '/amenities', label: 'Amenities' },
  { href: '/services', label: 'Services' },
  { href: '/programs', label: 'Programs' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-earth-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-lg bg-park-100 p-2 text-park-700">
            <PawPrint className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">
            Pet Paradise Park
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-park-700"
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-2">
            <Button asChild size="sm" variant="primary">
              <Link href="/day-picnic">Book Now</Link>
            </Button>
          </div>
        </nav>
        <button
          aria-label="Open menu"
          className="rounded-md p-2 text-slate-700 ring-1 ring-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {open && (
        <div className="border-t border-earth-200 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <div className="grid grid-cols-2 gap-3">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-park-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Button asChild variant="primary" className="w-full">
                <Link href="/day-picnic" onClick={() => setOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}


