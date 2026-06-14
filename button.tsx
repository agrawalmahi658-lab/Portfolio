'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    // Split text into characters for reveal animation
    const text = textRef.current
    const chars = text.textContent?.split('') || []
    text.innerHTML = chars
      .map((char) => `<span class="char inline-block opacity-0">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('')

    // Animate chars in sequence
    const charElements = text.querySelectorAll('.char')
    gsap.to(charElements, {
      opacity: 1,
      duration: 0.6,
      stagger: 0.02,
      ease: 'power2.out',
    })

    // Animate the whole section
    gsap.from(containerRef.current?.querySelectorAll('.fade-in-item'), {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
    })
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-24 pb-12 px-6 md:px-12 lg:px-16"
      id="hero"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-2 fade-in-item">
              <p className="text-sm text-ember font-mono">— AI/ML Developer & Computer Vision Specialist</p>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-bone">Crafting </span>
                <span className="italic text-ember">AI-Powered</span>
                <span className="text-bone"> Solutions</span>
              </h1>
            </div>

            <p className="text-lg text-bone/80 max-w-lg leading-relaxed fade-in-item">
              Bioengineering student at VIT Bhopal building AI applications, computer vision systems, and safety-focused
              software. Passionate about applying cutting-edge AI to solve real-world challenges.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-graphite fade-in-item">
              <div className="group">
                <p className="text-3xl font-display font-bold text-ember group-hover:text-orange-400 transition-colors">03</p>
                <p className="text-xs text-bone/60 mt-2">Hackathon Projects</p>
              </div>
              <div className="group">
                <p className="text-3xl font-display font-bold text-ember group-hover:text-orange-400 transition-colors">08</p>
                <p className="text-xs text-bone/60 mt-2">Technical Skills</p>
              </div>
              <div className="group">
                <p className="text-3xl font-display font-bold text-ember group-hover:text-orange-400 transition-colors">12</p>
                <p className="text-xs text-bone/60 mt-2">Tools & Techs</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4 fade-in-item">
              <button className="relative px-6 py-3 bg-ember text-carbon font-medium rounded overflow-hidden group">
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-orange-600 -translate-x-full group-hover:translate-x-0 transition-transform" />
              </button>
              <button className="px-6 py-3 border border-bone text-bone hover:bg-bone/10 hover:border-ember transition-all rounded">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="relative h-96 md:h-[500px] hidden lg:block fade-in-item">
            <div className="absolute inset-0 bg-gradient-to-br from-ember/20 via-transparent to-transparent rounded-lg" />
            <div className="absolute inset-0 border border-ember/30 rounded-lg animate-glow" />

            {/* Animated elements */}
            <div className="absolute top-10 right-10 w-20 h-20 border-2 border-ember/40 rounded-full animate-pulse" />
            <div className="absolute bottom-20 left-10 w-32 h-32 border border-ember/20 rounded-full animate-float" />

            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-bone/40 text-sm mb-4 animate-fadeInUp">Available for</p>
                <p className="text-xl font-display text-bone font-bold animate-fadeInUp">Opportunities</p>
                <p className="text-bone/60 text-sm mt-2 animate-fadeInUp">VIT Bhopal | Open to Collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <p className="text-xs text-bone/50">Scroll</p>
        <svg className="w-5 h-5 text-bone/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
