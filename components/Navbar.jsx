import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 flex items-center justify-between bg-white shadow-sm border-b border-gray-100">
      {/* Logo */}
      <Link href="/" className="flex items-center group">
        <img src="https://www.enfycon.com/images/logos/enfycon-logo-only.png" alt="Enfycon" className="h-10 w-auto" />
        <span className="text-black text-2xl font-bold ml-2 tracking-tight">enfycon</span>
      </Link>

      {/* Center Navigation */}
      <div className="hidden lg:flex items-center gap-8 relative">
        <Link href="/" className="text-gray-700 text-sm font-medium hover:text-[#3b5bdb] transition-colors">Home</Link>
        
        {/* Industries Dropdown */}
        <div className="group relative">
          <button className="flex items-center gap-1 text-gray-700 text-sm font-medium hover:text-[#3b5bdb] transition-colors py-2">
            Industries <ChevronDown className="w-4 h-4" />
          </button>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border border-gray-100 shadow-xl rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-3 gap-4">
            <Link href="/industries/banking" className="text-sm text-gray-600 hover:text-[#3b5bdb]">Banking</Link>
            <Link href="/industries/finance" className="text-sm text-gray-600 hover:text-[#3b5bdb]">Finance</Link>
            <Link href="/industries/healthcare" className="text-sm text-gray-600 hover:text-[#3b5bdb]">Healthcare</Link>
            <Link href="/industries/government" className="text-sm text-gray-600 hover:text-[#3b5bdb]">Government</Link>
            <Link href="/industries/human-resource" className="text-sm text-gray-600 hover:text-[#3b5bdb]">Human Resource</Link>
            <Link href="/industries/legal" className="text-sm text-gray-600 hover:text-[#3b5bdb]">Legal</Link>
            <Link href="/industries/manufacturing" className="text-sm text-gray-600 hover:text-[#3b5bdb]">Manufacturing</Link>
            <Link href="/industries/tourism" className="text-sm text-gray-600 hover:text-[#3b5bdb]">Tourism</Link>
          </div>
        </div>

        {/* Products Dropdown */}
        <div className="group relative">
          <button className="flex items-center gap-1 text-gray-700 text-sm font-medium hover:text-[#3b5bdb] transition-colors py-2">
            Products <ChevronDown className="w-4 h-4" />
          </button>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border border-gray-100 shadow-xl rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-3 gap-4">
            <Link href="/products/enfysync" className="text-sm text-gray-600 hover:text-[#3b5bdb]">enfysync</Link>
            <Link href="/products/ivaak-ai" className="text-sm text-gray-600 hover:text-[#3b5bdb]">iVaak.ai</Link>
            <Link href="/products/truefix-ai" className="text-sm text-gray-600 hover:text-[#3b5bdb]">Truefix.ai</Link>
            <Link href="/products/icognito-ai" className="text-sm text-gray-600 hover:text-[#3b5bdb]">iCognito.ai</Link>
            <Link href="/products/idental-ai" className="text-sm text-gray-600 hover:text-[#3b5bdb]">iDental.ai</Link>
            <Link href="/products/lexgenie-ai" className="text-sm text-gray-600 hover:text-[#3b5bdb]">lexGenie.ai</Link>
          </div>
        </div>

        {/* Services Dropdown */}
        <div className="group relative">
          <button className="flex items-center gap-1 text-gray-700 text-sm font-medium hover:text-[#3b5bdb] transition-colors py-2">
            Services <ChevronDown className="w-4 h-4" />
          </button>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white border border-gray-100 shadow-xl rounded-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col gap-3">
            <Link href="/services/ai-allied-services" className="text-sm text-gray-600 hover:text-[#3b5bdb]">AI & Allied Services</Link>
            <Link href="/services/it-professional-staffing" className="text-sm text-gray-600 hover:text-[#3b5bdb]">IT Staffing</Link>
            <Link href="/services/data-analytics" className="text-sm text-gray-600 hover:text-[#3b5bdb]">Data & Analytics</Link>
            <Link href="/services/cybersecurity-services" className="text-sm text-gray-600 hover:text-[#3b5bdb]">Cybersecurity</Link>
            <Link href="/services/digital-marketing" className="text-sm text-gray-600 hover:text-[#3b5bdb]">Digital Marketing</Link>
          </div>
        </div>

        {/* Company Dropdown */}
        <div className="group relative">
          <button className="flex items-center gap-1 text-gray-700 text-sm font-medium hover:text-[#3b5bdb] transition-colors py-2">
            Company <ChevronDown className="w-4 h-4" />
          </button>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white border border-gray-100 shadow-xl rounded-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col gap-3">
            <Link href="/about" className="text-sm text-gray-600 hover:text-[#3b5bdb]">About Us</Link>
            <Link href="/career" className="text-sm text-gray-600 hover:text-[#3b5bdb]">Career</Link>
            <Link href="/blogs" className="text-sm text-gray-600 hover:text-[#3b5bdb]">Blogs</Link>
            <Link href="/contact-us" className="text-sm text-gray-600 hover:text-[#3b5bdb]">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Right CTA */}
      <div className="flex items-center">
        <Link href="/contact-us" className="bg-[#3b5bdb] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#364fc7] transition-colors shadow-md">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
