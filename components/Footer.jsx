import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Phone, MapPin, ShieldCheck, Linkedin, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070b14] pt-20 pb-10 text-white border-t border-slate-800 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Newsletter & Call To Action Banner */}
        <div className="bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 border border-blue-500/20 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-md">
          <div className="max-w-xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400 mb-2 block">Stay Ahead of Enterprise AI Trends</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Subscribe to Enfycon Tech Insights</h3>
            <p className="text-slate-400 text-sm">Join 15,000+ enterprise leaders receiving our monthly briefings on AI architecture, cybersecurity, and engineering strategy.</p>
          </div>

          <form className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your work email..." 
              className="bg-slate-900/90 border border-slate-700/80 rounded-full px-5 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors min-w-[280px]"
              required
            />
            <button 
              type="submit" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-7 py-3.5 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 shrink-0"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2">
              <img src="https://www.enfycon.com/images/logos/enfycon-logo-only.png" alt="Enfycon" className="h-9 w-auto filter brightness-0 invert" />
              <span className="text-2xl font-extrabold tracking-tight text-white">
                enfycon<span className="text-blue-500 text-3xl leading-none">.</span>
              </span>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Accelerating enterprise digital transformation through autonomous AI systems, resilient cybersecurity, and top 1% technical talent.
            </p>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>3921 Long Prairie Road, Building 5, Flower Mound, TX 75028, United States</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+1 201.201.7078</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>office@enfycon.com</span>
              </div>
            </div>
          </div>
          
          {/* Industries Column */}
          <div>
            <h4 className="font-bold text-white text-base mb-5 tracking-wide">Industries</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/industries/banking" className="text-slate-400 hover:text-white transition-colors">Banking & Fintech</Link></li>
              <li><Link href="/industries/healthcare" className="text-slate-400 hover:text-white transition-colors">Healthcare & Biotech</Link></li>
              <li><Link href="/industries/finance" className="text-slate-400 hover:text-white transition-colors">Capital Markets</Link></li>
              <li><Link href="/industries/government" className="text-slate-400 hover:text-white transition-colors">Government & Civic</Link></li>
              <li><Link href="/industries/manufacturing" className="text-slate-400 hover:text-white transition-colors">Manufacturing</Link></li>
              <li><Link href="/industries/supply-chain-logistics" className="text-slate-400 hover:text-white transition-colors">Logistics & Supply Chain</Link></li>
            </ul>
          </div>
          
          {/* Products & Services Column */}
          <div>
            <h4 className="font-bold text-white text-base mb-5 tracking-wide">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/ai-allied-services" className="text-slate-400 hover:text-white transition-colors">AI Agentic Services</Link></li>
              <li><Link href="/services/it-professional-staffing" className="text-slate-400 hover:text-white transition-colors">IT Staffing & Squads</Link></li>
              <li><Link href="/services/cybersecurity-services" className="text-slate-400 hover:text-white transition-colors">Cybersecurity & SOC 2</Link></li>
              <li><Link href="/products/enfysync" className="text-slate-400 hover:text-white transition-colors">enfysync Engine</Link></li>
              <li><Link href="/products/ivaak-ai" className="text-slate-400 hover:text-white transition-colors">iVaak.ai Voice AI</Link></li>
              <li><Link href="/products/truefix-ai" className="text-slate-400 hover:text-white transition-colors">Truefix.ai DevOps</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-white text-base mb-5 tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/career" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/our-culture" className="text-slate-400 hover:text-white transition-colors">Our Culture</Link></li>
              <li><Link href="/csr" className="text-slate-400 hover:text-white transition-colors">Social Responsibility</Link></li>
              <li><Link href="/blogs" className="text-slate-400 hover:text-white transition-colors">Insights & Blogs</Link></li>
              <li><Link href="/contact-us" className="text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Bar: Copyright & Compliance */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Enfycon Inc. All Rights Reserved. Built for Global Enterprise Excellence.</p>
          
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-slate-300 transition-colors">Cookie Policy</Link>
            <Link href="/site-map" className="hover:text-slate-300 transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
