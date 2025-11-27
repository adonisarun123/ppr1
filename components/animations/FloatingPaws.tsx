'use client'

import { motion } from 'framer-motion'
import { PawPrint } from 'lucide-react'

interface Paw {
  left: string
  top: string
  size: number
  delay: number
  opacity?: number
}

const PAWS: Paw[] = [
  { left: '8%', top: '72%', size: 22, delay: 0.1, opacity: 0.35 },
  { left: '18%', top: '78%', size: 28, delay: 0.4, opacity: 0.3 },
  { left: '30%', top: '74%', size: 20, delay: 0.2, opacity: 0.35 },
  { left: '45%', top: '80%', size: 26, delay: 0.6, opacity: 0.3 },
  { left: '60%', top: '76%', size: 24, delay: 0.3, opacity: 0.35 },
  { left: '72%', top: '82%', size: 18, delay: 0.5, opacity: 0.3 },
  { left: '84%', top: '74%', size: 30, delay: 0.25, opacity: 0.35 },
]

export default function FloatingPaws() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {PAWS.map((p, i) => (
        <motion.div
          key={i}
          className="absolute text-white"
          style={{ left: p.left, top: p.top, opacity: p.opacity ?? 0.35 }}
          initial={{ y: 0, rotate: -15 }}
          animate={{ y: -90, rotate: 0 }}
          transition={{
            duration: 7 + i * 0.7,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: p.delay,
          }}
        >
          <PawPrint size={p.size} />
        </motion.div>
      ))}
    </div>
  )
}


