import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, Star, Shield, Zap } from "lucide-react";
import { useLocation } from "wouter";
import PageHeader from "@/components/PageHeader";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for startups and small teams getting started with AI solutions.",
    price: "Custom",
    period: "Per Project",
    popular: false,
    icon: Zap,
    color: "blue",
    features: {
      included: [
        "Single AI solution deployment",
        "Basic cybersecurity assessment",
        "Up to 5 IT staff placements",
        "Standard support (48hr response)",
        "Monthly progress reports",
        "Documentation & training",
      ],
      excluded: [
        "24/7 dedicated support",
        "Custom AI model training",
        "Multi-region deployment",
      ],
    },
  },
  {
    name: "Professional",
    description: "Ideal for growing enterprises needing comprehensive technology solutions.",
    price: "Custom",
    period: "Per Engagement",
    popular: true,
    icon: Star,
    color: "purple",
    features: {
      included: [
        "Multi-solution AI platform",
        "Comprehensive security audit",
        "Up to 25 IT staff placements",
        "Priority support (24hr response)",
        "Weekly progress reports",
        "Custom model development",
        "Cloud architecture design",
        "Data analytics dashboard",
      ],
      excluded: [
        "Dedicated account team",
        "White-glove onboarding",
      ],
    },
  },
  {
    name: "Enterprise",
    description: "Full-scale digital transformation for large organizations.",
    price: "Custom",
    period: "Annual Contract",
    popular: false,
    icon: Shield,
    color: "indigo",
    features: {
      included: [
        "Complete AI transformation suite",
        "Enterprise security operations",
        "Unlimited IT staff placements",
        "Dedicated support team (1hr response)",
        "Real-time analytics & reporting",
        "Custom AI model development",
        "Multi-cloud architecture",
        "Compliance management",
        "Dedicated account team",
        "White-glove onboarding",
        "SLA guarantees",
      ],
      excluded: [],
    },
  },
];

const servicePackages = [
  {
    title: "AI Agentic Solutions",
    description: "Autonomous AI systems for enterprise workflows",
    startingAt: "From $15,000",
    timeline: "4-8 weeks",
    includes: ["Custom AI agents", "Workflow automation", "Integration support"],
  },
  {
    title: "Cybersecurity Assessment",
    description: "Comprehensive security audit and remediation",
    startingAt: "From $8,000",
    timeline: "2-4 weeks",
    includes: ["Penetration testing", "Vulnerability assessment", "Compliance audit"],
  },
  {
    title: "IT Staffing (Per Position)",
    description: "Vetted IT professionals for your team",
    startingAt: "From $2,000/mo",
    timeline: "1-2 weeks",
    includes: ["Skill-matched candidates", "Background checks", "Replacement guarantee"],
  },
  {
    title: "Cloud Migration",
    description: "End-to-end cloud infrastructure migration",
    startingAt: "From $20,000",
    timeline: "6-12 weeks",
    includes: ["Architecture design", "Data migration", "Post-migration support"],
  },
];

export default function PricingPage() {
  const [location, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Pricing & Packages"
        subtitle="Transparent, flexible pricing for enterprises of all sizes. Every engagement is tailored to your unique needs."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Pricing", href: "/pricing" }]}
      />

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className={`relative h-full flex flex-col ${plan.popular ? "border-blue-200 shadow-lg ring-2 ring-blue-100" : "border-gray-200"}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white px-4">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pt-8">
                    <div className={`w-14 h-14 rounded-xl bg-${plan.color}-100 flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className={`h-7 w-7 text-${plan.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-sm text-gray-500 ml-1">/{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">What's Included</p>
                      <ul className="space-y-2">
                        {plan.features.included.map((feature, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                        {plan.features.excluded.map((feature, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm opacity-40">
                            <X className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                            <span className="text-gray-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      onClick={() => navigate("/contact-us")}
                      className={`w-full mt-6 ${plan.popular ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900"}`}
                    >
                      Get Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Service Packages</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Individual service packages with transparent starting prices.</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {servicePackages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-gray-900">{pkg.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{pkg.description}</p>
                      </div>
                      <span className="text-lg font-bold text-blue-600 whitespace-nowrap">{pkg.startingAt}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <span>Timeline: {pkg.timeline}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {pkg.includes.map((item, j) => (
                        <span key={j} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">{item}</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">Every enterprise is unique. Let's discuss your specific requirements and build a tailored pricing plan.</p>
          <Button
            onClick={() => navigate("/contact-us")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            size="lg"
          >
            Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
