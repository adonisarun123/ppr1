import Link from 'next/link'
import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'luxury' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
  className?: string
  children: React.ReactNode
}

function classNames(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ')
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-park-600 text-white hover:bg-park-700 ring-park-700/20',
  secondary:
    'bg-sky-600 text-white hover:bg-sky-700 ring-sky-700/20',
  accent:
    'bg-sunshine-500 text-white hover:bg-sunshine-600 ring-sunshine-700/20',
  luxury:
    'bg-luxury-600 text-white hover:bg-luxury-700 ring-luxury-700/20',
  outline:
    'bg-white text-slate-900 hover:bg-slate-50 ring-slate-200',
  ghost:
    'bg-transparent text-slate-900 hover:bg-slate-100 ring-transparent',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-5 py-2.5',
  xl: 'text-lg px-6 py-3',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  asChild,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
  const cls = classNames(base, variantClasses[variant], sizeClasses[size], className)

  if (asChild) {
    // Allow usage like <Button asChild><Link href="/">...</Link></Button>
    const child = React.Children.only(children) as React.ReactElement
    return React.cloneElement(child, {
      className: classNames(child.props.className, cls),
    })
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}


