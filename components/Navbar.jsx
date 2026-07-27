import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img src="https://www.enfycon.com/images/logos/enfycon-logo-only.png" alt="Enfycon" className="h-10 w-auto filter brightness-0 invert" />
        <span className="text-white text-2xl font-bold ml-2 tracking-tight">enfycon</span>
      </Link>

      {/* Center Navigation Pill */}
      <div className="hidden lg:flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-3 gap-8">
        <Link href="/" className="text-white text-sm font-medium hover:text-white/80 transition-colors">Home</Link>
        <Link href="/services" className="text-white/80 text-sm font-medium hover:text-white transition-colors">Solutions</Link>
        <Link href="/about" className="text-white/80 text-sm font-medium hover:text-white transition-colors">Company</Link>
        <Link href="/careers" className="text-white/80 text-sm font-medium hover:text-white transition-colors">Careers</Link>
        <Link href="/contact" className="text-white/80 text-sm font-medium hover:text-white transition-colors">Contact</Link>
        <Link href="/blog" className="text-white/80 text-sm font-medium hover:text-white transition-colors">Blog</Link>
      </div>

      {/* Right CTA */}
      <div className="flex items-center">
        <Link href="/contact" className="bg-[#3b5bdb] text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[#364fc7] transition-all shadow-[0_4px_14px_rgba(59,91,219,0.4)]">
          Get Started <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </nav>
  );
}
