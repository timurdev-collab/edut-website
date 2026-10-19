import type { Metadata } from 'next'
import Link from 'next/link'
import { FaqList } from '@/components/faq-list'
import { PageHero } from '@/components/page-hero'
import { faqs } from '@/lib/faq'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about EduT Scholarship — the upcoming iOS app for scholarship discovery, application management and advisor guidance.',
  alternates: { canonical: '/faq' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Help & answers"
        title={
          <>
            Questions, <em className="italic">answered</em>
          </>
        }
        description="Everything you need to know about EduT Scholarship as we prepare for launch on the App Store."
      />
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
        <FaqList items={faqs} />
        <div className="mt-16 rounded-3xl bg-forest p-8 text-ivory md:p-12">
          <h2 className="font-serif text-3xl">Still have a question?</h2>
          <p className="mt-3 text-ivory/70">We&apos;re happy to help. Reach out and we&apos;ll get back to you.</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-ivory px-6 py-3 text-sm font-medium text-forest transition-colors hover:bg-white"
          >
            Contact us
          </Link>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  )
}
