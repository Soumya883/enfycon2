import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Wrench, ArrowRight, Bot, BarChart3, UserCheck, Search, TrendingUp, AlertTriangle, MessageSquare, Target, Users, FileText, Sparkles, ArrowUpRight, CheckCircle2, Zap } from "lucide-react";

const tools = [
  { icon: FileText, slug: "resume-analyzer", title: "Resume Analyzer", description: "AI-powered resume analysis that scores and benchmarks candidate CVs against job requirements instantly.", badge: "AI-Powered", badgeColor: "from-indigo-500 to-purple-600", category: "Analysis", popular: true },
  { icon: UserCheck, slug: "candidate-fit-score", title: "Candidate Fit Score", description: "Quantify candidate-role compatibility using our proprietary 47-point scoring matrix.", badge: "Enterprise", badgeColor: "from-purple-500 to-pink-600", category: "Scoring", popular: true },
  { icon: MessageSquare, slug: "interview-simulator", title: "Interview Simulator", description: "Practice and evaluate interview responses with AI-generated scenario-based questions.", badge: "Interactive", badgeColor: "from-cyan-500 to-blue-600", category: "Training" },
  { icon: BarChart3, slug: "skill-gap-analyzer", title: "Skill Gap Analyzer", description: "Identify and visualize competency gaps between a candidate's profile and your target role requirements.", badge: "Analytics", badgeColor: "from-emerald-500 to-teal-600", category: "Analysis" },
  { icon: TrendingUp, slug: "candidate-availability-predictor", title: "Availability Predictor", description: "Forecast when passive candidates are most likely to be open to new opportunities using behavioral signals.", badge: "Predictive AI", badgeColor: "from-amber-500 to-orange-500", category: "AI" },
  { icon: Users, slug: "bench-resource-tracker", title: "Bench Resource Tracker", description: "Track and manage bench resources in real-time to maximize talent utilization and reduce idle time.", badge: "Operations", badgeColor: "from-rose-500 to-pink-600", category: "Operations" },
  { icon: AlertTriangle, slug: "hiring-risk-analyzer", title: "Hiring Risk Analyzer", description: "Evaluate and mitigate hiring risks using predictive attrition models and background pattern recognition.", badge: "Risk AI", badgeColor: "from-orange-500 to-red-600", category: "AI", popular: true },
  { icon: Bot, slug: "interview-questions-generator", title: "Interview Questions Generator", description: "Auto-generate role-specific, behavioral, and technical interview question sets in seconds.", badge: "AI-Powered", badgeColor: "from-indigo-500 to-blue-600", category: "AI" },
  { icon: Search, slug: "resume-vs-jd-match", title: "Resume vs JD Match", description: "Side-by-side comparison of any resume against a job description with a detailed match score breakdown.", badge: "Smart Match", badgeColor: "from-teal-500 to-cyan-600", category: "Analysis" },
  { icon: Target, slug: "offer-acceptance-predictor", title: "Offer Acceptance Predictor", description: "Predict the probability a candidate will accept an offer using compensation benchmarks and intent signals.", badge: "Predictive AI", badgeColor: "from-violet-500 to-purple-700", category: "AI" },
  { icon: UserCheck, slug: "passive-candidate-finder", title: "Passive Candidate Finder", description: "Surface high-quality passive candidates from your existing talent pool based on role-fit signals.", badge: "Discovery", badgeColor: "from-cyan-500 to-blue-600", category: "Sourcing" },
];

const categories = ["All", "AI", "Analysis", "Scoring", "Training", "Operations", "Sourcing"];

const benefits = [
  { icon: Zap, title: "Instant Results", desc: "Get AI-powered insights in seconds, not hours." },
  { icon: CheckCircle2, title: "100% Free", desc: "All tools are free to use with no hidden costs." },
  { icon: Target, title: "Enterprise-Grade", desc: "Built for professional HR and talent teams." },
];

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? tools : tools.filter(t => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#080C1E] font-sans relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-indigo-600/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[140px] pointer-events-none" />

      <Navbar />

      <PageHeader
        title="Enfycon AI Hiring Tools"
        subtitle="11 free AI-powered tools to supercharge your recruitment, talent analysis, and workforce planning — built by staffing experts."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }]}
      />

      {/* Benefits strip */}
      <section className="py-12 bg-slate-900/60 border-y border-slate-800/60 backdrop-blur-md relative z-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-400/20 text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-extrabold text-sm">{b.title}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 relative z-10">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-lg shadow-indigo-500/30"
                    : "bg-slate-900/60 border-slate-700/60 text-slate-300 hover:border-indigo-400/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tools Grid */}
          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((tool, i) => (
                <motion.a
                  key={tool.slug}
                  layout
                  href={`/tools/${tool.slug}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ y: -10 }}
                  className="group bg-slate-900/70 backdrop-blur-xl rounded-[24px] border border-slate-800/80 hover:border-indigo-500/40 p-8 transition-all duration-500 flex flex-col cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(79,70,229,0.2)] relative overflow-hidden"
                >
                  {/* Popular badge */}
                  {tool.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 text-[10px] font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Popular
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.badgeColor} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <tool.icon className="w-8 h-8" />
                  </div>

                  {/* Badge */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${tool.badgeColor} text-white text-[10px] font-extrabold mb-4 self-start`}>
                    {tool.badge}
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-indigo-300 transition-colors leading-snug">{tool.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">{tool.description}</p>

                  <div className="mt-8 pt-6 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-indigo-400 font-extrabold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Try Free Tool <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">{tool.category}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border border-indigo-800/40 p-12 text-center shadow-[0_40px_100px_rgba(79,70,229,0.2)]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.15),transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5" /> Need Custom AI Tools?
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Build Your Own <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">AI Hiring Suite</span>
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 font-light">Let our experts build custom AI recruitment tools tailored to your enterprise workflows and talent strategy.</p>
              <a href="/contact-us" className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white px-10 py-4 rounded-2xl font-extrabold text-sm hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2">
                Talk to Our Team <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
