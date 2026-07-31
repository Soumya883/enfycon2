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
    image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fproduct%2Fenfysync.jpg&w=828&q=85",
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
    image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fproduct%2Fivaak.jpg&w=828&q=85",
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
    image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fproduct%2Ftruefix.jpg&w=828&q=85",
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
    image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fproduct%2Ficognito.jpg&w=828&q=85",
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
    image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fproduct%2Fidental.jpg&w=828&q=85",
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
    image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fproduct%2Flexgen.jpg&w=828&q=85",
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
    image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fproduct%2Fifin.jpg&w=828&q=85",
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
    image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fproduct%2Fperformance.jpg&w=828&q=85",
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
    image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fproduct%2Fiwac.jpg&w=828&q=85",
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Graphic Decorator */}
      <div
        className="absolute top-0 right-0 w-full h-[600px] pointer-events-none opacity-5 bg-no-repeat bg-right-top z-0"
        style={{ backgroundImage: "url('https://www.enfycon.com/images/bg/map.svg')" }}
      />
      <div
        className="absolute top-40 left-0 w-96 h-96 pointer-events-none opacity-10 bg-no-repeat z-0"
        style={{ backgroundImage: "url('https://www.enfycon.com/images/shape/pattern-2.svg')" }}
      />

      <Navbar />

      <PageHeader
        title="Our Product Ecosystem"
        subtitle="Empowering enterprises with cutting-edge AI platforms, privacy systems, and intelligent automation built for modern scale."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }]}
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
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === cat
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
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Banner Card */}
      <section className="py-6 relative z-10">
        <div className="container">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-gray-900 via-blue-950 to-indigo-950 text-white p-8 md:p-12 border border-gray-800 shadow-2xl">
            <div
              className="absolute inset-0 opacity-15 bg-right bg-no-repeat"
              style={{ backgroundImage: "url('https://www.enfycon.com/images/shape/pattern-3.svg')" }}
            />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-spin" />
                  Featured Product Suite
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                  Next-Gen Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">AI Products</span>
                </h2>
                <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
                  Transforming workforce productivity, data security, and operational velocity with purpose-built AI architecture.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span>Enterprise Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-400" />
                    <span>Sub-Second Latency</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <img
                  src="https://www.enfycon.com/images/logos/logo-large.webp"
                  alt="Enfycon Enterprise AI"
                  className="w-full max-w-sm h-auto rounded-2xl shadow-2xl border border-white/10 transform hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="py-12 pb-24 relative z-10">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 p-8">
              <p className="text-gray-500 text-lg font-medium">No products match your current search criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors"
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
                  >
                    {/* Image Preview Container */}
                    <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          // Fallback styled placeholder if image fails to load
                          const target = e.currentTarget;
                          target.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${product.gradient} text-white text-xs font-semibold shadow-md`}>
                          {product.badge}
                        </span>
                      </div>

                      {/* Title overlay on image */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-extrabold text-white tracking-tight drop-shadow-md">
                          {product.name}
                        </h3>
                        <p className="text-xs text-white/80 font-medium tracking-wide">
                          {product.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                          {product.description}
                        </p>

                        {/* Features List */}
                        <div className="space-y-2.5 mb-6 bg-gray-50/70 rounded-xl p-4 border border-gray-100">
                          <p className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Key Highlights</p>
                          {product.features.map((feat, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action CTA */}
                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                        <a
                          href="/contact-us"
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:text-blue-700 transition-colors"
                        >
                          Request Demo
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                          Enterprise Ready <ExternalLink className="w-3 h-3" />
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
