import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <main className="font-['Inter',_ui-sans-serif,_system-ui] bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
          <a href="#home" className="text-sm font-medium tracking-wide text-white/90">FUTUR.DEV</a>
          <nav className="hidden gap-6 md:flex text-sm text-white/70">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
