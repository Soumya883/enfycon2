'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Building2, 
  Landmark, 
  Stethoscope, 
  ShieldCheck, 
  Briefcase, 
  Scale, 
  Factory, 
  Truck, 
  Palmtree,
  Cpu,
  Bot,
  Wrench,
  Brain,
  Sparkles,
  FileCode,
  LineChart,
  Zap,
  Users,
  Database,
  Lock,
  Megaphone,
  Info,
  HeartHandshake,
  GraduationCap,
  BookOpen,
  PhoneCall,
  ArrowRight
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80' 
        : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center">
            <img 
              src="https://www.enfycon.com/images/logos/enfycon-logo-only.png" 
              alt="Enfycon Logo" 
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-slate-900 flex items-center">
            enfycon<span className="text-[#2563eb] text-3xl leading-none">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          
          <Link 
            href="/" 
            className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#2563eb] rounded-lg hover:bg-slate-50 transition-all"
          >
            Home
          </Link>

          {/* Industries Mega Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#2563eb] rounded-lg hover:bg-slate-50 transition-all">
              Industries
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180 text-[#2563eb]' : 'text-slate-400'}`} />
            </button>

            {activeDropdown === 'industries' && (
              <div className="absolute top-full left-0 w-[580px] bg-white border border-slate-200/90 shadow-2xl rounded-2xl p-6 mt-1 animate-in fade-in slide-in-from-top-2 duration-200 grid grid-cols-2 gap-3">
                <Link href="/industries/banking" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <div className="p-2 rounded-lg bg-blue-100/60 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">Banking</div>
                    <div className="text-xs text-slate-500">Fintech, compliance & fraud prevention</div>
                  </div>
                </Link>

                <Link href="/industries/finance" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <div className="p-2 rounded-lg bg-blue-100/60 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">Finance & Capital</div>
                    <div className="text-xs text-slate-500">Algorithmic trading & risk analytics</div>
                  </div>
                </Link>

                <Link href="/industries/healthcare" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <div className="p-2 rounded-lg bg-blue-100/60 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">Healthcare & Biotech</div>
                    <div className="text-xs text-slate-500">HIPAA compliant AI diagnostics</div>
                  </div>
                </Link>

                <Link href="/industries/government" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <div className="p-2 rounded-lg bg-blue-100/60 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">Government & Civic</div>
                    <div className="text-xs text-slate-500">Secure public sector digital systems</div>
                  </div>
                </Link>

                <Link href="/industries/human-resource" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <div className="p-2 rounded-lg bg-blue-100/60 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">Human Resources</div>
                    <div className="text-xs text-slate-500">AI talent matching & HR automation</div>
                  </div>
                </Link>

                <Link href="/industries/legal" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <div className="p-2 rounded-lg bg-blue-100/60 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">Legal Tech</div>
                    <div className="text-xs text-slate-500">Contract analysis & discovery LLMs</div>
                  </div>
                </Link>

                <Link href="/industries/manufacturing" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <div className="p-2 rounded-lg bg-blue-100/60 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                    <Factory className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">Manufacturing</div>
                    <div className="text-xs text-slate-500">Predictive maintenance & IoT</div>
                  </div>
                </Link>

                <Link href="/industries/supply-chain-logistics" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <div className="p-2 rounded-lg bg-blue-100/60 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">Supply Chain & Logistics</div>
                    <div className="text-xs text-slate-500">Smart routing & inventory optimization</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Products Mega Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('products')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#2563eb] rounded-lg hover:bg-slate-50 transition-all">
              Products
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180 text-[#2563eb]' : 'text-slate-400'}`} />
            </button>

            {activeDropdown === 'products' && (
              <div className="absolute top-full left-0 w-[540px] bg-white border border-slate-200/90 shadow-2xl rounded-2xl p-6 mt-1 animate-in fade-in slide-in-from-top-2 duration-200 grid grid-cols-2 gap-3">
                <Link href="/products/enfysync" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <div className="p-2 rounded-lg bg-indigo-100/60 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">enfysync</div>
                    <div className="text-xs text-slate-500">Unified enterprise AI orchestration</div>
                  </div>
                </Link>

                <Link href="/products/ivaak-ai" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <div className="p-2 rounded-lg bg-blue-100/60 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">iVaak.ai</div>
                    <div className="text-xs text-slate-500">Conversational AI voice & chat platform</div>
                  </div>
                </Link>

                <Link href="/products/truefix-ai" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <div className="p-2 rounded-lg bg-blue-100/60 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">Truefix.ai</div>
                    <div className="text-xs text-slate-500">Automated DevOps & system self-healing</div>
                  </div>
                </Link>

                <Link href="/products/icognito-ai" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <div className="p-2 rounded-lg bg-blue-100/60 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">iCognito.ai</div>
                    <div className="text-xs text-slate-500">Deep cognitive document processing</div>
                  </div>
                </Link>

                <Link href="/products/lexgenie-ai" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <div className="p-2 rounded-lg bg-blue-100/60 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                    <FileCode className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">lexGenie.ai</div>
                    <div className="text-xs text-slate-500">Legal AI assistant & compliance audit</div>
                  </div>
                </Link>

                <Link href="/products/quantfin-ai" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <div className="p-2 rounded-lg bg-blue-100/60 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                    <LineChart className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">QuantFin.ai</div>
                    <div className="text-xs text-slate-500">Quantitative financial modeling suite</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#2563eb] rounded-lg hover:bg-slate-50 transition-all">
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-[#2563eb]' : 'text-slate-400'}`} />
            </button>

            {activeDropdown === 'services' && (
              <div className="absolute top-full left-0 w-72 bg-white border border-slate-200/90 shadow-2xl rounded-2xl p-3 mt-1 animate-in fade-in slide-in-from-top-2 duration-200 flex flex-col gap-1">
                <Link href="/services/ai-allied-services" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <Sparkles className="w-4 h-4 text-[#2563eb]" />
                  <span className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">AI & Allied Services</span>
                </Link>

                <Link href="/services/it-professional-staffing" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <Users className="w-4 h-4 text-[#2563eb]" />
                  <span className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">IT Staffing & Talent</span>
                </Link>

                <Link href="/services/data-analytics" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <Database className="w-4 h-4 text-[#2563eb]" />
                  <span className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">Data & Analytics</span>
                </Link>

                <Link href="/services/cybersecurity-services" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <Lock className="w-4 h-4 text-[#2563eb]" />
                  <span className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">Cybersecurity Services</span>
                </Link>

                <Link href="/services/digital-marketing" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <Megaphone className="w-4 h-4 text-[#2563eb]" />
                  <span className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">Digital Marketing</span>
                </Link>
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('company')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#2563eb] rounded-lg hover:bg-slate-50 transition-all">
              Company
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180 text-[#2563eb]' : 'text-slate-400'}`} />
            </button>

            {activeDropdown === 'company' && (
              <div className="absolute top-full left-0 w-60 bg-white border border-slate-200/90 shadow-2xl rounded-2xl p-3 mt-1 animate-in fade-in slide-in-from-top-2 duration-200 flex flex-col gap-1">
                <Link href="/about" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <Info className="w-4 h-4 text-[#2563eb]" />
                  <span className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">About Us</span>
                </Link>

                <Link href="/career" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <GraduationCap className="w-4 h-4 text-[#2563eb]" />
                  <span className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">Careers</span>
                </Link>

                <Link href="/blogs" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <BookOpen className="w-4 h-4 text-[#2563eb]" />
                  <span className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">Blogs & Insights</span>
                </Link>

                <Link href="/contact-us" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                  <PhoneCall className="w-4 h-4 text-[#2563eb]" />
                  <span className="text-sm font-bold text-slate-900 group-hover:text-[#2563eb]">Contact Us</span>
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link 
            href="/contact-us" 
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-[#2563eb] shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200 shadow-xl">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-bold text-slate-900 py-2 border-b border-slate-100"
          >
            Home
          </Link>

          <div className="space-y-2 py-2 border-b border-slate-100">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Industries</div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <Link href="/industries/banking" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-700">Banking</Link>
              <Link href="/industries/healthcare" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-700">Healthcare</Link>
              <Link href="/industries/government" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-700">Government</Link>
              <Link href="/industries/manufacturing" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-700">Manufacturing</Link>
            </div>
          </div>

          <div className="space-y-2 py-2 border-b border-slate-100">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Services</div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <Link href="/services/ai-allied-services" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-700">AI Services</Link>
              <Link href="/services/it-professional-staffing" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-700">IT Staffing</Link>
              <Link href="/services/cybersecurity-services" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-700">Cybersecurity</Link>
              <Link href="/services/data-analytics" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-700">Data & Analytics</Link>
            </div>
          </div>

          <div className="pt-2">
            <Link 
              href="/contact-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-[#2563eb]"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
