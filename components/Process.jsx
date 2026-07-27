import React from 'react';

export default function Process() {
  return (
    <section className="py-32 bg-[#02040a] border-t border-white/5 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#3b5bdb]/30 bg-[#3b5bdb]/10 text-[#4c6ef5] px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-[inset_0_0_15px_rgba(59,91,219,0.2)] uppercase tracking-widest">
              Our Process
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] font-['Space_Grotesk']">
              Seamless Process,<br /> Great <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b5bdb] to-[#4c6ef5] drop-shadow-[0_0_10px_rgba(59,91,219,0.5)]">Results.</span>
            </h2>
          </div>
          <button className="mt-8 md:mt-0 bg-[#3b5bdb] text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#4c6ef5] hover:shadow-[0_0_30px_rgba(59,91,219,0.5)] border border-[#3b5bdb]/50 transition-all">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Connecting Neon Line */}
          <div className="hidden md:block absolute top-20 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-[#3b5bdb]/50 to-transparent z-0 shadow-[0_0_10px_rgba(59,91,219,0.8)]"></div>

          {/* Step 1 */}
          <div className="relative z-10 glass-panel p-8 rounded-3xl border-t border-white/10 hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(59,91,219,0.15)] group">
            <div className="text-8xl lg:text-[10rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#111836] to-[#3b5bdb]/40 mb-2 inline-block leading-none tracking-tighter group-hover:from-[#3b5bdb]/40 group-hover:to-[#4c6ef5] transition-all duration-700 font-['Space_Grotesk']">
              01
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Strategy & Planning</h3>
            <p className="text-gray-400 leading-relaxed">We analyze your business requirements, define key objectives, and architect a comprehensive blueprint for digital transformation.</p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 glass-panel p-8 rounded-3xl border-t border-white/10 hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(59,91,219,0.15)] group mt-0 md:mt-12">
            <div className="text-8xl lg:text-[10rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#111836] to-[#3b5bdb]/40 mb-2 inline-block leading-none tracking-tighter group-hover:from-[#3b5bdb]/40 group-hover:to-[#4c6ef5] transition-all duration-700 font-['Space_Grotesk']">
              02
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Development & Testing</h3>
            <p className="text-gray-400 leading-relaxed">Our engineers build scalable solutions with rigorous testing protocols to ensure maximum security and performance at every layer.</p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 glass-panel p-8 rounded-3xl border-t border-white/10 hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(59,91,219,0.15)] group mt-0 md:mt-24">
            <div className="text-8xl lg:text-[10rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#111836] to-[#3b5bdb]/40 mb-2 inline-block leading-none tracking-tighter group-hover:from-[#3b5bdb]/40 group-hover:to-[#4c6ef5] transition-all duration-700 font-['Space_Grotesk']">
              03
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Release & Support</h3>
            <p className="text-gray-400 leading-relaxed">We seamlessly deploy the solutions into your enterprise ecosystem and provide ongoing support for continuous optimization.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
