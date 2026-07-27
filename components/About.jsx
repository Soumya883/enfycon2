import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#030614]">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3b5bdb]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Images & Floating Stats */}
        <div className="relative">
          {/* Main Image */}
          <div className="rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] relative z-10 border border-white/10 group">
            <div className="absolute inset-0 bg-[#3b5bdb]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none" />
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
              alt="Team working on tech" 
              className="w-full h-auto object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
            />
          </div>
          
          {/* Floating 'About Us' Keyboard */}
          <div className="absolute -bottom-8 -left-8 z-30 w-56 rounded-2xl overflow-hidden shadow-2xl border border-white/20 hidden md:block group">
            <img 
              src="https://images.unsplash.com/photo-1618424181497-157f25b6ce5e?q=80&w=2000&auto=format&fit=crop" 
              alt="Keyboard" 
              className="w-full h-36 object-cover brightness-50 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030614] to-transparent pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-white font-bold text-2xl tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">ABOUT US</span>
            </div>
          </div>

          {/* Floating Stats Card (Glassmorphism) */}
          <div className="absolute -right-12 bottom-16 z-30 glass-panel p-6 rounded-2xl shadow-[0_0_30px_rgba(59,91,219,0.3)] hidden md:flex flex-col w-64 animate-bounce" style={{animationDuration: '4s'}}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-300 font-medium text-sm tracking-wider">SATISFACTION</span>
              <span className="text-[#4c6ef5] font-bold text-lg drop-shadow-[0_0_8px_rgba(76,110,245,0.8)]">100%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5 mb-3 overflow-hidden shadow-inner">
              <div className="bg-[#4c6ef5] h-full rounded-full w-full shadow-[0_0_10px_rgba(76,110,245,1)]"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-400 font-medium">
              <span>Excellent</span>
              <span>Global Reach</span>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 border border-[#3b5bdb]/30 bg-[#3b5bdb]/10 text-[#4c6ef5] px-5 py-2 rounded-full text-sm font-bold mb-8 shadow-[inset_0_0_15px_rgba(59,91,219,0.2)] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#4c6ef5] animate-pulse shadow-[0_0_8px_rgba(76,110,245,1)]"></span>
            About Enfycon
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.2] font-['Space_Grotesk']">
            Empowering Enterprises Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b5bdb] to-[#748ffc]">AI-Driven Digital</span> Transformation.
          </h2>
          
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            At Enfycon, we don't just adapt to the future; we build it. By merging elite human talent with autonomous AI systems and impenetrable security architectures, we give our partners a definitive competitive edge.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-panel p-6 rounded-2xl">
              <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-lg">
                Our Mission
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-[#4c6ef5] shrink-0 drop-shadow-[0_0_5px_rgba(76,110,245,0.8)]" />
                  Deliver cutting-edge AI Solutions.
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-[#4c6ef5] shrink-0 drop-shadow-[0_0_5px_rgba(76,110,245,0.8)]" />
                  Secure global infrastructures.
                </li>
              </ul>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-lg">
                Core Values
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-[#4c6ef5] shrink-0 drop-shadow-[0_0_5px_rgba(76,110,245,0.8)]" />
                  Uncompromising Innovation.
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-[#4c6ef5] shrink-0 drop-shadow-[0_0_5px_rgba(76,110,245,0.8)]" />
                  Trust and Technical Excellence.
                </li>
              </ul>
            </div>
          </div>

          <button className="bg-transparent border border-[#3b5bdb] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#3b5bdb]/20 transition-all shadow-[0_0_20px_rgba(59,91,219,0.2)] hover:shadow-[0_0_30px_rgba(59,91,219,0.5)]">
            Learn More About Us <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
      </div>
    </section>
  );
}
