import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { AlertTriangle, Shield, Phone, Mail, CheckCircle2 } from "lucide-react";

const warningPoints = [
  "Enfycon never charges candidates fees for job placement, interviews, or onboarding.",
  "We do not request personal bank account details, passport copies, or payment for background checks from candidates.",
  "Official Enfycon communications come from @enfycon.com email domains only.",
  "We do not offer jobs via WhatsApp, Telegram, or informal social channels without verified company profiles.",
  "Legitimate job offers are always preceded by formal interviews and documented offer letters.",
  "Any individual claiming to be from Enfycon and requesting money is a fraudster — report immediately.",
];

const reportSteps = [
  { step: "01", title: "Document Everything", desc: "Save all communications, emails, and messages from the suspected scam." },
  { step: "02", title: "Contact Us Immediately", desc: "Report to our candidate safety team at safety@enfycon.com with full details." },
  { step: "03", title: "Report to Authorities", desc: "File a complaint with your local cybercrime authority or consumer protection agency." },
  { step: "04", title: "Warn Your Network", desc: "Alert others in your professional network to protect them from the same fraud." },
];

export default function CandidateAwarenessPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      <Navbar />

      <PageHeader
        title="Candidate Awareness Notice"
        subtitle="Important information to protect job seekers from recruitment fraud and impersonation scams."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Candidate Awareness", href: "/candidate-awareness-notice" }]}
      />

      <section className="py-28 lg:py-36">
        <div className="container max-w-4xl">

          {/* Warning Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-12 flex gap-5"
          >
            <AlertTriangle className="w-10 h-10 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-extrabold text-amber-800 mb-2">Fraud Alert: Protect Yourself</h2>
              <p className="text-amber-700 leading-relaxed">
                Enfycon has become aware of fraudulent recruitment activities where bad actors impersonate our company to deceive job seekers.
                Please read this notice carefully to protect yourself and others.
              </p>
            </div>
          </motion.div>

          {/* What We Will Never Do */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[20px] border border-slate-200/80 p-8 shadow-sm mb-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-7 h-7 text-indigo-600" />
              <h2 className="text-2xl font-extrabold text-slate-900">What Enfycon Will NEVER Do</h2>
            </div>
            <ul className="space-y-4">
              {warningPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex gap-3 items-start"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Reporting Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8">What To Do If You're Targeted</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reportSteps.map((step, i) => (
                <div key={i} className="bg-white rounded-[20px] border border-slate-200/80 p-7 shadow-sm relative overflow-hidden">
                  <span className="absolute top-3 right-5 text-6xl font-black text-slate-50 select-none">{step.step}</span>
                  <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black mb-4 text-sm relative z-10">
                    {step.step}
                  </div>
                  <h3 className="font-extrabold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900 text-white rounded-2xl p-8"
          >
            <h3 className="text-xl font-extrabold mb-2">Report Fraud Directly</h3>
            <p className="text-slate-300 mb-6">Contact our dedicated candidate safety team if you suspect fraudulent activity.</p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:safety@enfycon.com" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-xl font-bold text-sm transition-colors">
                <Mail className="w-4 h-4" /> safety@enfycon.com
              </a>
              <a href="/contact-us" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white px-5 py-3 rounded-xl font-bold text-sm transition-colors">
                <Phone className="w-4 h-4" /> Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
