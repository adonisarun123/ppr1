import type { Metadata } from 'next'
import { site } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms of use and booking conditions.',
  alternates: { canonical: `${site.url}/terms` },
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold">Terms & Conditions</h1>
      <p className="mt-4 text-slate-700">
        This is a placeholder terms page. Replace with your official terms before launch.
      </p>
    </div>
  )
}


