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
      {
        title: "AI & Agentic Solutions Service",
        description: "Autonomous AI systems that independently execute complex enterprise workflows.",
        image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fservice%2Fai-agentic-solutions.jpg&w=640&q=85"
      },
      {
        title: "AI-First Platforms Engineering",
        description: "Cloud-native platforms designed from the ground up with AI at their core.",
        image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fservice%2Fai-first-platforms.jpg&w=640&q=85"
      },
      {
        title: "Personalized Customer Engagement",
        description: "AI-powered personalization engines for enhanced customer experiences.",
        image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fservice%2Fpersonalized-customer-engagement.jpg&w=640&q=85"
      },
    ],
  },
  {
    id: "it-staffing",
    icon: Users,
    title: "IT Professional Staffing",
    description: "Connect with top-tier IT talent to power your digital transformation. Skilled professionals across all technology domains.",
    color: "from-emerald-500 to-teal-600",
    services: [
      {
        title: "US IT Staffing & Technology Hiring",
        description: "End-to-end recruitment pipeline for US-based technology roles.",
        image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fservice%2Fus-it-staffing.png&w=640&q=85"
      },
      {
        title: "Domestic IT Staffing",
        description: "Onshore talent acquisition with rapid deployment capabilities.",
        image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fservice%2Fdomestic-it-staffing.png&w=640&q=85"
      },
      {
        title: "Offshore Dedicated Teams",
        description: "Build dedicated development teams with offshore expertise.",
        image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fservice%2Foffshore-dedicated-teams.png&w=640&q=85"
      },
    ],
  },
  {
    id: "data-analytics",
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Unlock the power of your data with advanced analytics solutions. Transform raw data into actionable insights.",
    color: "from-purple-500 to-violet-600",
    services: [
      {
        title: "Enterprise Modernization & Cloud",
        description: "Migrate legacy systems to cloud-native architectures with zero downtime.",
        image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fservice%2Fenterprise-modernization..jpg&w=640&q=85"
      },
      {
        title: "Advanced Analytics & Intelligence",
        description: "Predictive modeling, BI dashboards, and real-time analytics.",
        image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fservice%2Fadvanced-analytics.jpg&w=640&q=85"
      },
      {
        title: "Data Engineering & Pipelines",
        description: "Robust data pipelines and automated ETL processes at scale.",
        image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fservice%2Fdata-engineering.jpg&w=640&q=85"
      },
    ],
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Protect your digital assets with enterprise-grade security solutions. Robust defense strategies and compliance frameworks.",
    color: "from-red-500 to-orange-600",
    services: [
      {
        title: "Security Assessment & Audits",
        description: "Penetration testing, vulnerability scanning, and security audits.",
        image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fservice%2Fsecurity-assessment.jpg&w=640&q=85"
      },
      {
        title: "Operational Security Guidelines",
        description: "Implementation of NIST and ISO 27001 security frameworks.",
        image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fservice%2Foperational-security.jpg&w=640&q=85"
      },
      {
        title: "Regulatory Compliance",
        description: "HIPAA, SOC2, GDPR, and industry-specific compliance solutions.",
        image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fservice%2Fregulatory-compliance.jpg&w=640&q=85"
      },
    ],
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing Services",
    description: "Build high-impact, measurable, and scalable growth engines. Performance-focused digital strategies.",
    color: "from-pink-500 to-rose-600",
    services: [
      {
        title: "Social Media Marketing",
        description: "Strategic social media campaigns across all major platforms.",
        image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fservice%2Fsocial-media-marketing.jpg&w=640&q=85"
      },
      {
        title: "Performance Marketing",
        description: "ROI-driven paid advertising campaigns with precise targeting.",
        image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fservice%2Fperformance-marketing.jpg&w=640&q=85"
      },
      {
        title: "SEO & Content Strategy",
        description: "Organic search optimization and content marketing excellence.",
        image: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fservice%2Fseo-marketing.jpg&w=640&q=85"
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Graphic Decorator */}
      <div
        className="absolute top-0 right-0 w-full h-[600px] pointer-events-none opacity-5 bg-no-repeat bg-right-top z-0"
        style={{ backgroundImage: "url('https://www.enfycon.com/images/bg/map.svg')" }}
      />
      <div
        className="absolute top-60 left-0 w-96 h-96 pointer-events-none opacity-10 bg-no-repeat z-0"
        style={{ backgroundImage: "url('https://www.enfycon.com/images/shape/pattern-2.svg')" }}
      />

      <Navbar />
      <PageHeader
        title="Services"
        subtitle="Innovative solutions for modern enterprises. From AI to cybersecurity, we deliver comprehensive technology services."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]}
      />

      {/* Service Categories */}
      <section className="py-24 section-light relative z-10">
        <div className="container">
          {serviceCategories.map((category) => (
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
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg shrink-0`}>
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
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
                  >
                    {/* Service Image Header */}
                    <div className="h-48 overflow-hidden relative bg-gray-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <a
                        href="/contact-us"
                        className="mt-6 text-primary text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                      >
                        Explore Service <ArrowRight className="w-4 h-4" />
                      </a>
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
