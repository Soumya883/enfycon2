import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Menu, X, ArrowUpRight, ChevronDown,
  Cpu, Shield, Globe, Users, BarChart3, Wrench, BookOpen,
  Building2, Scale, Heart, Plane, Landmark, Factory, Truck, DollarSign,
  Bot, FileText, Lock, Zap, TrendingUp,
  BookMarked, Newspaper, PenLine,
  Briefcase, UserCircle, HandHeart, Flag, FileCheck2
} from "lucide-react";
import { useLocation } from "wouter";

/* ─────────────────── Mega-menu data ─────────────────── */
const megaMenus: Record<string, {
  sections: {
    heading?: string;
    items: { label: string; href: string; icon?: any; desc?: string; img?: string }[];
  }[];
}> = {
  Services: {
    sections: [
      {
        heading: "Core Capabilities",
        items: [
          { label: "AI Allied Services", href: "/services#ai-allied-services", icon: Bot, desc: "Agentic AI & LLM orchestration" },
          { label: "Digital Engineering", href: "/services#digital-engineering", icon: Cpu, desc: "Full-stack product engineering" },
          { label: "Data & Analytics", href: "/services#data-analytics", icon: BarChart3, desc: "Insights-driven transformation" },
          { label: "Cybersecurity", href: "/services#cybersecurity", icon: Shield, desc: "Zero-trust & SOC-2 compliance" },
          { label: "Digital Marketing", href: "/services#digital-marketing", icon: TrendingUp, desc: "Growth & performance marketing" },
        ],
      },
      {
        heading: "Staffing & Talent",
        items: [
          { label: "US IT Staffing", href: "/services#it-staffing", icon: Users, desc: "Premier tech talent placement" },
          { label: "AI Tools for Hiring", href: "/tools", icon: Wrench, desc: "11 free AI recruitment tools" },
        ],
      },
    ],
  },
  Industries: {
    sections: [
      {
        items: [
          { label: "Banking", href: "/industries#banking", img: "https://www.enfycon.com/_next/image?url=%2Fimages%2Findustries%2Fbanking%2Fdigital-banking-transformation.jpg&w=828&q=85", desc: "Digital banking transformation" },
          { label: "Government", href: "/industries#government", img: "https://www.enfycon.com/_next/image?url=%2Fimages%2Findustries%2Fgovernment%2Fgovt.jpeg&w=828&q=85", desc: "Smart governance & e-gov" },
          { label: "Finance", href: "/industries#finance", img: "https://www.enfycon.com/_next/image?url=%2Fimages%2Findustries%2Ffinance%2Fmain-hero%201.jpg&w=828&q=85", desc: "FinTech & capital markets" },
          { label: "Healthcare", href: "/industries#healthcare", img: "https://www.enfycon.com/_next/image?url=%2Fimages%2Findustries%2Fhealth-care.jpg&w=828&q=85", desc: "AI-driven patient care" },
          { label: "Human Resources", href: "/industries#human-resource", img: "https://www.enfycon.com/_next/image?url=%2Fimages%2Findustries%2Fhuman-resource.jpg&w=828&q=85", desc: "Workforce intelligence" },
          { label: "Legal", href: "/industries#legal", img: "https://www.enfycon.com/_next/image?url=%2Fimages%2Findustries%2Flegal.jpg&w=828&q=85", desc: "LegalTech & compliance" },
          { label: "Supply Chain", href: "/industries#supply-chain-logistics", img: "https://www.enfycon.com/_next/image?url=%2Fimages%2Findustries%2Fsupply-chain.jpg&w=828&q=85", desc: "Smart logistics & SCM" },
          { label: "Manufacturing", href: "/industries#manufacturing", img: "https://www.enfycon.com/_next/image?url=%2Fimages%2Findustries%2Fmanufacturing.jpg&w=828&q=85", desc: "Industry 4.0 & IoT" },
          { label: "Tourism", href: "/industries#tourism", img: "https://www.enfycon.com/_next/image?url=%2Fimages%2Findustries%2Ftourism%2Fbanner2.jpg&w=828&q=85", desc: "Smart travel experiences" },
        ],
      },
    ],
  },
  Products: {
    sections: [
      {
        heading: "AI Products",
        items: [
          { label: "iCognito AI", href: "/products#icognito-ai", icon: Bot, desc: "Cognitive intelligence platform" },
          { label: "iDental AI", href: "/products#idental-ai", icon: Heart, desc: "AI-powered dental diagnostics" },
          { label: "LexGenie AI", href: "/products#lexgenie-ai", icon: Scale, desc: "Legal intelligence engine" },
          { label: "QuantFin AI", href: "/products#quantfin-ai", icon: DollarSign, desc: "Quantitative finance AI" },
          { label: "PerformanceEdge AI", href: "/products#performanceedge-ai", icon: TrendingUp, desc: "Employee performance AI" },
          { label: "iWAC AI", href: "/products#iwac-ai", icon: Globe, desc: "Workforce analytics & compliance" },
          { label: "iVAAK AI", href: "/products#ivaak-ai", icon: Cpu, desc: "Voice AI assistant platform" },
          { label: "TrueFix AI", href: "/products#truefix-ai", icon: Wrench, desc: "Intelligent issue resolution" },
          { label: "EnfySync", href: "/products#enfysync", icon: Zap, desc: "Enterprise data sync engine" },
        ],
      },
    ],
  },
  "GCC Solutions": {
    sections: [
      {
        heading: "Global Capability Centers",
        items: [
          { label: "GCC Overview", href: "/global-capability-center", img: "https://www.enfycon.com/images/gcc/bbs-gcc.jpg", desc: "India's premier GCC hub" },
          { label: "Workspace Infrastructure", href: "/global-capability-center#infrastructure", img: "https://www.enfycon.com/images/gcc/workspcace-infra.jpg", desc: "World-class office setups" },
          { label: "Bhubaneswar City", href: "/global-capability-center#bhubaneswar", img: "https://www.enfycon.com/images/gcc/bhubaneswar-city.png", desc: "Emerging tech capital of India" },
        ],
      },
    ],
  },
  Company: {
    sections: [
      {
        heading: "About Enfycon",
        items: [
          { label: "About Us", href: "/about", icon: Building2, desc: "Our story & mission" },
          { label: "Our Team", href: "/team", icon: UserCircle, desc: "Leadership & people" },
          { label: "Our Culture", href: "/our-culture", icon: HandHeart, desc: "Values & work philosophy" },
          { label: "CSR", href: "/csr", icon: Flag, desc: "Community & sustainability" },
          { label: "Careers", href: "/career", icon: Briefcase, desc: "Join our global team" },
        ],
      },
      {
        heading: "Resources",
        items: [
          { label: "Blog", href: "/blogs", icon: Newspaper, desc: "Insights & thought leadership" },
          { label: "Publications", href: "/publications", icon: BookMarked, desc: "Whitepapers & reports" },
          { label: "Media Kit", href: "/media-kit", icon: PenLine, desc: "Press & brand assets" },
          { label: "Code of Ethics", href: "/code-of-ethics", icon: FileCheck2, desc: "Our ethical standards" },
        ],
      },
    ],
  },
};

const topLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", mega: "Services" },
  { label: "Industries", href: "/industries", mega: "Industries" },
  { label: "Products", href: "/products", mega: "Products" },
  { label: "GCC Solutions", href: "/global-capability-center", mega: "GCC Solutions" },
  { label: "Company", href: "/about", mega: "Company" },
  { label: "Blogs", href: "/blogs" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
];

/* ─────────────────── Dropdown variants ─────────────────── */
const dropVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.22, ease: "easeOut" as const } },
  exit: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.15 } },
};

/* ─────────────────── Component ─────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [location, setLocation] = useLocation();
  const isHome = location === "/";
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setActiveMenu(null); }, [location]);

  const isTransparent = isHome && !scrolled;

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };
  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };
  const stayOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent py-5 md:py-6"
          : "bg-slate-950/92 backdrop-blur-2xl border-b border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-3"
      }`}
    >
      <div className="container flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center shrink-0 group" onClick={() => setLocation("/")}>
          <img
            src="/images/logos/enfycon-white.png"
            alt="Enfycon Logo"
            className="h-12 md:h-14 w-auto object-contain brightness-110 drop-shadow-[0_0_12px_rgba(79,70,229,0.5)] group-hover:scale-105 transition-all duration-300"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://www.enfycon.com/images/logos/enfycon-white.png"; }}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5 bg-slate-900/70 backdrop-blur-xl border border-slate-800/60 px-2 py-1.5 rounded-full shadow-inner relative">
          {topLinks.map((link) => {
            const isActive = location === link.href || (link.mega === "Industries" && location === "/industries") || (link.mega === "Services" && location === "/services");
            const hasMega = !!link.mega && !!megaMenus[link.mega];
            return (
              <div
                key={link.href + link.label}
                className="relative"
                onMouseEnter={() => hasMega && openMenu(link.mega!)}
                onMouseLeave={() => hasMega && closeMenu()}
              >
                <a
                  href={link.href}
                  className={`relative flex items-center gap-1 px-3 py-2 rounded-full text-[11px] font-bold transition-all duration-300 group ${
                    isActive ? "text-white" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-[0_0_18px_rgba(124,58,237,0.5)]"
                      transition={{ type: "spring", stiffness: 380, damping: 36 }}
                    />
                  )}
                  {!isActive && (
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                  )}
                  <span className="relative z-10">{link.label}</span>
                  {hasMega && <ChevronDown className={`relative z-10 w-3 h-3 transition-transform duration-200 ${activeMenu === link.mega ? "rotate-180" : ""}`} />}
                </a>

                {/* Mega Menu Dropdown */}
                {hasMega && (
                  <AnimatePresence>
                    {activeMenu === link.mega && (
                      <motion.div
                        variants={dropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onMouseEnter={stayOpen}
                        onMouseLeave={closeMenu}
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-slate-950/98 backdrop-blur-2xl border border-slate-800/80 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden z-50 ${
                          link.mega === "Industries" ? "w-[760px]" :
                          link.mega === "Company" ? "w-[580px]" :
                          link.mega === "Products" ? "w-[500px]" :
                          "w-[480px]"
                        }`}
                      >
                        {/* Top accent line */}
                        <div className="h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400" />

                        <div className={`p-5 ${link.mega === "Company" ? "grid grid-cols-2 gap-6" : ""}`}>
                          {megaMenus[link.mega!].sections.map((section, si) => (
                            <div key={si}>
                              {section.heading && (
                                <p className="text-[10px] font-extrabold text-indigo-400 uppercase tracking-widest mb-3 pl-1">{section.heading}</p>
                              )}

                              {/* INDUSTRY GRID — images */}
                              {link.mega === "Industries" ? (
                                <div className="grid grid-cols-3 gap-2.5">
                                  {section.items.map((item, ii) => (
                                    <a
                                      key={ii}
                                      href={item.href}
                                      className="group relative rounded-xl overflow-hidden h-24 block"
                                    >
                                      <img
                                        src={item.img}
                                        alt={item.label}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(item.label) + "&background=1e1b4b&color=fff&size=200"; }}
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                                      <div className="absolute bottom-0 left-0 right-0 p-2.5">
                                        <p className="text-white text-[11px] font-extrabold leading-tight">{item.label}</p>
                                        <p className="text-slate-300 text-[9px] mt-0.5 leading-tight">{item.desc}</p>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              ) : link.mega === "GCC Solutions" ? (
                                /* GCC — image cards */
                                <div className="grid grid-cols-3 gap-3">
                                  {section.items.map((item, ii) => (
                                    <a
                                      key={ii}
                                      href={item.href}
                                      className="group relative rounded-xl overflow-hidden h-28 block"
                                    >
                                      <img
                                        src={item.img}
                                        alt={item.label}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(item.label) + "&background=1e1b4b&color=fff&size=200"; }}
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                                      <div className="absolute bottom-0 left-0 right-0 p-2.5">
                                        <p className="text-white text-[11px] font-extrabold leading-tight">{item.label}</p>
                                        <p className="text-slate-300 text-[9px] mt-0.5">{item.desc}</p>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              ) : (
                                /* Default icon list */
                                <div className="grid grid-cols-1 gap-0.5">
                                  {section.items.map((item, ii) => (
                                    <a
                                      key={ii}
                                      href={item.href}
                                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-indigo-500/10 hover:border-indigo-500/20 border border-transparent group transition-all duration-200"
                                    >
                                      {item.icon && (
                                        <div className="w-8 h-8 rounded-lg bg-indigo-950/80 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-200">
                                          <item.icon className="w-4 h-4" />
                                        </div>
                                      )}
                                      <div className="flex-1 min-w-0">
                                        <p className="text-slate-200 text-xs font-bold group-hover:text-white transition-colors">{item.label}</p>
                                        {item.desc && <p className="text-slate-500 text-[10px] mt-0.5 truncate">{item.desc}</p>}
                                      </div>
                                      <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-indigo-400 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all" />
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Footer CTA bar */}
                        <div className="bg-slate-900/60 border-t border-slate-800/60 px-5 py-3 flex items-center justify-between">
                          <p className="text-slate-400 text-[10px]">Explore all {link.label} →</p>
                          <a
                            href={link.href}
                            className="text-indigo-400 text-[10px] font-extrabold hover:text-indigo-300 transition-colors flex items-center gap-1"
                          >
                            View all <ArrowUpRight className="w-3 h-3" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Button
            className="hidden lg:inline-flex font-extrabold rounded-full px-6 py-4 text-xs bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-[0_0_25px_rgba(79,70,229,0.5)] hover:shadow-[0_0_35px_rgba(0,212,255,0.7)] active:scale-[0.96] transition-all duration-300 items-center gap-1.5"
            onClick={() => setLocation("/contact-us")}
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </Button>

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
            className="lg:hidden fixed inset-x-0 top-[70px] bg-slate-950/97 backdrop-blur-2xl border-b border-slate-800 shadow-2xl z-50 max-h-[85vh] overflow-y-auto"
          >
            <div className="container py-4 flex flex-col gap-1">
              {/* All pages grouped */}
              {[
                { group: "Main", links: [
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Industries", href: "/industries" },
                  { label: "Products", href: "/products" },
                  { label: "GCC Solutions", href: "/global-capability-center" },
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "Blogs", href: "/blogs" },
                ]},
                { group: "Company", links: [
                  { label: "Our Team", href: "/team" },
                  { label: "Our Culture", href: "/our-culture" },
                  { label: "CSR", href: "/csr" },
                  { label: "Careers", href: "/career" },
                  { label: "Publications", href: "/publications" },
                  { label: "Media Kit", href: "/media-kit" },
                  { label: "Tools", href: "/tools" },
                ]},
                { group: "Legal", links: [
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "Terms & Conditions", href: "/terms-and-conditions" },
                  { label: "Cookie Policy", href: "/cookie-policy" },
                  { label: "Code of Ethics", href: "/code-of-ethics" },
                ]},
              ].map((section) => (
                <div key={section.group} className="mb-3">
                  <p className="text-[10px] font-extrabold text-indigo-400 uppercase tracking-widest mb-1.5 px-4">{section.group}</p>
                  {section.links.map((link, i) => (
                    <motion.a
                      key={link.href + link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                      onClick={() => setMobileOpen(false)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-extrabold transition-all flex items-center justify-between ${
                        location === link.href
                          ? "text-white bg-indigo-600/40 border border-indigo-500/50 shadow-md"
                          : "text-slate-200 hover:text-white hover:bg-white/8"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                    </motion.a>
                  ))}
                </div>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-800">
                <Button
                  className="w-full font-extrabold rounded-xl py-4 text-sm bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white shadow-xl flex items-center justify-center gap-2 hover:from-indigo-500 hover:to-cyan-400 active:scale-[0.98] transition-all"
                  onClick={() => { setMobileOpen(false); setLocation("/contact-us"); }}
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
