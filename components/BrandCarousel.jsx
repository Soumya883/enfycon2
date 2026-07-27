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
    <section className="py-12 bg-white border-b border-gray-100 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-[#3b5bdb] mb-8">
          Innovation Powered by Technology
        </h3>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-10">
          We partner with industry-leading technology providers to deliver robust, scalable, and secure enterprise solutions that drive meaningful business outcomes worldwide.
        </p>
        <div className="flex justify-center items-center gap-10 md:gap-20 lg:gap-32 flex-wrap opacity-70">
          {brands.map((logo, index) => (
            <img key={index} src={logo} alt={`Partner ${index + 1}`} className="h-10 md:h-16 lg:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          ))}
        </div>
      </div>
    </section>
  );
}
