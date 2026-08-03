import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-[#2563eb] to-indigo-900 text-white relative overflow-hidden">
      
      {/* Background Decorative Circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-blue-100 mb-6 border border-white/20">
          <Sparkles className="w-3.5 h-3.5 text-blue-200" />
          Enterprise AI Acceleration
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
          Ready to Accelerate Your Enterprise AI & Digital Roadmap?
        </h2>

        <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Talk to our principal architects today to assess your infrastructure, deploy autonomous agents, or source top 1% engineering talent.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/contact-us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-2xl hover:scale-105 transition-all text-base"
          >
            <span>Schedule Architecture Consultation</span>
            <ArrowRight className="w-5 h-5 text-[#2563eb]" />
          </Link>

          <a 
            href="tel:+12012017078"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md transition-all text-base"
          >
            <PhoneCall className="w-4 h-4 text-blue-200" />
            <span>Call +1 201.201.7078</span>
          </a>
        </div>
      </div>
    </section>
  );
}
