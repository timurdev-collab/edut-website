import { Bell, Bookmark, CalendarDays, Check, Compass, FileText, Home, MessageCircle, Search, User } from 'lucide-react'

function SampleTag() {
  return (
    <span className="rounded-full bg-gold/15 px-1.5 py-0.5 text-[8px] font-semibold tracking-wider text-[#7d5f30] uppercase">
      Sample
    </span>
  )
}

function TabBar({ active }: { active: number }) {
  const tabs = [Home, Compass, FileText, MessageCircle, User]
  return (
    <div className="absolute inset-x-3 bottom-5 flex items-center justify-around rounded-2xl border border-forest/10 bg-white/80 py-2.5 backdrop-blur">
      {tabs.map((Icon, i) => (
        <Icon key={i} className={i === active ? 'size-4 text-forest' : 'size-4 text-forest/35'} />
      ))}
    </div>
  )
}

export function DiscoverScreen() {
  const items = [
    { title: 'Undergraduate Merit Award', tag: 'Merit', due: 'Deadline listed by provider' },
    { title: 'Women in Engineering Grant', tag: 'Field of study', due: 'Deadline listed by provider' },
    { title: 'Global Exchange Fellowship', tag: 'Study abroad', due: 'Deadline listed by provider' },
  ]
  return (
    <div className="relative h-full px-4 pt-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] text-muted-foreground">Good morning</p>
          <p className="font-serif text-xl text-forest">Discover</p>
        </div>
        <Bell className="size-4 text-forest" />
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-xl border border-forest/10 bg-white px-3 py-2 text-[10px] text-muted-foreground">
        <Search className="size-3" /> Search scholarships
      </div>
      <div className="mt-3 flex gap-1.5 overflow-hidden">
        {['All', 'Merit', 'Need-based', 'Abroad'].map((c, i) => (
          <span
            key={c}
            className={
              i === 0
                ? 'rounded-full bg-forest px-2.5 py-1 text-[9px] text-ivory'
                : 'rounded-full border border-forest/15 px-2.5 py-1 text-[9px] text-forest'
            }
          >
            {c}
          </span>
        ))}
      </div>
      <div className="mt-3 rounded-2xl bg-forest p-3.5 text-ivory">
        <p className="text-[9px] tracking-widest text-gold uppercase">Your shortlist</p>
        <p className="mt-1 font-serif text-base leading-tight">Keep every opportunity in one place</p>
      </div>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it.title} className="rounded-xl border border-forest/10 bg-white p-2.5">
            <div className="flex items-start justify-between gap-2">
              <p className="text-[11px] leading-tight font-semibold text-forest">{it.title}</p>
              <Bookmark className="size-3 shrink-0 text-forest/50" />
            </div>
            <div className="mt-1.5 flex items-center gap-1.5">
              <span className="rounded-full bg-sage-soft px-1.5 py-0.5 text-[8px] text-forest">{it.tag}</span>
              <SampleTag />
            </div>
            <p className="mt-1 text-[9px] text-muted-foreground">{it.due}</p>
          </li>
        ))}
      </ul>
      <TabBar active={1} />
    </div>
  )
}

export function TrackerScreen() {
  const tasks = [
    { label: 'Personal statement', done: true },
    { label: 'Recommendation letters', done: true },
    { label: 'Transcript request', done: false },
    { label: 'Scholarship essay', done: false },
  ]
  return (
    <div className="relative h-full px-4 pt-4">
      <p className="text-[10px] text-muted-foreground">Applications</p>
      <p className="font-serif text-xl text-forest">My journey</p>
      <div className="mt-3 rounded-2xl border border-forest/10 bg-white p-3">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold text-forest">Sample University</p>
          <SampleTag />
        </div>
        <p className="mt-0.5 text-[9px] text-muted-foreground">Undergraduate &middot; Economics</p>
        <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-sage-soft">
          <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-forest to-sage" />
        </div>
        <p className="mt-1 text-[9px] text-muted-foreground">2 of 4 steps complete</p>
      </div>
      <ul className="mt-3 space-y-1.5">
        {tasks.map((t) => (
          <li key={t.label} className="flex items-center gap-2.5 rounded-xl bg-white/70 px-2.5 py-2">
            <span
              className={
                t.done
                  ? 'flex size-4 items-center justify-center rounded-full bg-forest text-ivory'
                  : 'size-4 rounded-full border border-forest/30'
              }
            >
              {t.done && <Check className="size-2.5" />}
            </span>
            <span className={t.done ? 'text-[10px] text-forest/50 line-through' : 'text-[10px] text-forest'}>
              {t.label}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center gap-2.5 rounded-2xl bg-sage-soft p-3">
        <CalendarDays className="size-4 text-forest" />
        <div>
          <p className="text-[10px] font-semibold text-forest">Deadline reminders</p>
          <p className="text-[9px] text-muted-foreground">Set your own alerts for each step</p>
        </div>
      </div>
      <TabBar active={2} />
    </div>
  )
}

export function AdvisorScreen() {
  return (
    <div className="relative flex h-full flex-col px-4 pt-4">
      <div className="flex items-center gap-2.5 border-b border-forest/10 pb-3">
        <span className="flex size-8 items-center justify-center rounded-full bg-forest font-serif text-xs text-ivory">A</span>
        <div>
          <p className="text-[11px] font-semibold text-forest">Your advisor</p>
          <p className="text-[9px] text-muted-foreground">Educational guidance</p>
        </div>
        <SampleTag />
      </div>
      <div className="mt-3 space-y-2">
        <p className="mr-8 rounded-2xl rounded-tl-sm bg-white p-2.5 text-[10px] leading-snug text-forest">
          Hi! I&apos;ve looked at your shortlist. Shall we start with your personal statement?
        </p>
        <p className="ml-8 rounded-2xl rounded-tr-sm bg-forest p-2.5 text-[10px] leading-snug text-ivory">
          Yes please — I&apos;m not sure how to open the first paragraph.
        </p>
        <p className="mr-8 rounded-2xl rounded-tl-sm bg-white p-2.5 text-[10px] leading-snug text-forest">
          Let&apos;s begin with a moment that shaped your interest in economics.
        </p>
      </div>
      <div className="mt-3 rounded-2xl border border-gold/40 bg-gold/10 p-2.5">
        <p className="text-[9px] tracking-widest text-[#7d5f30] uppercase">Session</p>
        <p className="mt-0.5 text-[10px] font-semibold text-forest">Essay review &middot; Request a time</p>
      </div>
      <TabBar active={3} />
    </div>
  )
}
