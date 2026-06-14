'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 px-6 md:px-12 lg:px-16 border-t border-graphite">
      <div className="max-w-7xl mx-auto">
        {/* Marquee */}
        <div className="mb-12 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="font-display text-3xl md:text-4xl font-bold text-bone/20 inline-block mr-8">
              Let&apos;s Build Something Incredible •
            </span>
            <span className="font-display text-3xl md:text-4xl font-bold text-bone/20 inline-block mr-8">
              Let&apos;s Build Something Incredible •
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-bone/50">
          <p>© {currentYear} Mahi Agrawal · All rights reserved</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-ember transition-colors">
              Privacy
            </Link>
            <span>·</span>
            <Link href="#" className="hover:text-ember transition-colors">
              Credits
            </Link>
            <span>·</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-ember transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

        {/* Status */}
        <div className="mt-8 flex items-center gap-2 text-xs text-bone/60">
          <span className="w-2 h-2 bg-ember rounded-full animate-pulse" />
          <span>Open to Opportunities & Collaborations</span>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </footer>
  )
}
