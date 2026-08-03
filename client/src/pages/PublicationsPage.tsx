import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { BookOpen, ArrowRight } from "lucide-react";

const publications = [
  {
    category: "AI & Machine Learning",
    items: [
      { title: "Agentic AI in Enterprise: A 2026 Practitioner's Guide", date: "July 2026", type: "Whitepaper" },
      { title: "LLM Orchestration for Fortune 500 Workflows", date: "June 2026", type: "Research Report" },
      { title: "Responsible AI Frameworks for Regulated Industries", date: "May 2026", type: "Whitepaper" },
    ],
  },
  {
    category: "Cybersecurity",
    items: [
      { title: "Zero-Trust Architecture: Implementation Playbook", date: "July 2026", type: "Playbook" },
      { title: "SOC-2 Compliance for Cloud-Native Enterprises", date: "April 2026", type: "Guide" },
      { title: "Threat Intelligence Report: H1 2026", date: "June 2026", type: "Report" },
    ],
  },
  {
    category: "IT Staffing & Talent",
    items: [
      { title: "The State of AI Talent in the US: 2026 Survey", date: "June 2026", type: "Research Report" },
      { title: "Remote Engineering Teams: Best Practices Handbook", date: "March 2026", type: "Handbook" },
      { title: "Hiring AI Engineers: A CTO's Definitive Guide", date: "February 2026", type: "Guide" },
    ],
  },
  {
    category: "Global Capability Centers",
    items: [
      { title: "GCC Setup in India: Legal, Operational & Tech Blueprint", date: "July 2026", type: "Blueprint" },
      { title: "Cost-Benefit Analysis: Offshore vs Onshore Engineering", date: "May 2026", type: "Analysis" },
    ],
  },
];

const colorMap: Record<string, string> = {
  Whitepaper: "bg-indigo-50 text-indigo-700 border-indigo-100",
  "Research Report": "bg-cyan-50 text-cyan-700 border-cyan-100",
  Report: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Playbook: "bg-purple-50 text-purple-700 border-purple-100",
  Guide: "bg-amber-50 text-amber-700 border-amber-100",
  Handbook: "bg-rose-50 text-rose-700 border-rose-100",
  Blueprint: "bg-teal-50 text-teal-700 border-teal-100",
  Analysis: "bg-orange-50 text-orange-700 border-orange-100",
};

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      <Navbar />

      <PageHeader
        title="Research & Publications"
        subtitle="In-depth research, whitepapers, and industry reports authored by Enfycon's experts and thought leaders."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Publications", href: "/publications" }]}
      />

      <section className="py-28 lg:py-36">
        <div className="container">
          <div className="space-y-16">
            {publications.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900">{category.category}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, j) => (
                    <motion.div
                      key={j}
                      whileHover={{ y: -4 }}
                      className="bg-white rounded-[18px] border border-slate-200/80 p-7 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className={`text-xs font-extrabold px-3 py-1 rounded-full border ${colorMap[item.type] ?? "bg-slate-50 text-slate-700 border-slate-200"}`}>
                            {item.type}
                          </span>
                        </div>
                        <h3 className="font-extrabold text-slate-900 text-base leading-snug mb-3 group-hover:text-indigo-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{item.date}</p>
                      </div>
                      <div className="mt-5 flex items-center gap-1.5 text-indigo-600 text-sm font-extrabold group-hover:gap-3 transition-all duration-300">
                        <span>Download</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 text-center bg-indigo-50 border border-indigo-100 rounded-2xl p-10"
          >
            <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Subscribe to New Research</h3>
            <p className="text-slate-600 mb-6">Get notified when we publish new whitepapers, reports, and industry insights.</p>
            <a href="/contact-us" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold transition-colors">
              Subscribe to Updates
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
