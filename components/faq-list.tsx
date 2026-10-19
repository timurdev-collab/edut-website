import { Plus } from 'lucide-react'
import type { FaqItem } from '@/lib/faq'

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.q} className="group py-2 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg py-5 text-left font-serif text-xl text-forest transition-colors hover:text-forest-deep focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none md:text-2xl">
            {item.q}
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-forest/20 transition-all duration-300 group-open:rotate-45 group-open:border-gold group-open:bg-forest group-open:text-ivory">
              <Plus className="size-4" aria-hidden />
            </span>
          </summary>
          <p className="max-w-3xl pb-6 leading-relaxed text-muted-foreground text-pretty">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
