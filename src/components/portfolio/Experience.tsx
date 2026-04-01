import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Full-Stack Developer Intern",
    organization: "Tech Startup",
    period: "2024 — Present",
    description: "Developing and maintaining web applications using Laravel and React. Collaborating with cross-functional teams on API design, code reviews, and automated testing.",
    highlights: ["Built 3 production features", "Improved API response times by 30%", "Wrote comprehensive test suites"],
  },
  {
    type: "education",
    title: "Bachelor's in Computer Science",
    organization: "Moroccan engineering school",
    period: "2019 — 2024",
    description: "Focused on software engineering, web technologies, and database systems. Active participant in coding competitions and open-source contributions.",
    highlights: ["Delivered a home services booking app", "Developed a RESTful APIs and frontend dashboards", "Contributed to open-source web development projects on GitHub"],
  },
  {
    type: "work",
    title: "Freelance Web Developer",
    organization: "Self-employed",
    period: "2023 — 2024",
    description: "Designed and developed custom websites and web applications for small businesses. Managed full project lifecycle from requirements to deployment.",
    highlights: ["Delivered 5+ client projects", "100% client satisfaction", "Repeat business from 3 clients"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3">Experience & Education</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            My journey so far
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title + item.period}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-1 w-10 h-10 rounded-xl bg-primary/10 border border-border/50 flex items-center justify-center">
                  {item.type === "work" ? (
                    <Briefcase size={16} className="text-primary" />
                  ) : (
                    <GraduationCap size={16} className="text-primary" />
                  )}
                </div>

                <div className="glass rounded-2xl p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <span className="text-xs font-mono text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="text-sm text-primary mb-2">{item.organization}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <span key={h} className="text-[11px] px-2.5 py-1 rounded-md bg-muted text-muted-foreground">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
