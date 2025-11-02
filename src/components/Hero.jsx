import { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { gsap } from 'gsap'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', { y: -10, opacity: 0, duration: 0.8, ease: 'power3.out' })
      gsap.from('.hero-title .word', {
        yPercent: 120,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.06,
        delay: 0.15,
      })
      gsap.from('.hero-sub', { y: 20, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.4 })
      gsap.from('.hero-cta', { y: 16, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.55 })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const words = 'Futuristic Designer & Creative Developer'.split(' ')

  return (
    <section ref={containerRef} id="home" className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:pt-36">
        <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-fuchsia-500 animate-pulse" />
          <span className="text-xs tracking-widest text-white/80">AVAILABLE FOR FREELANCE</span>
        </div>

        <h1 className="hero-title mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
          {words.map((w, i) => (
            <span key={i} className="word inline-block will-change-transform">
              {w}{' '}
            </span>
          ))}
        </h1>

        <p className="hero-sub mt-5 max-w-2xl text-base md:text-lg text-white/70">
          I craft sleek interfaces, immersive 3D moments and performant web experiences that feel like the future.
        </p>

        <div className="hero-cta mt-8 flex gap-3">
          <a href="#projects" className="rounded-full bg-fuchsia-500/90 hover:bg-fuchsia-500 text-white px-6 py-3 text-sm font-medium transition-colors">
            View Projects
          </a>
          <a href="#contact" className="rounded-full border border-white/15 bg-white/10 hover:bg-white/15 text-white px-6 py-3 text-sm font-medium transition-colors">
            Contact Me
          </a>
        </div>
      </div>

      {/* floating accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-32 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>
    </section>
  )
}
