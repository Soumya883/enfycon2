import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const products = [
  { name: "enfysync", description: "Unified enterprise communication and collaboration platform with AI-powered workflow automation.", category: "Collaboration" },
  { name: "iVaak.ai", description: "AI-driven speech recognition and natural language understanding for enterprise applications.", category: "AI/ML" },
  { name: "Truefix.ai", description: "Automated bug detection and resolution platform for software development teams.", category: "DevOps" },
  { name: "iCognito.ai", description: "Privacy-first identity management and data anonymization solution.", category: "Security" },
  { name: "iDental.ai", description: "AI-powered dental diagnostics and patient management platform for healthcare providers.", category: "Healthcare" },
  { name: "lexGenie.ai", description: "Legal AI assistant for contract analysis, legal research, and document automation.", category: "Legal Tech" },
  { name: "QuantFin.ai", description: "Quantitative finance analytics platform with AI-driven market predictions and risk modeling.", category: "Finance" },
  { name: "PerformanceEdge.ai", description: "Employee performance analytics and workforce optimization platform.", category: "HR Tech" },
  { name: "iWac.ai", description: "Intelligent workplace access control and visitor management system.", category: "Security" },
];

const categoryColors: Record<string, string> = {
  "Collaboration": "from-blue-500 to-indigo-600",
  "AI/ML": "from-purple-500 to-violet-600",
  "DevOps": "from-emerald-500 to-teal-600",
  "Security": "from-red-500 to-orange-600",
  "Healthcare": "from-pink-500 to-rose-600",
  "Legal Tech": "from-amber-500 to-yellow-600",
  "Finance": "from-teal-500 to-cyan-600",
  "HR Tech": "from-indigo-500 to-blue-600",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Products"
        subtitle="Our portfolio of AI-powered products designed to solve real-world enterprise challenges."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }]}
      />

      <section className="py-24 section-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm card-hover group"
              >
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${categoryColors[product.category] || "from-gray-500 to-gray-600"} text-white text-xs font-medium mb-5`}>
                  {product.category}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {product.description}
                </p>
                <button className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
