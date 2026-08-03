import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Cookie, Settings, Eye, Shield, Info } from "lucide-react";

const cookieSections = [
  {
    icon: Cookie,
    title: "What Are Cookies?",
    content: "Cookies are small text files placed on your device when you visit our website. They help us remember your preferences, analyze how our site is used, and deliver personalized content and advertisements.",
  },
  {
    icon: Eye,
    title: "How We Use Cookies",
    content: "We use cookies to: remember your login sessions and preferences, understand how visitors interact with our website, improve our services based on aggregate analytics, and deliver relevant content and features.",
  },
  {
    icon: Settings,
    title: "Types of Cookies We Use",
    content: "Essential Cookies: Required for the website to function properly. Analytics Cookies: Help us understand visitor behavior (e.g., Google Analytics). Functional Cookies: Remember your preferences and settings. Marketing Cookies: Used to deliver relevant advertisements.",
  },
  {
    icon: Shield,
    title: "Third-Party Cookies",
    content: "Our website may use third-party services such as Google Analytics, HubSpot, and LinkedIn Insight Tag that set their own cookies. We do not control these cookies; please review the respective privacy policies of these services.",
  },
  {
    icon: Info,
    title: "Managing Cookies",
    content: "You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, and set preferences for specific websites. Note that disabling cookies may affect the functionality of our website.",
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      <Navbar />

      <PageHeader
        title="Cookie Policy"
        subtitle="This policy explains how Enfycon uses cookies and similar tracking technologies on our website."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Cookie Policy", href: "/cookie-policy" }]}
      />

      <section className="py-28 lg:py-36">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 mb-12"
          >
            <p className="text-indigo-700 font-semibold text-sm">
              <strong>Last Updated:</strong> July 31, 2026 &nbsp;|&nbsp; <strong>Effective Date:</strong> August 1, 2026
            </p>
          </motion.div>

          <div className="space-y-10">
            {cookieSections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-[20px] border border-slate-200/80 p-8 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-900">{section.title}</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-slate-900 text-white rounded-2xl p-8"
          >
            <h3 className="text-xl font-extrabold mb-3">Contact Us About Cookies</h3>
            <p className="text-slate-300 mb-4">If you have questions about our use of cookies, please contact our Data Privacy team.</p>
            <a href="/contact-us" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors">
              Contact Data Privacy Team
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
