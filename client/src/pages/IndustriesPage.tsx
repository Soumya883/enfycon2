import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

const industries = [
  {
    id: "banking",
    title: "Banking",
    subtitle: "Digital Banking Transformation",
    img: "https://www.enfycon.com/_next/image?url=%2Fimages%2Findustries%2Fbanking%2Fdigital-banking-transformation.jpg&w=828&q=85",
    gradient: "from-blue-600 to-indigo-700",
    accentColor: "text-blue-400",
    borderColor: "hover:border-blue-500/50",
    glowColor: "rgba(59,130,246,0.3)",
    description: "Redefine banking with AI-powered fraud detection, real-time compliance automation, and deeply personalized customer journeys that drive loyalty and revenue.",
    capabilities: ["AI Fraud Detection", "Regulatory Compliance", "Core Banking APIs", "Mobile Banking", "Open Banking"],
    stat: { value: "40%", label: "Fraud Reduction" },
  },
  {
    id: "government",
    title: "Government",
    subtitle: "Smart Governance & e-Gov",
    img: "https://www.enfycon.com/_next/image?url=%2Fimages%2Findustries%2Fgovernment%2Fgovt.jpeg&w=828&q=85",
    gradient: "from-purple-600 to-violet-700",
    accentColor: "text-purple-400",
    borderColor: "hover:border-purple-500/50",
    glowColor: "rgba(139,92,246,0.3)",
    description: "Modernize public services with secure, scalable e-government platforms, smart city infrastructure, and data-driven policy intelligence.",
    capabilities: ["e-Governance Portals", "Smart City IoT", "Citizen Services AI", "Digital Identity", "Cybersecurity"],
    stat: { value: "70%", label: "Faster Service Delivery" },
  },
  {
    id: "finance",
    title: "Finance",
    subtitle: "FinTech & Capital Markets",
    img: "https://www.enfycon.com/_next/image?url=%2Fimages%2Findustries%2Ffinance%2Fmain-hero%201.jpg&w=828&q=85",
    gradient: "from-emerald-600 to-teal-700",
    accentColor: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    glowColor: "rgba(16,185,129,0.3)",
    description: "Power capital markets, insurtech, and wealth management with advanced quantitative AI, automated trading systems, and real-time risk analytics.",
    capabilities: ["Algorithmic Trading", "Risk Analytics", "InsurTech AI", "Portfolio Management", "Payment Systems"],
    stat: { value: "60%", label: "Risk Mitigation" },
  },
  {
    id: "healthcare",
    title: "Healthcare",
    subtitle: "AI-Driven Patient Care",
    img: "https://www.enfycon.com/_next/image?url=%2Fimages%2Findustries%2Fhealth-care.jpg&w=828&q=85",
    gradient: "from-rose-600 to-pink-700",
    accentColor: "text-rose-400",
    borderColor: "hover:border-rose-500/50",
    glowColor: "rgba(244,63,94,0.3)",
    description: "Transform patient outcomes with HIPAA-compliant AI diagnostics, predictive analytics, telehealth platforms, and intelligent EHR systems.",
    capabilities: ["AI Diagnostics", "Telehealth Platforms", "EHR Integration", "HIPAA Compliance", "Predictive Health"],
    stat: { value: "35%", label: "Better Patient Outcomes" },
  },
  {
    id: "human-resource",
    title: "Human Resources",
    subtitle: "Workforce Intelligence",
    img: "https://www.enfycon.com/_next/image?url=%2Fimages%2Findustries%2Fhuman-resource.jpg&w=828&q=85",
    gradient: "from-indigo-600 to-cyan-700",
    accentColor: "text-indigo-400",
    borderColor: "hover:border-indigo-500/50",
    glowColor: "rgba(79,70,229,0.3)",
    description: "Revolutionize talent acquisition and workforce management with AI-driven recruitment, predictive attrition models, and automated HR processes.",
    capabilities: ["AI Recruitment", "Attrition Prediction", "HRMS Integration", "Workforce Analytics", "Learning & Dev"],
    stat: { value: "50%", label: "Hiring Time Reduction" },
  },
  {
    id: "legal",
    title: "Legal",
    subtitle: "LegalTech & Compliance",
    img: "https://www.enfycon.com/_next/image?url=%2Fimages%2Findustries%2Flegal.jpg&w=828&q=85",
    gradient: "from-amber-600 to-orange-700",
    accentColor: "text-amber-400",
    borderColor: "hover:border-amber-500/50",
    glowColor: "rgba(245,158,11,0.3)",
    description: "Streamline legal operations with NLP-powered contract analysis, automated compliance monitoring, and intelligent legal research platforms.",
    capabilities: ["Contract Intelligence", "Legal NLP", "Compliance Monitoring", "eDiscovery AI", "Document Automation"],
    stat: { value: "80%", label: "Contract Review Speed" },
  },
  {
    id: "supply-chain-logistics",
    title: "Supply Chain",
    subtitle: "Smart Logistics & SCM",
    img: "https://www.enfycon.com/_next/image?url=%2Fimages%2Findustries%2Fsupply-chain.jpg&w=828&q=85",
    gradient: "from-teal-600 to-emerald-700",
    accentColor: "text-teal-400",
    borderColor: "hover:border-teal-500/50",
    glowColor: "rgba(20,184,166,0.3)",
    description: "Build resilient, intelligent supply chains with real-time IoT visibility, demand forecasting AI, and automated logistics optimization.",
    capabilities: ["IoT Tracking", "Demand Forecasting", "Route Optimization", "Inventory AI", "Supplier Analytics"],
    stat: { value: "25%", label: "Cost Reduction" },
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    subtitle: "Industry 4.0 & IoT",
    img: "https://www.enfycon.com/_next/image?url=%2Fimages%2Findustries%2Fmanufacturing.jpg&w=828&q=85",
    gradient: "from-orange-600 to-red-700",
    accentColor: "text-orange-400",
    borderColor: "hover:border-orange-500/50",
    glowColor: "rgba(234,88,12,0.3)",
    description: "Accelerate Industry 4.0 adoption with smart factory platforms, predictive maintenance AI, computer vision quality control, and digital twins.",
    capabilities: ["Predictive Maintenance", "Digital Twins", "Quality Control AI", "Smart Factory IoT", "OEE Optimization"],
    stat: { value: "45%", label: "Downtime Reduction" },
  },
  {
    id: "tourism",
    title: "Tourism",
    subtitle: "Smart Travel Experiences",
    img: "https://www.enfycon.com/_next/image?url=%2Fimages%2Findustries%2Ftourism%2Fbanner2.jpg&w=828&q=85",
    gradient: "from-cyan-600 to-blue-700",
    accentColor: "text-cyan-400",
    borderColor: "hover:border-cyan-500/50",
    glowColor: "rgba(6,182,212,0.3)",
    description: "Redefine travel with AI-powered personalization, dynamic pricing engines, smart booking platforms, and immersive destination experiences.",
    capabilities: ["Personalization AI", "Dynamic Pricing", "Booking Platforms", "Chatbot Concierge", "Review Analytics"],
    stat: { value: "55%", label: "Booking Conversion" },
  },
];

