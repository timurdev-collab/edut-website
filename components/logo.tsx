import { cn } from '@/lib/utils'

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn('size-8', className)}>
      <rect width="64" height="64" rx="14" fill="currentColor" />
      <path d="M32 14 12 24l20 10 20-10-20-10Z" fill="var(--gold)" />
      <path d="M20 30v9c0 4 5.4 8 12 8s12-4 12-8v-9l-12 6-12-6Z" fill="var(--ivory)" />
    </svg>
  )
}

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark className={inverted ? 'text-forest-deep' : 'text-forest'} />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl tracking-tight">EduT</span>
        <span
          className={cn(
            'mt-0.5 text-[10px] font-medium tracking-[0.22em] uppercase',
            inverted ? 'text-ivory/70' : 'text-muted-foreground',
          )}
        >
          Scholarship
        </span>
      </span>
    </span>
  )
}
