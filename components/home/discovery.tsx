import Image from 'next/image'
import { Info } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ScholarshipExplorer } from '@/components/home/scholarship-explorer'

export function Discovery() {
  return (
    <section id="discover" aria-labelledby="discover-title" className="scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="discover-title"
              eyebrow="Scholarship discovery"
              title={
                <>
                  Find funding that <em className="italic">fits your story</em>
                </>
              }
              description="EduT is designed to bring scholarship exploration into one calm, organized place. Explore the main kinds of funding below and what to check before you apply."
            />
            <Reveal delay={150} variant="scale" className="group relative mt-12 hidden aspect-[4/5] overflow-hidden rounded-[2rem] lg:block">
              <Image
                src="/images/library.png"
                alt="A grand university library reading room with green lamps and tall arched windows"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-transparent" />
              <p className="absolute right-6 bottom-6 left-6 font-serif text-2xl leading-snug text-ivory text-balance">
                Less searching. More time for the applications that matter.
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <ScholarshipExplorer />
            </Reveal>

            <Reveal delay={150} className="mt-6 flex gap-4 rounded-3xl border border-gold/30 bg-gold/5 p-6">
              <Info className="mt-0.5 size-5 shrink-0 text-[#8a6a38]" aria-hidden />
              <p className="text-sm leading-relaxed text-muted-foreground">
                These are general categories, not active listings. EduT does not award scholarships — opportunities
                are offered by their respective providers. Always confirm eligibility, amounts and deadlines directly
                with the provider before applying.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