export default function IndustriesPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#080C1E] font-sans relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-indigo-600/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[150px] pointer-events-none" />

      <Navbar />

      <PageHeader
        title="Industries We Transform"
        subtitle="Deep domain expertise combined with cutting-edge AI — delivering measurable impact across 9 critical industries worldwide."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }]}
      />

      {/* Stats bar */}
      <section className="py-10 bg-slate-900/60 border-y border-slate-800/60 backdrop-blur-md relative z-10">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-4">
            {[
              { value: "9+", label: "Industries Served" },
              { value: "200+", label: "Enterprise Clients" },
              { value: "500+", label: "Projects Delivered" },
              { value: "15+", label: "Countries" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{s.value}</p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-28 relative z-10">
        <div className="container">

          {/* Top highlight — first 3 big cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {industries.slice(0, 3).map((ind, i) => (
              <IndustryCard key={ind.id} ind={ind} big />
            ))}
          </div>

          {/* Middle row — next 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {industries.slice(3, 6).map((ind) => (
              <IndustryCard key={ind.id} ind={ind} big />
            ))}
          </div>

          {/* Bottom row — remaining 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.slice(6, 9).map((ind) => (
              <IndustryCard key={ind.id} ind={ind} big />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border border-indigo-800/40 p-12 md:p-16 text-center shadow-[0_40px_100px_rgba(79,70,229,0.2)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.15),transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5" /> Don't See Your Industry?
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                We Work With <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Any Industry</span>
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 font-light">
                Our AI and technology expertise spans far beyond these sectors. Let's discuss how we can transform your business.
              </p>
              <a
                href="/contact-us"
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white px-10 py-4 rounded-2xl font-extrabold text-sm hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
              >
                Start a Conversation <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function IndustryCard({ ind, big }: { ind: typeof industries[number]; big?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      id={ind.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative overflow-hidden rounded-[24px] border border-slate-800/80 ${ind.borderColor} transition-all duration-500 cursor-pointer ${big ? "h-80" : "h-64"}`}
      style={{ boxShadow: hovered ? `0 20px 60px ${ind.glowColor}` : "0 8px 30px rgba(0,0,0,0.4)" }}
    >
      {/* Background image */}
      <img
        src={ind.img}
        alt={ind.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(ind.title)}&background=1e1b4b&color=fff&size=800`; }}
      />

      {/* Gradient overlay — always visible */}
      <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-slate-950/10 group-hover:from-slate-950/98 group-hover:via-slate-950/80 transition-all duration-500`} />

      {/* Colored top accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${ind.gradient}`} />

      {/* Default content (always visible at bottom) */}
      <div className="absolute bottom-0 left-0 right-0 p-7 transition-all duration-500">
        <p className={`text-xs font-extrabold uppercase tracking-widest mb-2 ${ind.accentColor}`}>{ind.subtitle}</p>
        <h3 className="text-2xl font-black text-white mb-3">{ind.title}</h3>

        {/* Stat pill */}
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${ind.gradient} text-white text-xs font-extrabold`}>
          <span>{ind.stat.value}</span>
          <span className="opacity-80">{ind.stat.label}</span>
        </div>

        {/* Expanded content on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 10, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-slate-300 text-sm leading-relaxed mt-4 mb-4">{ind.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {ind.capabilities.map((cap, ci) => (
                  <span key={ci} className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" /> {cap}
                  </span>
                ))}
              </div>
              <a href="/contact-us" className={`inline-flex items-center gap-2 text-xs font-extrabold ${ind.accentColor} hover:gap-3 transition-all duration-200`}>
                Explore Solutions <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
