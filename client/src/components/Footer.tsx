import { Linkedin, Twitter, ArrowUp, Mail, CheckCircle2, Heart } from "lucide-react";
import { useState } from "react";
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
    <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <Mail className="w-5 h-5" />
          <h4 className="font-semibold text-lg">Stay Updated</h4>
        </div>
        <p className="text-blue-100 text-sm mb-5 leading-relaxed">
          Subscribe to our newsletter for the latest insights on AI, cybersecurity, and enterprise technology.
        </p>

        {showSuccess ? (
          <div className="flex items-center gap-3 bg-white/15 rounded-xl p-4 backdrop-blur-sm">
            <CheckCircle2 className="w-5 h-5 text-green-300 shrink-0" />
            <p className="text-sm text-white">
              You're subscribed! Check your email for confirmation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm backdrop-blur-sm"
              required
            />
            <button
              type="submit"
              disabled={mutation.isPending || !email.trim()}
              className="px-6 py-3 rounded-xl bg-white text-blue-700 font-semibold text-sm hover:bg-blue-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap active:scale-[0.97]"
            >
              {mutation.isPending ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 pt-20 pb-8">
      <div className="container">
        {/* Newsletter section above footer */}
        <div className="mb-16">
          <NewsletterSubscription />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://www.enfycon.com/images/logos/enfycon-white.png"
                alt="Enfycon"
                className="h-10 w-auto"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/manus-storage/enfycon-white_6b6c054a.png"; }}
              />
              <span className="text-white text-xl font-bold tracking-tight">
                ENFYCON
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              Enfycon provides industry-leading AI Agentic Solutions,
              Cybersecurity Assessments, and elite US IT Staffing to propel
              enterprise modernization.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/enfycon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/enfycon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-3">
              {[
                "AI Agentic Solutions",
                "Cybersecurity",
                "US IT Staffing",
                "Enterprise Modernization",
              ].map((item) => (
                <li key={item}>
                  <a href="/services" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">About Us</a></li>
              <li><a href="/case-studies" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Case Studies</a></li>
              <li><a href="/portfolio" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Portfolio</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Pricing</a></li>
              <li><a href="/blogs" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Blog</a></li>
              <li><a href="/career" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Careers</a></li>
              <li><a href="/contact-us" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Contact</a></li>
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Enfycon. All rights reserved.
          </p>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-800/80 border border-gray-700/60 text-xs text-gray-300 font-medium hover:border-blue-500/40 transition-colors">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
            <span>Crafted & Built by Soumya Ranjan</span>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
