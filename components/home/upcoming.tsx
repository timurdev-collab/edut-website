import { Compass, PenLine, ShieldCheck, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading, UpcomingBadge } from '@/components/section-heading'

const capabilities = [
  {
    icon: Sparkles,
    title: 'AI scholarship matching',
    body: 'Would suggest scholarships that may fit the profile you choose to share — field of study, level, destination and eligibility details.',
    points: ['Suggestions based on your profile', 'Plain-language reasons for each match'],
  },
  {
    icon: Compass,
    title: 'Personalized recommendations',
    body: 'Would surface opportunities, universities and next steps that reflect your goals and the shortlist you build over time.',
    points: ['Tailored to saved interests', 'Adjustable preferences at any time'],
  },
  {
    icon: PenLine,
    title: 'Application assistance',
    body: 'Would help you plan and organize applications — breaking requirements into steps and offering prompts while you write.',
    points: ['Requirement checklists and timelines', 'Your writing always remains your own'],
  },
]

const principles = [
  'You decide what profile information is shared',
  'Suggestions are guidance, never guarantees',
  'Always verify details with the provider',
]

export function Upcoming() {
  return (
    <section
      id="coming-soon"
      aria-labelledby="coming-soon-title"
      className="relative scroll-mt-20 overflow-hidden border-t border-border bg-card py-24 md:py-36"
    >
      <div aria-hidden className="absolute -top-40 left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="coming-soon-title"
          eyebrow="Coming soon"
          align="center"
          title={
            <>
              Intelligent help, <em className="italic">thoughtfully in development</em>
            </>
          }
          description="We're exploring AI capabilities to make the journey more personal. These features are not part of the app yet, and no release date has been announced."
        />

        <ul className="mt-16 grid gap-5 md:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal
              as="li"
              key={c.title}
              delay={i * 120}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-dashed border-gold/50 bg-ivory p-8 transition-all duration-500 hover:-translate-y-1 hover:border-solid hover:shadow-[0_24px_60px_-30px_rgba(31,58,46,0.4)] md:p-9"
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-20 size-52 rounded-full bg-gold/15 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
              />
              <div className="relative flex items-center justify-between">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-forest text-gold transition-transform duration-500 group-hover:scale-105">
                  <c.icon className="size-5" aria-hidden />
                </span>
                <UpcomingBadge />
              </div>
              <h3 className="relative mt-8 font-serif text-2xl leading-tight text-forest text-balance md:text-[1.7rem]">
                {c.title}
              </h3>
              <p className="relative mt-3 leading-relaxed text-muted-foreground text-pretty">{c.body}</p>
              <ul className="relative mt-auto space-y-2.5 pt-8">
                {c.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-forest">
                    <span aria-hidden className="h-px w-5 bg-gold transition-all duration-500 group-hover:w-7" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200} className="mt-6 flex flex-col gap-6 rounded-[2rem] bg-forest p-8 text-ivory md:flex-row md:items-center md:gap-10 md:p-10">
          <div className="flex items-center gap-4 md:w-64 md:shrink-0">
            <ShieldCheck className="size-6 text-gold" aria-hidden />
            <p className="font-serif text-xl">Our guiding principles</p>
          </div>
          <ul className="grid flex-1 gap-3 sm:grid-cols-3">
            {principles.map((p) => (
              <li key={p} className="border-l border-gold/40 pl-4 text-sm leading-relaxed text-ivory/75">
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
