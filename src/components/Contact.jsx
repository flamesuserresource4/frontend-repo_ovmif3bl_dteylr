import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-item', { y: 18, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08 })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="relative w-full bg-[#0b0b10] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(700px_200px_at_80%_0%,rgba(236,72,153,0.1),transparent),radial-gradient(600px_200px_at_10%_0%,rgba(99,102,241,0.1),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Let’s build something iconic</h2>
        <p className="mt-2 max-w-xl text-white/70">I’m open to freelance work, collaborations, and speaking opportunities.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <a href="#" className="contact-item group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
            <Mail size={18} className="text-fuchsia-400" />
            <span className="text-sm text-white/80 group-hover:text-white transition-colors">hello@futur.dev</span>
          </a>
          <a href="#" className="contact-item group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
            <Github size={18} className="text-white/80" />
            <span className="text-sm text-white/80 group-hover:text-white transition-colors">github.com/futurdev</span>
          </a>
          <a href="#" className="contact-item group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
            <Linkedin size={18} className="text-sky-400" />
            <span className="text-sm text-white/80 group-hover:text-white transition-colors">linkedin.com/in/futurdev</span>
          </a>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-white/50">
          <span>© 2025 Futur Dev — Crafted with care</span>
          <span>Built with React, GSAP, and Spline</span>
        </div>
      </div>
    </section>
  )
}
