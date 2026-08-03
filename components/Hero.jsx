import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Award, Zap, Play } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden pt-28 pb-16 bg-[#090d16]">
      {/* Background Imagery with Radial Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Digital Transformation Background" 
          className="w-full h-full object-cover opacity-25 scale-105 transform transition-transform duration-1000"
        />
        {/* Deep Slate Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090d16]/90 via-[#090d16]/80 to-[#090d16]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.25),rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Glowing Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs md:text-sm font-semibold mb-8 backdrop-blur-md shadow-lg shadow-blue-950/50 animate-subtle-pulse">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span>Next-Gen Enterprise AI & Digital Engineering</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8 max-w-5xl mx-auto">
          Pioneering <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Digital Transformation</span> Through Autonomous AI & Elite Tech Talent
        </h1>
        
        {/* Hero Subtitle */}
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto font-normal leading-relaxed">
          Enfycon builds enterprise-grade AI platforms, resilient cybersecurity frameworks, and deploys top 1% software engineering talent to power Fortune organizations worldwide.
        </p>

        {/* Hero Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link 
            href="/contact-us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105 transition-all duration-300 group"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link 
            href="/services/ai-allied-services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all duration-300"
          >
            <Play className="w-4 h-4 text-blue-400 fill-blue-400" />
            <span>Explore Solutions</span>
          </Link>
        </div>

        {/* Enterprise Key Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/80">
          <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
            <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
            <span className="text-xs md:text-sm font-medium text-slate-300">ISO 27001 Certified</span>
          </div>

          <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
            <Award className="w-5 h-5 text-blue-400 shrink-0" />
            <span className="text-xs md:text-sm font-medium text-slate-300">SOC 2 Type II Audited</span>
          </div>

          <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
            <Zap className="w-5 h-5 text-blue-400 shrink-0" />
            <span className="text-xs md:text-sm font-medium text-slate-300">99.99% Uptime SLA</span>
          </div>

          <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
            <Sparkles className="w-5 h-5 text-blue-400 shrink-0" />
            <span className="text-xs md:text-sm font-medium text-slate-300">500+ AI Deployments</span>
          </div>
        </div>

      </div>
    </section>
  );
}
