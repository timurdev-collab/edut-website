import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const areas = [
  { title: 'University shortlisting', body: 'Talk through which programs suit your goals, interests and circumstances.' },
  { title: 'Essays & personal statements', body: 'Get perspective on structure, voice and the story you want to tell.' },
  { title: 'Application strategy', body: 'Plan timelines, prioritize deadlines and prepare documents with confidence.' },
  { title: 'Funding questions', body: 'Understand how scholarships and financial support fit into your plans.' },
]

export function Advisors() {
  return (
    <section id="advisors" aria-labelledby="advisors-title" className="scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-24">
        <Reveal className="relative order-last lg:order-first">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[3/2] lg:aspect-[4/5]">
            <Image
              src="/images/advisor.png"
              alt="An educational advisor reviewing notes with a student at a sunlit table"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-3 -bottom-8 max-w-[260px] rounded-2xl border border-border bg-card p-5 shadow-2xl shadow-forest/10 sm:-right-6">
            <p className="font-serif text-lg leading-snug text-forest text-balance">
              &ldquo;Guidance, not guesswork.&rdquo;
            </p>
            <p className="mt-2 text-xs text-muted-foreground">The principle behind EduT advisor connections</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            id="advisors-title"
            eyebrow="Advisor guidance"
            title={
              <>
                Thoughtful support, <em className="italic">when you need it</em>
              </>
            }
            description="Applying to university is a big decision. EduT is being built to help you connect with educational advisors who can offer perspective at each stage of the process."
          />
          <dl className="mt-12 divide-y divide-border border-y border-border">
            {areas.map((a, i) => (
              <Reveal key={a.title} delay={i * 80} className="grid gap-2 py-6 sm:grid-cols-[auto_1fr] sm:gap-8">
                <dt className="flex items-baseline gap-4 font-serif text-xl text-forest sm:w-56">
                  <span className="text-sm text-[#8a6a38] italic">0{i + 1}</span>
                  {a.title}
                </dt>
                <dd className="leading-relaxed text-muted-foreground">{a.body}</dd>
              </Reveal>
            ))}
          </dl>
          <p className="mt-6 text-sm text-muted-foreground">
            Advisors offer guidance only and cannot guarantee admission or scholarship outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}
