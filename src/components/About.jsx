import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-chip', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        y: 14,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
      })
      gsap.from('.about-text', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        y: 20,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const skills = ['React', 'Three/Spline', 'GSAP', 'Framer Motion', 'Tailwind', 'FastAPI']

  return (
    <section ref={sectionRef} id="about" className="relative w-full bg-[#07070a] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.08),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">About Me</h2>
        <p className="about-text mt-4 max-w-2xl text-white/70">
          I’m a multidisciplinary creator blending code, motion, and design. I turn abstract ideas into dynamic, polished interfaces that feel alive. My process is rooted in detail, speed, and a relentless pursuit of delightful UX.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((s) => (
            <span key={s} className="about-chip rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
