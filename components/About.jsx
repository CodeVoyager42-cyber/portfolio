'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-muted-foreground text-sm">01.</span>
          <h2 className="text-2xl sm:text-3xl font-bold">About</h2>
          <span className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="space-y-5 text-muted-foreground leading-relaxed max-w-3xl">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Passionate about web development, I specialize in building reliable, performant,
            and secure systems using modern technologies such as{' '}
            <span className="font-semibold text-foreground">Spring Boot</span> and{' '}
            <span className="font-semibold text-foreground">React.js</span>.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            I am a problem-solving oriented developer who turns complex requirements into
            simple, maintainable solutions. I believe clean code and thoughtful architecture
            are the foundation of every great application.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            I am currently looking to contribute to ambitious projects within a demanding
            technical team where I can grow and make an impact.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
