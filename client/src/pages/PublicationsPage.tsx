import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { BookOpen, Download, ExternalLink, Sparkles, ArrowUpRight, FileText, BarChart3, Cpu, Shield } from "lucide-react";

const publications = [
  {
    category: "Whitepaper",
    icon: Cpu,
    gradient: "from-indigo-500 to-purple-600",
    title: "The Agentic AI Revolution: How Autonomous Systems Are Rewriting Enterprise Rules",
    excerpt: "A comprehensive deep-dive into how agentic AI workflows are replacing traditional RPA and delivering 10x faster business process automation.",
    readTime: "18 min read",
    date: "July 2026",
    tags: ["Agentic AI", "Enterprise", "Automation"],
    featured: true,
  },
  {
    category: "Research Report",
    icon: BarChart3,
    gradient: "from-cyan-500 to-blue-600",
    title: "State of IT Staffing 2026: AI's Impact on Talent Acquisition",
    excerpt: "Our annual research report analyzing talent market shifts, AI adoption in recruitment, and compensation benchmarks across 12 tech disciplines.",
    readTime: "24 min read",
    date: "June 2026",
    tags: ["Staffing", "AI Hiring", "Market Research"],
    featured: true,
  },
  {
    category: "Case Study",
    icon: FileText,
    gradient: "from-emerald-500 to-teal-600",
    title: "Building India's First AI-Native GCC: The Bhubaneswar Story",
    excerpt: "How Enfycon helped a Fortune 500 company establish a 300-seat Global Capability Center in Bhubaneswar from concept to operational in 90 days.",
    readTime: "12 min read",
    date: "May 2026",
    tags: ["GCC", "India", "Case Study"],
    featured: false,
  },
  {
    category: "Whitepaper",
    icon: Shield,
    gradient: "from-rose-500 to-orange-600",
    title: "Zero Trust Architecture in the Age of Generative AI",
    excerpt: "Security frameworks must evolve. This paper outlines a practical zero-trust blueprint for enterprises deploying LLM-integrated systems.",
    readTime: "15 min read",
    date: "April 2026",
    tags: ["Cybersecurity", "Zero Trust", "GenAI"],
    featured: false,
  },
  {
    category: "Industry Guide",
    icon: BarChart3,
    gradient: "from-purple-500 to-fuchsia-600",
    title: "Digital Transformation Playbook for Government Enterprises",
    excerpt: "A 60-page guide to modernizing legacy public sector systems with cloud-first, AI-driven, citizen-centric technology architectures.",
    readTime: "30 min read",
    date: "March 2026",
    tags: ["Government", "Digital Transformation", "Public Sector"],
    featured: false,
  },
  {
    category: "Research Report",
    icon: Cpu,
    gradient: "from-amber-500 to-yellow-600",
    title: "LLM Benchmark Report: Enterprise Performance at Scale",
    excerpt: "We benchmarked 12 leading large language models across 8 enterprise use cases. Here's what we found about real-world accuracy, latency, and cost.",
    readTime: "20 min read",
    date: "February 2026",
    tags: ["LLM", "AI", "Benchmark"],
    featured: false,
  },
];

const catColors: Record<string, string> = {
  "Whitepaper": "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
  "Research Report": "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  "Case Study": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "Industry Guide": "bg-purple-500/15 text-purple-400 border-purple-500/30",
};

export default function PublicationsPage() {
  const featured = publications.filter(p => p.featured);
  const rest = publications.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-[#080C1E] font-sans relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-indigo-600/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[150px] pointer-events-none" />

      <Navbar />

      <PageHeader
        title="Research & Publications"
        subtitle="In-depth whitepapers, research reports, case studies, and industry guides authored by Enfycon's AI and technology experts."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Publications", href: "/publications" }]}
      />

      {/* Featured section */}
      <section className="py-28 relative z-10">
        <div className="container">

          {/* Featured header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-extrabold uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Featured Publications
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Must-Read Reports</h2>
            </div>
          </div>

          {/* Featured 2-column */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-20">
            {featured.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-slate-900/70 backdrop-blur-xl rounded-[24px] border border-slate-800/80 hover:border-indigo-500/40 p-8 transition-all duration-500 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_60px_rgba(79,70,229,0.2)] cursor-pointer"
              >
                {/* Gradient top accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pub.gradient} rounded-t-[24px]`} />

                {/* Icon + Category */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pub.gradient} text-white flex items-center justify-center shadow-lg`}>
                    <pub.icon className="w-6 h-6" />
                  </div>
                  <span className={`px-3 py-1 rounded-full border text-xs font-extrabold ${catColors[pub.category] ?? "bg-slate-800 text-slate-300 border-slate-700"}`}>
                    {pub.category}
                  </span>
                  <span className="ml-auto text-slate-500 text-xs font-bold">{pub.date}</span>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-4 leading-snug group-hover:text-indigo-300 transition-colors">{pub.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{pub.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pub.tags.map((tag, ti) => (
                    <span key={ti} className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">{tag}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-slate-800/60">
                  <span className="text-slate-500 text-xs font-semibold">{pub.readTime}</span>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1.5 text-xs font-extrabold text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 px-3 py-1.5 rounded-lg transition-all">
                      <Download className="w-3.5 h-3.5" /> Download PDF
                    </button>
                    <button className="flex items-center gap-1.5 text-xs font-extrabold text-indigo-400 hover:text-indigo-300 border border-indigo-500/30 hover:border-indigo-400/60 px-3 py-1.5 rounded-lg transition-all">
                      Read Now <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* All Publications header */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-slate-800" />
            <h2 className="text-2xl font-extrabold text-white">All Publications</h2>
            <div className="h-px flex-1 bg-slate-800" />
          </div>

          {/* List view for remaining */}
          <div className="space-y-5">
            {rest.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ x: 6 }}
                className="group bg-slate-900/60 backdrop-blur-xl rounded-[20px] border border-slate-800/80 hover:border-indigo-500/30 p-6 flex flex-col md:flex-row md:items-center gap-6 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pub.gradient} text-white flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <pub.icon className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-extrabold ${catColors[pub.category] ?? "bg-slate-800 text-slate-300 border-slate-700"}`}>{pub.category}</span>
                    <span className="text-slate-600 text-xs">{pub.date}</span>
                    <span className="text-slate-600 text-xs">{pub.readTime}</span>
                  </div>
                  <h3 className="text-base font-extrabold text-white group-hover:text-indigo-300 transition-colors leading-snug mb-2">{pub.title}</h3>
                  <p className="text-slate-400 text-sm truncate">{pub.excerpt}</p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <button className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border border-indigo-800/40 p-12 text-center shadow-[0_40px_100px_rgba(79,70,229,0.2)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.15),transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <BookOpen className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
              <h2 className="text-4xl font-black text-white mb-4">Get Research Delivered to Your Inbox</h2>
              <p className="text-slate-300 text-lg max-w-xl mx-auto mb-8 font-light">Join 10,000+ enterprise leaders who receive Enfycon's latest research, guides, and market insights monthly.</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input type="email" placeholder="Enter your work email" className="flex-1 px-5 py-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm font-medium focus:outline-none focus:border-indigo-500 transition-colors" />
                <button className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-7 py-3.5 rounded-xl font-extrabold text-sm hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all duration-300 whitespace-nowrap">
                  Subscribe Free
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
