import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Deep Cyberpunk Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3b5bdb] rounded-full blur-[150px] opacity-20 animate-pulse-glow pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-10 pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-50" />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-extrabold text-white mb-8 tracking-tighter leading-[1.05] font-['Space_Grotesk']">
          <span className="block mb-2 drop-shadow-2xl">Pioneering</span>
          <span className="inline-flex items-center flex-wrap justify-center gap-4 md:gap-6 mt-4">
            <span className="bg-gradient-to-r from-[#3b5bdb] via-[#4c6ef5] to-[#3b5bdb] bg-[length:200%_auto] text-transparent bg-clip-text border border-[#3b5bdb]/40 px-8 py-2 md:py-4 rounded-full bg-[#030614] shadow-[0_0_30px_rgba(59,91,219,0.4),inset_0_0_20px_rgba(59,91,219,0.2)] animate-pulse-glow">
              Digital
            </span>
            <span className="drop-shadow-2xl">Transformation</span>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl font-medium leading-relaxed drop-shadow-md">
          We engineer enterprise AI platforms, elite IT staffing solutions, and resilient cybersecurity architectures for the next generation of business.
        </p>
        
        <div className="flex justify-center">
          <button className="group bg-[#3b5bdb] text-white px-10 py-5 rounded-full text-lg font-bold flex items-center gap-4 hover:bg-[#4c6ef5] transition-all shadow-[0_0_40px_rgba(59,91,219,0.3)] hover:shadow-[0_0_60px_rgba(59,91,219,0.6)] border border-[#3b5bdb]/50">
            Get Started Now 
            <span className="bg-white/20 rounded-full p-1.5 group-hover:bg-white group-hover:text-[#3b5bdb] transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
