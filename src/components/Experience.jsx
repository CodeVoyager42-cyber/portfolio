import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    role: 'Fullstack Developer',
    company: 'Medz',
    location: 'Rabat',
    period: 'April 2025 – September 2025',
    highlights: [
      'Designed secure REST APIs with Spring Boot (SOLID, Clean Architecture, Spring Security, JPA/Hibernate optimization)',
      'Structured backend using Service Layer & Repository Pattern; tested with JUnit/Mockito',
      'Built performant React.js interfaces (advanced Hooks, Redux Toolkit/RTK Query, rendering optimization)',
      'Improved application performance by 10% through JPA query and React rendering optimization',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Nethub',
    location: 'Rabat',
    period: 'April 2024 – September 2024',
    highlights: [
      'Built a modular React.js application (responsive UI, reusable components)',
      'Integrated Spring Boot / MySQL REST APIs with optimized data handling',
      'Managed state with Redux Toolkit',
      'Performance optimization and Agile/Git collaboration',
    ],
  },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-muted-foreground text-sm">02.</span>
          <h2 className="text-2xl sm:text-3xl font-bold">Experience</h2>
          <span className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative space-y-12"
        >
          {experiences.map((exp, idx) => (
            <motion.div key={idx} variants={item} className="relative pl-8 sm:pl-10">
              <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-foreground ring-4 ring-background" />
              {idx < experiences.length - 1 && (
                <div className="absolute left-[5px] top-4 bottom-0 w-0.5 bg-border" />
              )}
              <div className="flex items-center gap-2 mb-2">
                <Briefcase size={16} className="text-muted-foreground shrink-0" />
                <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1">
                {exp.role}{' '}
                <span className="text-foreground">— {exp.company}</span>
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>
              <ul className="space-y-2">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 shrink-0 font-mono text-xs">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
