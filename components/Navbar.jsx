import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 flex items-center justify-between bg-[#030614]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl">
      {/* Logo */}
      <Link href="/" className="flex items-center group">
        <img src="https://www.enfycon.com/images/logos/enfycon-logo-only.png" alt="Enfycon" className="h-10 w-auto filter brightness-0 invert group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300" />
        <span className="text-white text-2xl font-bold ml-3 tracking-tight font-['Space_Grotesk']">enfycon</span>
      </Link>

      {/* Center Navigation Pill */}
      <div className="hidden lg:flex items-center glass-panel rounded-full px-8 py-3 gap-8 shadow-inner shadow-white/5">
        <Link href="/" className="text-white text-sm font-medium hover:text-[#3b5bdb] transition-colors">Home</Link>
        <Link href="/services" className="text-gray-400 text-sm font-medium hover:text-white transition-colors">Solutions</Link>
        <Link href="/about" className="text-gray-400 text-sm font-medium hover:text-white transition-colors">Company</Link>
        <Link href="/careers" className="text-gray-400 text-sm font-medium hover:text-white transition-colors">Careers</Link>
        <Link href="/contact" className="text-gray-400 text-sm font-medium hover:text-white transition-colors">Contact</Link>
        <Link href="/blog" className="text-gray-400 text-sm font-medium hover:text-white transition-colors">Blog</Link>
      </div>

      {/* Right CTA */}
      <div className="flex items-center">
        <Link href="/contact" className="bg-[#3b5bdb] text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[#4c6ef5] hover:shadow-[0_0_20px_rgba(59,91,219,0.5)] transition-all border border-[#3b5bdb]/50">
          Get Started <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </nav>
  );
}
