'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import { Compass, FileText, MessageCircle } from 'lucide-react'
import { IPhoneFrame } from '@/components/iphone-frame'
import { AdvisorScreen, DiscoverScreen, TrackerScreen } from '@/components/home/app-screens'
import { cn } from '@/lib/utils'

const screens = [
  {
    id: 'discover',
    icon: Compass,
    title: 'Discover',
    body: 'Browse scholarships by category and save the ones worth pursuing to a personal shortlist.',
    label: 'Illustrative iPhone screen showing the Discover tab with sample scholarship cards',
    Screen: DiscoverScreen,
  },
  {
    id: 'track',
    icon: FileText,
    title: 'Track',
    body: 'Follow every application step, document and deadline in a single, calm view.',
    label: 'Illustrative iPhone screen showing an application tracker with a checklist',
    Screen: TrackerScreen,
  },
  {
    id: 'connect',
    icon: MessageCircle,
    title: 'Connect',
    body: 'Message an educational advisor and request guidance on your shortlist and essays.',
    label: 'Illustrative iPhone screen showing a conversation with an educational advisor',
    Screen: AdvisorScreen,
  },
]

export function AppShowcase() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const current = screens[active]
  const prev = screens[(active + screens.length - 1) % screens.length]
  const next = screens[(active + 1) % screens.length]

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }
    let target: number | null = null
    if (e.key in keys) target = (active + keys[e.key] + screens.length) % screens.length
    if (e.key === 'Home') target = 0
    if (e.key === 'End') target = screens.length - 1
    if (target === null) return
    e.preventDefault()
    setActive(target)
    tabRefs.current[target]?.focus()
  }

  return (
    <div className="grid items-center gap-14 lg:grid-cols-[5fr_7fr] lg:gap-10">
      <div role="tablist" aria-label="App screens" aria-orientation="vertical" onKeyDown={onKeyDown} className="flex flex-col gap-3">
        {screens.map((s, i) => {
          const selected = i === active
          return (
            <button
              key={s.id}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              role="tab"
              id={`tab-${s.id}`}
              aria-selected={selected}
              aria-controls="app-showcase-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                'group relative overflow-hidden rounded-3xl border p-6 text-left transition-all duration-500 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none',
                selected
                  ? 'border-ivory/25 bg-ivory/10 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.6)]'
                  : 'border-ivory/10 hover:border-ivory/20 hover:bg-ivory/5',
              )}
            >
              <span
                aria-hidden
                className={cn(
                  'absolute top-6 bottom-6 left-0 w-0.5 rounded-full bg-gold transition-transform duration-500',
                  selected ? 'scale-y-100' : 'scale-y-0',
                )}
              />
              <div className="flex items-center gap-4">
                <span
                  className={cn(
                    'inline-flex size-11 shrink-0 items-center justify-center rounded-2xl transition-colors duration-500',
                    selected ? 'bg-gold text-forest-deep' : 'bg-ivory/10 text-ivory/70 group-hover:text-ivory',
                  )}
                >
                  <s.icon className="size-5" aria-hidden />
                </span>
                <span className="flex items-baseline gap-3">
                  <span className="text-xs text-gold tabular-nums">0{i + 1}</span>
                  <span className="font-serif text-2xl text-ivory">{s.title}</span>
                </span>
              </div>
              <div
                className={cn(
                  'grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                  selected ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                )}
              >
                <p className="overflow-hidden pl-15 text-ivory/70 text-pretty">
                  <span className="block pt-3 leading-relaxed">{s.body}</span>
                </p>
              </div>
            </button>
          )
        })}
      </div>

      <div
        id="app-showcase-panel"
        role="tabpanel"
        aria-labelledby={`tab-${current.id}`}
        className="relative flex items-center justify-center py-6"
      >
        <div aria-hidden className="absolute size-[420px] rounded-full bg-gold/15 blur-[100px] md:size-[520px]" />
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 size-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ivory/10 md:size-[500px]"
        />

        <div aria-hidden className="absolute hidden -translate-x-[62%] scale-[0.78] -rotate-6 opacity-40 blur-[1px] transition-all duration-700 md:block">
          <IPhoneFrame label="" className="w-[260px]">
            <prev.Screen />
          </IPhoneFrame>
        </div>
        <div aria-hidden className="absolute hidden translate-x-[62%] scale-[0.78] rotate-6 opacity-40 blur-[1px] transition-all duration-700 md:block">
          <IPhoneFrame label="" className="w-[260px]">
            <next.Screen />
          </IPhoneFrame>
        </div>

        <div className="relative z-10">
          <IPhoneFrame label={current.label} className="w-[270px] sm:w-[290px]">
            <div key={current.id} className="animate-screen-in h-full">
              <current.Screen />
            </div>
          </IPhoneFrame>
          <span className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 rounded-full border border-gold/40 bg-forest-deep px-3 py-1 text-[10px] font-semibold tracking-[0.18em] whitespace-nowrap text-gold uppercase shadow-lg">
            Illustrative preview
          </span>
        </div>
      </div>
    </div>
  )
}
