import { motion } from 'framer-motion'
import { GraduationCap, Globe } from 'lucide-react'
import { Card, CardContent } from './ui/card'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-muted-foreground text-sm">05.</span>
          <h2 className="text-2xl sm:text-3xl font-bold">Education &amp; Languages</h2>
          <span className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <GraduationCap size={24} className="mb-4" />
                <h3 className="font-semibold text-lg mb-1">
                  Master&rsquo;s in Computer Science &amp; Networks
                </h3>
                <p className="text-muted-foreground font-mono text-sm mb-2">
                  Moroccan School of Engineering Sciences
                </p>
                <p className="text-sm text-muted-foreground">2019 – 2024</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Card>
              <CardContent className="p-6">
                <Globe size={24} className="mb-4" />
                <h3 className="font-semibold text-lg mb-3">Languages</h3>
                <ul className="space-y-2">
                  {[
                    { lang: 'English', level: 'Technical' },
                    { lang: 'Arabic', level: 'Native' },
                  ].map((l) => (
                    <li key={l.lang} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{l.lang}</span>
                      <span className="text-xs font-mono text-muted-foreground">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
