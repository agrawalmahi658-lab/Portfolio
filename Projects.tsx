'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'C', 'C++', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'AI/ML & Computer Vision',
    skills: ['TensorFlow', 'Scikit-learn', 'OpenCV', 'NumPy', 'Pandas'],
  },
  {
    title: 'Web Development',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'FastAPI'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git/GitHub', 'Google Cloud', 'VS Code', 'Replit'],
  },
]

export default function About() {
  const countersRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate counters
            const counters = countersRef.current?.querySelectorAll('.counter')
            if (counters) {
              counters.forEach((counter) => {
                const target = parseInt(counter.getAttribute('data-target') || '0')
                gsap.to(counter, {
                  textContent: target,
                  duration: 2,
                  snap: { textContent: 1 },
                  ease: 'power2.out',
                })
              })
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (countersRef.current) {
      observer.observe(countersRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm text-ember font-mono mb-4">— About Me</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-bone">
            Designed with <span className="italic text-ember">intention</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Profile Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="relative p-8 bg-graphite/40 border border-graphite rounded-lg">
                {/* Monogram */}
                <div className="mb-8">
                  <div className="text-6xl font-display font-bold leading-none">
                    <span className="text-bone">M</span>
                    <span className="italic text-ember">A</span>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="space-y-4 text-sm">
                  <div className="pb-4 border-b border-graphite">
                    <p className="text-bone/60 font-mono text-xs mb-1">Status</p>
                    <p className="text-bone flex items-center gap-2">
                      <span className="w-2 h-2 bg-ember rounded-full" />
                      Open to Opportunities
                    </p>
                  </div>

                  <div className="pb-4 border-b border-graphite">
                    <p className="text-bone/60 font-mono text-xs mb-1">Location</p>
                    <p className="text-bone">Bhopal, India</p>
                  </div>

                  <div>
                    <p className="text-bone/60 font-mono text-xs mb-1">Education</p>
                    <p className="text-bone">VIT Bhopal · Bioengineering</p>
                  </div>
                </div>

                {/* Corner brackets */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-ember/50" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-ember/50" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-ember/50" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-ember/50" />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <div>
              <h3 className="font-display text-2xl font-bold text-bone mb-4">Overview</h3>
              <p className="text-bone/80 leading-relaxed mb-4">
                I&apos;m a Bioengineering student at VIT Bhopal with a passion for building AI-powered solutions and
                computer vision systems. Through hackathons and independent projects, I&apos;ve developed expertise in
                applying advanced technologies to real-world challenges.
              </p>
              <p className="text-bone/80 leading-relaxed">
                My work spans from emergency response systems to safety applications, always with a focus on creating
                technology that makes a difference. I&apos;m comfortable across the full stack — from Python backends to
                React frontends.
              </p>
            </div>

            {/* Stats */}
            <div ref={countersRef} className="grid grid-cols-3 gap-4 py-8 border-y border-graphite">
              <div>
                <p className="text-3xl font-display font-bold text-ember">
                  <span className="counter" data-target="3">
                    0
                  </span>
                </p>
                <p className="text-xs text-bone/60 mt-2 font-mono">Hackathon Projects</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-ember">
                  <span className="counter" data-target="8">
                    0
                  </span>
                </p>
                <p className="text-xs text-bone/60 mt-2 font-mono">Core Skills</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-ember">
                  <span className="counter" data-target="12">
                    0
                  </span>
                </p>
                <p className="text-xs text-bone/60 mt-2 font-mono">Tech Stack Items</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-display text-2xl font-bold text-bone mb-6">Skills & Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((category) => (
                  <div key={category.title}>
                    <p className="text-sm font-medium text-bone mb-3 font-mono text-ember">{category.title}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 bg-graphite/60 text-bone border border-graphite hover:border-ember/50 rounded-full transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="inline-flex px-6 py-3 bg-ember text-carbon font-medium rounded hover:bg-orange-600 transition-all">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
