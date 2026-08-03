import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Scale, Heart, Users, Lock, Globe, AlertCircle } from "lucide-react";

const principles = [
  {
    icon: Scale,
    title: "Integrity & Honesty",
    color: "from-indigo-500 to-purple-600",
    points: [
      "We act with transparency and honesty in all business dealings.",
      "We do not misrepresent our services, capabilities, or credentials.",
      "We acknowledge mistakes and take responsibility for corrective action.",
    ],
  },
  {
    icon: Users,
    title: "Respect & Inclusion",
    color: "from-cyan-500 to-blue-600",
    points: [
      "We treat all people with dignity regardless of background, gender, race, or belief.",
      "We foster inclusive workplaces free from discrimination and harassment.",
      "We value diverse perspectives as a source of competitive strength.",
    ],
  },
  {
    icon: Lock,
    title: "Confidentiality & Privacy",
    color: "from-emerald-500 to-teal-600",
    points: [
      "We protect client, partner, and employee data with enterprise-grade security.",
      "We never share confidential information without explicit authorization.",
      "We comply with all applicable data protection laws and regulations.",
    ],
  },
  {
    icon: Globe,
    title: "Sustainability & Responsibility",
    color: "from-amber-500 to-orange-500",
    points: [
      "We consider the environmental and social impact of our technology decisions.",
      "We contribute to communities through CSR and ethical sourcing.",
      "We work to reduce our carbon footprint across all operations.",
    ],
  },
  {
    icon: Heart,
    title: "Fairness in Business",
    color: "from-rose-500 to-pink-600",
    points: [
      "We compete fairly and do not engage in anti-competitive practices.",
      "We ensure fair compensation and opportunity for all employees.",
      "We honour all contractual obligations to clients and vendors.",
    ],
  },
  {
    icon: AlertCircle,
    title: "Conflict of Interest",
    color: "from-violet-500 to-purple-700",
    points: [
      "We disclose and manage real or perceived conflicts of interest.",
      "We do not allow personal interests to influence business decisions.",
      "We maintain clear separation between corporate and personal finances.",
    ],
  },
];

export default function CodeOfEthicsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      <Navbar />

      <PageHeader
        title="Code of Ethics"
        subtitle="Our commitment to integrity, responsibility, and ethical conduct in every aspect of our business."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Code of Ethics", href: "/code-of-ethics" }]}
      />

      <section className="py-28 lg:py-36">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <p className="text-slate-600 text-lg leading-relaxed">
              At Enfycon, our Code of Ethics is the foundation of everything we do. It guides how we
              interact with clients, employees, partners, and the communities we serve.
              Every team member is expected to uphold these standards without exception.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-[20px] border border-slate-200/80 p-8 shadow-sm hover:shadow-lg hover:border-indigo-300 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${principle.color} text-white flex items-center justify-center mb-6 shadow-lg`}>
                  <principle.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-4">{principle.title}</h3>
                <ul className="space-y-3">
                  {principle.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-[24px] p-12 text-center"
          >
            <h3 className="text-3xl font-black mb-4">Report Ethical Concerns</h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
              If you witness or suspect violations of our Code of Ethics, please report them through our
              confidential ethics hotline. All reports are handled with strict confidentiality.
            </p>
            <a
              href="mailto:ethics@enfycon.com"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold transition-colors"
            >
              ethics@enfycon.com
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
