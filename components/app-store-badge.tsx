import { cn } from '@/lib/utils'

function AppleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" aria-hidden="true" className={className} fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

export function AppStoreBadge({
  tone = 'light',
  className,
}: {
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <div
      role="note"
      aria-label="EduT Scholarship is coming soon to the App Store for iPhone"
      className={cn(
        'inline-flex items-center gap-3 rounded-2xl border px-4 py-2.5',
        tone === 'dark'
          ? 'border-ivory/20 bg-ivory/5 text-ivory'
          : 'border-forest/15 bg-white/60 text-forest backdrop-blur',
        className,
      )}
    >
      <AppleGlyph className="size-6" />
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] tracking-[0.18em] uppercase opacity-70">Coming soon to the</span>
        <span className="text-base font-semibold tracking-tight">App Store</span>
      </span>
      <span
        className={cn(
          'ml-1 rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase',
          tone === 'dark' ? 'bg-gold/20 text-gold' : 'bg-gold/15 text-[#8a6a38]',
        )}
      >
        iOS
      </span>
    </div>
  )
}
