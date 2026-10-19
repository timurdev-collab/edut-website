import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { AppStoreBadge } from '@/components/app-store-badge'
import { GooglePlayBadge } from '@/components/google-play-badge'
import { ButtonLink } from '@/components/button-link'

const pillars = [
  { title: 'Discover', body: 'Scholarships aligned to your goals' },
  { title: 'Organize', body: 'Every application, deadline and document' },
  { title: 'Connect', body: 'Guidance from educational advisors' },
]

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-forest-deep text-ivory">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/hero-campus.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-ken-burns object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/35 to-forest-deep/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/80 via-forest-deep/30 to-transparent" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pt-32 pb-12 md:px-8 md:pb-16">
        <div className="max-w-4xl">
          <p
            className="animate-rise inline-flex items-center gap-2 rounded-full border border-ivory/20 bg-ivory/10 px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase backdrop-blur-md"
            style={{ animationDelay: '150ms' }}
          >
            <span aria-hidden className="size-1.5 rounded-full bg-gold" />
            iOS &amp; Android &middot; Coming soon
          </p>
          <h1
            id="hero-title"
            className="animate-rise mt-7 font-serif text-[3.25rem] leading-[0.95] font-light tracking-tight text-balance sm:text-7xl lg:text-8xl xl:text-[7.5rem]"
            style={{ animationDelay: '300ms' }}
          >
            Your next chapter <em className="font-normal text-gold italic">starts here</em>
          </h1>
          <p
            className="animate-rise mt-7 max-w-xl text-lg leading-relaxed text-ivory/80 text-pretty md:text-xl"
            style={{ animationDelay: '500ms' }}
          >
            EduT Scholarship is designed to help you discover scholarships, keep university
            applications in order, and connect with educational advisors who can guide the way.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: '600ms' }}>
            <AppStoreBadge tone="dark" />
            <GooglePlayBadge tone="dark" />
          </div>
          <div
            className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: '700ms' }}
          >
            <ButtonLink href="#discover" variant="ivory">
              Explore scholarships
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="outlineLight" arrow={false}>
              See how it works
            </ButtonLink>
          </div>
        </div>

        <ul
          className="animate-rise mt-16 grid gap-px overflow-hidden rounded-2xl border border-ivory/15 bg-ivory/15 backdrop-blur-md sm:grid-cols-3 md:mt-24"
          style={{ animationDelay: '900ms' }}
        >
          {pillars.map((p, i) => (
            <li key={p.title} className="flex items-baseline gap-4 bg-forest-deep/50 px-6 py-5 transition-colors duration-500 hover:bg-forest-deep/30">
              <span className="font-serif text-sm text-gold italic">0{i + 1}</span>
              <div>
                <p className="font-serif text-xl">{p.title}</p>
                <p className="mt-1 text-sm text-ivory/65">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <Link
          href="#discover"
          className="mt-10 hidden items-center gap-2 self-center text-xs tracking-[0.2em] text-ivory/60 uppercase transition-colors hover:text-ivory md:inline-flex"
        >
          Scroll to explore
          <ArrowDown className="animate-float size-3.5" aria-hidden />
        </Link>
      </div>
    </section>
  )
}
