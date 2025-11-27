# Pet Paradise Park — Next.js Site

Premium day picnics and luxury farmland boarding for dogs. Built with Next.js 14 (App Router) and Tailwind CSS.

## Tech
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Getting Started

1) Install dependencies
```bash
npm install
```

2) Run the dev server
```bash
npm run dev
```

3) Open the app
Visit http://localhost:3000

## Configuration

Set your site details via environment variables or update `lib/site-config.ts`:

```env
NEXT_PUBLIC_SITE_URL=https://petparadisepark.com
NEXT_PUBLIC_SITE_NAME=Pet Paradise Park
NEXT_PUBLIC_CONTACT_EMAIL=hello@petparadisepark.com
NEXT_PUBLIC_PHONE=+91-XXXXXXXXXX
NEXT_PUBLIC_ADDRESS=123 Park Avenue, City, State PIN
NEXT_PUBLIC_HOURS=Daily 9:00 AM – 7:00 PM
```

For SEO images, add `/public/og.jpg` and `/public/logo.png`.

## SEO
- Next.js Metadata API in `app/layout.tsx`
- Open Graph + Twitter tags
- JSON-LD for Organization and LocalBusiness via `lib/seo.ts`
- `/app/sitemap.ts` and `/app/robots.ts`

## Structure
Key files:
- `app/layout.tsx` — Root layout and global SEO
- `app/page.tsx` — Homepage with CTAs and amenities preview
- `app/day-picnic/page.tsx` — Day Picnic overview
- `app/overnight-boarding/page.tsx` — Boarding overview
- `app/pricing/page.tsx` — Pricing
- `components/layout/Header.tsx`, `Footer.tsx`
- `components/ui/Button.tsx`
- `lib/site-config.ts`, `lib/seo.ts`
- `styles/globals.css`

## Notes
- Booking and contact forms are placeholders; wire to APIs as needed.
- Add imagery to `/public` or use allowed remote images (see `next.config.ts`).

## Deploy
Deploy on Vercel for best results:
1. Push to GitHub
2. Import in Vercel
3. Set env vars
4. Deploy


