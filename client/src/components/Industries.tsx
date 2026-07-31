import { motion } from "framer-motion";
import { Brain, Shield, Users, Rocket, Database, Globe } from "lucide-react";

const industries = [
  {
    icon: Brain,
    title: "Healthcare & Life Sciences",
    description:
      "AI-powered diagnostics, patient engagement platforms, and secure health data management.",
  },
  {
    icon: Shield,
    title: "Financial Services",
    description:
      "Fraud detection systems, automated compliance, and intelligent risk assessment solutions.",
  },
  {
    icon: Users,
    title: "Enterprise & Government",
    description:
      "Large-scale digital transformation, secure cloud migration, and workforce modernization.",
  },
  {
    icon: Rocket,
    title: "Startups & Scale-ups",
    description:
      "Rapid prototyping, MVP development, and scalable AI infrastructure for growing businesses.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Advanced data engineering, real-time analytics pipelines, and predictive intelligence.",
  },
  {
    icon: Globe,
    title: "Global Operations",
    description:
      "Multi-region cloud architecture, localization platforms, and cross-border compliance.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Deep-dive into your business challenges, goals, and technical landscape.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Craft a tailored roadmap with clear milestones and measurable outcomes.",
  },
  {
    step: "03",
    title: "Build",
    description: "Execute with agile precision using cutting-edge AI and cloud technologies.",
  },
  {
    step: "04",
    title: "Scale",
    description: "Optimize, iterate, and scale solutions for maximum enterprise impact.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-28 bg-background relative">
      <div className="container">
        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">
            Industries We Serve
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Powering{" "}
            <span className="text-gradient">Every Vertical</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From healthcare to finance, startups to global enterprises — we deliver
            solutions across every industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 hover:shadow-[0_4px_30px_rgba(67,97,238,0.1)] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {industry.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            How We{" "}
            <span className="text-gradient">Deliver Results</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="w-18 h-18 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-6">
                <span className="text-primary font-bold text-xl">{step.step}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-9 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
