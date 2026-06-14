'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  const LinkedinIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )

  const GithubIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )

  const PhoneIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fadeInUp">
          <p className="text-sm text-ember font-mono mb-4">— Get in Touch</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-bone">
            Let&apos;s build <span className="italic text-ember">something incredible</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Direct Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <p className="text-xs text-bone/60 font-mono mb-3">Direct</p>
              <a
                href="mailto:agrawalmahi658@gmail.com"
                className="text-2xl md:text-3xl font-display font-bold text-bone hover:text-ember transition-colors break-words"
              >
                agrawalmahi658@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs text-bone/60 font-mono mb-4">Connect</p>
              <div className="space-y-3">
                <a
                  href="https://linkedin.com/in/mahi-agrawal-244189373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-bone hover:text-ember transition-colors group"
                >
                  <LinkedinIcon />
                  <span className="text-sm">LinkedIn</span>
                  <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
                <a
                  href="https://github.com/agrawalmahi658-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-bone hover:text-ember transition-colors group"
                >
                  <GithubIcon />
                  <span className="text-sm">GitHub</span>
                  <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
                <a
                  href="tel:+918839119889"
                  className="flex items-center gap-3 text-bone hover:text-ember transition-colors group"
                >
                  <PhoneIcon />
                  <span className="text-sm">+91 88391 19889</span>
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs text-bone/60 font-mono mb-3">Currently</p>
              <div className="space-y-1 text-sm text-bone">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-ember rounded-full" />
                  VIT Bhopal University
                </p>
                <p className="text-bone/60">Bioengineering · 2025-2029</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-graphite/40 border border-graphite rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-xs text-bone/60 font-mono mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-carbon border border-graphite text-bone placeholder-bone/40 focus:outline-none focus:border-ember transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-xs text-bone/60 font-mono mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-carbon border border-graphite text-bone placeholder-bone/40 focus:outline-none focus:border-ember transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs text-bone/60 font-mono mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-carbon border border-graphite text-bone placeholder-bone/40 focus:outline-none focus:border-ember transition-colors resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full px-6 py-3 bg-ember text-carbon font-medium rounded hover:bg-orange-600 disabled:bg-graphite disabled:text-bone/60 transition-all"
                >
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                </button>

                <p className="text-xs text-bone/50 text-center">
                  I&apos;ll get back to you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
