import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Graphic Decorator */}
      <div
        className="absolute top-0 right-0 w-full h-[600px] pointer-events-none opacity-5 bg-no-repeat bg-right-top z-0"
        style={{ backgroundImage: "url('/images/bg/map.svg')" }}
      />

      <Navbar />

      <PageHeader
        title="Our Enterprise Portfolio"
        subtitle="Explore our portfolio of successful enterprise transformations, AI platforms, and high-impact technology solutions."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Portfolio", href: "/portfolio" }]}
      />

      {/* Filter and Search Bar Section */}
      <section className="pt-12 pb-6 relative z-10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-100 shadow-sm">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                      : "bg-gray-100/80 text-gray-600 hover:bg-gray-200/80 hover:text-gray-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 pb-24 relative z-10">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 p-8">
              <p className="text-gray-500 text-lg font-medium">No portfolio projects match your search criteria.</p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors"
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
                  >
                    {/* Image Header with Badge */}
                    <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = item.fallback;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Icon & Category Badge */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                          <item.icon className="h-5 w-5 text-white" />
                        </div>
                        <Badge className="bg-white/90 backdrop-blur-md text-gray-900 hover:bg-white text-xs font-bold shadow-sm">
                          {item.category}
                        </Badge>
                      </div>

                      {/* Title on image */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-extrabold text-white tracking-tight drop-shadow-md">
                          {item.title}
                        </h3>
                        <p className="text-xs text-blue-200 font-medium">
                          Client: {item.client}
                        </p>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                          {item.description}
                        </p>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {item.tech.map((t) => (
                            <span key={t} className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold">
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Impact Stats Grid */}
                        <div className="grid grid-cols-3 gap-2 p-3 bg-gray-50/80 rounded-xl border border-gray-100 text-center mb-6">
                          {Object.entries(item.stats).map(([key, value]) => (
                            <div key={key}>
                              <p className="text-sm font-extrabold text-primary">{value}</p>
                              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{key}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                        <button
                          onClick={() => navigate("/contact-us")}
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:text-blue-700 transition-colors"
                        >
                          View Case Study
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                          Verified Result <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
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
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-950 to-indigo-950 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-right bg-no-repeat pointer-events-none"
          style={{ backgroundImage: "url('/images/shape/pattern-3.svg')" }}
        />
        <div className="container text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Transform Your Enterprise
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Ready to Build Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Success Story?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto text-base">
            Partner with Enfycon to engineer precision AI platforms, impenetrable cybersecurity, and elite technical capacity.
          </p>
          <Button
            onClick={() => navigate("/contact-us")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-bold rounded-full shadow-xl shadow-primary/30"
            size="lg"
          >
            Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
