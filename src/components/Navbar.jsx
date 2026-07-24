import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar({ isDark, toggleTheme, scrollTo }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setMobileOpen(false)
    scrollTo(id)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="font-mono text-xl font-bold tracking-tight hover:text-primary/70 transition-colors"
          aria-label="Go to top"
        >
          MEB
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              size="sm"
              onClick={() => handleNav(link.id)}
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="font-mono text-xs mr-1">
                {String(links.indexOf(link) + 1).padStart(2, '0')}.
              </span>
              {link.label}
            </Button>
          ))}
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-1">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileOpen((prev) => !prev)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <Button
                  key={link.id}
                  variant="ghost"
                  onClick={() => handleNav(link.id)}
                  className="justify-start text-muted-foreground hover:text-foreground"
                >
                  <span className="font-mono text-xs mr-2">
                    {String(links.indexOf(link) + 1).padStart(2, '0')}.
                  </span>
                  {link.label}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
