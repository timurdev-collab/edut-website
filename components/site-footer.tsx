import Link from 'next/link'
import { ArrowUp, Mail } from 'lucide-react'
import { Logo } from '@/components/logo'
import { AppStoreBadge } from '@/components/app-store-badge'
import { GooglePlayBadge } from '@/components/google-play-badge'
import { footerNav, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="grain relative overflow-hidden bg-forest-deep text-ivory">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 size-[720px] -translate-x-1/2 rounded-full bg-sage/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-10 md:px-8 md:pt-28">
        <div className="flex flex-col gap-10 border-b border-ivory/10 pb-16 md:flex-row md:items-end md:justify-between">
          <p className="max-w-2xl font-serif text-4xl leading-[1.05] font-light tracking-tight text-balance md:text-6xl">
            Your next chapter <em className="text-gold italic">starts here.</em>
          </p>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex flex-wrap gap-3 md:justify-end"><AppStoreBadge tone="dark" /><GooglePlayBadge tone="dark" /></div>
            <a
              href={`mailto:${site.email}`}
              className="link-underline inline-flex items-center gap-2 pb-0.5 text-sm text-ivory/70 transition-colors hover:text-ivory"
            >
              <Mail className="size-4 text-gold" aria-hidden />
              {site.email}
            </a>
          </div>
        </div>

        <div className="grid gap-14 pt-14 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/60 text-pretty">
              An upcoming mobile app for iOS and Android to discover scholarships, organize university applications and connect with
              educational advisors.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {Object.entries(footerNav).map(([heading, links]) => (
              <nav key={heading} aria-label={`${heading} links`}>
                <h2 className="text-xs font-medium tracking-[0.2em] text-gold uppercase">{heading}</h2>
                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="link-underline pb-0.5 text-sm text-ivory/70 transition-colors hover:text-ivory focus-visible:text-ivory focus-visible:outline-none"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-ivory/10 pt-8 text-xs text-ivory/50 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p>
              &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <p className="max-w-xl leading-relaxed">
              Apple, the Apple logo, iPhone and App Store are trademarks of Apple Inc., registered in the U.S. and
              other countries.
            </p>
          </div>
          <a
            href="#main"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-ivory/15 px-4 py-2.5 text-ivory/70 transition-colors hover:border-ivory/40 hover:text-ivory focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none md:self-auto"
          >
            Back to top
            <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  )
}
