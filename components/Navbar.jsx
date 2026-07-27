import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 flex items-center justify-between bg-white shadow-sm border-b border-gray-100">
      {/* Logo */}
      <Link href="/" className="flex items-center group">
        <img src="https://www.enfycon.com/images/logos/enfycon-logo-only.png" alt="Enfycon" className="h-10 w-auto" />
        <span className="text-black text-2xl font-bold ml-2 tracking-tight">enfycon</span>
      </Link>

      {/* Center Navigation */}
      <div className="hidden lg:flex items-center gap-8">
        <Link href="/" className="text-[#3b5bdb] text-sm font-bold">Home</Link>
        <Link href="/services" className="text-gray-700 text-sm font-medium hover:text-[#3b5bdb] transition-colors">Solutions</Link>
        <Link href="/about" className="text-gray-700 text-sm font-medium hover:text-[#3b5bdb] transition-colors">Company</Link>
        <Link href="/careers" className="text-gray-700 text-sm font-medium hover:text-[#3b5bdb] transition-colors">Careers</Link>
        <Link href="/contact" className="text-gray-700 text-sm font-medium hover:text-[#3b5bdb] transition-colors">Contact</Link>
        <Link href="/blog" className="text-gray-700 text-sm font-medium hover:text-[#3b5bdb] transition-colors">Blog</Link>
      </div>

      {/* Right CTA */}
      <div className="flex items-center">
        <Link href="/contact" className="bg-[#3b5bdb] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#364fc7] transition-colors shadow-md">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
