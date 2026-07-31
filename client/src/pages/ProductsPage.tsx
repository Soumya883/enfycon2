import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { ArrowRight, Search, CheckCircle, Sparkles, ExternalLink, ShieldCheck, Zap } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  fallback: string;
  features: string[];
  gradient: string;
  badge: string;
}

const products: Product[] = [
  {
    id: "enfysync",
    name: "enfysync",
    category: "Collaboration",
    tagline: "Unified Enterprise Communication & Automation",
    description: "Streamline enterprise communication with AI-driven workflow automation, automated task distribution, and real-time team collaboration intelligence.",
    image: "/images/product/enfysync.jpg",
    fallback: "https://www.enfycon.com/images/product/enfysync.jpg",
    features: [
      "AI-driven workspace channels",
      "Automated workflow bots",
      "End-to-end encrypted messaging",
      "Smart document sharing & search"
    ],
    gradient: "from-blue-600 to-indigo-700",
    badge: "Enterprise Flagship"
  },
  {
    id: "ivaak",
    name: "iVaak.ai",
    category: "AI/ML",
    tagline: "Speech Recognition & Conversational Intelligence",
    description: "Enterprise-grade voice AI that transforms voice data into structured actionable insights with natural language understanding across 30+ languages.",
    image: "/images/product/ivaak.jpg",
    fallback: "https://www.enfycon.com/images/product/ivaak.jpg",
    features: [
      "Real-time voice transcription",
      "Multilingual intent recognition",
      "Acoustic noise cancellation",
      "Custom domain dictionary support"
    ],
    gradient: "from-purple-600 to-violet-700",
    badge: "Voice AI Leader"
  },
  {
    id: "truefix",
    name: "Truefix.ai",
    category: "DevOps",
    tagline: "Autonomous Code Repair & Bug Remediation",
    description: "Accelerate software delivery with AI that detects code vulnerabilities, suggests real-time patches, and automates pull request reviews.",
    image: "/images/product/truefix.jpg",
    fallback: "https://www.enfycon.com/images/product/truefix.jpg",
    features: [
      "Automated static & dynamic code fix",
      "CI/CD pipeline security gates",
      "Zero-day flaw vulnerability scanning",
      "Intelligent refactoring suggestions"
    ],
    gradient: "from-emerald-600 to-teal-700",
    badge: "DevOps Essential"
  },
  {
    id: "icognito",
    name: "iCognito.ai",
    category: "Security",
    tagline: "Privacy-First Identity & Anonymization Engine",
    description: "Protect sensitive customer and enterprise data using advanced differential privacy, zero-knowledge proofs, and automated data masking.",
    image: "/images/product/icognito.jpg",
    fallback: "https://www.enfycon.com/images/product/icognito.jpg",
    features: [
      "Dynamic data masking & tokenization",
      "Zero-Trust identity verification",
      "GDPR & HIPAA automated compliance",
      "Synthetic dataset generation"
    ],
    gradient: "from-rose-600 to-red-700",
    badge: "Security & Privacy"
  },
  {
    id: "idental",
    name: "iDental.ai",
    category: "Healthcare",
    tagline: "AI Dental Radiography & Patient Care Platform",
    description: "Empower dental practitioners with instant radiograph analysis, automated periodontitis grading, and intelligent appointment workflows.",
    image: "/images/product/idental.jpg",
    fallback: "https://www.enfycon.com/images/product/idental.jpg",
    features: [
      "AI X-ray & 3D scan analysis",
      "Automated caries & lesion detection",
      "Smart treatment plan generator",
      "Seamless EHR integration"
    ],
    gradient: "from-pink-600 to-rose-700",
    badge: "HealthTech AI"
  },
  {
    id: "lexgenie",
    name: "lexGenie.ai",
    category: "Legal Tech",
    tagline: "Legal AI Assistant & Intelligent Contract Review",
    description: "Accelerate contract cycles by 70% with intelligent clause risk scoring, automated document drafting, and deep precedent discovery.",
    image: "/images/product/lexgen.jpg",
    fallback: "https://www.enfycon.com/images/product/lexgen.jpg",
    features: [
      "Automated contract risk scoring",
      "Redlining & clause auto-suggestion",
      "Precedent semantic search engine",
      "Regulatory compliance auditor"
    ],
    gradient: "from-amber-600 to-orange-700",
    badge: "Legal Automation"
  },
  {
    id: "quantfin",
    name: "QuantFin.ai",
    category: "Finance",
    tagline: "Quantitative Analytics & Risk Prediction Engine",
    description: "Empower financial institutions with real-time portfolio stress testing, predictive market trend modeling, and algorithmic risk mitigation.",
    image: "/images/product/ifin.jpg",
    fallback: "https://www.enfycon.com/images/product/ifin.jpg",
    features: [
      "Predictive market risk analytics",
      "Algorithmic portfolio rebalancing",
      "Real-time fraud anomaly detection",
      "Automated regulatory reporting"
    ],
    gradient: "from-cyan-600 to-blue-700",
    badge: "FinTech Intelligence"
  },
  {
    id: "performanceedge",
    name: "PerformanceEdge.ai",
    category: "HR Tech",
    tagline: "Workforce Analytics & Talent Performance Engine",
    description: "Optimize organizational productivity through data-driven performance metrics, predictive attrition modeling, and automated skill mapping.",
    image: "/images/product/performance.jpg",
    fallback: "https://www.enfycon.com/images/product/performance.jpg",
    features: [
      "Real-time productivity analytics",
      "Predictive turnover risk alerts",
      "Personalized learning path generator",
      "360-degree feedback synthesis"
    ],
    gradient: "from-indigo-600 to-blue-700",
    badge: "Workforce AI"
  },
  {
    id: "iwac",
    name: "iWac.ai",
    category: "Security",
    tagline: "Intelligent Workplace Access & Perimeter Control",
    description: "Transform physical security with facial recognition, contactless visitor management, and automated threat zone detection.",
    image: "/images/product/iwac.jpg",
    fallback: "https://www.enfycon.com/images/product/iwac.jpg",
    features: [
      "Contactless facial biometric access",
      "Automated visitor kiosk integration",
      "Perimeter anomaly alert system",
      "Multi-location dashboard hub"
    ],
    gradient: "from-slate-700 to-gray-900",
    badge: "Physical Security"
  }
];

