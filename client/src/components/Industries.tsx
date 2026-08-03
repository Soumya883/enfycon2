import { motion } from "framer-motion";
import { Brain, Shield, Users, Rocket, Database, Globe, ArrowRight, Sparkles } from "lucide-react";

const industries = [
  {
    icon: Brain,
    title: "Healthcare & Life Sciences",
    description: "AI-powered diagnostics, patient engagement platforms, and secure health data management.",
    bg: "/images/service/ai-agentic-solutions.jpg",
  },
  {
    icon: Shield,
    title: "Financial Services",
    description: "Fraud detection systems, automated compliance, and intelligent risk assessment solutions.",
    bg: "/images/service/security-assessment.jpg",
  },
  {
    icon: Users,
    title: "Enterprise & Government",
    description: "Large-scale digital transformation, secure cloud migration, and workforce modernization.",
    bg: "/images/service/enterprise-modernization.jpg",
  },
  {
    icon: Rocket,
    title: "Startups & Scale-ups",
    description: "Rapid prototyping, MVP development, and scalable AI infrastructure for growing businesses.",
    bg: "/images/service/ai-first-platforms.jpg",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Advanced data engineering, real-time analytics pipelines, and predictive intelligence.",
    bg: "/images/service/advanced-analytics.jpg",
  },
  {
    icon: Globe,
    title: "Global Operations",
    description: "Multi-region cloud architecture, localization platforms, and cross-border compliance.",
    bg: "/images/service/offshore-dedicated-teams.png",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Audit",
    description: "Deep-dive analysis into your technical landscape, security vulnerabilities, and architectural goals.",
  },
  {
    step: "02",
    title: "Strategic Blueprint",
    description: "Crafting a bespoke roadmap with clear technical milestones, SLA guarantees, and security frameworks.",
  },
  {
    step: "03",
    title: "Agile Engineering",
    description: "Deploying senior engineering pods to build and validate cloud-native AI platforms.",
  },
  {
    step: "04",
    title: "Global Scale & Governance",
    description: "Continuous optimization, 24/7 SOC monitoring, and multi-region deployment governance.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-32 lg:py-40 bg-gradient-to-b from-[#0F172A] via-[#080C1E] to-[#0F172A] text-white relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-extrabold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Vertical Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Powering Next-Gen{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              Industry Verticals
            </span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Tailored artificial intelligence, cybersecurity, and engineering solutions designed for mission-critical enterprise environments.
          </p>
        </motion.div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-[20px] overflow-hidden border border-slate-800 bg-slate-900/80 p-8 shadow-xl transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(0,212,255,0.15)] flex flex-col justify-between"
            >
              {/* Subtle Image Backdrop on Hover */}
              <div className="absolute inset-0 opacity-15 group-hover:opacity-30 transition-opacity duration-500 overflow-hidden">
                <img
                  src={industry.bg}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/80" />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-[14px] bg-gradient-to-br from-indigo-600 to-cyan-500 text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm lg:text-base">
                  {industry.description}
                </p>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-slate-800/80">
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs font-extrabold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                >
                  <span>Explore Industry Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Process Section with Huge Transparent Numbers & Connecting Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-xs font-extrabold uppercase tracking-widest mb-4">
            Structured Execution
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Execution Framework</span>
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Animated Horizontal Connecting Line (Desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            style={{ transformOrigin: "left" }}
            className="hidden lg:block absolute top-[52px] left-[60px] right-[60px] h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 z-0 opacity-50"
          />

          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative z-10 bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-8 rounded-[20px] shadow-xl group hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Huge Transparent Background Number per spec */}
              <span className="absolute top-2 right-4 text-7xl font-black text-white/5 select-none pointer-events-none group-hover:text-cyan-400/10 transition-colors">
                {step.step}
              </span>

              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 text-white flex items-center justify-center mb-6 shadow-lg font-black text-lg">
                {step.step}
              </div>
              <h3 className="text-lg font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-300 text-sm lg:text-base leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
