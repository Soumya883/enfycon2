import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Images & Floating Stats */}
        <div className="relative">
          {/* Main Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
              alt="Team working on tech" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Floating 'About Us' Image */}
          <div className="absolute -bottom-10 -left-10 z-20 w-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1618424181497-157f25b6ce5e?q=80&w=2000&auto=format&fit=crop" 
              alt="Keyboard" 
              className="w-full h-40 object-cover"
            />
          </div>

          {/* Floating Stats Card */}
          <div className="absolute -right-8 bottom-10 z-20 bg-white p-6 rounded-2xl shadow-xl hidden md:flex flex-col w-64 border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-500 font-bold text-sm tracking-wide">SATISFACTION</span>
              <span className="text-[#3b5bdb] font-extrabold text-xl">100%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 mb-2 overflow-hidden">
              <div className="bg-[#3b5bdb] h-full rounded-full w-full"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 font-medium">
              <span>Excellent</span>
              <span>Global Reach</span>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="relative z-10 lg:pl-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3b5bdb] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#3b5bdb]"></span>
            About Enfycon
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Empowering Enterprises Through AI-Driven Digital Transformation.
          </h2>
          
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            At Enfycon, we don't just adapt to the future; we build it. By merging elite human talent with autonomous AI systems and robust security architectures, we give our partners a definitive competitive edge.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="font-bold text-black mb-3 text-lg">Our Mission</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#3b5bdb] shrink-0" />
                  Deliver cutting-edge AI Solutions.
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#3b5bdb] shrink-0" />
                  Secure global infrastructures.
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="font-bold text-black mb-3 text-lg">Core Values</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#3b5bdb] shrink-0" />
                  Uncompromising Innovation.
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#3b5bdb] shrink-0" />
                  Trust and Technical Excellence.
                </li>
              </ul>
            </div>
          </div>

          <button className="bg-[#3b5bdb] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#364fc7] transition-colors shadow-lg">
            Learn More About Us <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
      </div>
    </section>
  );
}
