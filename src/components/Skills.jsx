import { motion } from 'framer-motion'
import { Server, Code2, Wrench } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

const skillGroups = [
  {
    title: 'Backend',
    icon: Server,
    skills: ['Spring Boot 3+', 'Java 17+', 'REST APIs', 'Spring Security', 'JWT', 'JPA/Hibernate', 'JUnit/Mockito', 'MySQL'],
  },
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React.js 18+', 'Hooks', 'Redux Toolkit/RTK Query', 'Context API', 'TailwindCSS', 'Shadcn', 'Reusable Components'],
  },
  {
    title: 'Tools & Methods',
    icon: Wrench,
    skills: ['Git', 'Maven/Gradle', 'Postman', 'Agile/Scrum', 'Clean Code'],
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-muted-foreground text-sm">04.</span>
          <h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>
          <span className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group) => (
            <motion.div key={group.title} variants={item}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <group.icon size={20} />
                    <h3 className="font-semibold">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
