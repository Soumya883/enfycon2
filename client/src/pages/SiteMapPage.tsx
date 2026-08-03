import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { ArrowRight, Globe, BookOpen, Wrench, Users, FileText, Scale } from "lucide-react";

const sitemapCategories = [
  {
    icon: Globe,
    title: "Main Pages",
    color: "from-indigo-500 to-purple-600",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Products", href: "/products" },
      { label: "Industries", href: "/industries" },
      { label: "GCC Solutions", href: "/global-capability-center" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    icon: Users,
    title: "Company",
    color: "from-cyan-500 to-blue-600",
    links: [
      { label: "Our Team", href: "/team" },
      { label: "Our Culture", href: "/our-culture" },
      { label: "Philosophy", href: "/philosophy" },
      { label: "CSR", href: "/csr" },
      { label: "Careers", href: "/career" },
      { label: "Code of Ethics", href: "/code-of-ethics" },
      { label: "Media Kit", href: "/media-kit" },
    ],
  },
  {
    icon: BookOpen,
    title: "Knowledge & Tools",
    color: "from-emerald-500 to-teal-600",
    links: [
      { label: "Blog / News", href: "/blogs" },
      { label: "Publications", href: "/publications" },
      { label: "AI Hiring Tools", href: "/tools" },
      { label: "Resume Analyzer", href: "/tools/resume-analyzer" },
      { label: "Candidate Fit Score", href: "/tools/candidate-fit-score" },
      { label: "Interview Simulator", href: "/tools/interview-simulator" },
      { label: "Skill Gap Analyzer", href: "/tools/skill-gap-analyzer" },
    ],
  },
  {
    icon: Scale,
    title: "Legal & Policies",
    color: "from-rose-500 to-pink-600",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Candidate Awareness Notice", href: "/candidate-awareness-notice" },
    ],
  },
];

export default function SiteMapPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      <Navbar />

      <PageHeader
        title="Site Map"
        subtitle="A complete directory of all pages available on the Enfycon website, organized by category."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Site Map", href: "/site-map" }]}
      />

      <section className="py-28 lg:py-36">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {sitemapCategories.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-[20px] border border-slate-200/80 p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-7">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} text-white flex items-center justify-center shadow-md`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-900">{category.title}</h2>
                </div>
                <ul className="space-y-2">
                  {category.links.map((link, j) => (
                    <motion.li key={j} whileHover={{ x: 4 }} transition={{ duration: 0.15 }}>
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-semibold text-sm py-1.5 transition-colors group"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-500 transition-colors" />
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
