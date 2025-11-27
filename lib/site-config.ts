export const site = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Pet Paradise Park',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@example.com',
  phone: process.env.NEXT_PUBLIC_PHONE || '+91-0000000000',
  phoneHref: process.env.NEXT_PUBLIC_PHONE?.replace(/\s+/g, '') || '+910000000000',
  address:
    process.env.NEXT_PUBLIC_ADDRESS || '123 Park Avenue, Your City, Your State, 000000',
  hours: process.env.NEXT_PUBLIC_HOURS || 'Daily 9:00 AM – 7:00 PM',
  tagline:
    'Premium day picnics and luxury farmland boarding for dogs on a 100+ acre community.',
  ogImage: '/og.jpg',
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    youtube: 'https://youtube.com/',
    twitterHandle: '@yourhandle',
  },
}


