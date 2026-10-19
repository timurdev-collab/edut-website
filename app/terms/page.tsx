import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'The terms that apply to your use of the EduT Scholarship website and upcoming iOS app.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="Please read these terms carefully. They govern your use of the EduT Scholarship website and, once available, the iOS app."
        meta={<>Last updated: {site.legalUpdated}</>}
      />
      <article className="legal-prose mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <p>
          By accessing or using this website or the EduT Scholarship app (together, the &ldquo;Services&rdquo;), you agree to
          these Terms of Use. If you do not agree, please do not use the Services.
        </p>

        <h2>About the Services</h2>
        <p>
          EduT Scholarship is designed to help students discover scholarships, organize university applications and connect
          with educational advisors. The iOS app is coming soon to the App Store and is not yet available.
        </p>

        <h2>No guarantee of outcomes</h2>
        <p>
          EduT is not a scholarship provider, university or admissions body. We do not award funding and cannot guarantee
          admission, scholarship awards or any other outcome. Scholarship details are set by their respective providers;
          always verify eligibility, amounts and deadlines directly with the provider.
        </p>

        <h2>Advisor guidance</h2>
        <p>
          Advisors connected through EduT offer guidance and perspective only. Their input is not legal, financial or
          immigration advice, and final decisions about your education remain your own.
        </p>

        <h2>Upcoming features</h2>
        <p>
          Features described as &ldquo;upcoming&rdquo;, including AI-powered personalized scholarship matching and AI
          application assistance, are in development. They may change, be delayed or not be released, and nothing on this
          website is a commitment to deliver them.
        </p>

        <h2>Your responsibilities</h2>
        <ul>
          <li>Provide accurate information and keep it up to date.</li>
          <li>Use the Services lawfully and respectfully.</li>
          <li>Submit only your own original work in applications.</li>
          <li>Keep your account credentials secure, once accounts are available.</li>
        </ul>

        <h2>Intellectual property</h2>
        <p>
          The Services, including their design, text, graphics and software, are owned by {site.name} or its licensors and are
          protected by applicable laws. You may not copy or redistribute them without permission.
        </p>

        <h2>Third-party links</h2>
        <p>
          The Services may link to third-party websites, such as scholarship providers or universities. We are not
          responsible for their content, policies or practices.
        </p>

        <h2>Disclaimers and limitation of liability</h2>
        <p>
          The Services are provided &ldquo;as is&rdquo; without warranties of any kind. To the fullest extent permitted by law,
          {` ${site.name}`} will not be liable for any indirect, incidental or consequential damages arising from your use of
          the Services.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms from time to time. Continued use of the Services after changes take effect means you accept
          the revised terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms? Email <a href={`mailto:${site.email}`}>{site.email}</a> or visit our{' '}
          <Link href="/contact">contact page</Link>.
        </p>
      </article>
    </>
  )
}
