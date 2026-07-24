'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, ArrowDown } from 'lucide-react'
import { Button } from './ui/button'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-16"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-foreground/[0.03] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-foreground/[0.03] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-foreground/[0.03] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-muted-foreground mb-4"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          EL BAHRAOUI Mouad
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium mb-6"
        >
          Software Engineer — Fullstack Developer (Spring Boot & React.js)
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          &ldquo;I design reliable, performant, and secure systems using modern technologies.&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8"
        >
          <MapPin size={16} />
          <span>Salé, Morocco</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button size="lg" onClick={() => scrollTo('projects')}>
            View Projects
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollTo('contact')}>
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          <Button variant="ghost" size="sm" asChild>
            <a href="mailto:mouadm7c7@gmail.com" aria-label="Send email">
              <Mail size={16} className="mr-2" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="tel:+212707720719" aria-label="Call me">
              <Phone size={16} className="mr-2" />
              <span className="hidden sm:inline">Phone</span>
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  )
}
