import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const variants = {
  ivory:
    'bg-ivory text-forest hover:bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)] focus-visible:ring-offset-forest-deep',
  forest: 'bg-forest text-ivory hover:bg-forest-deep shadow-[0_10px_30px_-14px_rgba(19,37,25,0.6)] focus-visible:ring-offset-ivory',
  outlineLight: 'border border-ivory/30 text-ivory hover:border-ivory/60 hover:bg-ivory/10 focus-visible:ring-offset-forest-deep',
  outlineDark: 'border border-forest/25 text-forest hover:border-forest hover:bg-forest/5 focus-visible:ring-offset-ivory',
} as const

export function ButtonLink({
  href,
  children,
  variant = 'forest',
  arrow = true,
  className,
  ...props
}: {
  href: string
  children: ReactNode
  variant?: keyof typeof variants
  arrow?: boolean
  className?: string
} & Omit<ComponentProps<typeof Link>, 'href' | 'className' | 'children'>) {
  const filled = variant === 'ivory' || variant === 'forest'
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-all duration-300 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:outline-none',
        filled && 'btn-shine hover:-translate-y-0.5',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
      {arrow && (
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </Link>
  )
}
