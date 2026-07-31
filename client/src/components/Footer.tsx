import { Linkedin, Twitter, ArrowUp, Mail, CheckCircle2, Heart, ShieldCheck, Award } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const mutation = trpc.newsletter.subscribe.useMutation({
    onSuccess: () => {
      setEmail("");
      setShowSuccess(true);
      toast.success("Subscribed! Check your email for confirmation.");
      setTimeout(() => setShowSuccess(false), 4000);
    },
    onError: (err: any) => {
      toast.error(err?.message || "Subscription failed. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    mutation.mutate({ email: email.trim() });
  };

  return (
    <div className="bg-gradient-to-br from-indigo-600 via-purple-700 to-cyan-600 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/5 rounded-full" />
      <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-white/5 rounded-full" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <Mail className="w-5 h-5" />
          <h4 className="font-semibold text-lg">Stay Updated</h4>
        </div>
        <p className="text-indigo-100 text-sm mb-5 leading-relaxed">
          Subscribe to our newsletter for the latest insights on AI, cybersecurity, and enterprise technology.
        </p>
        {showSuccess ? (
          <div className="flex items-center gap-3 bg-white/15 rounded-xl p-4 backdrop-blur-sm">
            <CheckCircle2 className="w-5 h-5 text-green-300 shrink-0" />
            <p className="text-sm text-white">You're subscribed! Check your email for confirmation.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email" value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm backdrop-blur-sm"
              required aria-label="Email address"
            />
            <button
              type="submit"
              disabled={mutation.isPending || !email.trim()}
              className="px-6 py-3 rounded-xl bg-white text-indigo-700 font-semibold text-sm hover:bg-indigo-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap active:scale-[0.97] hover:shadow-[0_4px_20px_rgba(255,255,255,0.3)]"
            >
              {mutation.isPending ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

const footerLinks = {
  solutions: ["AI Agentic Solutions", "Cybersecurity", "US IT Staffing", "Enterprise Modernization"],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blogs" },
    { label: "Careers", href: "/career" },
    { label: "Contact", href: "/contact-us" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

const complianceBadges = [
  { icon: ShieldCheck, label: "ISO 27001", color: "text-emerald-400" },
  { icon: ShieldCheck, label: "SOC 2 Type II", color: "text-blue-400" },
  { icon: Award, label: "HIPAA Compliant", color: "text-purple-400" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setShowTop(window.scrollY > 400), { passive: true });
  }

  return (
    <footer className="bg-[#080C1E] border-t border-slate-800/60 pt-20 pb-8">
      <div className="container">
        {/* Newsletter */}
        <div className="mb-16">
          <NewsletterSubscription />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="mb-5">
              <img
                src="/images/logos/enfycon-white.png"
                alt="Enfycon"
                className="h-11 md:h-14 w-auto object-contain"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://www.enfycon.com/images/logos/enfycon-white.png"; }}
              />
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md mb-6 text-sm">
              Enfycon provides industry-leading AI Agentic Solutions, Cybersecurity Assessments, and elite US IT Staffing to propel enterprise modernization.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mb-8">
              {[
                { href: "https://linkedin.com/company/enfycon", Icon: Linkedin, label: "LinkedIn" },
                { href: "https://twitter.com/enfycon", Icon: Twitter, label: "Twitter" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Compliance Badges */}
            <div className="flex flex-wrap gap-3">
              {complianceBadges.map(({ icon: Icon, label, color }) => (
                <div key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-semibold text-slate-300 hover:border-slate-500/60 transition-colors">
                  <Icon className={`w-3.5 h-3.5 ${color}`} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((item) => (
                <li key={item}>
                  <a
                    href="/services"
                    className="text-slate-400 hover:text-indigo-400 transition-colors text-sm relative group inline-block"
                  >
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-indigo-400 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-400 hover:text-indigo-400 transition-colors text-sm relative group inline-block"
                  >
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-indigo-400 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Enfycon. All rights reserved.
          </p>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 font-medium hover:border-indigo-500/40 transition-colors">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
            <span>Crafted &amp; Built by Soumya Ranjan</span>
          </div>

          {/* Back-to-top button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] transition-shadow duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
