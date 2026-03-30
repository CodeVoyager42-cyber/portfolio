import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Laravel", "PHP", "REST APIs", "Eloquent ORM"],
  },
  {
    category: "Database",
    skills: ["MySQL", "Database Design", "Migrations"],
  },
  {
    category: "Testing",
    skills: ["PHPUnit", "Cypress", "Unit Testing", "E2E Testing"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "npm"],
  },
  {
    category: "DevOps",
    skills: ["Linux Basics", "CI/CD", "Docker (Learning)"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Technologies I work with
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-muted text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
