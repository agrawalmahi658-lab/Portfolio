'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'StudyFlare',
    year: '2026',
    category: 'Hackathon',
    description: 'AI-powered collaborative learning platform with smart peer matching',
    tech: ['React', 'Next.js', 'AI Matching', 'Real-time'],
    link: '#',
    color: 'from-ember/30',
  },
  {
    id: 2,
    title: 'RoadSOS AI',
    year: '2026',
    category: 'Safety Tech',
    description: 'Emergency assistance and hazard warning system for road safety',
    tech: ['Next.js', 'FastAPI', 'Python', 'Location Services'],
    link: '#',
    color: 'from-orange-500/30',
  },
  {
    id: 3,
    title: 'CalcShield',
    year: '2026',
    category: 'Safety App',
    description: 'Discrete personal safety application with SOS alerts and evidence capture',
    tech: ['Python', 'OpenCV', 'Tkinter', 'Geopy'],
    link: '#',
    color: 'from-red-500/30',
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="projects" className="relative py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-sm text-ember font-mono mb-4">— Featured Work</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-bone">
            Projects & <span className="italic text-ember">Innovations</span>
          </h2>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="block md:hidden space-y-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredId === project.id}
              onHover={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
            />
          ))}
        </div>

        {/* Desktop: Horizontal Scroll */}
        <div className="hidden md:block overflow-x-auto pb-4 -mx-6 md:-mx-12 lg:-mx-16 px-6 md:px-12 lg:px-16">
          <div ref={scrollContainerRef} className="flex gap-6 min-w-max">
            {projects.map((project) => (
              <div key={project.id} className="flex-shrink-0 w-96">
                <ProjectCard
                  project={project}
                  isHovered={hoveredId === project.id}
                  onHover={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* End of rail message */}
        <div className="mt-12 pt-8 border-t border-graphite text-center">
          <p className="text-sm text-bone/60">More projects coming soon...</p>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  isHovered,
  onHover,
  onHoverEnd,
}: {
  project: (typeof projects)[0]
  isHovered: boolean
  onHover: () => void
  onHoverEnd: () => void
}) {
  return (
    <Link href={project.link}>
      <div
        onMouseEnter={onHover}
        onMouseLeave={onHoverEnd}
        className="relative group h-80 md:h-96 rounded-lg overflow-hidden cursor-pointer"
      >
        {/* Background pattern */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent`} />
        <div className="absolute inset-0 border border-graphite group-hover:border-ember/50 transition-colors rounded-lg" />

        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative h-full p-6 flex flex-col justify-between">
          {/* Top: Index & Category */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-ember font-mono mb-2">— {project.year}</p>
              <p className="text-xs text-bone/60 font-mono">{project.category}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-bone/60 font-mono">
                {String(project.id).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
              </p>
            </div>
          </div>

          {/* Bottom: Title, Description, Tech, CTA */}
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-3xl font-bold text-bone mb-2">{project.title}</h3>
              <p className="text-sm text-bone/70">{project.description}</p>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="text-xs px-2 py-1 bg-ember/10 text-ember border border-ember/30 rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-ember text-sm font-medium group-hover:gap-4 transition-all">
              <span>View Project</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          {/* Corner brackets */}
          <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-ember opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-ember opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-ember opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-ember opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </Link>
  )
}
