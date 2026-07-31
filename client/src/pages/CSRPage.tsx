import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Heart, BookOpen, Shirt, Users } from "lucide-react";

const initiatives = [
  { icon: Heart, title: "Food Distribution at SOS Children's Village", description: "Organized a food distribution program to support children at SOS Children's Village, ensuring no child goes hungry.", color: "from-orange-400 to-red-500" },
  { icon: Shirt, title: "Clothes & Essentials Distribution", description: "Provided clothes and essential items to those in need, reinforcing our commitment to community welfare.", color: "from-blue-400 to-indigo-500" },
  { icon: BookOpen, title: "Scholarship Program", description: "Empowering bright minds with financial aid to pursue their education and achieve their dreams.", color: "from-emerald-400 to-teal-500" },
  { icon: Users, title: "Community Volunteering", description: "Our team actively participates in community service activities, contributing time and effort to make a positive impact.", color: "from-purple-400 to-pink-500" },
];

export default function CSRPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Social Responsibility"
        subtitle="Making a difference through simple efforts that bring small but meaningful change."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Social Responsibility", href: "/csr" }]}
      />

      <section className="py-24 section-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our CSR Initiatives</h2>
            <p className="text-muted-foreground leading-relaxed">
              At enfycon, we believe in giving back to the communities that support us. Our social responsibility programs focus on education, basic needs, and community development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm card-hover"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
