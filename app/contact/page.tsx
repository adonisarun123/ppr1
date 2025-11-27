import type { Metadata } from 'next'
import { site } from '@/lib/site-config'
import ContactForm from '@/components/shared/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Pet Paradise Park. Reach us via phone, email, or visit our location.',
  alternates: { canonical: `${site.url}/contact` },
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold">Let&apos;s Talk</h1>
      <p className="mt-4 text-slate-700">
        Have questions or want to plan a visit? We’d love to help.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <ContactForm />
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>Address: {site.address}</li>
            <li>
              Phone:{' '}
              <a className="text-park-700 underline" href={`tel:${site.phoneHref}`}>
                {site.phone}
              </a>
            </li>
            <li>
              Email:{' '}
              <a className="text-park-700 underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>Hours: {site.hours}</li>
          </ul>
          <div className="mt-6">
            <iframe
              title="Map"
              className="h-64 w-full rounded-xl border border-park-100"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb="
            />
          </div>
        </div>
      </div>
    </div>
  )
}


