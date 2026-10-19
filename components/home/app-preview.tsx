import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { AppStoreBadge } from '@/components/app-store-badge'
import { GooglePlayBadge } from '@/components/google-play-badge'
import { AppShowcase } from '@/components/home/app-showcase'

export function AppPreview() {
  return (
    <section
      id="app"
      aria-labelledby="app-title"
      className="grain relative scroll-mt-20 overflow-hidden bg-forest py-24 text-ivory md:py-36"
    >
      <div aria-hidden className="absolute top-1/3 left-1/2 size-[900px] -translate-x-1/2 rounded-full bg-sage/20 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="app-title"
            tone="dark"
            eyebrow="Designed for mobile"
            title={
              <>
                Your scholarship journey, <em className="italic text-gold">in your pocket</em>
              </>
            }
            description="An iPhone experience built around the moments that matter — with an Android version also planned."
          />
          <Reveal delay={150}>
            <div className="flex flex-wrap gap-3"><AppStoreBadge tone="dark" /><GooglePlayBadge tone="dark" /></div>
          </Reveal>
        </div>

        <Reveal delay={100} className="mt-16 md:mt-20">
          <AppShowcase />
        </Reveal>

        <p className="mx-auto mt-14 max-w-2xl text-center text-sm leading-relaxed text-ivory/55">
          Illustrative interface previews for demonstration only. Names marked &ldquo;Sample&rdquo; are placeholders,
          not real scholarships, universities or advisors, and the final app design may change.
        </p>
      </div>
    </section>
  )
}
