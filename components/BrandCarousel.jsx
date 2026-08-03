import React from 'react';

const partners = [
  { name: "GenBrand 1", logo: "https://www.enfycon.com/images/brands/gen-brand-1.png" },
  { name: "GenBrand 2", logo: "https://www.enfycon.com/images/brands/gen-brand-2.png" },
  { name: "GenBrand 3", logo: "https://www.enfycon.com/images/brands/gen-brand-3.png" },
  { name: "GenBrand 4", logo: "https://www.enfycon.com/images/brands/gen-brand-4.png" },
  { name: "GenBrand 5", logo: "https://www.enfycon.com/images/brands/gen-brand-5.png" }
];

// Duplicate for continuous seamless marquee loop
const marqueeItems = [...partners, ...partners, ...partners, ...partners];

export default function BrandCarousel() {
  return (
    <section className="py-14 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs md:text-sm font-extrabold text-blue-400 uppercase tracking-[0.25em]">
          Innovation Powered By Global Tech Leadership
        </p>
      </div>

      {/* Marquee Wrapper with Gradient Fades */}
      <div className="relative w-full overflow-hidden">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
        
        {/* Infinite Moving Marquee Track */}
        <div className="animate-marquee items-center gap-12 md:gap-20">
          {marqueeItems.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 group cursor-pointer"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-10 md:h-14 w-auto object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
