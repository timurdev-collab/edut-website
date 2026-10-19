import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How EduT Scholarship approaches the collection, use and protection of personal information.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Your trust matters. This policy explains how EduT Scholarship approaches personal information on this website and in the upcoming iOS app."
        meta={<>Last updated: {site.legalUpdated}</>}
      />
      <article className="legal-prose mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <p>
          This Privacy Policy describes how {site.name} (&ldquo;EduT&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles
          information in connection with this website ({site.url.replace('https://', '')}) and the EduT Scholarship iOS app,
          which is not yet available. We will update this policy before the app launches to reflect its final features.
        </p>

        <h2>Information we may collect</h2>
        <h3>Information you provide</h3>
        <ul>
          <li>Contact details and the content of messages you send us, such as through our contact page.</li>
          <li>
            In the app, profile details you choose to share — for example your academic interests, intended level of study
            and preferred study destinations.
          </li>
          <li>Application information you choose to store, such as saved scholarships, checklists and notes.</li>
        </ul>
        <h3>Information collected automatically</h3>
        <ul>
          <li>
            Basic, aggregated usage and performance information about this website, such as pages visited and device type,
            to help us understand and improve the experience.
          </li>
        </ul>

        <h2>How we use information</h2>
        <ul>
          <li>To provide, maintain and improve the website and app.</li>
          <li>To respond to your enquiries and support requests.</li>
          <li>To help you organize scholarship and university applications.</li>
          <li>To facilitate connections with educational advisors, when you request them.</li>
          <li>To protect the security and integrity of our services.</li>
        </ul>

        <h2>Upcoming AI capabilities</h2>
        <p>
          AI-powered personalized scholarship matching and application assistance are upcoming capabilities and are not
          currently available. Before any such feature is introduced, we will update this policy to explain what information
          it uses and the choices available to you.
        </p>

        <h2>Sharing of information</h2>
        <p>
          We do not sell your personal information. We may share information with service providers who help us operate our
          services, with advisors when you choose to connect with them, or where required by law.
        </p>

        <h2>Data retention</h2>
        <p>
          We keep personal information only for as long as needed for the purposes described in this policy, unless a longer
          period is required by law.
        </p>

        <h2>Your choices and rights</h2>
        <p>
          Depending on where you live, you may have rights to access, correct, delete or restrict the use of your personal
          information. To make a request, please <Link href="/contact">contact us</Link>.
        </p>

        <h2>Children and students</h2>
        <p>
          EduT is intended for students preparing for higher education. If you are under the age required to consent to data
          processing in your country, please use EduT with the involvement of a parent or guardian.
        </p>

        <h2>Security</h2>
        <p>
          We use reasonable technical and organizational measures to protect information. No method of transmission or
          storage is completely secure, however, and we cannot guarantee absolute security.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. When we do, we will revise the &ldquo;Last updated&rdquo; date above.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about privacy? Email <a href={`mailto:${site.email}`}>{site.email}</a> or visit our{' '}
          <Link href="/contact">contact page</Link>.
        </p>
      </article>
    </>
  )
}
