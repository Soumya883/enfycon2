import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Wrench, ArrowRight, Bot, BarChart3, UserCheck, Search, TrendingUp, AlertTriangle, MessageSquare, Target, Users, FileText } from "lucide-react";

const tools = [
  {
    icon: FileText,
    slug: "resume-analyzer",
    title: "Resume Analyzer",
    description: "AI-powered resume analysis that scores and benchmarks candidate CVs against job requirements instantly.",
    badge: "AI-Powered",
    badgeColor: "bg-indigo-100 text-indigo-700",
  },
  {
    icon: UserCheck,
    slug: "candidate-fit-score",
    title: "Candidate Fit Score",
    description: "Quantify candidate-role compatibility using our proprietary 47-point scoring matrix.",
    badge: "Enterprise",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    icon: MessageSquare,
    slug: "interview-simulator",
    title: "Interview Simulator",
    description: "Practice and evaluate interview responses with AI-generated scenario-based questions.",
    badge: "Interactive",
    badgeColor: "bg-cyan-100 text-cyan-700",
  },
  {
    icon: BarChart3,
    slug: "skill-gap-analyzer",
    title: "Skill Gap Analyzer",
    description: "Identify and visualize competency gaps between a candidate's profile and your target role requirements.",
    badge: "Analytics",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: TrendingUp,
    slug: "candidate-availability-predictor",
    title: "Availability Predictor",
    description: "Forecast when passive candidates are most likely to be open to new opportunities using behavioral signals.",
    badge: "Predictive AI",
    badgeColor: "bg-amber-100 text-amber-700",
  },
  {
    icon: Users,
    slug: "bench-resource-tracker",
    title: "Bench Resource Tracker",
    description: "Track and manage bench resources in real-time to maximize talent utilization and reduce idle time.",
    badge: "Operations",
    badgeColor: "bg-rose-100 text-rose-700",
  },
  {
    icon: AlertTriangle,
    slug: "hiring-risk-analyzer",
    title: "Hiring Risk Analyzer",
    description: "Evaluate and mitigate hiring risks using predictive attrition models and background pattern recognition.",
    badge: "Risk AI",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    icon: Bot,
    slug: "interview-questions-generator",
    title: "Interview Questions Generator",
    description: "Auto-generate role-specific, behavioral, and technical interview question sets in seconds.",
    badge: "AI-Powered",
    badgeColor: "bg-indigo-100 text-indigo-700",
  },
  {
    icon: Search,
    slug: "resume-vs-jd-match",
    title: "Resume vs JD Match",
    description: "Side-by-side comparison of any resume against a job description with a detailed match score breakdown.",
    badge: "Smart Match",
    badgeColor: "bg-teal-100 text-teal-700",
  },
  {
    icon: Target,
    slug: "offer-acceptance-predictor",
    title: "Offer Acceptance Predictor",
    description: "Predict the probability a candidate will accept an offer using compensation benchmarks and intent signals.",
    badge: "Predictive AI",
    badgeColor: "bg-violet-100 text-violet-700",
  },
  {
    icon: UserCheck,
    slug: "passive-candidate-finder",
    title: "Passive Candidate Finder",
    description: "Surface high-quality passive candidates from your existing talent pool based on role-fit signals.",
    badge: "Discovery",
    badgeColor: "bg-cyan-100 text-cyan-700",
  },
];


export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      <Navbar />

      <PageHeader
        title="Enfycon AI Hiring Tools"
        subtitle="Free AI-powered tools to supercharge your recruitment, talent analysis, and workforce planning."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }]}
      />

      <section className="py-28 lg:py-36">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, i) => (
              <motion.a
                key={i}
                href={`/tools/${tool.slug}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(79,70,229,0.15)" }}
                className="group bg-white rounded-[20px] border border-slate-200/80 p-8 shadow-sm hover:border-indigo-300 transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-[14px] bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Wrench className="w-7 h-7" />
                  </div>
                  <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${tool.badgeColor}`}>
                    {tool.badge}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">{tool.description}</p>
                <div className="mt-6 flex items-center gap-2 text-indigo-600 font-extrabold text-sm group-hover:gap-3 transition-all duration-300">
                  <span>Try Free Tool</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
