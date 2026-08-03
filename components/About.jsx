import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Award, Users, Sparkles, Building } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Side: Staggered Image Showcase */}
        <div className="lg:col-span-6 relative">
          
          {/* Main Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
              alt="Enfycon Executive Engineering Team" 
              className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-xs font-bold uppercase tracking-wider bg-blue-600 px-3 py-1 rounded-full mb-2 inline-block">Global HQ</span>
              <h3 className="text-xl font-bold">Texas • Silicon Valley • Global Hubs</h3>
            </div>
          </div>
          
          {/* Floating Secondary Image Badge */}
          <div className="absolute -bottom-8 -left-6 z-20 w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1618424181497-157f25b6ce5e?q=80&w=2000&auto=format&fit=crop" 
              alt="AI Data Architecture" 
              className="w-full h-36 object-cover"
            />
          </div>

          {/* Floating Live Metrics Glass Card */}
          <div className="absolute -top-6 -right-6 z-20 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-slate-200/80 hidden md:flex flex-col w-64">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">CLIENT SATISFACTION</span>
              <span className="text-[#2563eb] font-extrabold text-xl">100%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 mb-3 overflow-hidden p-0.5 border border-slate-200">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full w-full animate-pulse"></div>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-600 font-semibold">
              <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-blue-600" /> Tier 1 Enterprise</span>
              <span>250+ Accounts</span>
            </div>
          </div>

        </div>

        {/* Right Side: Copy & Strategic Pillars */}
        <div className="lg:col-span-6 lg:pl-6">
          
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2563eb] border border-blue-200/60 px-4 py-1.5 rounded-full text-xs font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2563eb]"></span>
            About Enfycon Inc.
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight">
            Empowering Enterprises Through <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AI-Driven Transformation.</span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
            At Enfycon, we don't just adapt to digital evolution; we lead it. By fusing autonomous AI agentic networks with world-class software engineering and cybersecurity architectures, we give Fortune enterprises an unassailable strategic advantage.
          </p>

          {/* Feature Bullet Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#2563eb] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 mb-1 text-base">Enterprise AI Security</h4>
              <p className="text-xs text-slate-500 leading-relaxed">SOC 2 Type II compliant AI agent frameworks & encrypted pipelines.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#2563eb] flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 mb-1 text-base">Top 1% IT Talent</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Dedicated elite software architects & data scientists on demand.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-blue-600 to-[#2563eb] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all"
            >
              <span>Learn More About Enfycon</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
        
      </div>
    </section>
  );
}
