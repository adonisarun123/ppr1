import { NextResponse } from 'next/server'
import { DayPicnicBookingSchema } from '@/lib/validations'
import { calculateDayPicnicPrice } from '@/lib/pricing'
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
    const data = DayPicnicBookingSchema.parse(json)
    const total = calculateDayPicnicPrice(data.package, data.pets.length, data.addOns || [])
    const bookingReference = `D${Date.now().toString(36).toUpperCase()}`

    const transporter = createTransport()
    const bookingEmail = process.env.BOOKING_EMAIL || process.env.CONTACT_EMAIL
    if (transporter && bookingEmail) {
      const details = `
Package: ${data.package}
Date: ${data.date} | Slot: ${data.timeSlot}
Pets: ${data.pets.map((p) => p.name).join(', ')}
Owner: ${data.owner.name} (${data.owner.email}, ${data.owner.phone})
Add-ons: ${(data.addOns || []).join(', ') || 'None'}
Total: ₹${total}
Ref: ${bookingReference}
      `.trim()
      await transporter.sendMail({
        from: `"Pet Paradise Park" <${process.env.SMTP_USER}>`,
        to: bookingEmail,
        subject: `New Day Picnic Booking — ${bookingReference}`,
        text: details,
      })
      await transporter.sendMail({
        from: `"Pet Paradise Park" <${process.env.SMTP_USER}>`,
        to: data.owner.email,
        subject: `Booking Confirmation — ${bookingReference}`,
        text: `Thank you for booking a Day Picnic!\n\n${details}\n\nWe’ll contact you soon with next steps.`,
      })
    }

    return NextResponse.json({ ok: true, bookingReference, total })
  } catch (err: any) {
    if (err?.name === 'ZodError') {
      return NextResponse.json({ ok: false, error: err.flatten() }, { status: 400 })
    }
    console.error(err)
    return NextResponse.json({ ok: false, error: 'Unexpected error' }, { status: 500 })
  }
}


