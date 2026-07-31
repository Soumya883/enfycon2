import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLocation } from "wouter";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-slate-950/85 backdrop-blur-2xl border-b border-slate-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo 20% Larger & Brighter */}
        <a href="/" className="flex items-center shrink-0 group" onClick={() => setLocation("/")}>
          <img
            src="/images/logos/enfycon-white.png"
            alt="Enfycon Logo"
            className="h-12 md:h-14 w-auto object-contain brightness-110 drop-shadow-[0_0_12px_rgba(79,70,229,0.5)] group-hover:scale-105 transition-all duration-300"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "https://www.enfycon.com/images/logos/enfycon-white.png";
            }}
          />
        </a>

        {/* Navigation Links with Glow Hover Effect */}
        <div className="hidden lg:flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 px-4 py-1.5 rounded-full shadow-inner">
          {[
            { label: "About Us", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Industries", href: "/industries" },
            { label: "Products", href: "/products" },
            { label: "GCC Solutions", href: "/global-capability-center" },
            { label: "Blogs", href: "/blogs" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Pricing", href: "/pricing" },
          ].map((link) => {
            const isActive = location === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 group ${
                  isActive
                    ? "text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-[0_0_20px_rgba(124,58,237,0.5)]"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                {!isActive && (
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Contact CTA Button */}
        <div className="flex items-center gap-4">
          <Button
            className="font-extrabold rounded-full px-7 py-5 text-xs bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-[0_0_25px_rgba(79,70,229,0.5)] hover:shadow-[0_0_35px_rgba(0,212,255,0.7)] active:scale-[0.96] transition-all duration-300 flex items-center gap-1.5"
            onClick={() => {
              if (isHome) {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              } else {
                setLocation("/contact-us");
              }
            }}
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </Button>
          <button
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 p-6 shadow-2xl">
          <div className="container flex flex-col gap-2">
            {[
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Industries", href: "/industries" },
              { label: "Products", href: "/products" },
              { label: "GCC Solutions", href: "/global-capability-center" },
              { label: "Blogs", href: "/blogs" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Pricing", href: "/pricing" },
              { label: "Contact Us", href: "/contact-us" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  location === link.href
                    ? "text-white bg-indigo-600/30 border border-indigo-500/40"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
