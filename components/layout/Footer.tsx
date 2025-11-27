import Link from 'next/link'
import { site } from '@/lib/site-config'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-park-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-800">About</h3>
          <p className="mt-3 text-sm text-slate-600">
            {site.tagline}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-800">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-park-700" href="/day-picnic">Day Picnic</Link></li>
            <li><Link className="hover:text-park-700" href="/overnight-boarding">Overnight Boarding</Link></li>
            <li><Link className="hover:text-park-700" href="/pricing">Pricing</Link></li>
            <li><Link className="hover:text-park-700" href="/gallery">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-800">Services</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Sensory Garden</li>
            <li>Training & Socialization</li>
            <li>Grooming & Spa</li>
            <li>Horse Riding</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-800">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>{site.address}</li>
            <li><a className="hover:text-park-700" href={`tel:${site.phoneHref}`}>{site.phone}</a></li>
            <li><a className="hover:text-park-700" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>Hours: {site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-park-100 bg-park-50/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 text-sm text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link className="hover:text-park-700" href="/privacy-policy">Privacy</Link>
            <Link className="hover:text-park-700" href="/terms">Terms</Link>
            <Link className="hover:text-park-700" href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


