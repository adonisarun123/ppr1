import type { Metadata } from 'next'
import { Poppins, Nunito } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { site } from '@/lib/site-config'
import { getOrganizationJsonLd, getLocalBusinessJsonLd } from '@/lib/seo'
import Script from 'next/script'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const nunito = Nunito({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Day Picnic & Luxury Boarding for Dogs`,
    template: `%s | ${site.name}`,
  },
  description:
    'Premium day picnic adventures (4-8 hours) and luxury farmland boarding on 100+ acres. Horse riding, sensory garden, and complete pet care.',
  keywords: [
    'dog daycare',
    'pet boarding',
    'dog park',
    'sensory garden',
    'pet picnic',
    'dog resort',
  ],
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: 'website',
    url: site.url,
    title: `${site.name} | Day Picnic & Luxury Boarding for Dogs`,
    description:
      'Premium day picnic adventures (4-8 hours) and luxury farmland boarding on 100+ acres. Horse riding, sensory garden, and complete pet care.',
    siteName: site.name,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} — Happy dogs and premium stays`,
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | Day Picnic & Luxury Boarding for Dogs`,
    description:
      'Premium day picnic adventures (4-8 hours) and luxury farmland boarding on 100+ acres.',
    images: [site.ogImage],
    creator: site.social.twitterHandle || undefined,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = getOrganizationJsonLd()
  const localBizJsonLd = getLocalBusinessJsonLd()

  return (
    <html lang="en" className={`${poppins.variable} ${nunito.variable}`}>
      <body className="min-h-screen bg-sand-50 text-slate-900 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Script id="org-jsonld" type="application/ld+json">
          {JSON.stringify(orgJsonLd)}
        </Script>
        <Script id="localbusiness-jsonld" type="application/ld+json">
          {JSON.stringify(localBizJsonLd)}
        </Script>
      </body>
    </html>
  )
}


