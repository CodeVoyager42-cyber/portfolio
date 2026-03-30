import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, TestTube } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: <Code2 className="text-primary" size={24} />,
      title: "Frontend Development",
      description: "Crafting responsive, interactive UIs with React.js — component-driven architecture with a focus on performance and UX.",
    },
    {
      icon: <Server className="text-primary" size={24} />,
      title: "Backend Engineering",
      description: "Building robust APIs and server-side logic with Laravel. Clean MVC patterns, Eloquent ORM, and RESTful design.",
    },
    {
      icon: <TestTube className="text-primary" size={24} />,
      title: "Quality Assurance",
      description: "Writing reliable tests with PHPUnit and Cypress. Ensuring code quality through automated testing pipelines.",
    },
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Passionate about building things that matter
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
            I'm a junior full-stack developer with a deep focus on Laravel and React.js.
            I believe in writing clean, maintainable code and take pride in solving complex
            problems through elegant architecture. My approach combines backend performance
            optimization with intuitive frontend design — always with thorough testing to
            ensure reliability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass rounded-2xl p-6 hover-lift group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
