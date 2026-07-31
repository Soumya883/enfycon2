import { useState } from "react";
import { motion } from "framer-motion";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Send, CheckCircle, Loader2, Mail, Building, User, MessageSquare, Phone, Clock, MessageCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: (data) => {
      if (data.success) {
        toast.success("Message sent successfully! We'll get back to you within 2 hours.");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        toast.error(data.error || "Failed to send message. Please try again.");
      }
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to send message. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (formData.name.length < 2) {
      toast.error("Name must be at least 2 characters.");
      return;
    }
    if (formData.message.length < 10) {
      toast.error("Message must be at least 10 characters.");
      return;
    }
    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-28 lg:py-36 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Info & Quick WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-extrabold uppercase tracking-widest mb-4">
              <Clock className="w-3.5 h-3.5 text-indigo-600" />
              Response Guarantee: &lt; 2 Hours
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500">
                Architect Your Growth?
              </span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10">
              Whether you need AI agentic engineering, cybersecurity audits, or elite IT talent — our team of senior architects is ready to assist.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, label: "Email Us", value: "office@enfycon.com", href: "mailto:office@enfycon.com" },
                { icon: Phone, label: "Direct Phone", value: "+1 201.201.7078", href: "tel:+12012017078" },
                { icon: Building, label: "Global HQ", value: "Flower Mound, Texas, USA", href: "#" },
                { icon: Clock, label: "Business Hours", value: "Mon - Fri: 8:00 AM - 6:00 PM EST", href: "#" },
              ].map((item, i) => (
                <a key={i} href={item.href} className="flex items-center gap-4 p-4 rounded-[16px] bg-white border border-slate-200/80 hover:border-indigo-400 hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-[12px] bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{item.label}</p>
                    <p className="text-slate-900 font-extrabold text-base">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp Quick Action Button */}
            <a
              href="https://wa.me/12012017078"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-[14px] bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>Instant WhatsApp Discussion</span>
            </a>
          </motion.div>

          {/* Right - Glassmorphic Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-[24px] border border-slate-200 p-8 md:p-10 space-y-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >
              <div>
                <label className="text-slate-700 text-xs font-extrabold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-indigo-600" />
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ashutosh Dash"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-[12px] border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder:text-slate-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 focus:bg-white transition-all outline-none"
                />
              </div>

              <div>
                <label className="text-slate-700 text-xs font-extrabold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-indigo-600" />
                  Work Email <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="ashutosh@enterprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-[12px] border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder:text-slate-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 focus:bg-white transition-all outline-none"
                />
              </div>

              <div>
                <label className="text-slate-700 text-xs font-extrabold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Building className="w-4 h-4 text-indigo-600" />
                  Company & Role
                </label>
                <input
                  type="text"
                  placeholder="Enterprise Inc."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-[12px] border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder:text-slate-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 focus:bg-white transition-all outline-none"
                />
              </div>

              <div>
                <label className="text-slate-700 text-xs font-extrabold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-indigo-600" />
                  Project Scope & Requirements <span className="text-rose-500">*</span>
                </label>
                <textarea
                  placeholder="Briefly describe your requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-[12px] border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder:text-slate-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 focus:bg-white transition-all outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-extrabold rounded-[14px] py-4 text-sm active:scale-[0.98] transition-all duration-300 shadow-[0_10px_30px_rgba(79,70,229,0.35)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {contactMutation.isPending ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Transmitting...
                  </span>
                ) : contactMutation.isSuccess ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Request Transmitted!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    Submit Project Inquiry
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
