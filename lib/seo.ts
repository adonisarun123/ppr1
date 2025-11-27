import { site } from './site-config'

export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.png`,
    sameAs: [site.social.instagram, site.social.facebook, site.social.youtube].filter(Boolean),
  }
}

export function getLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    image: [`${site.url}/og.jpg`],
    '@id': site.url,
    url: site.url,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address,
      addressLocality: 'Your City',
      addressRegion: 'Your State',
      postalCode: '000000',
      addressCountry: 'IN',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    sameAs: [site.social.instagram, site.social.facebook, site.social.youtube].filter(Boolean),
  }
}

export function getServiceJsonLd(opts: {
  name: string
  description: string
  urlPath: string
  areaServed?: string
  offers?: Array<{ name: string; price: number; priceCurrency?: string }>
}) {
  const { name, description, urlPath, areaServed = 'Local', offers = [] } = opts
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    areaServed,
    provider: {
      '@type': 'LocalBusiness',
      name: site.name,
      url: site.url,
    },
    url: `${site.url}${urlPath}`,
    hasOfferCatalog:
      offers.length > 0
        ? {
            '@type': 'OfferCatalog',
            name: `${name} Packages`,
            itemListElement: offers.map((o) => ({
              '@type': 'Offer',
              name: o.name,
              price: o.price,
              priceCurrency: o.priceCurrency || 'INR',
              url: `${site.url}${urlPath}`,
              availability: 'https://schema.org/InStock',
            })),
          }
        : undefined,
  }
}


