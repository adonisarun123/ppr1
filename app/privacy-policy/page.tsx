import type { Metadata } from 'next'
import { site } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Our commitment to your privacy.',
  alternates: { canonical: `${site.url}/privacy-policy` },
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold">Privacy Policy</h1>
      <p className="mt-4 text-slate-700">
        This is a placeholder privacy policy. Replace with your legal policy before launch.
      </p>
    </div>
  )
}


