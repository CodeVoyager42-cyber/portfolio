import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-mono text-primary mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Let's work together
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            I'm currently looking for internship or junior developer opportunities.
            Feel free to reach out — I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8"
        >
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail size={16} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium">hello@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin size={16} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium">Available remotely</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
              <input
                type="email"
                placeholder="Your email"
                required
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <textarea
              placeholder="Your message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              {submitted ? "Message Sent!" : "Send Message"}
              <Send size={14} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
