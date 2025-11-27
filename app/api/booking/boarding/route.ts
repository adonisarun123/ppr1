import { NextResponse } from 'next/server'
import { BoardingBookingSchema } from '@/lib/validations'
import { calculateBoardingPrice, calculateNights } from '@/lib/pricing'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

function createTransport() {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  if (!host || !port || !user || !pass) return null
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })
}

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const data = BoardingBookingSchema.parse(json)
    const nights = calculateNights(new Date(data.checkInDate), new Date(data.checkOutDate))
    const total = calculateBoardingPrice(
      data.accommodationType,
      nights,
      data.pets.length,
      data.amenities || []
    )
    const bookingReference = `B${Date.now().toString(36).toUpperCase()}`

    const transporter = createTransport()
    const bookingEmail = process.env.BOOKING_EMAIL || process.env.CONTACT_EMAIL
    if (transporter && bookingEmail) {
      const details = `
Accommodation: ${data.accommodationType}
Dates: ${data.checkInDate} → ${data.checkOutDate} (${nights} nights)
Pets: ${data.pets.map((p) => p.name).join(', ')}
Owner: ${data.owner.name} (${data.owner.email}, ${data.owner.phone})
Amenities: ${(data.amenities || []).join(', ') || 'None'}
Pre-boarding visit: ${data.preBoardingVisit ? 'Yes' : 'No'}
Total: ₹${total}
Ref: ${bookingReference}
      `.trim()
      await transporter.sendMail({
        from: `"Pet Paradise Park" <${process.env.SMTP_USER}>`,
        to: bookingEmail,
        subject: `New Boarding Booking — ${bookingReference}`,
        text: details,
      })
      await transporter.sendMail({
        from: `"Pet Paradise Park" <${process.env.SMTP_USER}>`,
        to: data.owner.email,
        subject: `Boarding Confirmation — ${bookingReference}`,
        text: `Thank you for reserving a stay!\n\n${details}\n\nWe’ll contact you soon with next steps.`,
      })
    }

    return NextResponse.json({ ok: true, bookingReference, nights, total })
  } catch (err: any) {
    if (err?.name === 'ZodError') {
      return NextResponse.json({ ok: false, error: err.flatten() }, { status: 400 })
    }
    console.error(err)
    return NextResponse.json({ ok: false, error: 'Unexpected error' }, { status: 500 })
  }
}


