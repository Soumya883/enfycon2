import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section className="py-24 bg-white relative border-t border-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="/images/faq/faq.jpg"
                alt="FAQ"
                className="w-full h-[520px] object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://www.enfycon.com/images/faq/faq.jpg"; }}
              />
            </div>
          </motion.div>

          {/* Right - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Questions</span>
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-gray-200 rounded-2xl px-6 data-[state=open]:border-primary/40 data-[state=open]:bg-blue-50/40 transition-all duration-300 shadow-sm"
                >
                  <AccordionTrigger className="text-gray-900 hover:text-primary text-left font-bold text-base py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed text-sm pb-5">
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
