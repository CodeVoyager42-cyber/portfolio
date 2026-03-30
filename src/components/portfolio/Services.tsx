import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Server, Bug } from "lucide-react";

const services = [
  {
    icon: <Globe className="text-primary" size={24} />,
    title: "Web Development",
    description: "End-to-end web application development using modern frameworks. From responsive UIs to robust backend systems.",
  },
  {
    icon: <Server className="text-primary" size={24} />,
    title: "API Development",
    description: "Design and build RESTful APIs with Laravel. Clean architecture, authentication, rate limiting, and documentation.",
  },
  {
    icon: <Bug className="text-primary" size={24} />,
    title: "Bug Fixing & Optimization",
    description: "Debug and resolve issues in existing codebases. Performance profiling, query optimization, and code refactoring.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What I can do for you
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass rounded-2xl p-6 hover-lift group text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
