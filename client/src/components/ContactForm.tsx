import { useState } from "react";
import { motion } from "framer-motion";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Send, CheckCircle, Loader2, Mail, Building, User, MessageSquare, Phone, Clock } from "lucide-react";

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
        toast.success("Message sent successfully! We'll get back to you within 24 hours.");
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
    <section id="contact" className="py-28 bg-gray-50 relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to{" "}
              <span className="text-gradient">Transform</span> Your Business?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Whether you need AI solutions, cybersecurity assessment, enterprise
              modernization, or top-tier IT talent — we're here to help you succeed.
            </p>

            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email Us", value: "office@enfycon.com", href: "mailto:office@enfycon.com" },
                { icon: Phone, label: "Call Us", value: "+1 201.201.7078", href: "tel:+12012017078" },
                { icon: Building, label: "Headquarters", value: "Flower Mound, Texas, USA", href: "#" },
                { icon: Clock, label: "Response Time", value: "Within 24 hours", href: "#" },
              ].map((item, i) => (
                <a key={i} href={item.href} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-gray-900 font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 space-y-6 shadow-lg shadow-gray-200/50"
            >
              <div>
                <label className="text-gray-700 text-sm font-medium mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-medium mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-medium mb-2 flex items-center gap-2">
                  <Building className="w-4 h-4 text-primary" />
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-medium mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl py-6 text-base active:scale-[0.99] transition-all duration-160 shadow-[0_4px_20px_rgba(59,91,219,0.25)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {contactMutation.isPending ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </span>
                ) : contactMutation.isSuccess ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Sent Successfully!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
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
