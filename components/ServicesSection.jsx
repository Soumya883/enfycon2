import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: "Advanced Data Engineering",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Personalized Customer Engagement",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "AI Agentic Solutions",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-32 bg-[#02040a] text-white relative border-t border-white/5">
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#3b5bdb]/30 bg-[#3b5bdb]/10 text-[#4c6ef5] px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-[inset_0_0_15px_rgba(59,91,219,0.2)] uppercase tracking-widest">
              Our Services
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.1] font-['Space_Grotesk']">
              Innovative Solutions for <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b5bdb] to-[#4c6ef5]">Modern Enterprises</span>
            </h2>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-16 border-b border-white/10 pb-6">
          <button className="px-6 py-2.5 rounded-full bg-[#3b5bdb]/20 border border-[#3b5bdb]/50 text-white font-bold text-sm shadow-[0_0_15px_rgba(59,91,219,0.3)] transition-all">AI Agentic Solutions</button>
          <button className="px-6 py-2.5 rounded-full text-gray-400 font-bold text-sm hover:text-white hover:bg-white/5 transition-all">Modernization</button>
          <button className="px-6 py-2.5 rounded-full text-gray-400 font-bold text-sm hover:text-white hover:bg-white/5 transition-all">Cybersecurity</button>
          <button className="px-6 py-2.5 rounded-full text-gray-400 font-bold text-sm hover:text-white hover:bg-white/5 transition-all">Data Analytics</button>
          <button className="px-6 py-2.5 rounded-full text-gray-400 font-bold text-sm hover:text-white hover:bg-white/5 transition-all">Cloud Services</button>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-3 text-white">Explore Advanced Alternatives</h3>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">We deliver end-to-end solutions that transform your business operations through advanced AI, impenetrable security, and world-class engineering talent.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group relative bg-[#050914] rounded-2xl p-5 border border-white/10 hover:border-[#3b5bdb] transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,91,219,0.2)] hover:-translate-y-2">
              <div className="rounded-xl overflow-hidden h-56 mb-6 relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-[#3b5bdb]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="flex justify-between items-end mb-2">
                <h4 className="text-xl font-bold w-3/4 text-gray-200 group-hover:text-white transition-colors">{service.title}</h4>
                <button className="w-12 h-12 rounded-full bg-[#0a0f1d] border border-white/20 flex items-center justify-center group-hover:bg-[#3b5bdb] group-hover:border-[#3b5bdb] transition-all shadow-lg group-hover:shadow-[0_0_15px_rgba(59,91,219,0.8)]">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination Indicator */}
        <div className="flex justify-center items-center mt-16 gap-3">
           <div className="w-16 h-1.5 bg-[#4c6ef5] rounded-full shadow-[0_0_10px_rgba(76,110,245,0.8)]"></div>
           <div className="w-2 h-1.5 bg-white/20 rounded-full"></div>
           <div className="w-2 h-1.5 bg-white/20 rounded-full"></div>
           <div className="w-2 h-1.5 bg-white/20 rounded-full"></div>
        </div>

      </div>
    </section>
  );
}
