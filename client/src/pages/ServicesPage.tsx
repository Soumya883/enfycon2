import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { ArrowRight, Brain, Users, BarChart3, Shield, Megaphone, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";

const serviceCategories = [
  {
    id: "ai-services",
    icon: Brain,
    title: "Custom Professional AI Services",
    badge: "AI & Agentic",
    description: "Transform your business with cutting-edge AI solutions. We harness machine learning and emerging technologies to build intelligent systems.",
    color: "from-blue-500 to-indigo-600",
    borderHover: "hover:border-indigo-500/50",
    glow: "rgba(79,70,229,0.25)",
    accentBg: "bg-indigo-500/10",
    accentText: "text-indigo-400",
    services: [
      { title: "AI & Agentic Solutions Service", description: "Autonomous AI systems that independently execute complex enterprise workflows.", image: "/images/service/ai-agentic-solutions.jpg", fallback: "https://www.enfycon.com/images/service/ai-agentic-solutions.jpg", tags: ["LLM", "AutoAgent", "Enterprise"] },
      { title: "AI-First Platforms Engineering", description: "Cloud-native platforms designed from the ground up with AI at their core.", image: "/images/service/ai-first-platforms.jpg", fallback: "https://www.enfycon.com/images/service/ai-first-platforms.jpg", tags: ["Cloud", "MLOps", "APIs"] },
      { title: "Personalized Customer Engagement", description: "AI-powered personalization engines for enhanced customer experiences.", image: "/images/service/personalized-customer-engagement.jpg", fallback: "https://www.enfycon.com/images/service/personalized-customer-engagement.jpg", tags: ["CX", "Recommendation", "NLP"] },
    ],
  },
  {
    id: "it-staffing",
    icon: Users,
    title: "IT Professional Staffing",
    badge: "Staffing & Talent",
    description: "Connect with top-tier IT talent to power your digital transformation. Skilled professionals across all technology domains.",
    color: "from-emerald-500 to-teal-500",
    borderHover: "hover:border-emerald-500/50",
    glow: "rgba(16,185,129,0.25)",
    accentBg: "bg-emerald-500/10",
    accentText: "text-emerald-400",
    services: [
      { title: "US IT Staffing & Technology Hiring", description: "End-to-end recruitment pipeline for US-based technology roles.", image: "/images/service/us-it-staffing.png", fallback: "https://www.enfycon.com/images/service/us-it-staffing.png", tags: ["H1B", "C2C", "W2"] },
      { title: "Domestic IT Staffing", description: "Onshore talent acquisition with rapid deployment capabilities.", image: "/images/service/domestic-it-staffing.png", fallback: "https://www.enfycon.com/images/service/domestic-it-staffing.png", tags: ["Full-time", "Contract", "Hybrid"] },
      { title: "Offshore Dedicated Teams", description: "Build dedicated development teams with offshore expertise.", image: "/images/service/offshore-dedicated-teams.png", fallback: "https://www.enfycon.com/images/service/offshore-dedicated-teams.png", tags: ["GCC", "Cost-effective", "Scale"] },
    ],
  },
  {
    id: "data-analytics",
    icon: BarChart3,
    title: "Data & Analytics",
    badge: "Data Intelligence",
    description: "Unlock the power of your data with advanced analytics solutions. Transform raw data into actionable insights that drive decisions.",
    color: "from-purple-500 to-fuchsia-500",
    borderHover: "hover:border-purple-500/50",
    glow: "rgba(168,85,247,0.25)",
    accentBg: "bg-purple-500/10",
    accentText: "text-purple-400",
    services: [
      { title: "Enterprise Modernization & Cloud", description: "Migrate legacy systems to cloud-native architectures with zero downtime.", image: "/images/service/enterprise-modernization.jpg", fallback: "https://www.enfycon.com/images/service/enterprise-modernization.jpg", tags: ["AWS", "Azure", "Migration"] },
      { title: "Advanced Analytics & Intelligence", description: "Predictive modeling, BI dashboards, and real-time analytics.", image: "/images/service/advanced-analytics.jpg", fallback: "https://www.enfycon.com/images/service/advanced-analytics.jpg", tags: ["Power BI", "ML", "Real-time"] },
      { title: "Data Engineering & Pipelines", description: "Robust data pipelines and automated ETL processes at scale.", image: "/images/service/data-engineering.jpg", fallback: "https://www.enfycon.com/images/service/data-engineering.jpg", tags: ["Spark", "Kafka", "dbt"] },
    ],
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity Services",
    badge: "Security",
    description: "Protect your digital assets with enterprise-grade security solutions. Robust defense strategies and compliance frameworks.",
    color: "from-rose-500 to-orange-500",
    borderHover: "hover:border-rose-500/50",
    glow: "rgba(244,63,94,0.25)",
    accentBg: "bg-rose-500/10",
    accentText: "text-rose-400",
    services: [
      { title: "Security Assessment & Audits", description: "Penetration testing, vulnerability scanning, and security audits.", image: "/images/service/security-assessment.jpg", fallback: "https://www.enfycon.com/images/service/security-assessment.jpg", tags: ["PenTest", "Vuln Scan", "DAST"] },
      { title: "Operational Security Guidelines", description: "Implementation of NIST and ISO 27001 security frameworks.", image: "/images/service/operational-security.jpg", fallback: "https://www.enfycon.com/images/service/operational-security.jpg", tags: ["ISO 27001", "NIST", "Zero Trust"] },
      { title: "Regulatory Compliance", description: "HIPAA, SOC2, GDPR, and industry-specific compliance solutions.", image: "/images/service/regulatory-compliance.jpg", fallback: "https://www.enfycon.com/images/service/regulatory-compliance.jpg", tags: ["HIPAA", "SOC2", "GDPR"] },
    ],
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing Services",
    badge: "Growth Marketing",
    description: "Build high-impact, measurable, and scalable growth engines. Performance-focused digital strategies that convert.",
    color: "from-pink-500 to-rose-400",
    borderHover: "hover:border-pink-500/50",
    glow: "rgba(236,72,153,0.25)",
    accentBg: "bg-pink-500/10",
    accentText: "text-pink-400",
    services: [
      { title: "Social Media Marketing", description: "Strategic social media campaigns across all major platforms.", image: "/images/service/social-media-marketing.jpg", fallback: "https://www.enfycon.com/images/service/social-media-marketing.jpg", tags: ["LinkedIn", "Meta", "X"] },
      { title: "Performance Marketing", description: "ROI-driven paid advertising campaigns with precise targeting.", image: "/images/service/performance-marketing.jpg", fallback: "https://www.enfycon.com/images/service/performance-marketing.jpg", tags: ["Google Ads", "PPC", "CRO"] },
      { title: "SEO & Content Strategy", description: "Organic search optimization and content marketing excellence.", image: "/images/service/seo-marketing.jpg", fallback: "https://www.enfycon.com/images/service/seo-marketing.jpg", tags: ["SEO", "Content", "Authority"] },
    ],
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Countries Served" },
  { value: "10+", label: "Years of Excellence" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#080C1E] relative overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-indigo-600/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/8 rounded-full blur-[160px] pointer-events-none" />

      <Navbar />

      <PageHeader
        title="Services That Drive Growth"
        subtitle="From autonomous AI to enterprise cybersecurity — we build the technology backbone that powers modern enterprises globally."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]}
      />

      {/* Stats strip */}
      <section className="py-12 bg-slate-900/60 border-y border-slate-800/60 backdrop-blur-md relative z-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="text-center">
                <p className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{s.value}</p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-28 relative z-10">
        <div className="container">
          {serviceCategories.map((category, ci) => (
            <motion.div
              key={category.id}
              id={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-32 last:mb-0"
            >
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-14">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-2xl shrink-0`} style={{ boxShadow: `0 20px 50px ${category.glow}` }}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${category.accentBg} border border-current/20 ${category.accentText} text-xs font-extrabold uppercase tracking-widest mb-3`}>
                    <Sparkles className="w-3 h-3" />{category.badge}
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">{category.title}</h2>
                  <p className="text-slate-300 text-base md:text-lg font-light max-w-3xl">{category.description}</p>
                </div>
                <a href="/contact-us" className={`shrink-0 hidden lg:flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${category.color} text-white text-sm font-extrabold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                  Get Started <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Service Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {category.services.map((service, si) => (
                  <motion.div
                    key={si}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: si * 0.1 }}
                    whileHover={{ y: -12 }}
                    className={`bg-slate-900/70 backdrop-blur-xl rounded-[24px] border border-slate-800/80 ${category.borderHover} overflow-hidden transition-all duration-500 flex flex-col group cursor-pointer`}
                    style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.3)" }}
                  >
                    {/* Image */}
                    <div className="h-52 overflow-hidden relative bg-slate-800">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = service.fallback; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                      {/* Tags */}
                      <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
                        {service.tags.map((tag, ti) => (
                          <span key={ti} className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/60 text-slate-300">{tag}</span>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className={`text-lg font-extrabold text-white mb-3 group-hover:${category.accentText} transition-colors leading-snug`}>{service.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                      </div>
                      <div className="mt-7 pt-5 border-t border-slate-800/60 flex items-center justify-between">
                        <a href="/contact-us" className={`inline-flex items-center gap-2 text-sm font-extrabold ${category.accentText} group/link`}>
                          <span>Explore Service</span>
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                        </a>
                        <CheckCircle2 className="w-4 h-4 text-slate-700 group-hover:text-emerald-500 transition-colors duration-300" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gradient-to-b from-slate-900/0 to-slate-900/80 relative z-10">
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
                <Sparkles className="w-3.5 h-3.5" /> Ready to Transform?
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                Let's Build Something<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Extraordinary Together</span>
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 font-light">
                Connect with our experts to explore how Enfycon's services can accelerate your digital transformation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/contact-us" className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white px-10 py-4 rounded-2xl font-extrabold text-sm hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                  Start Your Project <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="/portfolio" className="bg-white/5 border border-white/20 text-white px-10 py-4 rounded-2xl font-extrabold text-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                  View Portfolio
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
