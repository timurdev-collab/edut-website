'use client'

import { useState } from 'react'
import {
  Award,
  BookOpen,
  Check,
  ChevronDown,
  Globe2,
  GraduationCap,
  HandHeart,
  Palette,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type Category = {
  id: string
  icon: LucideIcon
  title: string
  group: Group
  body: string
  considers: string[]
  checklist: string[]
}

type Group = 'Achievement' | 'Circumstance' | 'Pathway'

const groups: ('All' | Group)[] = ['All', 'Achievement', 'Circumstance', 'Pathway']

const categories: Category[] = [
  {
    id: 'merit',
    icon: Award,
    title: 'Merit-based',
    group: 'Achievement',
    body: 'Recognition for academic achievement, leadership and promise.',
    considers: ['Academic record', 'Leadership', 'Recommendations'],
    checklist: ['Minimum grade or score requirements', 'Whether interviews are part of selection', 'If the award renews each year'],
  },
  {
    id: 'need',
    icon: HandHeart,
    title: 'Need-based',
    group: 'Circumstance',
    body: 'Support shaped around financial circumstances and access to education.',
    considers: ['Financial context', 'Household details', 'Supporting documents'],
    checklist: ['Which financial documents are required', 'How need is assessed', 'Whether it combines with other aid'],
  },
  {
    id: 'field',
    icon: BookOpen,
    title: 'Field of study',
    group: 'Pathway',
    body: 'Opportunities tied to a subject area, from STEM to the humanities.',
    considers: ['Intended major', 'Relevant projects', 'Subject essays'],
    checklist: ['Eligible programs or majors', 'Portfolio or project requirements', 'Commitments after graduation'],
  },
  {
    id: 'abroad',
    icon: Globe2,
    title: 'Study abroad',
    group: 'Pathway',
    body: 'Funding for international students and globally minded programs.',
    considers: ['Destination', 'Nationality rules', 'Language ability'],
    checklist: ['Eligible countries and institutions', 'Visa or residency conditions', 'What costs are covered'],
  },
  {
    id: 'community',
    icon: Users,
    title: 'Community & identity',
    group: 'Circumstance',
    body: 'Awards connected to background, heritage, region or community involvement.',
    considers: ['Background', 'Community service', 'Personal statement'],
    checklist: ['Specific eligibility criteria', 'Evidence of involvement needed', 'Regional restrictions'],
  },
  {
    id: 'talent',
    icon: Palette,
    title: 'Arts & athletics',
    group: 'Achievement',
    body: 'Pathways for creative, performing and athletic talent.',
    considers: ['Portfolio or reel', 'Auditions', 'Competition record'],
    checklist: ['Submission formats accepted', 'Audition or trial dates', 'Participation requirements'],
  },
  {
    id: 'level',
    icon: GraduationCap,
    title: 'Graduate & research',
    group: 'Pathway',
    body: 'Support for master’s, doctoral and research-focused study.',
    considers: ['Research proposal', 'Supervisor fit', 'Publications'],
    checklist: ['Whether a supervisor must be confirmed', 'Stipend versus tuition coverage', 'Duration of funding'],
  },
]

export function ScholarshipExplorer() {
  const [group, setGroup] = useState<(typeof groups)[number]>('All')
  const [expanded, setExpanded] = useState<string | null>(null)
  const visible = group === 'All' ? categories : categories.filter((c) => c.group === group)

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div role="group" aria-label="Filter scholarship categories" className="flex flex-wrap gap-2">
          {groups.map((g) => {
            const active = g === group
            return (
              <button
                key={g}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setGroup(g)
                  setExpanded(null)
                }}
                className={cn(
                  'min-h-10 rounded-full border px-4 text-sm transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none active:scale-95',
                  active
                    ? 'border-forest bg-forest text-ivory shadow-md shadow-forest/20'
                    : 'border-forest/15 bg-card text-forest hover:border-forest/40',
                )}
              >
                {g}
              </button>
            )
          })}
        </div>
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'category' : 'categories'}
        </p>
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {visible.map((c, i) => {
          const isOpen = expanded === c.id
          const panelId = `scholarship-${c.id}-panel`
          return (
            <li
              key={`${group}-${c.id}`}
              className="animate-screen-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <article
                className={cn(
                  'group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(31,58,46,0.35)] md:p-8',
                  isOpen ? 'border-forest/40' : 'border-border hover:border-forest/25',
                )}
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold via-gold/70 to-transparent transition-transform duration-700 group-hover:scale-x-100"
                />
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-forest/10 bg-sage-soft/70 text-forest transition-all duration-500 group-hover:rotate-[-4deg] group-hover:bg-forest group-hover:text-gold">
                    <c.icon className="size-5" aria-hidden />
                  </span>
                  <span className="rounded-full border border-border px-2.5 py-1 text-[11px] tracking-wider text-muted-foreground uppercase">
                    {c.group}
                  </span>
                </div>
                <h3 className="mt-7 font-serif text-2xl text-forest">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">{c.body}</p>

                <p className="mt-6 text-[11px] font-medium tracking-[0.18em] text-[#8a6a38] uppercase">
                  Often considers
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {c.considers.map((x) => (
                    <li key={x} className="rounded-full bg-ivory px-3 py-1 text-xs text-forest ring-1 ring-forest/10">
                      {x}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setExpanded(isOpen ? null : c.id)}
                    className="flex w-full items-center justify-between gap-3 border-t border-border pt-5 text-left text-sm font-medium text-forest transition-colors hover:text-forest-deep focus-visible:outline-none focus-visible:underline focus-visible:decoration-gold focus-visible:underline-offset-4"
                  >
                    Questions to ask the provider
                    <ChevronDown
                      className={cn('size-4 transition-transform duration-500', isOpen && 'rotate-180')}
                      aria-hidden
                    />
                  </button>
                  <div
                    id={panelId}
                    className={cn(
                      'grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <ul className="overflow-hidden" inert={!isOpen}>
                      {c.checklist.map((q) => (
                        <li key={q} className="mt-3 flex items-start gap-3 text-sm text-muted-foreground first:mt-4">
                          <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
