import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="font-serif text-sm text-[#8a6a38] italic">Page not found</p>
      <h1 className="mt-4 font-serif text-5xl text-forest md:text-7xl text-balance">This chapter hasn&apos;t been written</h1>
      <Link href="/" className="mt-10 rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory hover:bg-forest-deep">
        Back to home
      </Link>
    </section>
  )
}
