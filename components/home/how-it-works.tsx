import { CalendarCheck, Compass, MessageCircle, UserRound } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    icon: UserRound,
    title: 'Shape your profile',
    body: 'Share your academic interests, intended level of study and where in the world you hope to learn.',
  },
  {
    icon: Compass,
    title: 'Discover opportunities',
    body: 'Explore scholarships by category and eligibility, and save the ones worth pursuing to your shortlist.',
  },
  {
    icon: CalendarCheck,
    title: 'Organize applications',
    body: 'Track universities and scholarships side by side, with deadlines, documents and checklists in one view.',
  },
  {
    icon: MessageCircle,
    title: 'Connect with advisors',
    body: 'Reach educational advisors for perspective on your shortlist, essays and application strategy.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="scroll-mt-20 border-y border-border bg-sage-soft/50 py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="how-title"
          eyebrow="How it works"
          align="center"
          title={
            <>
              Four steps, <em className="italic">one clear path</em>
            </>
          }
          description="From the first search to the final submission, EduT is being built to keep each stage of your journey simple and visible."
        />

        <Reveal variant="fade" className="relative mt-20">
          <span
            aria-hidden
            className="draw-line absolute top-8 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-gold/10 via-gold/70 to-gold/10 lg:block"
          />
        </Reveal>
        <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 120} className="group relative">
              <div className="relative z-10 flex size-16 items-center justify-center rounded-full border border-gold/40 bg-ivory text-forest shadow-sm transition-all duration-500 group-hover:border-gold group-hover:bg-forest group-hover:text-gold">
                <s.icon className="size-6" aria-hidden />
              </div>
              <div className="mt-8 rounded-3xl border border-border bg-card p-7 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-forest/20 group-hover:shadow-[0_24px_50px_-28px_rgba(31,58,46,0.35)]">
                <p className="font-serif text-sm text-[#8a6a38] italic">Step {String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 font-serif text-2xl text-forest">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
