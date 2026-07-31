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
          ? "bg-slate-950/90 backdrop-blur-2xl border-b border-slate-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo 20% Larger & Brighter */}
        <a href="/" className="flex items-center shrink-0 group" onClick={() => setLocation("/")}>
          <img
            src="/images/logos/enfycon-white.png"
            alt="Enfycon Logo"
            className="h-10 md:h-14 w-auto object-contain brightness-110 drop-shadow-[0_0_12px_rgba(79,70,229,0.5)] group-hover:scale-105 transition-all duration-300"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "https://www.enfycon.com/images/logos/enfycon-white.png";
            }}
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1.5 bg-slate-900/70 backdrop-blur-xl border border-slate-800/80 px-4 py-1.5 rounded-full shadow-inner">
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

        {/* Actions & Hamburger Toggle */}
        <div className="flex items-center gap-3">
          <Button
            className="hidden sm:inline-flex font-extrabold rounded-full px-6 py-4 text-xs bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-[0_0_25px_rgba(79,70,229,0.5)] hover:shadow-[0_0_35px_rgba(0,212,255,0.7)] active:scale-[0.96] transition-all duration-300 items-center gap-1.5"
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

          {/* Always Visible Mobile Hamburger Button */}
          <button
            className="lg:hidden p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white hover:text-cyan-400 hover:border-cyan-400/50 active:scale-95 transition-all shadow-md flex items-center justify-center shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 p-6 shadow-2xl z-50 animate-in slide-in-from-top-4 duration-300">
          <div className="container flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
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
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3.5 rounded-xl text-sm font-extrabold transition-all flex items-center justify-between ${
                  location === link.href
                    ? "text-white bg-indigo-600/40 border border-indigo-500/50 shadow-md"
                    : "text-slate-200 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-800">
              <Button
                className="w-full font-extrabold rounded-xl py-4 text-xs bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white shadow-lg flex items-center justify-center gap-2"
                onClick={() => {
                  setMobileOpen(false);
                  setLocation("/contact-us");
                }}
              >
                <span>Get Started Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
