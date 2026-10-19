import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('flex items-center gap-3 text-xs font-medium tracking-[0.24em] uppercase', className)}>
      <span aria-hidden className="h-px w-8 bg-gold" />
      {children}
    </p>
  )
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className,
}: {
  id?: string
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <Reveal
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center [&_p:first-child]:justify-center',
        className,
      )}
    >
      <Eyebrow className={tone === 'dark' ? 'text-gold' : 'text-[#8a6a38]'}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className={cn(
          'mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-6xl',
          tone === 'dark' ? 'text-ivory' : 'text-forest',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-6 text-lg leading-relaxed text-pretty',
            align === 'center' && 'mx-auto max-w-2xl',
            tone === 'dark' ? 'text-ivory/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}

export function UpcomingBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-2.5 py-1 text-[11px] font-semibold tracking-wider text-[#7d5f30] uppercase',
        className,
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-gold" />
      Upcoming
    </span>
  )
}
