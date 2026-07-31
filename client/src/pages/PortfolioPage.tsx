import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Globe, Code, Database, Brain, Lock, Users } from "lucide-react";
import { useLocation } from "wouter";
import PageHeader from "@/components/PageHeader";

const portfolioItems = [
  {
    title: "Enterprise AI Command Center",
    client: "Fortune 100 Manufacturer",
    category: "AI / Automation",
    description: "Built a centralized AI command center that orchestrates 50+ autonomous agents across supply chain, quality control, and customer service operations.",
    tech: ["Python", "TensorFlow", "Kubernetes", "AWS"],
    icon: Brain,
    color: "from-blue-500 to-indigo-500",
    stats: { agents: "50+", uptime: "99.99%", savings: "$12M/yr" },
  },
  {
    title: "Real-Time Fraud Detection Platform",
    client: "National Bank",
    category: "Cybersecurity / AI",
    description: "Developed an AI-powered fraud detection system processing 2M+ transactions daily with sub-second detection and automated response workflows.",
    tech: ["PyTorch", "Apache Kafka", "PostgreSQL", "Redis"],
    icon: Lock,
    color: "from-red-500 to-rose-500",
    stats: { transactions: "2M+/day", accuracy: "99.7%", response: "<500ms" },
  },
  {
    title: "Global Talent Acquisition Platform",
    client: "Series D SaaS Company",
    category: "IT Staffing / HR Tech",
    description: "Created an automated talent pipeline that sources, screens, and ranks candidates using AI matching algorithms, reducing time-to-hire by 70%.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI API"],
    icon: Users,
    color: "from-green-500 to-emerald-500",
    stats: { placements: "200+", reduction: "70%", satisfaction: "96%" },
  },
  {
    title: "Multi-Cloud Data Analytics Hub",
    client: "Healthcare Consortium",
    category: "Data & Analytics",
    description: "Architected a HIPAA-compliant data lake aggregating patient data across 30+ hospitals with real-time analytics and predictive health insights.",
    tech: ["AWS", "Snowflake", "Spark", "Tableau"],
    icon: Database,
    color: "from-purple-500 to-violet-500",
    stats: { hospitals: "30+", dataPoints: "500M+", insights: "Real-time" },
  },
  {
    title: "Smart Manufacturing IoT Platform",
    client: "Automotive Parts Supplier",
    category: "IoT / Industry 4.0",
    description: "Deployed 5,000+ IoT sensors across 8 manufacturing plants with edge computing and predictive maintenance reducing equipment downtime by 85%.",
    tech: ["IoT", "Edge Computing", "ML", "Azure"],
    icon: Code,
    color: "from-amber-500 to-orange-500",
    stats: { sensors: "5,000+", plants: "8", downtime: "-85%" },
  },
  {
    title: "Enterprise Digital Workplace",
    client: "Global Consulting Firm",
    category: "Enterprise Modernization",
    description: "Migrated legacy systems to a modern digital workplace platform serving 10,000+ employees across 25 countries with SSO, collaboration, and AI assistants.",
    tech: ["Azure AD", "Teams", "SharePoint", "Power Platform"],
    icon: Globe,
    color: "from-cyan-500 to-blue-500",
    stats: { employees: "10K+", countries: "25", adoption: "94%" },
  },
];

const categories = ["All", "AI / Automation", "Cybersecurity / AI", "IT Staffing / HR Tech", "Data & Analytics", "IoT / Industry 4.0", "Enterprise Modernization"];

export default function PortfolioPage() {
  const [location, navigate] = useLocation();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Our Portfolio"
        subtitle="Explore our portfolio of successful enterprise transformations and innovative technology solutions."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Portfolio", href: "/portfolio" }]}
      />

      {/* Category Filter */}
      <section className="py-8 border-b border-gray-100">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  {/* Header with icon */}
                  <div className={`bg-gradient-to-r ${item.color} p-6`}>
                    <div className="flex items-center justify-between mb-3">
                      <item.icon className="h-8 w-8 text-white" />
                      <Badge className="bg-white/20 text-white hover:bg-white/30">{item.category}</Badge>
                    </div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-white/80 mt-1">{item.client}</p>
                  </div>

                  <CardContent className="p-5 flex-1 flex flex-col">
                    <p className="text-sm text-gray-600 mb-4 flex-1">{item.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">{t}</span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100">
                      {Object.entries(item.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <p className="text-sm font-bold text-gray-900">{value}</p>
                          <p className="text-[10px] text-gray-400 capitalize">{key}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Want to Be Our Next Success Story?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Let's discuss your project and explore how Enfycon can deliver exceptional results for your organization.</p>
          <Button
            onClick={() => navigate("/contact-us")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            size="lg"
          >
            Start a Project <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}


