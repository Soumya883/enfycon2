import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is AI Agentic Solutions?",
    answer:
      "AI Agentic Solutions are autonomous AI systems that can independently execute complex enterprise workflows. Our agents handle everything from data analysis to decision-making, reducing manual intervention and accelerating business processes.",
  },
  {
    question: "How does Enfycon approach cybersecurity?",
    answer:
      "We provide comprehensive security assessments including penetration testing, vulnerability scanning, compliance audits, and incident response planning. Our team follows industry standards like NIST and ISO 27001 to ensure your infrastructure is fully fortified.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve a wide range of industries including healthcare, financial services, government, retail, manufacturing, and technology. Our solutions are tailored to the specific regulatory, compliance, and operational requirements of each vertical.",
  },
  {
    question: "How does US IT Staffing work?",
    answer:
      "Our IT Staffing division connects enterprises with pre-vetted, elite technology professionals. We handle the entire recruitment pipeline — sourcing, screening, interviewing, and onboarding — so you get top-tier talent faster.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. Discovery and strategy phases typically take 2-4 weeks, while full implementation can range from 3-12 months. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support after deployment?",
    answer:
      "Yes, we provide comprehensive post-deployment support including 24/7 monitoring, performance optimization, security updates, and dedicated account management. Our goal is to be your long-term technology partner.",
  },
];

export default function FAQ() {
  return (
    <section className="py-32 lg:py-40 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[22px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-200/80">
              <img
                src="/images/faq/faq.jpg"
                alt="FAQ"
                className="w-full h-[540px] object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://www.enfycon.com/images/faq/faq.jpg"; }}
              />
            </div>
          </motion.div>

          {/* Right - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-extrabold uppercase tracking-widest mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">
              Got Questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500">We Have Answers.</span>
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-slate-200/80 rounded-[16px] px-6 data-[state=open]:border-indigo-400 data-[state=open]:bg-indigo-50/40 transition-all duration-300 shadow-sm"
                >
                  <AccordionTrigger className="text-slate-900 hover:text-indigo-600 text-left font-extrabold text-base py-5 no-underline hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed text-sm pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
