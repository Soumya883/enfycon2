import { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, CheckCircle, ShieldCheck, Zap, Bot, Cpu, Shield, 
  Users, BarChart3, Wrench, Heart, Scale, DollarSign, Globe, 
  MessageSquare, Phone, Send, Loader2, Play, ExternalLink,
  MessageCircle, Facebook, Clock, Activity, Share2, Layers, Code
} from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

// Product Extended Dataset
interface ProductDetail {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  fallback: string;
  features: { title: string; desc: string; icon: any }[];
  gradient: string;
  badge: string;
  whyChoose: string[];
  techStack: string[];
  businessImpact: { metric: string; label: string }[];
  specs: { label: string; value: string }[];
}

const productDetails: Record<string, ProductDetail> = {
  enfysync: {
    id: "enfysync",
    name: "enfysync",
    category: "Collaboration",
    tagline: "Unified Enterprise Communication & Automation Hub",
    description: "enfysync streamlines enterprise communication with AI-driven workflow automation, automated task distribution, and real-time team collaboration intelligence. It acts as the nervous system for your global distributed teams.",
    image: "/images/product/enfysync.jpg",
    fallback: "https://www.enfycon.com/images/product/enfysync.jpg",
    badge: "Enterprise Flagship",
    gradient: "from-blue-600 to-indigo-700",
    features: [
      { title: "AI-Driven Workspace Channels", desc: "Dynamically summarizes channel conversations, action items, and project roadblocks.", icon: Bot },
      { title: "Automated Workflow Bots", desc: "Integrate third-party systems directly into conversations to trigger builds, updates, and reports.", icon: Zap },
      { title: "End-to-End Encryption", desc: "Enterprise security architecture protecting messages, files, and voice channels at rest and in transit.", icon: ShieldCheck },
      { title: "Smart Document Search", desc: "Semantic search engine indexed by AI to retrieve any contract, mock, or note instantly.", icon: Layers }
    ],
    whyChoose: [
      "Reduces internal emails by up to 65% with context-aware threading.",
      "Eliminates context switching by centralizing Jira, GitHub, Slack, and Salesforce.",
      "Deep audit logs and compliance controls for HIPAA, SOC2, and GDPR.",
      "Built-in video and voice capability optimized for low-bandwidth networks."
    ],
    techStack: ["React", "Go", "WebRTC", "PostgreSQL", "Redis", "AWS S3"],
    businessImpact: [
      { metric: "65%", label: "Email Reduction" },
      { metric: "3.2 Hours", label: "Weekly Saved per Employee" },
      { metric: "Zero", label: "Data Leak History" }
    ],
    specs: [
      { label: "Deployment Type", value: "SaaS / Private Cloud / On-Premise" },
      { label: "API Rate Limit", value: "10,000 requests/min" },
      { label: "Data Retention", value: "Customizable up to 7 Years" },
      { label: "Compliance Standard", value: "SOC 2 Type II, HIPAA, ISO 27001" }
    ]
  },
  ivaak: {
    id: "ivaak",
    name: "iVaak.ai",
    category: "AI/ML",
    tagline: "Speech Recognition & Conversational Intelligence Platform",
    description: "iVaak.ai is an enterprise-grade voice AI that transforms voice data into structured actionable insights with natural language understanding across 30+ languages, designed for call centers, medical offices, and customer services.",
    image: "/images/product/ivaak.jpg",
    fallback: "https://www.enfycon.com/images/product/ivaak.jpg",
    badge: "Voice AI Leader",
    gradient: "from-purple-600 to-violet-700",
    features: [
      { title: "Real-time Voice Transcription", desc: "Sub-50ms latency audio to text processing with industry-specific dictionaries.", icon: Cpu },
      { title: "Multilingual Intent Analysis", desc: "Detects customer sentiment, emotional tones, and compliance breaches.", icon: MessageSquare },
      { title: "Acoustic Noise Filtering", desc: "AI-driven noise isolation designed for busy corporate floors or call centers.", icon: Zap },
      { title: "Custom Dictionary Support", desc: "Train iVaak instantly on medical terms, legal jargon, or brand names.", icon: Code }
    ],
    whyChoose: [
      "99.2% transcription accuracy on enterprise-specific domains.",
      "Identifies upselling opportunities and scripts compliance automatically.",
      "Reduces manual audit workloads for quality assurance teams by 85%.",
      "Seamless REST & WebSocket API integrations for live streaming."
    ],
    techStack: ["Python", "PyTorch", "Kubernetes", "gRPC", "FastAPI", "Docker"],
    businessImpact: [
      { metric: "99.2%", label: "Word Accuracy Rate" },
      { metric: "85%", label: "QA Audit Time Cut" },
      { metric: "30+", label: "Supported Languages" }
    ],
    specs: [
      { label: "Latency", value: "Average < 45ms" },
      { label: "Integration", value: "Twilio, Asterisk, Genesys, Zoom" },
      { label: "Language Support", value: "30+ Global Languages & Dialects" },
      { label: "Encryption Mode", value: "AES-256 GCM Audio Streaming" }
    ]
  },
  truefix: {
    id: "truefix",
    name: "Truefix.ai",
    category: "DevOps",
    tagline: "Autonomous Code Repair & Bug Remediation Engine",
    description: "Truefix.ai accelerates software delivery with an AI engine that detects vulnerabilities, suggests real-time code patches, and automates pull request reviews directly inside your developer workflow.",
    image: "/images/product/truefix.jpg",
    fallback: "https://www.enfycon.com/images/product/truefix.jpg",
    badge: "DevOps Essential",
    gradient: "from-emerald-600 to-teal-700",
    features: [
      { title: "Automated Code Patching", desc: "Generates production-ready syntax corrections and library security upgrades.", icon: Wrench },
      { title: "CI/CD Security Gates", desc: "Scans builds automatically and flags vulnerabilities before deployment.", icon: ShieldCheck },
      { title: "Zero-Day Flaw Detection", desc: "Scans static code against CVE databases to prevent supply chain threats.", icon: Shield },
      { title: "Intelligent Refactoring", desc: "Identifies technical debt, performance bottlenecks, and suggests optimization.", icon: Cpu }
    ],
    whyChoose: [
      "Prevents insecure packages from entering production branches.",
      "Speeds up pull request review approvals by 40%.",
      "Compatible with GitHub Actions, GitLab CI, Bitbucket, and Jenkins.",
      "Ensures OWASP Top 10 compliance for web application projects."
    ],
    techStack: ["Node.js", "Rust", "Tree-Sitter", "Go", "Docker", "GitHub API"],
    businessImpact: [
      { metric: "40%", label: "Faster PR Approvals" },
      { metric: "Zero", label: "Production CVE Releases" },
      { metric: "92%", label: "Dev Adoption Rate" }
    ],
    specs: [
      { label: "Supported Languages", value: "TypeScript, Python, Go, Java, Rust, C++" },
      { label: "Vulnerability Database", value: "CVE, NVD, Snyk, custom feeds" },
      { label: "Hosting", value: "SaaS / Dedicated VPS / Self-Hosted Runner" },
      { label: "Integration Hooks", value: "GitHub, GitLab, Jira, Slack" }
    ]
  },
  icognito: {
    id: "icognito",
    name: "iCognito.ai",
    category: "Security",
    tagline: "Privacy-First Identity & Anonymization Engine",
    description: "iCognito.ai protects sensitive customer and enterprise data using advanced differential privacy, zero-knowledge proofs, and automated data masking rules for non-production environments.",
    image: "/images/product/icognito.jpg",
    fallback: "https://www.enfycon.com/images/product/icognito.jpg",
    badge: "Security & Privacy",
    gradient: "from-rose-600 to-red-700",
    features: [
      { title: "Dynamic Data Masking", desc: "Anonymizes PII, credit cards, and health codes in real-time database queries.", icon: Shield },
      { title: "Zero-Knowledge Proofs", desc: "Verify client claims or identities without exposing primary sensitive data.", icon: ShieldCheck },
      { title: "Compliance Auditing", desc: "Real-time checks for GDPR, HIPAA, CCPA, and PCI-DSS compliance.", icon: Layers },
      { title: "Synthetic Data Generation", desc: "Create high-fidelity fake data for QA testing that mimics real behaviors.", icon: Bot }
    ],
    whyChoose: [
      "Maintains relational database integrity while fully masking identifiers.",
      "Removes security risks of copying live production data to testing staging environments.",
      "Easy-to-use policy editor with zero-code setup.",
      "Negligible impact on database query latency."
    ],
    techStack: ["Rust", "PostgreSQL Proxy", "Python", "Kubernetes", "WebAssembly"],
    businessImpact: [
      { metric: "100%", label: "PII Masking Rate" },
      { metric: "< 2ms", label: "Query Overhead Latency" },
      { metric: "Zero", label: "Compliance Penalties" }
    ],
    specs: [
      { label: "Supported Databases", value: "PostgreSQL, MySQL, Oracle, MongoDB, Snowflake" },
      { label: "Anonymization Methods", value: "Tokenization, Hashing, Noise addition" },
      { label: "Max Query Throughput", value: "50,000 queries/sec" },
      { label: "Deployment", value: "Database Proxy / Sidecar Container" }
    ]
  },
  idental: {
    id: "idental",
    name: "iDental.ai",
    category: "Healthcare",
    tagline: "AI Dental Radiography & Patient Care Platform",
    description: "iDental.ai empowers dental practitioners with instant digital radiograph analysis, automated periodontitis grading, and intelligent treatment planning workflows to increase clinic efficiency.",
    image: "/images/product/idental.jpg",
    fallback: "https://www.enfycon.com/images/product/idental.jpg",
    badge: "HealthTech AI",
    gradient: "from-pink-600 to-rose-700",
    features: [
      { title: "AI X-Ray Scan Analysis", desc: "Detects lesions, bone loss, and tooth abnormalities within 2 seconds.", icon: Bot },
      { title: "Automated Caries Detection", desc: "Highlights microscopic enamel decay before they become visible cavities.", icon: Activity },
      { title: "Treatment Plan Generator", desc: "Recommends procedural plans based on historical success models.", icon: Layers },
      { title: "EHR Cloud Sync", desc: "Integrates with clinic databases for instant updates and medical records.", icon: Globe }
    ],
    whyChoose: [
      "Reduces diagnostic errors and improves dental treatment acceptance rates.",
      "Enables interactive visual patient education screens.",
      "Fully HIPAA and FDA-cleared architectural guidelines.",
      "Optimized for dental clinics, networks, and educational institutions."
    ],
    techStack: ["React Native", "TensorFlow.js", "Python", "FastAPI", "AWS HIPAA Cloud"],
    businessImpact: [
      { metric: "98.6%", label: "Detection Accuracy" },
      { metric: "2 Seconds", label: "Analysis Speed" },
      { metric: "35%", label: "Plan Acceptance Increase" }
    ],
    specs: [
      { label: "Image Formats", value: "DICOM, JPEG, PNG, TIFF" },
      { label: "Supported Scans", value: "Bitewing, Periapical, Panoramic, CBCT" },
      { label: "HIPAA Security", value: "Business Associate Agreement (BAA) Ready" },
      { label: "SDK Compatibility", value: "Web, iOS, Android wrappers" }
    ]
  },
  lexgenie: {
    id: "lexgenie",
    name: "lexGenie.ai",
    category: "Legal Tech",
    tagline: "Legal AI Assistant & Intelligent Contract Review",
    description: "lexGenie.ai accelerates corporate contract cycles by 70% with intelligent clause risk scoring, automated document drafting, and semantic precedent discovery for legal departments.",
    image: "/images/product/lexgen.jpg",
    fallback: "https://www.enfycon.com/images/product/lexgen.jpg",
    badge: "Legal Automation",
    gradient: "from-amber-600 to-orange-700",
    features: [
      { title: "Contract Risk Scoring", desc: "Scans documents and flags non-standard clauses, liability risks, and errors.", icon: Shield },
      { title: "Redlining & Clause Suggestion", desc: "Auto-suggests legal standard paragraphs and edits inside Microsoft Word.", icon: Wrench },
      { title: "Semantic Precedent Search", desc: "Finds similar historic settlements or contracts based on meaning.", icon: Layers },
      { title: "Regulatory Compliance Audit", desc: "Checks terms against national and international trade regulations.", icon: ShieldCheck }
    ],
    whyChoose: [
      "Reduces legal team time spent on standard NDA/sales reviews by 75%.",
      "Increases risk oversight consistency across multiple global entities.",
      "Trained on corporate contract precedents with strict tenant database separation.",
      "Integrates with popular CLM platforms and MS Word."
    ],
    techStack: ["Next.js", "Python", "LangChain", "Milvus DB", "FastAPI", "Azure OpenAI"],
    businessImpact: [
      { metric: "75%", label: "Review Time Saved" },
      { metric: "Zero", label: "Overlooked Risky Clauses" },
      { metric: "70%", label: "Faster Sales Cycles" }
    ],
    specs: [
      { label: "Supported Documents", value: "DOCX, PDF, TXT" },
      { label: "AI Models Used", value: "Fine-tuned GPT-4, Llama-3-Legal" },
      { label: "Integration", value: "Salesforce, DocuSign, Microsoft Word" },
      { label: "Isolation Level", value: "Single Tenant Dedicated Database" }
    ]
  },
  quantfin: {
    id: "quantfin",
    name: "QuantFin.ai",
    category: "Finance",
    tagline: "Quantitative Analytics & Risk Prediction Engine",
    description: "QuantFin.ai empowers modern financial institutions with real-time portfolio stress testing, predictive market trend modeling, and algorithmic risk mitigation workflows.",
    image: "/images/product/ifin.jpg",
    fallback: "https://www.enfycon.com/images/product/ifin.jpg",
    badge: "FinTech Intelligence",
    gradient: "from-cyan-600 to-blue-700",
    features: [
      { title: "Portfolio Stress Testing", desc: "Runs Monte Carlo simulations on historical and custom event scenarios.", icon: BarChart3 },
      { title: "Algorithmic Risk Controls", desc: "Triggers hedge positions or rebalancing based on machine learning predictions.", icon: Cpu },
      { title: "Real-time Anomaly Detection", desc: "Monitors transaction feeds to catch instant institutional market manipulation.", icon: ShieldCheck },
      { title: "Automated SEC Compliance", desc: "Generates audited audit-ready documentation for financial regulators.", icon: Layers }
    ],
    whyChoose: [
      "Processes millions of market signals under 100 milliseconds.",
      "Optimized for asset managers, hedge funds, and family offices.",
      "Integrates directly with Bloomberg, Refinitiv, and custom market feeds.",
      "Protects portfolios against black swan volatility events."
    ],
    techStack: ["C++", "Python", "Apache Spark", "Redis Enterprise", "ClickHouse"],
    businessImpact: [
      { metric: "Sub-100ms", label: "Processing Latency" },
      { metric: "24/7", label: "Active Risk Monitoring" },
      { metric: "3.5x", label: "Hedging Efficiency Boost" }
    ],
    specs: [
      { label: "Data Latency", value: "Real-time streaming feeds" },
      { label: "Algorithm Engines", value: "Monte Carlo, Black-Scholes, Deep Q-Learning" },
      { label: "Integration Protocols", value: "REST API, WebSockets, FIX Protocol" },
      { label: "Infrastructure", value: "Bare Metal / AWS FinCloud" }
    ]
  },
  performanceedge: {
    id: "performanceedge",
    name: "PerformanceEdge.ai",
    category: "HR Tech",
    tagline: "Workforce Analytics & Talent Performance Engine",
    description: "PerformanceEdge.ai optimizes organizational productivity through data-driven performance metrics, predictive attrition models, and automated engineering skill mapping.",
    image: "/images/product/performance.jpg",
    fallback: "https://www.enfycon.com/images/product/performance.jpg",
    badge: "Workforce AI",
    gradient: "from-indigo-600 to-blue-700",
    features: [
      { title: "Productivity Metrics", desc: "Aggregates engineering metrics from GitHub, Slack, and Jira without invasive tracking.", icon: BarChart3 },
      { title: "Predictive Attrition Alert", desc: "Flags potential developer burnout and turnover risks using neural models.", icon: Zap },
      { title: "Skill Mapping Generator", desc: "Maps your current team capabilities and recommends training plans.", icon: Users },
      { title: "360 Feedback Synthesis", desc: "Summarizes monthly employee reviews into actionable growth pointers.", icon: MessageSquare }
    ],
    whyChoose: [
      "Improves engineering retention rates by predicting team burnout months ahead.",
      "Maintains strict privacy policies with anonymized team aggregations.",
      "Helps managers run goal-oriented and transparent feedback cycles.",
      "Saves HR managers hours of performance review writing."
    ],
    techStack: ["React", "Python", "FastAPI", "PostgreSQL", "TailwindCSS"],
    businessImpact: [
      { metric: "28%", label: "Burnout Reduction" },
      { metric: "15 Hours", label: "Manager Review Time Saved" },
      { metric: "94%", label: "Employee Survey Rating" }
    ],
    specs: [
      { label: "Integrations", value: "GitHub, Slack, Jira, Workday, BambooHR" },
      { label: "Privacy Compliance", value: "Anonymized aggregation mode" },
      { label: "Scalability Limit", value: "Up to 50,000 employees" },
      { label: "Update Frequency", value: "Hourly / Daily dashboard sync" }
    ]
  },
  iwac: {
    id: "iwac",
    name: "iWac.ai",
    category: "Security",
    tagline: "Intelligent Workplace Access & Perimeter Control",
    description: "iWac.ai transforms physical corporate security with high-speed biometric facial access, contactless visitor kiosks, and automated perimeter threat detection alerts.",
    image: "/images/product/iwac.jpg",
    fallback: "https://www.enfycon.com/images/product/iwac.jpg",
    badge: "Physical Security",
    gradient: "from-slate-700 to-gray-900",
    features: [
      { title: "Facial Access Controls", desc: "Sub-200ms verification speed at secure turnstiles, matching local secure vectors.", icon: Cpu },
      { title: "Visitor Kiosk Manager", desc: "Automates NDA signing, temporary badge print, and host notifications.", icon: Users },
      { title: "Threat Zone Detection", desc: "Uses CCTV video feeds to flag unauthorized entry in restricted areas.", icon: Shield },
      { title: "Multi-Location Command", desc: "Centralized dashboard for tracking status and credentials across global offices.", icon: Globe }
    ],
    whyChoose: [
      "Eliminates badge sharing risk with biometric double-factor security.",
      "Reduces physical lobby waiting times for visitors by 90%.",
      "Connects to legacy CCTV systems without requiring expensive sensor refits.",
      "Guarantees local database storage option for strict state privacy regulations."
    ],
    techStack: ["C++", "Python", "OpenCV", "CUDA", "TensorRT", "SQLite Edge"],
    businessImpact: [
      { metric: "99.98%", label: "Recognition Rate" },
      { metric: "90%", label: "Lobby Waiting Cut" },
      { metric: "< 200ms", label: "Face Recognition Speed" }
    ],
    specs: [
      { label: "Hardware Support", value: "IP Cameras (RTSP), Raspberry Pi, Nvidia Jetson" },
      { label: "Biometric Policy", value: "Local encryption, non-retrievable vectors" },
      { label: "Alert Latency", value: "Immediate push alerts (< 1 sec)" },
      { label: "Scale Limits", value: "Supports up to 2,000 cameras/hub" }
    ]
  }
};

