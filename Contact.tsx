'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Work', href: '#projects', number: '01' },
    { label: 'Services', href: '#services', number: '02' },
    { label: 'About', href: '#about', number: '03' },
    { label: 'Contact', href: '#contact', number: '04' },
  ]

  const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )

  const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-carbon/80 border-b border-graphite' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold text-bone hover:text-ember transition-colors">
            <div className="w-8 h-8 border-2 border-ember flex items-center justify-center rotate-45">
              <div className="w-4 h-4 border border-ember" />
            </div>
            <span>Mahi</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-bone hover:text-ember transition-colors flex items-center gap-2"
              >
                <span className="text-ember text-xs">— {item.number}</span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button className="hidden md:inline-flex px-4 py-2 bg-ember text-carbon font-medium text-sm rounded hover:bg-orange-600 transition-colors">
              Let&apos;s Talk
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-bone hover:text-ember transition-colors"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-graphite">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-sm font-medium text-bone hover:text-ember transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
