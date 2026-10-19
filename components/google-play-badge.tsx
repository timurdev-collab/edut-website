import { Smartphone } from 'lucide-react'
import { cn } from '@/lib/utils'

/** Informational badge only: the Android app is planned and not downloadable yet. */
export function GooglePlayBadge({
  tone = 'light',
  className,
}: {
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <div
      role="note"
      aria-label="EduT Scholarship for Android is coming soon to Google Play"
      className={cn(
        'inline-flex items-center gap-3 rounded-2xl border px-4 py-2.5',
        tone === 'dark'
          ? 'border-ivory/20 bg-ivory/5 text-ivory'
          : 'border-forest/15 bg-white/60 text-forest backdrop-blur',
        className,
      )}
    >
      <Smartphone aria-hidden="true" className="size-6 shrink-0" />
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] tracking-[0.18em] uppercase opacity-70">Coming soon to</span>
        <span className="text-base font-semibold tracking-tight">Google Play</span>
      </span>
      <span className={cn(
        'ml-1 rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase',
        tone === 'dark' ? 'bg-gold/20 text-gold' : 'bg-gold/15 text-[#8a6a38]',
      )}>Android</span>
    </div>
  )
}
