import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Globe, Users, Cpu, Shield, Zap, ArrowRight } from "lucide-react";

const capabilities = [
  { icon: Globe, title: "Global Delivery Network", description: "Leverage our distributed teams across the USA, India, and UAE for 24/7 project execution and seamless delivery." },
  { icon: Cpu, title: "AI & Technology Excellence", description: "Access world-class AI engineering talent specializing in machine learning, NLP, and enterprise architecture." },
  { icon: Users, title: "Dedicated Teams", description: "Build offshore dedicated teams that integrate seamlessly with your onshore workforce and processes." },
  { icon: Shield, title: "Enterprise Security", description: "All operations follow strict data security protocols, compliance frameworks, and regulatory standards." },
  { icon: Zap, title: "Rapid Scaling", description: "Scale your engineering capacity from 5 to 500 engineers within weeks, not months." },
  { icon: ArrowRight, title: "Innovation Labs", description: "Access our innovation labs for prototyping, proof-of-concept development, and technology evaluation." },
];

export default function GCCPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="GCC Solutions"
        subtitle="Global Capability Centers that extend your technology workforce with our engineering excellence."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "GCC Solutions", href: "/global-capability-center" }]}
      />

      <section className="py-24 section-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Extended Technology{" "}
                <span className="text-gradient">Workforce</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our Global Capability Centers (GCCs) provide enterprises with a scalable, cost-effective technology workforce. We establish dedicated engineering centers that operate as seamless extensions of your organization.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With centers in India and UAE, we deliver AI engineering, full-stack development, data science, cybersecurity, and DevOps capabilities — all managed under your governance while we handle operations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "500+", label: "Engineers", color: "bg-blue-50 text-blue-600" },
                { value: "24/7", label: "Support", color: "bg-emerald-50 text-emerald-600" },
                { value: "3", label: "Locations", color: "bg-purple-50 text-purple-600" },
                { value: "98%", label: "Retention", color: "bg-amber-50 text-amber-600" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
                  <cap.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{cap.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
