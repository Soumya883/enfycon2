import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLocation } from "wouter";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Products", href: "/products" },
  { label: "GCC Solutions", href: "/global-capability-center" },
  { label: "Blogs", href: "/blogs" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  // On homepage hero: fully transparent. On scroll or non-home: frosted glass.
  const isTransparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent py-5 md:py-6"
          : "bg-slate-950/90 backdrop-blur-2xl border-b border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-3"
      }`}
    >
      <div className="container flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center shrink-0 group" onClick={() => setLocation("/")}>
          <img
            src="/images/logos/enfycon-white.png"
            alt="Enfycon Logo"
            className="h-12 md:h-16 w-auto object-contain brightness-110 drop-shadow-[0_0_12px_rgba(79,70,229,0.5)] group-hover:scale-105 transition-all duration-300"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://www.enfycon.com/images/logos/enfycon-white.png"; }}
          />
        </a>

        {/* Desktop Navigation — pill nav container */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-900/70 backdrop-blur-xl border border-slate-800/60 px-3 py-1.5 rounded-full shadow-inner relative">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 group ${
                  isActive
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {/* Sliding active pill with layoutId */}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-[0_0_18px_rgba(124,58,237,0.5)]"
                    transition={{ type: "spring", stiffness: 380, damping: 36 }}
                  />
                )}

                {/* Hover underline (only for inactive) */}
                {!isActive && (
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Desktop CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Button
            className="hidden lg:inline-flex font-extrabold rounded-full px-6 py-4 text-xs bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-[0_0_25px_rgba(79,70,229,0.5)] hover:shadow-[0_0_35px_rgba(0,212,255,0.7)] active:scale-[0.96] transition-all duration-300 items-center gap-1.5"
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

          {/* 3-Line Hamburger */}
          <button
            className="lg:hidden p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white hover:text-cyan-400 hover:border-cyan-400/50 active:scale-95 transition-all shadow-md flex items-center justify-center shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden fixed inset-x-0 top-[70px] bg-slate-950/97 backdrop-blur-2xl border-b border-slate-800 p-6 shadow-2xl z-50"
          >
            <div className="container flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-extrabold transition-all flex items-center justify-between ${
                    location === link.href
                      ? "text-white bg-indigo-600/40 border border-indigo-500/50 shadow-md"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </motion.a>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-800">
                <Button
                  className="w-full font-extrabold rounded-xl py-4 text-sm bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white shadow-xl flex items-center justify-center gap-2 hover:from-indigo-500 hover:to-cyan-400 active:scale-[0.98] transition-all"
                  onClick={() => {
                    setMobileOpen(false);
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
