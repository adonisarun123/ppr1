import { NextResponse } from 'next/server'
import { ContactSchema } from '@/lib/validations'
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
    const data = ContactSchema.parse(json)
    const ref = `C${Date.now().toString(36).toUpperCase()}`

    const transporter = createTransport()
    const contactEmail = process.env.CONTACT_EMAIL || process.env.BOOKING_EMAIL
    if (transporter && contactEmail) {
      const details = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.service}
Preferred date: ${data.preferredDate || '-'}
Message:
${data.message}
Ref: ${ref}
      `.trim()
      await transporter.sendMail({
        from: `"Pet Paradise Park" <${process.env.SMTP_USER}>`,
        to: contactEmail,
        subject: `New Contact — ${ref}`,
        text: details,
      })
      await transporter.sendMail({
        from: `"Pet Paradise Park" <${process.env.SMTP_USER}>`,
        to: data.email,
        subject: `Thanks for contacting Pet Paradise Park — ${ref}`,
        text: `Thanks for reaching out!\n\nWe have received your message:\n\n${data.message}\n\nWe'll get back to you shortly.\n\nRef: ${ref}`,
      })
    }

    return NextResponse.json({ ok: true, ref })
  } catch (err: any) {
    if (err?.name === 'ZodError') {
      return NextResponse.json({ ok: false, error: err.flatten() }, { status: 400 })
    }
    console.error(err)
    return NextResponse.json({ ok: false, error: 'Unexpected error' }, { status: 500 })
  }
}


