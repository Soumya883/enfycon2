import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-[#0a0f1d]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Office Building" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-24 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-extrabold text-white mb-8 tracking-tighter leading-[1.1]">
          <span className="block mb-4">Pioneering</span>
          <span className="inline-flex items-center flex-wrap justify-center gap-4">
            <span className="bg-gradient-to-r from-[#3b5bdb] to-[#748ffc] text-transparent bg-clip-text border border-[#3b5bdb]/40 px-8 py-2 md:py-3 rounded-full bg-[#3b5bdb]/10 shadow-[inset_0_0_30px_rgba(59,91,219,0.3)]">Digital</span>
            <span>Transformation</span>
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300/90 mb-12 max-w-3xl font-medium leading-relaxed">
          We engineer enterprise AI platforms, elite IT staffing solutions, and resilient cybersecurity architectures for the next generation of business.
        </p>
        
        <div className="flex justify-center">
          <button className="bg-[#3b5bdb] text-white px-10 py-5 rounded-full text-lg font-bold flex items-center gap-3 hover:bg-[#364fc7] hover:scale-105 transition-all shadow-[0_0_40px_rgba(59,91,219,0.5)]">
            Get Started Now <ArrowUpRight className="w-6 h-6 bg-white/20 rounded-full p-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
