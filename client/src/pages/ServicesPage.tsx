import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { ArrowRight, Brain, Users, BarChart3, Shield, Megaphone } from "lucide-react";

const serviceCategories = [
  {
    id: "ai-services",
    icon: Brain,
    title: "Custom Professional AI Services",
    description: "Transform your business with cutting-edge AI solutions. We harness machine learning and emerging technologies to build intelligent systems.",
    color: "from-blue-500 to-indigo-600",
    glow: "rgba(79,70,229,0.25)",
    services: [
      {
        title: "AI & Agentic Solutions Service",
        description: "Autonomous AI systems that independently execute complex enterprise workflows.",
        image: "/images/service/ai-agentic-solutions.jpg",
        fallback: "https://www.enfycon.com/images/service/ai-agentic-solutions.jpg"
      },
      {
        title: "AI-First Platforms Engineering",
        description: "Cloud-native platforms designed from the ground up with AI at their core.",
        image: "/images/service/ai-first-platforms.jpg",
        fallback: "https://www.enfycon.com/images/service/ai-first-platforms.jpg"
      },
      {
        title: "Personalized Customer Engagement",
        description: "AI-powered personalization engines for enhanced customer experiences.",
        image: "/images/service/personalized-customer-engagement.jpg",
        fallback: "https://www.enfycon.com/images/service/personalized-customer-engagement.jpg"
      },
    ],
  },
  {
    id: "it-staffing",
    icon: Users,
    title: "IT Professional Staffing",
    description: "Connect with top-tier IT talent to power your digital transformation. Skilled professionals across all technology domains.",
    color: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.25)",
    services: [
      {
        title: "US IT Staffing & Technology Hiring",
        description: "End-to-end recruitment pipeline for US-based technology roles.",
        image: "/images/service/us-it-staffing.png",
        fallback: "https://www.enfycon.com/images/service/us-it-staffing.png"
      },
      {
        title: "Domestic IT Staffing",
        description: "Onshore talent acquisition with rapid deployment capabilities.",
        image: "/images/service/domestic-it-staffing.png",
        fallback: "https://www.enfycon.com/images/service/domestic-it-staffing.png"
      },
      {
        title: "Offshore Dedicated Teams",
        description: "Build dedicated development teams with offshore expertise.",
        image: "/images/service/offshore-dedicated-teams.png",
        fallback: "https://www.enfycon.com/images/service/offshore-dedicated-teams.png"
      },
    ],
  },
  {
    id: "data-analytics",
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Unlock the power of your data with advanced analytics solutions. Transform raw data into actionable insights.",
    color: "from-purple-500 to-fuchsia-500",
    glow: "rgba(168,85,247,0.25)",
    services: [
      {
        title: "Enterprise Modernization & Cloud",
        description: "Migrate legacy systems to cloud-native architectures with zero downtime.",
        image: "/images/service/enterprise-modernization.jpg",
        fallback: "https://www.enfycon.com/images/service/enterprise-modernization.jpg"
      },
      {
        title: "Advanced Analytics & Intelligence",
        description: "Predictive modeling, BI dashboards, and real-time analytics.",
        image: "/images/service/advanced-analytics.jpg",
        fallback: "https://www.enfycon.com/images/service/advanced-analytics.jpg"
      },
      {
        title: "Data Engineering & Pipelines",
        description: "Robust data pipelines and automated ETL processes at scale.",
        image: "/images/service/data-engineering.jpg",
        fallback: "https://www.enfycon.com/images/service/data-engineering.jpg"
      },
    ],
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Protect your digital assets with enterprise-grade security solutions. Robust defense strategies and compliance frameworks.",
    color: "from-rose-500 to-orange-500",
    glow: "rgba(244,63,94,0.25)",
    services: [
      {
        title: "Security Assessment & Audits",
        description: "Penetration testing, vulnerability scanning, and security audits.",
        image: "/images/service/security-assessment.jpg",
        fallback: "https://www.enfycon.com/images/service/security-assessment.jpg"
      },
      {
        title: "Operational Security Guidelines",
        description: "Implementation of NIST and ISO 27001 security frameworks.",
        image: "/images/service/operational-security.jpg",
        fallback: "https://www.enfycon.com/images/service/operational-security.jpg"
      },
      {
        title: "Regulatory Compliance",
        description: "HIPAA, SOC2, GDPR, and industry-specific compliance solutions.",
        image: "/images/service/regulatory-compliance.jpg",
        fallback: "https://www.enfycon.com/images/service/regulatory-compliance.jpg"
      },
    ],
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing Services",
    description: "Build high-impact, measurable, and scalable growth engines. Performance-focused digital strategies.",
    color: "from-pink-500 to-rose-400",
    glow: "rgba(236,72,153,0.25)",
    services: [
      {
        title: "Social Media Marketing",
        description: "Strategic social media campaigns across all major platforms.",
        image: "/images/service/social-media-marketing.jpg",
        fallback: "https://www.enfycon.com/images/service/social-media-marketing.jpg"
      },
      {
        title: "Performance Marketing",
        description: "ROI-driven paid advertising campaigns with precise targeting.",
        image: "/images/service/performance-marketing.jpg",
        fallback: "https://www.enfycon.com/images/service/performance-marketing.jpg"
      },
      {
        title: "SEO & Content Strategy",
        description: "Organic search optimization and content marketing excellence.",
        image: "/images/service/seo-marketing.jpg",
        fallback: "https://www.enfycon.com/images/service/seo-marketing.jpg"
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#080C1E] relative overflow-hidden font-sans">
      {/* Background Decorators */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <Navbar />
      
      <PageHeader
        title="Our Services"
        subtitle="Innovative solutions for modern enterprises. From autonomous AI to cybersecurity, we deliver comprehensive, mission-critical technology services."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]}
      />

      {/* Service Categories */}
      <section className="py-24 bg-transparent relative z-10">
        <div className="container">
          {serviceCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-24 last:mb-0"
            >
              {/* Category Header */}
              <div className="flex items-center gap-6 mb-12">
                <div className={`w-16 h-16 rounded-[16px] bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg shrink-0 relative overflow-hidden group`}>
                  <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  <category.icon className="w-8 h-8 text-white relative z-10" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{category.title}</h2>
                  <p className="text-slate-300 text-base md:text-lg mt-2 max-w-2xl font-light">{category.description}</p>
                </div>
              </div>

              {/* Service Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, si) => (
                  <motion.div
                    key={si}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: si * 0.1 }}
                    whileHover={{ y: -10, boxShadow: `0 30px 60px ${category.glow}` }}
                    className="bg-slate-900/60 backdrop-blur-xl rounded-[20px] border border-slate-800 overflow-hidden transition-all duration-500 flex flex-col group cursor-pointer hover:border-slate-600 relative"
                  >
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: category.glow.replace('0.25', '1') }} />

                    {/* Service Image Header */}
                    <div className="h-56 overflow-hidden relative bg-slate-800">
                      <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = service.fallback;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col justify-between relative z-10">
                      <div>
                        <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-300 text-sm lg:text-base leading-relaxed font-light">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-slate-800/80">
                        <a
                          href="/contact-us"
                          className="inline-flex items-center gap-2 text-sm font-extrabold text-cyan-400 group-hover:text-cyan-300 transition-colors group/link"
                        >
                          <span className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-cyan-400 after:scale-x-0 group-hover/link:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Explore Service</span>
                          <motion.span
                            className="inline-block"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          >
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                          </motion.span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
