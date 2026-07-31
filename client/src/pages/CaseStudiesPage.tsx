import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Users, Zap, CheckCircle, BarChart3 } from "lucide-react";
import { useLocation } from "wouter";
import PageHeader from "@/components/PageHeader";

const caseStudies = [
  {
    title: "AI-Powered Supply Chain Optimization",
    client: "Fortune 500 Retailer",
    industry: "Retail & E-Commerce",
    challenge: "A major retailer was experiencing 15% inventory shortages due to manual demand forecasting, leading to lost sales and customer dissatisfaction.",
    solution: "Deployed Enfycon's AI Agentic Solutions with predictive analytics and automated inventory management. Built custom ML models trained on 5 years of historical sales data.",
    results: { revenue: "+32%", costReduction: "28%", efficiency: "94%", timeToValue: "8 weeks" },
    icon: BarChart3,
    color: "from-blue-500 to-cyan-500",
    tags: ["AI/ML", "Supply Chain", "Retail"],
  },
  {
    title: "Enterprise Cybersecurity Overhaul",
    client: "Global Financial Services Firm",
    industry: "Finance & Banking",
    challenge: "The client faced increasing cyber threats with outdated security infrastructure and needed SOC 2 compliance within 6 months.",
    solution: "Implemented comprehensive cybersecurity assessment, zero-trust architecture, and AI-powered threat detection. Conducted 200+ penetration tests and deployed 24/7 monitoring.",
    results: { revenue: "Zero Breaches", costReduction: "45%", efficiency: "99.9%", timeToValue: "12 weeks" },
    icon: Shield,
    color: "from-red-500 to-orange-500",
    tags: ["Cybersecurity", "Compliance", "Finance"],
  },
  {
    title: "Cloud-Native Platform Migration",
    client: "Healthcare Technology Company",
    industry: "Healthcare",
    challenge: "Legacy monolithic architecture caused 99.5% downtime incidents and couldn't scale to meet growing patient data demands.",
    solution: "Designed and executed a phased migration to Kubernetes-based microservices architecture on AWS. Implemented HIPAA-compliant data pipelines and automated scaling.",
    results: { revenue: "+50%", costReduction: "40%", efficiency: "99.99%", timeToValue: "16 weeks" },
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    tags: ["Cloud", "Healthcare", "DevOps"],
  },
  {
    title: "AI-Driven Customer Experience Platform",
    client: "Global Telecom Provider",
    industry: "Telecommunications",
    challenge: "Customer churn rate of 22% with limited personalization capabilities across 50M+ subscribers.",
    solution: "Built a personalized customer engagement platform using NLP and recommendation engines. Implemented real-time sentiment analysis and predictive churn modeling.",
    results: { revenue: "+41%", costReduction: "35%", efficiency: "89%", timeToValue: "10 weeks" },
    icon: Users,
    color: "from-green-500 to-emerald-500",
    tags: ["AI/NLP", "Customer Experience", "Telecom"],
  },
  {
    title: "IT Staffing for Rapid Scale-Up",
    client: "Series B SaaS Startup",
    industry: "Software & Technology",
    challenge: "Needed to scale engineering team from 15 to 75 in 4 months to meet product launch deadlines.",
    solution: "Deployed dedicated IT staffing pipeline with vetted engineers across cloud, frontend, and data engineering domains. Provided on-site and remote talent within 2-week turnaround.",
    results: { revenue: "+200%", costReduction: "60%", efficiency: "95%", timeToValue: "4 weeks" },
    icon: TrendingUp,
    color: "from-amber-500 to-yellow-500",
    tags: ["IT Staffing", "Scaling", "Startups"],
  },
  {
    title: "Data Analytics & Business Intelligence",
    client: "Manufacturing Conglomerate",
    industry: "Manufacturing",
    challenge: "Siloed data across 12 plants with no unified analytics platform, resulting in 30% operational inefficiency.",
    solution: "Built enterprise data lake with automated ETL pipelines, real-time dashboards, and predictive maintenance models. Integrated data from ERP, MES, and IoT systems.",
    results: { revenue: "+25%", costReduction: "33%", efficiency: "92%", timeToValue: "14 weeks" },
    icon: BarChart3,
    color: "from-indigo-500 to-blue-500",
    tags: ["Data Analytics", "Manufacturing", "IoT"],
  },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "$2.5B", label: "Revenue Generated" },
];

export default function CaseStudiesPage() {
  const [location, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Case Studies"
        subtitle="Real results from real enterprises. See how Enfycon delivers transformative outcomes across industries."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/case-studies" }]}
      />

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8">
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-[200px_1fr]">
                      {/* Left: Icon & Tags */}
                      <div className={`bg-gradient-to-br ${study.color} p-6 flex flex-col items-center justify-center text-white`}>
                        <study.icon className="h-12 w-12 mb-4" />
                        <div className="text-center">
                          <p className="text-sm font-medium opacity-90">{study.client}</p>
                          <p className="text-xs opacity-75 mt-1">{study.industry}</p>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-4 justify-center">
                          {study.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 bg-white/20 rounded text-[10px]">{tag}</span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                        <div className="space-y-3 mb-4">
                          <div>
                            <p className="text-xs font-semibold text-red-600 uppercase tracking-wide">Challenge</p>
                            <p className="text-sm text-gray-600 mt-0.5">{study.challenge}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Solution</p>
                            <p className="text-sm text-gray-600 mt-0.5">{study.solution}</p>
                          </div>
                        </div>

                        {/* Results */}
                        <div className="grid grid-cols-4 gap-2 pt-4 border-t border-gray-100">
                          <div className="text-center">
                            <p className="text-lg font-bold text-gray-900">{study.results.revenue}</p>
                            <p className="text-[10px] text-gray-500">Revenue Impact</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-gray-900">{study.results.costReduction}</p>
                            <p className="text-[10px] text-gray-500">Cost Reduction</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-gray-900">{study.results.efficiency}</p>
                            <p className="text-[10px] text-gray-500">Uptime/Efficiency</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-gray-900">{study.results.timeToValue}</p>
                            <p className="text-[10px] text-gray-500">Time to Value</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready for Your Success Story?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Join 200+ enterprises that have transformed their operations with Enfycon's technology solutions.</p>
          <Button
            onClick={() => navigate("/contact-us")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            size="lg"
          >
            Start Your Transformation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
