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
    services: [
      { title: "AI & Agentic Solutions Service", description: "Autonomous AI systems that independently execute complex enterprise workflows." },
      { title: "AI-First Platforms Engineering", description: "Cloud-native platforms designed from the ground up with AI at their core." },
      { title: "Personalized Customer Engagement", description: "AI-powered personalization engines for enhanced customer experiences." },
    ],
  },
  {
    id: "it-staffing",
    icon: Users,
    title: "IT Professional Staffing",
    description: "Connect with top-tier IT talent to power your digital transformation. Skilled professionals across all technology domains.",
    color: "from-emerald-500 to-teal-600",
    services: [
      { title: "Technology Hiring Solutions", description: "End-to-end recruitment pipeline for US-based technology roles." },
      { title: "Domestic IT Staffing", description: "Onshore talent acquisition with rapid deployment capabilities." },
      { title: "Offshore Dedicated Teams", description: "Build dedicated development teams with offshore expertise." },
    ],
  },
  {
    id: "data-analytics",
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Unlock the power of your data with advanced analytics solutions. Transform raw data into actionable insights.",
    color: "from-purple-500 to-violet-600",
    services: [
      { title: "Data, Cloud & Enterprise Modernization", description: "Migrate legacy systems to cloud-native architectures with zero downtime." },
      { title: "Advanced Analytics & Business Intelligence", description: "Predictive modeling, BI dashboards, and real-time analytics." },
      { title: "Data Engineering & Pipeline Automation", description: "Robust data pipelines and automated ETL processes at scale." },
    ],
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Protect your digital assets with enterprise-grade security solutions. Robust defense strategies and compliance frameworks.",
    color: "from-red-500 to-orange-600",
    services: [
      { title: "Comprehensive Security Assessment", description: "Penetration testing, vulnerability scanning, and security audits." },
      { title: "Operational Security Guidelines", description: "Implementation of NIST and ISO 27001 security frameworks." },
      { title: "Regulatory Compliance", description: "HIPAA, SOC2, GDPR, and industry-specific compliance solutions." },
    ],
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing Services",
    description: "Build high-impact, measurable, and scalable growth engines. Performance-focused digital strategies.",
    color: "from-pink-500 to-rose-600",
    services: [
      { title: "Social Media Marketing", description: "Strategic social media campaigns across all major platforms." },
      { title: "Performance Marketing", description: "ROI-driven paid advertising campaigns with precise targeting." },
      { title: "SEO & Content Strategy", description: "Organic search optimization and content marketing excellence." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Services"
        subtitle="Innovative solutions for modern enterprises. From AI to cybersecurity, we deliver comprehensive technology services."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]}
      />

      {/* Service Categories */}
      <section className="py-24 section-light">
        <div className="container">
          {serviceCategories.map((category, ci) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 last:mb-0"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{category.title}</h2>
                  <p className="text-muted-foreground text-sm mt-1 max-w-2xl">{category.description}</p>
                </div>
              </div>

              {/* Service Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.services.map((service, si) => (
                  <motion.div
                    key={si}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: si * 0.1 }}
                    className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm card-hover group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} opacity-10 flex items-center justify-center mb-5 group-hover:opacity-20 transition-opacity`}>
                      <ArrowRight className="w-5 h-5 text-gray-900" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <button className="mt-5 text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
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
