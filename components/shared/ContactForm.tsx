'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [state, setState] = useState<'idle'|'submitting'|'success'|'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')
    setError(null)
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      service: String(formData.get('service') || 'general'),
      preferredDate: String(formData.get('preferredDate') || ''),
      message: String(formData.get('message') || ''),
    }
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const json = await res.json()
    if (json.ok) {
      setState('success')
      form.reset()
    } else {
      setError('Please check your inputs and try again.')
      setState('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Name</label>
          <input name="name" required type="text" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-earth-500 focus:outline-none focus:ring-2 focus:ring-earth-200" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input name="email" required type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-earth-500 focus:outline-none focus:ring-2 focus:ring-earth-200" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Phone</label>
          <input name="phone" required type="tel" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-earth-500 focus:outline-none focus:ring-2 focus:ring-earth-200" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Service interested in</label>
          <select name="service" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-earth-500 focus:outline-none focus:ring-2 focus:ring-earth-200">
            <option value="day-picnic">Day Picnic</option>
            <option value="boarding">Boarding</option>
            <option value="general">General</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Preferred date</label>
          <input name="preferredDate" type="date" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-earth-500 focus:outline-none focus:ring-2 focus:ring-earth-200" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Message</label>
          <textarea name="message" rows={4} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-earth-500 focus:outline-none focus:ring-2 focus:ring-earth-200" />
        </div>
        <button
          disabled={state === 'submitting'}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-park-600 px-5 py-2.5 font-semibold text-white ring-park-700/20 transition hover:bg-park-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60"
          type="submit"
        >
          {state === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
        {state === 'success' && (
          <div className="rounded-md bg-park-50 p-3 text-park-800 ring-1 ring-park-200">
            Thanks! We have received your message.
          </div>
        )}
        {state === 'error' && (
          <div className="rounded-md bg-red-50 p-3 text-red-700 ring-1 ring-red-200">
            {error}
          </div>
        )}
      </div>
    </form>
  )
}


