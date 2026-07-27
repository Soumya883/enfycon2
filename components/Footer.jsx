import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#02040a] pt-32 pb-10 text-white relative overflow-hidden border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-[#3b5bdb]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20 relative z-10">
        
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <Link href="/" className="inline-flex items-center gap-3 mb-8 group">
            <img src="https://www.enfycon.com/images/logos/enfycon-logo-only.png" alt="Enfycon Logo" className="h-10 w-auto filter brightness-0 invert group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300" />
            <span className="text-3xl font-bold tracking-tight font-['Space_Grotesk']">enfycon</span>
          </Link>
          <p className="text-gray-400 max-w-sm mb-10 leading-relaxed text-sm">
            Delivering precision AI solutions, robust cybersecurity, and elite IT staffing for the modern enterprise. We empower digital transformation globally.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#3b5bdb] transition-all border border-white/10 hover:border-[#3b5bdb] hover:shadow-[0_0_15px_rgba(59,91,219,0.5)]">in</a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#3b5bdb] transition-all border border-white/10 hover:border-[#3b5bdb] hover:shadow-[0_0_15px_rgba(59,91,219,0.5)]">tw</a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#3b5bdb] transition-all border border-white/10 hover:border-[#3b5bdb] hover:shadow-[0_0_15px_rgba(59,91,219,0.5)]">fb</a>
          </div>
        </div>
        
        {/* Solutions Links */}
        <div>
          <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-sm text-[#4c6ef5]">Solutions</h4>
          <ul className="flex flex-col gap-5">
            <li><Link href="/services/ai-agentic-solutions" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">AI Agentic Solutions</Link></li>
            <li><Link href="/services/cybersecurity" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">Cybersecurity</Link></li>
            <li><Link href="/services/it-staffing" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">US IT Staffing</Link></li>
            <li><Link href="/services/enterprise-modernization" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">Enterprise Modernization</Link></li>
          </ul>
        </div>
        
        {/* Company Links */}
        <div>
          <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-sm text-[#4c6ef5]">Company</h4>
          <ul className="flex flex-col gap-5">
            <li><Link href="/about" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">About Us</Link></li>
            <li><Link href="/careers" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">Careers</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">Contact</Link></li>
            <li><Link href="/blog" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">News & Blog</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-1">
          <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-sm text-[#4c6ef5]">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">Subscribe to our newsletter for the latest tech insights.</p>
          <form className="flex flex-col gap-4">
            <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-[#4c6ef5] focus:shadow-[0_0_10px_rgba(76,110,245,0.3)] transition-all" />
            <button type="submit" className="bg-transparent border border-[#3b5bdb] text-white px-5 py-3.5 rounded-xl font-bold flex justify-center items-center gap-3 hover:bg-[#3b5bdb]/20 transition-all text-sm w-full shadow-[0_0_15px_rgba(59,91,219,0.2)]">
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between relative z-10">
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Enfycon. All rights reserved.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</Link>
          <Link href="/terms" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
