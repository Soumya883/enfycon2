import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Globe, Code, Database, Brain, Lock, Users, Sparkles, CheckCircle, Search } from "lucide-react";
import { useLocation } from "wouter";

const portfolioItems = [
  {
    id: "ai-command-center",
    title: "Enterprise AI Command Center",
    client: "Fortune 100 Manufacturer",
    category: "AI / Automation",
    description: "Built a centralized AI command center that orchestrates 50+ autonomous agents across supply chain, quality control, and customer service operations.",
    tech: ["Python", "TensorFlow", "Kubernetes", "AWS"],
    icon: Brain,
    image: "/images/service/ai-agentic-solutions.jpg",
    fallback: "https://www.enfycon.com/images/service/ai-agentic-solutions.jpg",
    color: "from-blue-600 to-indigo-700",
    glow: "rgba(59,130,246,0.3)",
    stats: { agents: "50+", uptime: "99.99%", savings: "$12M/yr" },
  },
  {
    id: "fraud-detection",
    title: "Real-Time Fraud Detection Platform",
    client: "National Bank",
    category: "Cybersecurity / AI",
    description: "Developed an AI-powered fraud detection system processing 2M+ transactions daily with sub-second detection and automated response workflows.",
    tech: ["PyTorch", "Apache Kafka", "PostgreSQL", "Redis"],
    icon: Lock,
    image: "/images/service/security-assessment.jpg",
    fallback: "https://www.enfycon.com/images/service/security-assessment.jpg",
    color: "from-red-600 to-rose-700",
    glow: "rgba(225,29,72,0.3)",
    stats: { transactions: "2M+/day", accuracy: "99.7%", response: "<500ms" },
  },
  {
    id: "talent-acquisition",
    title: "Global Talent Acquisition Platform",
    client: "Series D SaaS Company",
    category: "IT Staffing / HR Tech",
    description: "Created an automated talent pipeline that sources, screens, and ranks candidates using AI matching algorithms, reducing time-to-hire by 70%.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI API"],
    icon: Users,
    image: "/images/service/us-it-staffing.png",
    fallback: "https://www.enfycon.com/images/service/us-it-staffing.png",
    color: "from-emerald-600 to-teal-700",
    glow: "rgba(16,185,129,0.3)",
    stats: { placements: "200+", reduction: "70%", satisfaction: "96%" },
  },
  {
    id: "data-analytics-hub",
    title: "Multi-Cloud Data Analytics Hub",
    client: "Healthcare Consortium",
    category: "Data & Analytics",
    description: "Architected a HIPAA-compliant data lake aggregating patient data across 30+ hospitals with real-time analytics and predictive health insights.",
    tech: ["AWS", "Snowflake", "Spark", "Tableau"],
    icon: Database,
    image: "/images/service/advanced-analytics.jpg",
    fallback: "https://www.enfycon.com/images/service/advanced-analytics.jpg",
    color: "from-purple-600 to-violet-700",
    glow: "rgba(139,92,246,0.3)",
    stats: { hospitals: "30+", dataPoints: "500M+", insights: "Real-time" },
  },
  {
    id: "smart-manufacturing",
    title: "Smart Manufacturing IoT Platform",
    client: "Automotive Parts Supplier",
    category: "IoT / Industry 4.0",
    description: "Deployed 5,000+ IoT sensors across 8 manufacturing plants with edge computing and predictive maintenance reducing equipment downtime by 85%.",
    tech: ["IoT", "Edge Computing", "ML", "Azure"],
    icon: Code,
    image: "/images/service/ai-first-platforms.jpg",
    fallback: "https://www.enfycon.com/images/service/ai-first-platforms.jpg",
    color: "from-amber-600 to-orange-700",
    glow: "rgba(245,158,11,0.3)",
    stats: { sensors: "5,000+", plants: "8", downtime: "-85%" },
  },
  {
    id: "digital-workplace",
    title: "Enterprise Digital Workplace",
    client: "Global Consulting Firm",
    category: "Enterprise Modernization",
    description: "Migrated legacy systems to a modern digital workplace platform serving 10,000+ employees across 25 countries with SSO, collaboration, and AI assistants.",
    tech: ["Azure AD", "Teams", "SharePoint", "Power Platform"],
    icon: Globe,
    image: "/images/service/enterprise-modernization.jpg",
    fallback: "https://www.enfycon.com/images/service/enterprise-modernization.jpg",
    color: "from-cyan-600 to-blue-700",
    glow: "rgba(6,182,212,0.3)",
    stats: { employees: "10K+", countries: "25", adoption: "94%" },
  },
];

