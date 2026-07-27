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
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-sm md:text-base font-bold text-[#3b5bdb] mb-10 uppercase tracking-[0.2em]">
          Innovation Powered by Technology
        </h3>
        <div className="flex justify-center items-center gap-10 md:gap-20 lg:gap-32 flex-wrap">
          {brands.map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt={`Partner ${index + 1}`} 
              className="h-10 md:h-12 lg:h-16 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
