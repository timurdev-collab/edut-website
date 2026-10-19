import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FaqList } from '@/components/faq-list'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { faqs } from '@/lib/faq'

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[4fr_8fr] lg:gap-20">
        <div>
          <SectionHeading id="faq-title" eyebrow="Questions" title={<>Frequently <em className="italic">asked</em></>} />
          <Reveal delay={120}>
            <Link
              href="/faq"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-forest underline decoration-gold underline-offset-8"
            >
              View all questions
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <FaqList items={faqs.slice(0, 5)} />
        </Reveal>
      </div>
    </section>
  )
}
