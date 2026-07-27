import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1d] pt-24 pb-10 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 relative z-10">
        
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <img src="https://www.enfycon.com/images/logos/enfycon-logo-only.png" alt="Enfycon Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold tracking-tight">enfycon</span>
          </Link>
          <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
            Delivering precision AI solutions, robust cybersecurity, and elite IT staffing for the modern enterprise. We empower digital transformation globally.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#3b5bdb] transition-colors border border-white/10">in</a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#3b5bdb] transition-colors border border-white/10">tw</a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#3b5bdb] transition-colors border border-white/10">fb</a>
          </div>
        </div>
        
        {/* Solutions Links */}
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-wider text-sm text-[#3b5bdb]">Solutions</h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="/services/ai-agentic-solutions" className="text-gray-400 hover:text-white transition-colors text-sm">AI Agentic Solutions</Link></li>
            <li><Link href="/services/cybersecurity" className="text-gray-400 hover:text-white transition-colors text-sm">Cybersecurity</Link></li>
            <li><Link href="/services/it-staffing" className="text-gray-400 hover:text-white transition-colors text-sm">US IT Staffing</Link></li>
            <li><Link href="/services/enterprise-modernization" className="text-gray-400 hover:text-white transition-colors text-sm">Enterprise Modernization</Link></li>
          </ul>
        </div>
        
        {/* Company Links */}
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-wider text-sm text-[#3b5bdb]">Company</h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
            <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">News & Blog</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-1">
          <h4 className="font-bold mb-6 uppercase tracking-wider text-sm text-[#3b5bdb]">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest tech insights.</p>
          <form className="flex flex-col gap-3">
            <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3b5bdb]" />
            <button type="submit" className="bg-[#3b5bdb] text-white px-4 py-3 rounded-lg font-bold flex justify-center items-center gap-2 hover:bg-[#364fc7] transition-all text-sm w-full">
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between relative z-10">
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Enfycon. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</Link>
          <Link href="/terms" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
