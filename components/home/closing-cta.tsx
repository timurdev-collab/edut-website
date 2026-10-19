import Image from 'next/image'
import { AppStoreBadge } from '@/components/app-store-badge'
import { GooglePlayBadge } from '@/components/google-play-badge'
import { ButtonLink } from '@/components/button-link'
import { Reveal } from '@/components/reveal'

export function ClosingCta() {
  return (
    <section aria-labelledby="cta-title" className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="grain group relative isolate overflow-hidden rounded-[2rem] text-ivory md:rounded-[2.5rem]">
        <Image
          src="/images/archway.png"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover transition-transform duration-[3s] ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-deep via-forest-deep/75 to-forest-deep/40" />
        <div className="mx-auto max-w-4xl px-6 py-28 text-center md:py-40">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-ivory/20 bg-ivory/10 px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase backdrop-blur-md">
              <span aria-hidden className="animate-pulse-ring size-1.5 rounded-full bg-gold" />
              iPhone &amp; Android · Coming soon
            </p>
            <h2
              id="cta-title"
              className="mt-8 font-serif text-5xl leading-[1.02] font-light tracking-tight text-balance md:text-7xl"
            >
              Be ready for the <em className="italic text-gold">first page</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ivory/75 text-pretty">
              EduT Scholarship is not yet available to download. Have a question, or interested in partnering or
              advising? We&apos;d love to hear from you.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/contact" variant="ivory">
                Contact the team
              </ButtonLink>
              <ButtonLink href="/faq" variant="outlineLight" arrow={false}>
                Read the FAQ
              </ButtonLink>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <AppStoreBadge tone="dark" />
              <GooglePlayBadge tone="dark" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
