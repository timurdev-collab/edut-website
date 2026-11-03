import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How EduT Scholarship collects, uses, stores and shares information across the website and mobile app.',
  alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How EduT Scholarship handles your personal information, including scholarship profiles, advisor services and account data."
        meta={<>Last updated: {site.legalUpdated}</>}
      />
      <article className="legal-prose mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <p>
          EduT Scholarship (&ldquo;EduT&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) is operated by
          <strong> Timur Hasanov</strong>, an individual developer. This Privacy Policy describes
          how information is processed when you use our website and the EduT Scholarship mobile
          application, including scholarship discovery, application tools, student community and
          advisor features. For privacy requests, email{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <p>
          Independent scholarship sites, linked videos, WhatsApp and other external services
          operate under their own privacy policies. This notice applies to the services EduT
          operates and does not override their practices.
        </p>

        <h2>1. Information we collect</h2>
        <p>The information collected depends on the features you use:</p>
        <ul>
          <li><strong>Account information:</strong> your email, name or display name, user identifier,
          sign-in information, and optional contact details.</li>
          <li><strong>Academic and scholarship information:</strong> your nationality, country or
          residence details, education history, intended study level, destinations and subjects,
          grades or GPA, language test scores, scholarship preferences, information used for eligibility matching. New app versions do not request family income, and the active service discards any family-income values submitted by older app versions.</li>
          <li><strong>Application activity:</strong> saved scholarships, application progress,
          checklists, notes and any documents you choose to upload.</li>
          <li><strong>Community activity:</strong> posts, messages, profile images or videos,
          reports, blocks and other content you submit.</li>
          <li><strong>Advisor information:</strong> professional biography, qualifications,
          experience, specialties, photograph, external profile or introduction-video links,
          application and approval status, student assignments and consultation requests.</li>
          <li><strong>Consultation information:</strong> messages, service selections, contact
          details, scheduling information, and transaction or payment-status records when the
          corresponding feature is used.</li>
          <li><strong>Technical information:</strong> device or push-notification tokens where
          enabled, session and preference data, and information processed by infrastructure
          providers such as IP addresses and operational or security logs.</li>
          <li><strong>Website analytics:</strong> we use Vercel Analytics to understand visits
          and website performance. Technical and usage information may be processed by Vercel
          under its own documentation and privacy terms.</li>
          <li><strong>Support enquiries:</strong> your email and any information sent through
          the contact form or direct support messages.</li>
        </ul>
        <p>
          Do not send passwords, bank credentials, payment card information, or unnecessary
          identity documents through community messages or other public features.
        </p>

        <h2>2. Why we process information</h2>
        <ul>
          <li>To register and authenticate accounts and maintain service security.</li>
          <li>To provide scholarship discovery, profile-based matching, recommendations,
          shortlists and application tracking.</li>
          <li>To enable community features, advisor applications, conversations, consultations,
          student-advisor connections, reporting and blocking.</li>
          <li>To respond to support requests and send notifications where enabled.</li>
          <li>To operate and improve the website and app, troubleshoot problems, prevent abuse
          and comply with applicable legal obligations.</li>
          <li>To manage transactions, refunds or disputes if a relevant paid service is used.</li>
        </ul>
        <p>
          Where a lawful basis is required, we process information as necessary to provide a
          service you request, comply with applicable legal obligations, protect legitimate
          security and operational interests, or on the basis of consent when legally required.
          The particular basis and available rights depend on the nature of the processing and
          the laws applicable to you.
        </p>

        <h2>3. Visibility and sharing with other users</h2>
        <p>
          Private academic details, saved scholarships and private
          application notes are intended for your account rather than public posting. Content
          you post in community areas may be visible to other users. Approved advisors'
          professional profiles and voluntarily supplied profile photos, qualifications and
          introductions can be visible to prospective students.
        </p>
        <p>
          Information you share in a conversation is available to its participants. Contact
          information may be provided to another participant when a consultation workflow
          permits it. Other users may retain information you choose to disclose to them.
          Please avoid sharing unnecessary sensitive information.
        </p>

        <h2>4. Service providers and other recipients</h2>
        <p>
          EduT uses <strong>Supabase</strong> to support authentication, database functions and
          file storage. Advisor messaging remains available, but in-app LiveKit video
          calling has been discontinued. The website runs on <strong>Vercel</strong> and includes Vercel Analytics.
          The iOS app also interacts with <strong>Apple</strong> services for distribution and
          device-specific functionality, such as notifications where used.
        </p>
        <p>
          These providers receive or process information to the extent necessary for their
          services. We may also share data when you request a feature involving another user
          or advisor, when needed to investigate abuse or security incidents, or when legally
          required. Any third-party payment or external service you choose to open is subject
          to its own terms and privacy practices. We do not make a promise that information
          is never transferred internationally or retained by service providers.
        </p>

        <h2>5. Security and international processing</h2>
        <p>
          We use authentication, access restrictions and other technical measures to help
          protect user information. No online platform can guarantee absolute security.
          Remote hosting and communications services may process information in countries
          different from the one where you live, subject to applicable legal requirements.
          Keep your account credentials confidential and contact us about suspected misuse.
        </p>

        <h2>6. How long we keep information</h2>
        <p>
          We generally keep account and user-submitted information while needed to operate
          the account and requested features, and longer if necessary to meet applicable
          legal, safety or dispute-resolution requirements. Different retention periods can
          apply to messages, logs, transactions, removed content and infrastructure backups.
          We do not promise that every backup or legally retained record is erased immediately.
        </p>

        <h2>7. Account deletion and advisor withdrawal</h2>
        <p>
          You can request account deletion through <strong>Profile → Settings → Delete account</strong>
          in the mobile app. The deletion workflow is designed to delete the authentication
          account and associated user-owned records and files. Some records may remain where
          legally necessary or temporarily in backups; copies lawfully retained by other users
          may also remain outside EduT's control. If you cannot access the feature, email{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a> to request deletion or assistance.
        </p>
        <p>
          Withdrawing from the advisor role is separate from closing your EduT account and
          does not, by itself, delete your student account.
        </p>

        <h2>8. Your choices and privacy rights</h2>
        <p>
          Depending on where you live, you may have rights to access, correct, erase, object
          to or restrict processing, request a copy of personal information, withdraw consent
          for consent-based processing, or complain to a data-protection authority. You can
          edit supported profile fields, manage device permissions, and use in-app blocking
          and reporting tools. Send additional requests to{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>. We may verify account ownership
          before acting and will respond as required by applicable law.
        </p>

        <h2>9. Cookies, device storage and tracking</h2>
        <p>
          Our native app may keep sign-in sessions and preferences on your device. Websites
          and linked third-party services can use cookies or similar technologies. This
          website uses Vercel Analytics to understand usage and performance. The iOS app's
          current privacy manifest declares no cross-app tracking for advertising purposes.
          We will update our disclosures and request any required permissions before enabling
          new optional tracking technologies.
        </p>

        <h2>10. Children and younger students</h2>
        <p>
          EduT supports scholarship discovery for prospective students. Some may be under
          the age of majority in their country. If you are a minor, involve a parent or
          legal guardian when providing personal information, using messaging, or arranging
          advisor services. Applicable age and parental-consent requirements vary by country.
          Contact us if you believe a minor has submitted personal information in a way
          that requires correction or deletion.
        </p>

        <h2>11. Changes to this policy</h2>
        <p>
          We may update this policy when features, providers or legal requirements change.
          The revised date will appear above, and we will provide additional notice when
          required by applicable law.
        </p>

        <h2>12. Contact</h2>
        <p>
          <strong>Operator:</strong> Timur Hasanov (individual developer).
          <br />
          <strong>Privacy contact:</strong>{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
          <br />
          You can also use the <Link href="/contact">contact page</Link>.
        </p>
      </article>
    </>
  )
}
