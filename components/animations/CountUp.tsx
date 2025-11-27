'use client'

import { useEffect, useState } from 'react'

interface CountUpProps {
  to: number
  durationMs?: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function CountUp({ to, durationMs = 1200, prefix = '', suffix = '', className }: CountUpProps) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const steps = 60
    const increment = to / steps
    let current = 0
    const id = setInterval(() => {
      current += increment
      if (current >= to) {
        setValue(to)
        clearInterval(id)
      } else {
        setValue(Math.round(current))
      }
    }, durationMs / steps)
    return () => clearInterval(id)
  }, [to, durationMs])

  return <span className={className}>{prefix}{value.toLocaleString()}{suffix}</span>
}


