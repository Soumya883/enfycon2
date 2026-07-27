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
    <section className="py-24 bg-[#0a0f1d] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#3b5bdb]"></span>
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Innovative Solutions for <br/><span className="text-[#3b5bdb]">Modern Enterprises</span>
            </h2>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-white/10 pb-6">
          <button className="px-6 py-2.5 rounded-full bg-[#3b5bdb] text-white font-bold text-sm shadow-md transition-colors">AI Agentic Solutions</button>
          <button className="px-6 py-2.5 rounded-full text-gray-300 font-bold text-sm hover:text-white hover:bg-white/5 transition-colors">Modernization</button>
          <button className="px-6 py-2.5 rounded-full text-gray-300 font-bold text-sm hover:text-white hover:bg-white/5 transition-colors">Cybersecurity</button>
          <button className="px-6 py-2.5 rounded-full text-gray-300 font-bold text-sm hover:text-white hover:bg-white/5 transition-colors">Data Analytics</button>
          <button className="px-6 py-2.5 rounded-full text-gray-300 font-bold text-sm hover:text-white hover:bg-white/5 transition-colors">Cloud Services</button>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-3 text-white">Explore Advanced Alternatives</h3>
          <p className="text-gray-400 max-w-3xl text-lg">We deliver end-to-end solutions that transform your business operations through advanced AI, robust security, and world-class engineering talent.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group bg-[#111827] rounded-2xl p-5 border border-white/5 hover:border-[#3b5bdb]/50 transition-all duration-300">
              <div className="rounded-xl overflow-hidden h-56 mb-6 relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#3b5bdb]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="flex justify-between items-end mb-2">
                <h4 className="text-xl font-bold w-3/4">{service.title}</h4>
                <button className="w-12 h-12 rounded-full bg-[#1f2937] border border-white/10 flex items-center justify-center group-hover:bg-[#3b5bdb] transition-colors">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination Indicator */}
        <div className="flex justify-center items-center mt-12 gap-2">
           <div className="w-12 h-1.5 bg-[#3b5bdb] rounded-full"></div>
           <div className="w-2 h-1.5 bg-white/20 rounded-full"></div>
           <div className="w-2 h-1.5 bg-white/20 rounded-full"></div>
           <div className="w-2 h-1.5 bg-white/20 rounded-full"></div>
        </div>

      </div>
    </section>
  );
}
