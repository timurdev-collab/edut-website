import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { PageHero } from '@/components/page-hero'
import { AppStoreBadge } from '@/components/app-store-badge'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the EduT Scholarship team for questions, partnerships, advisor enquiries or press.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s <em className="italic">talk</em>
          </>
        }
        description="Questions about EduT, interest in becoming an advisor, partnerships or press — we'd love to hear from you."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[5fr_7fr] lg:gap-16">
        <aside className="order-last space-y-6 lg:order-first">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] max-lg:hidden">
            <Image
              src="/images/student.png"
              alt="A student sitting on the steps of a campus building holding a phone"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
          <div className="rounded-3xl bg-forest p-8 text-ivory">
            <Mail className="size-5 text-gold" aria-hidden />
            <h2 className="mt-4 font-serif text-2xl">Email us directly</h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block break-all text-ivory/80 underline decoration-gold underline-offset-4 hover:text-ivory"
            >
              {site.email}
            </a>
            <div className="mt-8 border-t border-ivory/10 pt-6">
              <AppStoreBadge tone="dark" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Looking for quick answers? Visit our{' '}
            <Link href="/faq" className="text-forest underline decoration-gold underline-offset-4">
              FAQ
            </Link>
            .
          </p>
        </aside>
        <ContactForm />
      </section>
    </>
  )
}
