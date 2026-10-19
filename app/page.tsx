import { Hero } from '@/components/home/hero'
import { Discovery } from '@/components/home/discovery'
import { HowItWorks } from '@/components/home/how-it-works'
import { AppPreview } from '@/components/home/app-preview'
import { Advisors } from '@/components/home/advisors'
import { Upcoming } from '@/components/home/upcoming'
import { FaqSection } from '@/components/home/faq-section'
import { ClosingCta } from '@/components/home/closing-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Discovery />
      <HowItWorks />
      <AppPreview />
      <Advisors />
      <Upcoming />
      <FaqSection />
      <ClosingCta />
    </>
  )
}
