'use client'

import { useRef, useState } from 'react'

const services = [
  {
    id: 1,
    title: 'AI/ML Development',
    description: 'Building intelligent systems using Python, TensorFlow, and ML best practices',
    skills: ['Python', 'TensorFlow', 'Scikit-learn', 'ML Algorithms'],
  },
  {
    id: 2,
    title: 'Computer Vision',
    description: 'Real-time vision systems using OpenCV and deep learning models',
    skills: ['OpenCV', 'Image Processing', 'Object Detection', 'Gesture Recognition'],
  },
  {
    id: 3,
    title: 'Full-Stack Development',
    description: 'Web applications with React, Next.js, and Python backends',
    skills: ['React', 'Next.js', 'FastAPI', 'Full-Stack'],
  },
  {
    id: 4,
    title: 'Safety & Security',
    description: 'Innovative solutions for emergency response and personal safety',
    skills: ['Real-time Systems', 'GPS Integration', 'Automation', 'Safety Tech'],
  },
  {
    id: 5,
    title: 'Hackathon Innovation',
    description: 'Rapid prototyping and end-to-end project implementation',
    skills: ['Rapid Development', 'Problem Solving', 'Innovation', 'Deployment'],
  },
]

export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * 5
    const rotateY = ((centerX - x) / centerX) * 5

    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <section id="services" className="relative py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fadeInUp">
          <p className="text-sm text-ember font-mono mb-4">— Core Services</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-bone">
            What I <span className="italic text-ember">build</span>
          </h2>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => {
                setHoveredId(null)
                handleMouseLeave()
              }}
              onMouseMove={(e) => {
                if (hoveredId === service.id) handleMouseMove(e)
              }}
              style={
                hoveredId === service.id
                  ? {
                      transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.05)`,
                    }
                  : {}
              }
              className="group relative p-6 bg-graphite/40 border border-graphite hover:border-ember/50 rounded-lg transition-all duration-300 hover:bg-graphite/60 cursor-pointer"
            >
              {/* Spotlight effect on hover */}
              {hoveredId === service.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-ember/10 via-transparent to-transparent rounded-lg pointer-events-none" />
              )}

              <div className="relative z-10">
                {/* Index */}
                <div className="w-10 h-10 border border-ember/50 rounded flex items-center justify-center mb-4 text-ember font-display text-sm font-bold group-hover:bg-ember/10 transition-colors">
                  {String(service.id).padStart(2, '0')}
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold text-bone mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-sm text-bone/70 mb-6 leading-relaxed">{service.description}</p>

                {/* Skills pills */}
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-ember/10 text-ember border border-ember/30 rounded-full hover:bg-ember/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Corner brackets */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-ember opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-ember opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-ember opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-ember opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="p-6 bg-gradient-to-br from-ember/20 to-transparent border border-ember/50 rounded-lg flex flex-col items-center justify-center text-center min-h-[280px] hover:border-ember transition-colors cursor-pointer group hover:bg-ember/30">
            <p className="text-3xl mb-4 group-hover:scale-110 transition-transform">+</p>
            <h3 className="font-display text-xl font-bold text-bone mb-2">More Ideas?</h3>
            <p className="text-sm text-bone/70">Let&apos;s discuss your project requirements</p>
            <button className="mt-6 px-4 py-2 bg-ember text-carbon rounded text-sm font-medium hover:bg-orange-600 transition-colors transform hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
