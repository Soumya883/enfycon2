import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg shadow-gray-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo Only (Side Text Removed) */}
        <a href="/" className="flex items-center shrink-0" onClick={() => setLocation("/")}>
          <img
            src={
              scrolled || !isHome
                ? "/images/logos/logo-large.webp"
                : "/images/logos/enfycon-white.png"
            }
            alt="Enfycon Logo"
            className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = scrolled || !isHome
                ? "https://www.enfycon.com/images/logos/logo-large.webp"
                : "https://www.enfycon.com/images/logos/enfycon-white.png";
            }}
          />
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {[
            { label: "About Us", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Industries", href: "/industries" },
            { label: "Products", href: "/products" },
            { label: "GCC Solutions", href: "/global-capability-center" },
            { label: "Blogs", href: "/blogs" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Pricing", href: "/pricing" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location === link.href
                  ? "text-primary bg-primary/5 font-semibold"
                  : scrolled || !isHome
                  ? "text-gray-700 hover:text-primary hover:bg-gray-50"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button
            className={`font-semibold rounded-full px-7 shadow-[0_4px_25px_rgba(59,91,219,0.25)] active:scale-[0.97] transition-all duration-160 ${
              scrolled || !isHome
                ? "bg-primary hover:bg-primary/90 text-white"
                : "bg-white hover:bg-gray-100 text-gray-900"
            }`}
            onClick={() => {
              if (isHome) {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              } else {
                setLocation("/contact-us");
              }
            }}
          >
            Contact Us
          </Button>
          <button
            className={`lg:hidden p-2 ${scrolled || !isHome ? "text-gray-900" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-b border-gray-200">
          <div className="container py-4 flex flex-col gap-1">
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
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-primary bg-primary/5 font-semibold"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
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
