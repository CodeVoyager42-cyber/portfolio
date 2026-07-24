'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')
    const subject = `Portfolio Contact from ${name}`
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    window.location.href = `mailto:mouadm7c7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="py-24 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-muted-foreground text-sm">06.</span>
          <h2 className="text-2xl sm:text-3xl font-bold">Contact</h2>
          <span className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-2">Get in touch</h3>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out.
              I&rsquo;m always open to discussing new opportunities.
            </p>

            <div className="space-y-4 mb-8">
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:mouadm7c7@gmail.com" aria-label="Send an email">
                  <Mail size={18} className="mr-3" />
                  Send me an email
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="tel:+212707720719" aria-label="Call me">
                  <Phone size={18} className="mr-3" />
                  Call me
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" asChild aria-label="LinkedIn profile (link to be added)">
                <a href="#">
                  <Linkedin size={20} />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild aria-label="GitHub profile (link to be added)">
                <a href="#">
                  <Github size={20} />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                Name
              </label>
              <Input id="name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                Email
              </label>
              <Input id="email" name="email" type="email" placeholder="your@email.com" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                Message
              </label>
              <Textarea id="message" name="message" rows={4} placeholder="Your message..." required />
            </div>
            <Button type="submit">
              <Send size={16} className="mr-2" />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
