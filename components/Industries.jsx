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
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3b5bdb] px-4 py-2 rounded-full text-sm font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#3b5bdb]"></span>
              What We Do
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#3b5bdb]">
              Industries We Serve
            </h2>
          </div>
          <button className="mt-4 md:mt-0 bg-[#3b5bdb] text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-[#364fc7] transition-all text-sm">
            All Industries <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Vertical Panel Grid */}
        <div className="flex flex-col md:flex-row gap-4 h-[500px]">
          {industries.map((ind, i) => (
            <div key={i} className="group relative flex-1 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:flex-[2]">
              <img src={ind.img} alt={ind.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-6 right-6">
                 <h3 className="text-white text-2xl font-bold tracking-wider transform translate-y-4 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {ind.name}
                 </h3>
                 <div className="w-12 h-1 bg-[#3b5bdb] mt-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
