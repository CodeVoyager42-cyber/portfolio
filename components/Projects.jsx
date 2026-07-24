'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, FileText, PenTool, Shield, Users } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

const features = [
  { icon: FileText, text: 'Upload PDF documents and apply digital signatures with audit trail' },
  { icon: PenTool, text: 'Draw, type, or upload signature images with precise positioning' },
  { icon: Shield, text: 'Secure REST APIs (JWT/Spring Security), role-based access control' },
  { icon: Users, text: 'Multi-signer workflows, document sharing, and signing status tracking' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-muted-foreground text-sm">03.</span>
          <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
          <span className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <div className="h-1 bg-foreground/10" />
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  ArgoPDF — PDF Signing Service
                </h3>
                <p className="text-muted-foreground font-mono text-sm">
                  Full-Stack (Spring Boot & React.js)
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <f.icon size={18} className="shrink-0 mt-0.5" />
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button asChild>
                  <a href="https://argopdf.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="View live demo">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" aria-label="View GitHub repository (link to be added)">
                    <Github size={16} className="mr-2" />
                    GitHub Repo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
