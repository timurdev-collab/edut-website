'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Logo } from '@/components/logo'
import { mainNav, site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(window.scrollY > 24)
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pathname])

  useEffect(() => {
    if (!isHome) {
      setActiveSection(null)
      return
    }
    const ids = mainNav.map((n) => n.section).filter(Boolean) as string[]
    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [isHome])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.body.style.overflow = ''
    }
  }, [open])

  const overHero = isHome && !scrolled && !open

  function isActive(item: (typeof mainNav)[number]) {
    if (item.section) return isHome && activeSection === item.section
    return pathname === item.href
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color,backdrop-filter] duration-500',
        overHero
          ? 'border-b border-transparent bg-transparent text-ivory'
          : 'border-b border-border/70 bg-ivory/85 text-foreground backdrop-blur-xl backdrop-saturate-150',
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 md:h-20 md:px-8">
        <Link
          href="/"
          aria-label={`${site.name} home`}
          className="rounded-md transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
        >
          <Logo inverted={overHero} />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {mainNav.map((item) => {
              const active = isActive(item)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? (item.section ? 'location' : 'page') : undefined}
                    className={cn(
                      'group relative inline-flex rounded-full px-3.5 py-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none xl:px-4',
                      overHero
                        ? 'text-ivory/80 hover:text-ivory'
                        : active
                          ? 'text-forest'
                          : 'text-foreground/70 hover:text-forest',
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        'absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-500 ease-out xl:inset-x-4',
                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                      )}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            aria-current={pathname === '/contact' ? 'page' : undefined}
            className={cn(
              'btn-shine hidden min-h-11 items-center gap-1.5 rounded-full px-5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none sm:inline-flex',
              overHero ? 'bg-ivory text-forest hover:bg-white' : 'bg-forest text-ivory hover:bg-forest-deep',
            )}
          >
            Get in touch
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className={cn(
              'relative inline-flex size-11 items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none lg:hidden',
              overHero ? 'hover:bg-ivory/10' : 'hover:bg-forest/5',
            )}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span aria-hidden className="relative block h-3 w-5">
              <span
                className={cn(
                  'absolute left-0 h-[1.5px] w-5 rounded-full bg-current transition-all duration-300',
                  open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 h-[1.5px] rounded-full bg-current transition-all duration-300',
                  open ? 'top-1/2 w-5 -translate-y-1/2 -rotate-45' : 'bottom-0 w-3.5',
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gold/80 transition-opacity duration-300"
        style={{ transform: `scaleX(${progress})`, opacity: scrolled && !open ? 1 : 0 }}
      />

      <div
        id="mobile-nav"
        inert={!open}
        className={cn(
          'absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] overflow-y-auto bg-ivory px-5 pb-10 transition-[opacity,transform,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden',
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0',
        )}
      >
        <nav aria-label="Mobile" className="flex min-h-full flex-col">
          <ul className="flex flex-col pt-2">
            {mainNav.map((item, i) => {
              const active = isActive(item)
              return (
                <li
                  key={item.href}
                  className={cn(
                    'border-b border-border/60 transition-all duration-500',
                    open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
                  )}
                  style={{ transitionDelay: open ? `${80 + i * 45}ms` : '0ms' }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className="group flex items-center justify-between py-4 font-serif text-3xl text-forest focus-visible:outline-none focus-visible:text-[#8a6a38]"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-sans text-xs text-[#8a6a38] tabular-nums">0{i + 1}</span>
                      {item.label}
                    </span>
                    <ArrowUpRight
                      className="size-5 text-forest/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-forest"
                      aria-hidden
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="mt-auto pt-10">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-forest px-6 font-medium text-ivory transition-colors hover:bg-forest-deep"
            >
              Get in touch
            </Link>
            <p className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span aria-hidden className="size-1.5 rounded-full bg-gold" />
              Coming soon to the App Store
            </p>
          </div>
        </nav>
      </div>
    </header>
  )
}
