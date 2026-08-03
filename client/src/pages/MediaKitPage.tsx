import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Download, Image, FileText, Palette, Globe, Mail } from "lucide-react";

const kitSections = [
  {
    icon: Image,
    title: "Logo Assets",
    description: "Download our official logo in SVG, PNG, and PDF formats. Includes full-color, white, and dark variants.",
    items: ["Primary Logo (SVG)", "White Logo (PNG)", "Dark Logo (PNG)", "Favicon Pack"],
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: Palette,
    title: "Brand Colors",
    description: "Our official brand color palette for consistent application across all marketing and communications.",
    items: ["Indigo #4F46E5", "Cyan #00D4FF", "Purple #7C3AED", "Slate #0F172A"],
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: FileText,
    title: "Company Boilerplate",
    description: "Approved company description, mission statement, and executive bio templates for press use.",
    items: ["Short Description (50 words)", "Long Description (200 words)", "CEO Bio", "Company Fact Sheet"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Globe,
    title: "Photography & Imagery",
    description: "High-resolution lifestyle and product imagery approved for editorial and press use.",
    items: ["Office Imagery", "Team Photos", "Product Screenshots", "Event Photography"],
    color: "from-emerald-500 to-teal-600",
  },
];

export default function MediaKitPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      <Navbar />

      <PageHeader
        title="Enfycon Media Kit"
        subtitle="Official brand assets, press materials, and media resources for journalists, partners, and content creators."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Media Kit", href: "/media-kit" }]}
      />

      <section className="py-28 lg:py-36">
        <div className="container">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Welcome to the Enfycon Media Kit. All materials here are approved for press, editorial, and partner use.
              For custom requests or interviews, contact our PR team directly.
            </p>
            <a
              href="mailto:media@enfycon.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Contact Media Relations
            </a>
          </motion.div>

          {/* Kit Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {kitSections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-[20px] border border-slate-200/80 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-indigo-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.color} text-white flex items-center justify-center mb-6`}>
                  <section.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">{section.title}</h3>
                <p className="text-slate-600 text-sm mb-5 leading-relaxed">{section.description}</p>
                <ul className="space-y-2 mb-6">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm hover:text-indigo-800 transition-colors">
                  <Download className="w-4 h-4" />
                  Request Assets
                </button>
              </motion.div>
            ))}
          </div>

          {/* Press Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 rounded-[24px] p-10 text-white text-center"
          >
            <h3 className="text-3xl font-black mb-4">Press Inquiries</h3>
            <p className="text-indigo-100 text-lg mb-6 max-w-2xl mx-auto">
              For interviews, media inquiries, speaking requests, or custom asset needs, reach out to our communications team.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:media@enfycon.com" className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
                media@enfycon.com
              </a>
              <a href="/contact-us" className="bg-white/20 border border-white/40 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-colors">
                Contact Form
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
