import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with product management, shopping cart, payment integration, and order tracking. Built with a focus on performance and clean REST API design.",
    tech: ["Laravel", "React.js", "MySQL", "Stripe API"],
    achievements: ["40% faster page loads with lazy loading", "RESTful API serving 50+ endpoints"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Home Service Booking App",
    description: "MisterPro connects clients with trusted home service professionals, allowing easy booking, secure payments, and real-time service tracking.",
    tech: ["Laravel", "React.js", "MySQL", "WebSockets"],
    achievements: ["Real-time collaboration for 10+ concurrent users", "Comprehensive test suite with 90% coverage"],
    github: "https://github.com",
  },
  {
    title: "Blog & CMS Platform",
    description: "A content management system with rich text editing, SEO optimization, media management, and an intuitive admin dashboard.",
    tech: ["Laravel", "React.js", "MySQL", "TailwindCSS"],
    achievements: ["SEO-optimized rendering with meta tag management", "Admin dashboard with analytics"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "REST API Starter Kit",
    description: "An open-source boilerplate for building scalable Laravel APIs with authentication, rate limiting, and automated testing out of the box.",
    tech: ["Laravel", "PHPUnit", "MySQL", "Docker"],
    achievements: ["Used by 5+ developers as a project starter", "100% test coverage on core modules"],
    github: "https://github.com",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Selected work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              className="glass rounded-2xl p-6 hover-lift group flex flex-col"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-primary/10 text-primary">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="mb-5 space-y-1.5 flex-1">
                {project.achievements.map((a) => (
                  <li key={a} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    {a}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={14} /> Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
