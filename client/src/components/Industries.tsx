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
    <section id="industries" className="py-24 bg-gray-50/60 relative border-t border-gray-100">
      <div className="container">
        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">
            Industries We Serve
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Powering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Every Vertical</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From healthcare to finance, startups to global enterprises — we deliver
            solutions across every industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-white border border-gray-200/80 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <industry.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {industry.description}
                </p>
              </div>
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
          <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            How We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Deliver Results</span>
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
              className="relative text-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center mb-5 shadow-md shadow-blue-500/20">
                <span className="font-black text-xl">{step.step}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