const categories = ["All", "AI/ML", "Security", "Healthcare", "DevOps", "Legal Tech", "Finance", "HR Tech", "Collaboration"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#080C1E] relative overflow-hidden font-sans text-white">
      {/* Background Decorators */}
      <div className="absolute top-40 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <Navbar />

      <PageHeader
        title="Our Product Ecosystem"
        subtitle="Empowering enterprises with cutting-edge AI platforms, privacy systems, and intelligent automation built for modern scale."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }]}
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
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === cat
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
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950/50 border border-slate-700/80 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 transition-all backdrop-blur-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Banner Card */}
      <section className="py-6 relative z-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[32px] overflow-hidden bg-slate-900/80 backdrop-blur-xl text-white p-8 md:p-12 border border-slate-800 shadow-[0_30px_80px_rgba(0,0,0,0.5)] group hover:border-cyan-500/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-cyan-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-extrabold uppercase tracking-widest mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                  Featured Product Suite
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                  Next-Gen Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">AI Products</span>
                </h2>
                <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed font-light">
                  Transforming workforce productivity, data security, and operational velocity with purpose-built AI architecture.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 font-medium">
                  <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Enterprise Security</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>Sub-Second Latency</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />
                  <img
                    src="/images/logos/logo-large.webp"
                    alt="Enfycon Enterprise AI"
                    className="w-full max-w-sm h-auto rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700/80 transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 relative z-10"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "https://www.enfycon.com/images/logos/logo-large.webp";
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="py-12 pb-24 relative z-10">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-24 bg-slate-900/40 backdrop-blur-md rounded-[32px] border border-slate-800 p-8 shadow-2xl">
              <p className="text-slate-400 text-lg font-medium mb-6">No products match your current search criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-sm font-extrabold rounded-xl hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    whileHover={{ y: -10 }}
                    className="bg-slate-900/60 backdrop-blur-xl rounded-[24px] border border-slate-800 shadow-xl hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)] hover:border-indigo-500/40 transition-all duration-500 flex flex-col overflow-hidden group"
                  >
                    {/* Image Preview Container */}
                    <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                      <div className="absolute inset-0 bg-indigo-600/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = product.fallback;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-5 left-5 z-20">
                        <span className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${product.gradient} text-white text-xs font-extrabold uppercase tracking-wider shadow-lg`}>
                          {product.badge}
                        </span>
                      </div>

                      {/* Title overlay on image */}
                      <div className="absolute bottom-5 left-5 right-5 z-20">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow-lg mb-1 group-hover:text-cyan-300 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-xs text-cyan-100/80 font-semibold tracking-wide drop-shadow-md">
                          {product.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-slate-300 text-sm leading-relaxed mb-8 font-light">
                          {product.description}
                        </p>

                        {/* Features List */}
                        <div className="space-y-3 mb-8 bg-slate-950/50 rounded-2xl p-5 border border-slate-800/80">
                          <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-3">Key Highlights</p>
                          {product.features.map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-sm text-slate-300 font-light">
                              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action CTA */}
                      <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                        <a
                          href="/contact-us"
                          className="inline-flex items-center gap-2 text-sm font-extrabold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                        >
                          <span className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-cyan-400 after:scale-x-0 group-hover/link:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Request Demo</span>
                          <motion.span
                            className="inline-block"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          >
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                          </motion.span>
                        </a>
                        <span className="text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5 bg-slate-800/50 px-2.5 py-1 rounded-md">
                          Enterprise <ExternalLink className="w-3.5 h-3.5" />
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

      <Footer />
    </div>
  );
}
