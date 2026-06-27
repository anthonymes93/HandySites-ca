import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'Pricing', 'FAQ', 'Contact']

function LogoIcon() {
  return (
    <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center shadow-sm shrink-0">
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    </div>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['contact', 'faq', 'pricing', 'home']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: '68px' }}>
          <a href="#home" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
            <LogoIcon />
            <span className="font-black text-[1.2rem] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-gray-950">HANDY</span><span className="text-orange-500">SITE</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map(link => {
              const id = link.toLowerCase()
              const isActive = activeSection === id
              return (
                <a
                  key={link}
                  href={`#${id}`}
                  className={`text-sm font-semibold transition-colors duration-150 relative pb-1 ${
                    isActive ? 'text-orange-500' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                  )}
                </a>
              )
            })}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-orange-500 text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-orange-600 transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-orange-200"
          >
            Get Started
            <span className="leading-none">→</span>
          </a>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="fixed top-[68px] left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-xl md:hidden"
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="text-gray-700 font-semibold py-3.5 border-b border-gray-50 last:border-0 hover:text-orange-500 transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 bg-orange-500 text-white text-center font-bold py-3.5 rounded-full hover:bg-orange-600 transition-colors"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </>
  )
}
