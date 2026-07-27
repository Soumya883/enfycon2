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
    <section className="py-24 bg-[#1a1f2c] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-400 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-white/10">
              Our Services
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Innovative Solutions for <span className="text-[#3b5bdb]">Modern Enterprises</span>
            </h2>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-white/10 pb-4">
          <button className="px-6 py-2 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform">AI Agentic Solutions</button>
          <button className="px-6 py-2 rounded-full text-gray-400 font-bold text-sm hover:text-white transition-colors">Modernization</button>
          <button className="px-6 py-2 rounded-full text-gray-400 font-bold text-sm hover:text-white transition-colors">Cybersecurity</button>
          <button className="px-6 py-2 rounded-full text-gray-400 font-bold text-sm hover:text-white transition-colors">Data Analytics</button>
          <button className="px-6 py-2 rounded-full text-gray-400 font-bold text-sm hover:text-white transition-colors">Cloud Services</button>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Explore Advanced Alternatives</h3>
          <p className="text-gray-400 max-w-3xl">We deliver end-to-end solutions that transform your business operations through advanced AI, impenetrable security, and world-class engineering talent.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group relative bg-[#242b3d] rounded-2xl p-4 border border-white/5 hover:border-[#3b5bdb]/50 transition-all duration-300">
              <div className="rounded-xl overflow-hidden h-48 mb-6 relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#3b5bdb]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="flex justify-between items-end mb-2">
                <h4 className="text-xl font-bold w-2/3">{service.title}</h4>
                <button className="w-10 h-10 rounded-full bg-[#1a1f2c] border border-white/10 flex items-center justify-center group-hover:bg-[#3b5bdb] transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-white" />
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