const categories = ["All", "AI / Automation", "Cybersecurity / AI", "IT Staffing / HR Tech", "Data & Analytics", "IoT / Industry 4.0", "Enterprise Modernization"];

export default function PortfolioPage() {
  const [location, navigate] = useLocation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = portfolioItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#080C1E] relative overflow-hidden font-sans text-white">
      {/* Background Decorators */}
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <Navbar />

      <PageHeader
        title="Our Enterprise Portfolio"
        subtitle="Explore our portfolio of successful enterprise transformations, AI platforms, and high-impact technology solutions."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Portfolio", href: "/portfolio" }]}
      />

      {/* Filter and Search Bar Section */}
      <section className="pt-12 pb-6 relative z-10">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-slate-900/60 backdrop-blur-xl p-6 rounded-2xl border border-slate-800/80 shadow-2xl">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 scale-105"
                      : "bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950/50 border border-slate-700/80 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 transition-all backdrop-blur-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 pb-24 relative z-10">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center py-24 bg-slate-900/40 backdrop-blur-md rounded-[32px] border border-slate-800 p-8 shadow-2xl">
              <p className="text-slate-400 text-lg font-medium mb-6">No portfolio projects match your search criteria.</p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-sm font-extrabold rounded-xl hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filtered.map((item, i) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    whileHover={{ y: -10, boxShadow: `0 30px 60px ${item.glow}` }}
                    className="bg-slate-900/60 backdrop-blur-xl rounded-[24px] border border-slate-800 shadow-xl overflow-hidden hover:border-slate-600 transition-all duration-500 flex flex-col group relative"
                  >
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: item.glow.replace('0.3', '1') }} />

                    {/* Image Header with Badge */}
                    <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                      <div className="absolute inset-0 bg-indigo-600/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = item.fallback;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />
                      
                      {/* Icon & Category Badge */}
                      <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <Badge className="bg-slate-900/90 backdrop-blur-md text-white border-slate-700 text-xs font-bold shadow-sm">
                          {item.category}
                        </Badge>
                      </div>

                      {/* Title on image */}
                      <div className="absolute bottom-5 left-5 right-5 z-20">
                        <h3 className="text-2xl font-extrabold text-white tracking-tight drop-shadow-lg mb-1 group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-cyan-200/80 font-bold tracking-widest uppercase">
                          Client: {item.client}
                        </p>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-8 flex-1 flex flex-col justify-between relative z-10">
                      <div>
                        <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                          {item.description}
                        </p>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {item.tech.map((t) => (
                            <span key={t} className="px-3 py-1.5 bg-slate-800/80 border border-slate-700/50 text-slate-300 rounded-lg text-xs font-semibold">
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Impact Stats Grid */}
                        <div className="grid grid-cols-3 gap-3 p-4 bg-slate-950/50 rounded-2xl border border-slate-800/80 text-center mb-8">
                          {Object.entries(item.stats).map(([key, value]) => (
                            <div key={key}>
                              <p className="text-sm md:text-base font-extrabold text-white">{value}</p>
                              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{key}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                        <button
                          onClick={() => navigate("/contact-us")}
                          className="inline-flex items-center gap-2 text-sm font-extrabold text-cyan-400 group-hover:text-cyan-300 transition-colors group/link"
                        >
                          <span className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-cyan-400 after:scale-x-0 group-hover/link:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">View Case Study</span>
                          <motion.span
                            className="inline-block"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          >
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                          </motion.span>
                        </button>
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-md border border-emerald-500/20">
                          Verified <CheckCircle className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px]" />
        </div>
        <div className="container text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-extrabold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            Transform Your Enterprise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Ready to Build Your Next <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Success Story?</span>
          </h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Partner with Enfycon to engineer precision AI platforms, impenetrable cybersecurity, and elite technical capacity.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => navigate("/contact-us")}
              className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white px-10 py-6 text-base font-extrabold rounded-full shadow-[0_10px_40px_rgba(79,70,229,0.4)] border border-indigo-400/30 group"
              size="lg"
            >
              Start a Conversation 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
