import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Building2, Heart, Landmark, Users, Scale, Truck, Factory, Plane, FileText } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Banking",
    description: "Digital banking transformation with AI-powered fraud detection, automated compliance, and personalized customer experiences.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: FileText,
    title: "Finance",
    description: "Advanced financial analytics, automated reporting, and intelligent portfolio management systems.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "HIPAA-compliant AI solutions for patient data management, predictive diagnostics, and telehealth platforms.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Landmark,
    title: "Government & Civic Services",
    description: "Secure, scalable technology solutions for government agencies and civic infrastructure modernization.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Users,
    title: "Human Resource",
    description: "AI-driven talent acquisition, workforce analytics, and automated HR process optimization.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Scale,
    title: "Legal",
    description: "Document automation, contract intelligence, and legal research powered by natural language processing.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "Intelligent route optimization, inventory forecasting, and real-time supply chain visibility.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Smart factory solutions with IoT integration, predictive maintenance, and quality control automation.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Plane,
    title: "Tourism",
    description: "Personalized travel experiences, dynamic pricing engines, and customer journey optimization.",
    color: "bg-pink-50 text-pink-600",
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Industries We Serve"
        subtitle="Delivering specialized technology solutions across diverse industry verticals."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }]}
      />

      <section className="py-24 section-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm card-hover group"
              >
                <div className={`w-14 h-14 rounded-xl ${industry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <industry.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
