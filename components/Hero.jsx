import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Digital Globe" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
          <span className="block mb-2">Pioneering</span>
          <span className="inline-flex items-center gap-3 justify-center">
            <span className="bg-[#3b5bdb] text-white px-6 py-2 rounded-full border border-[#4c6ef5]/50 shadow-lg">Digital</span>
            <span>Transformation</span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
          We engineer enterprise AI platforms, elite IT staffing solutions, and resilient cybersecurity architectures for the next generation of business.
        </p>
        
        <div className="flex justify-center">
          <button className="bg-[#3b5bdb] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#364fc7] hover:scale-105 transition-all shadow-xl">
            Get Started Now <ArrowUpRight className="w-5 h-5 bg-white/20 rounded-full p-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
