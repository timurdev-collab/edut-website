export const site = {
  name: 'EduT Scholarship',
  shortName: 'EduT',
  url: 'https://edut.timurhasanov.com',
  tagline: 'Your next chapter starts here',
  description:
    'EduT Scholarship is an upcoming mobile app for iOS and Android that helps students discover scholarships, manage university applications, and connect with educational advisors. Coming soon to the App Store and Google Play.',
  email: 'timur_dev@icloud.com',
  legalUpdated: 'October 19, 2026',
} as const

export const mainNav = [
  { href: '/#discover', label: 'Discover', section: 'discover' },
  { href: '/#how-it-works', label: 'How it works', section: 'how-it-works' },
  { href: '/#app', label: 'The app', section: 'app' },
  { href: '/#advisors', label: 'Advisors', section: 'advisors' },
  { href: '/#coming-soon', label: 'Coming soon', section: 'coming-soon' },
  { href: '/faq', label: 'FAQ', section: null },
] as const

export const footerNav = {
  Product: [
    { href: '/#discover', label: 'Scholarship discovery' },
    { href: '/#how-it-works', label: 'How it works' },
    { href: '/#app', label: 'App preview' },
    { href: '/#advisors', label: 'Advisor guidance' },
    { href: '/#coming-soon', label: 'Coming soon' },
  ],
  Support: [
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ],
  Legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Use' },
  ],
} as const