export default function ProductDetailPage() {
  const [match, params] = useRoute("/products/:id");
  const [, navigate] = useLocation();
  const productId = params?.id || "";
  const product = productDetails[productId];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: (data) => {
      if (data.success) {
        toast.success("Demo request submitted! We will contact you shortly.");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        toast.error(data.error || "Submission failed.");
      }
    },
    onError: (error: any) => {
      toast.error(error.message || "An error occurred.");
    },
  });

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, [productId]);

  // Set default message when product changes
  useEffect(() => {
    if (product) {
      setFormData(prev => ({
        ...prev,
        message: `Hello Enfycon Team, I would like to schedule a product demonstration for ${product.name} and discuss our enterprise requirements.`
      }));
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#080C1E] flex flex-col justify-between">
        <Navbar />
        <div className="container py-32 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
          <p className="text-slate-400 mb-8">The requested product could not be located in our ecosystem.</p>
          <Button onClick={() => navigate("/products")} className="bg-indigo-600 hover:bg-indigo-500">
            Back to Products
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    contactMutation.mutate(formData);
  };

  const shareProduct = () => {
    if (navigator.share) {
      navigator.share({
        title: `${product.name} - Enfycon`,
        text: product.tagline,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Product link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-[#080C1E] relative overflow-hidden font-sans text-white">
      {/* Background Glows */}
      <div className={`absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none`} />
      <div className="absolute top-[35%] right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <Navbar />

      <PageHeader
        title={product.name}
        subtitle={product.tagline}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name, href: `/products/${product.id}` }
        ]}
      />

      {/* Main Content Layout */}
      <section className="py-16 relative z-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Side - Details, Features, & Impact */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Product Card Showcase */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
              >
                <div className={`absolute -right-20 -top-20 w-60 h-60 bg-gradient-to-br ${product.gradient} opacity-20 rounded-full blur-3xl pointer-events-none`} />
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <span className={`px-4 py-1 rounded-full bg-gradient-to-r ${product.gradient} text-white text-xs font-extrabold uppercase tracking-widest`}>
                    {product.badge}
                  </span>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={shareProduct}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                      title="Share Product"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider bg-slate-800/50 px-2.5 py-1.5 rounded-md border border-slate-700/50">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7">
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Product Overview</h2>
                    <p className="text-slate-300 leading-relaxed font-light mb-6">
                      {product.description}
                    </p>

                    {/* Business Impact Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
                      {product.businessImpact.map((item, idx) => (
                        <div key={idx} className="text-center md:text-left">
                          <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                            {item.metric}
                          </p>
                          <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-5">
                    <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[4/3] group shadow-xl">
                      <div className="absolute inset-0 bg-indigo-600/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = product.fallback;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Extended Features Grid */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold">Technical Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.features.map((feat, idx) => {
                    const Icon = feat.icon;
                    return (
                      <motion.div 
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-lg hover:border-indigo-500/30 transition-all duration-300 group"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} text-white flex items-center justify-center mb-4 shadow-md`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {feat.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed font-light">
                          {feat.desc}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Why Choose Section */}
              <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  Why Choose {product.name}
                </h2>
                <ul className="grid grid-cols-1 gap-4">
                  {product.whyChoose.map((why, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-slate-300 text-sm md:text-base font-light">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{why}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack & Specs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {product.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-slate-950/60 border border-slate-800 text-slate-300 rounded-xl text-xs font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-purple-400" />
                    Specifications
                  </h3>
                  <div className="space-y-3.5 text-xs">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between items-center py-1.5 border-b border-slate-800/60">
                        <span className="text-slate-500 font-medium uppercase tracking-wider">{spec.label}</span>
                        <span className="text-slate-300 font-semibold text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side - Request Demo Contact Form & Quick Channels */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Contextual Contact Form */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 text-slate-900 shadow-2xl relative">
                <h3 className="text-xl font-extrabold mb-1">Request {product.name} Demo</h3>
                <p className="text-slate-500 text-xs mb-6">Talk directly with a product deployment specialist.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-950 text-sm focus:outline-none focus:border-indigo-600 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-950 text-sm focus:outline-none focus:border-indigo-600 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Enterprise Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-955 text-sm focus:outline-none focus:border-indigo-600 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-955 text-sm focus:outline-none focus:border-indigo-600 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className={`w-full bg-gradient-to-r ${product.gradient} text-white py-3.5 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98] disabled:opacity-50`}
                  >
                    {contactMutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Schedule Demo</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Instant Communication Channels Widget */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-4">
                <h4 className="text-sm font-extrabold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-cyan-400" />
                  Instant Support Channels
                </h4>
                
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/12012017078?text=Hello%20Enfycon,%20I'd%20like%20to%20learn%20more%20about%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/20 hover:border-emerald-500/40 text-emerald-400 font-bold text-sm transition-all group"
                  >
                    <span className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 fill-emerald-400 text-emerald-600" />
                      <span>WhatsApp Discussion</span>
                    </span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href="https://m.me/enfycon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 hover:border-blue-500/40 text-blue-400 font-bold text-sm transition-all group"
                  >
                    <span className="flex items-center gap-3">
                      <Facebook className="w-5 h-5 text-blue-500" />
                      <span>Messenger Chat</span>
                    </span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href="tel:+12012017078"
                    className="flex items-center justify-between p-4 rounded-2xl bg-cyan-600/10 hover:bg-cyan-600/20 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400 font-bold text-sm transition-all group"
                  >
                    <span className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <span>Direct Hotline</span>
                    </span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="py-12 border-t border-slate-800/80 bg-slate-950/30">
        <div className="container flex justify-between items-center">
          <a
            href="/products"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Product Suite</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
