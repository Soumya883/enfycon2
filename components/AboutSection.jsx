import React from 'react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#0c1e21] border-y border-[#364e52] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-2xl overflow-hidden border border-[#364e52] shadow-[0_4px_20px_rgba(0,0,0,0.5)] group">
            <img 
              src="https://www.enfycon.com/_next/image?url=%2Fimages%2Fabout%2Fabout-us.jpg&w=1200&q=75" 
              alt="About Enfycon" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-[#4361ee]/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>
        
        <div className="w-full lg:w-1/2">
          <h2 className="text-[#4361ee] font-semibold tracking-wider uppercase text-sm mb-2">Who We Are</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Pioneering the Future of Enterprise IT</h3>
          <p className="text-[#c8c6c6] text-lg mb-6">
            At Enfycon, we believe in the transformative power of technology. As a premier provider of AI Agentic Solutions, AI-First Platforms, and Enterprise Modernization, we empower organizations to thrive in a digital-first world.
          </p>
          <p className="text-[#c8c6c6] text-lg mb-10">
            Beyond engineering, our US IT Staffing division connects you with elite talent, ensuring your projects are driven by the brightest minds in the industry. Our commitment is to deliver secure, scalable, and intelligent solutions tailored to your unique challenges.
          </p>
          <Link href="/about" className="bg-transparent border border-[#4361ee] text-[#bac3ff] px-8 py-3 rounded-full font-semibold hover:bg-[#4361ee] hover:text-white transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4361ee]">
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
