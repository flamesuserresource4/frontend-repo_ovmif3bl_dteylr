import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Rocket, ExternalLink } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    title: 'Nebula UI Kit',
    tag: 'Design System',
    image:
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Quantum Portfolio',
    tag: '3D + WebGL',
    image:
      'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Astra Commerce',
    tag: 'E‑commerce',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Selected Projects</h2>
            <p className="mt-2 text-white/60">A glimpse into the things I build and design.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-fuchsia-400/90">
            <Rocket size={18} />
            <span className="text-sm">Launching new work soon</span>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href="#"
              className="project-card group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs tracking-widest text-white/60">{p.tag}</p>
                    <h3 className="text-lg font-medium">{p.title}</h3>
                  </div>
                  <ExternalLink className="opacity-60 transition-opacity group-hover:opacity-100" size={18} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
