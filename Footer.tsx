'use client'

import { useLenis } from '@/lib/hooks/useLenis'
import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Page() {
  useLenis()

  return (
    <main className="relative bg-carbon text-bone overflow-x-hidden">
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0" />
      <div className="fixed inset-0 noise-texture pointer-events-none z-0" />
      <Navigation />
      <div className="relative z-10">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
