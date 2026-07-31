import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Heart, Lightbulb, Users, Rocket } from "lucide-react";

const values = [
  { icon: Heart, title: "Human-Centric Innovation", description: "We believe technology should serve people, not the other way around. Every solution we build puts human experience first." },
  { icon: Lightbulb, title: "Continuous Learning", description: "We invest in our team's growth through training, certifications, and exposure to cutting-edge technologies." },
  { icon: Users, title: "Collaborative Spirit", description: "We foster an environment of open communication, mutual respect, and shared success across all levels." },
  { icon: Rocket, title: "Bold Ambition", description: "We push boundaries and embrace challenges that others shy away from. Innovation requires courage." },
];

export default function CulturePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Our Culture"
        subtitle="Driven by values, defined by excellence. We build technology with heart and purpose."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Our Culture", href: "/our-culture" }]}
      />

      <section className="py-24 section-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Believe In</h2>
            <p className="text-muted-foreground leading-relaxed">
              At enfycon, our culture is built on the foundation of trust, innovation, and human connection. We believe that the best technology is built by teams who genuinely care about the impact of their work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
