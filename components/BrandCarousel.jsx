import React from 'react';

const brands = [
  "https://www.enfycon.com/images/brands/gen-brand-1.png",
  "https://www.enfycon.com/images/brands/gen-brand-2.png",
  "https://www.enfycon.com/images/brands/gen-brand-3.png",
  "https://www.enfycon.com/images/brands/gen-brand-4.png",
  "https://www.enfycon.com/images/brands/gen-brand-5.png"
];

export default function BrandCarousel() {
  return (
    <section className="py-16 relative z-20 border-y border-white/5 bg-[#030614]/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-sm md:text-base font-bold text-[#3b5bdb] mb-12 uppercase tracking-[0.2em]">
          Innovation Powered by Technology
        </h3>
        <div className="flex justify-center items-center gap-10 md:gap-20 lg:gap-32 flex-wrap opacity-60">
          {brands.map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt={`Partner ${index + 1}`} 
              className="h-10 md:h-14 lg:h-16 object-contain filter brightness-0 invert opacity-50 hover:opacity-100 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-500" 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
