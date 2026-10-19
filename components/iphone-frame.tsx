import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function IPhoneFrame({
  children,
  label,
  className,
}: {
  children: ReactNode
  label: string
  className?: string
}) {
  return (
    <figure className={cn('relative mx-auto w-full max-w-[290px]', className)}>
      <div
        role="img"
        aria-label={label}
        className="relative aspect-[9/19.5] rounded-[3rem] bg-[#0d1712] p-[10px] shadow-[0_40px_80px_-20px_rgba(10,25,18,0.55),inset_0_0_0_1.5px_rgba(255,255,255,0.12)]"
      >
        <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-ivory">
          <div aria-hidden className="absolute top-2.5 left-1/2 z-20 h-6 w-[84px] -translate-x-1/2 rounded-full bg-[#0d1712]" />
          <div aria-hidden className="flex items-center justify-between px-7 pt-3.5 text-[11px] font-semibold text-forest">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-3 rounded-[2px] border border-forest/70" />
            </span>
          </div>
          <div aria-hidden className="h-[calc(100%-2rem)]">
            {children}
          </div>
          <div aria-hidden className="absolute bottom-2 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-forest/80" />
        </div>
      </div>
    </figure>
  )
}
