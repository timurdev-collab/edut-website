import type { ReactNode } from 'react'
import { Eyebrow } from '@/components/section-heading'

export function PageHero({
  eyebrow,
  title,
  description,
  meta,
}: {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  meta?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-sage-soft/50 pt-36 pb-16 md:pt-44 md:pb-24">
      <div aria-hidden className="absolute -top-40 -right-40 size-[520px] rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Eyebrow className="animate-rise text-[#8a6a38]">{eyebrow}</Eyebrow>
        <h1
          className="animate-rise mt-6 max-w-4xl font-serif text-5xl leading-[1.02] font-light tracking-tight text-forest text-balance md:text-7xl"
          style={{ animationDelay: '120ms' }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty"
            style={{ animationDelay: '240ms' }}
          >
            {description}
          </p>
        )}
        {meta && (
          <div className="animate-rise mt-6 text-sm text-muted-foreground" style={{ animationDelay: '320ms' }}>
            {meta}
          </div>
        )}
      </div>
    </section>
  )
}
