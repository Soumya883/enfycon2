import React from 'react';
import { ArrowRight } from 'lucide-react';

const industries = [
  { name: 'Finance & Banking', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Healthcare', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Manufacturing', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Retail', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop' }
];

export default function Industries() {
  return (
    <section className="py-32 bg-[#030614] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[#3b5bdb]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#3b5bdb]/30 bg-[#3b5bdb]/10 text-[#4c6ef5] px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-[inset_0_0_15px_rgba(59,91,219,0.2)] uppercase tracking-widest">
              What We Do
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white font-['Space_Grotesk'] leading-[1.1]">
              Industries We Serve
            </h2>
          </div>
          <button className="mt-8 md:mt-0 bg-transparent border border-[#3b5bdb] text-[#4c6ef5] px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#3b5bdb]/20 transition-all shadow-[0_0_15px_rgba(59,91,219,0.2)]">
            All Industries <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Vertical Panel Grid */}
        <div className="flex flex-col md:flex-row gap-6 h-[600px]">
          {industries.map((ind, i) => (
            <div key={i} className="group relative flex-1 rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 hover:flex-[2.5] border border-white/10 hover:border-[#3b5bdb]/50 hover:shadow-[0_0_30px_rgba(59,91,219,0.3)]">
              <img src={ind.img} alt={ind.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030614] via-[#030614]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
              <div className="absolute bottom-10 left-8 right-8">
                 <h3 className="text-white text-3xl font-extrabold tracking-wide transform translate-y-6 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 drop-shadow-xl font-['Space_Grotesk']">
                    {ind.name}
                 </h3>
                 <div className="w-16 h-1 bg-[#4c6ef5] mt-5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 shadow-[0_0_10px_rgba(76,110,245,1)]"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
