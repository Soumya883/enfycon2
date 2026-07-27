import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Images & Floating Stats */}
        <div className="relative">
          {/* Main Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
              alt="Team working on tech" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Floating 'About Us' keyboard key like image from screenshot */}
          <div className="absolute -bottom-10 -left-6 z-20 w-48 rounded-xl overflow-hidden shadow-xl border-4 border-white bg-white hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1618424181497-157f25b6ce5e?q=80&w=2000&auto=format&fit=crop" 
              alt="Keyboard" 
              className="w-full h-32 object-cover"
            />
            <div className="absolute inset-0 bg-[#3b5bdb]/80 flex items-center justify-center">
               <span className="text-white font-bold text-xl transform -rotate-12">About Us</span>
            </div>
          </div>

          {/* Floating Stats Card */}
          <div className="absolute -right-8 bottom-12 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:flex flex-col w-64 animate-bounce" style={{animationDuration: '3s'}}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-500 font-medium text-sm">Satisfaction Rate</span>
              <span className="text-[#3b5bdb] font-bold">100%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
              <div className="bg-[#3b5bdb] h-2 rounded-full" style={{width: '100%'}}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>Excellent</span>
              <span>Global</span>
            </div>
          </div>
          
          {/* Background Shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl -z-10" />
        </div>

        {/* Right Side: Content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-[#3b5bdb] px-4 py-2 rounded-full text-sm font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#3b5bdb]"></span>
            About Enfycon
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Empowering Enterprises Through AI-Driven Digital Transformation Worldwide.
          </h2>
          
          <p className="text-gray-600 text-lg mb-8">
            At Enfycon, we don't just adapt to the future; we build it. By merging elite human talent with autonomous AI systems and impenetrable security architectures, we give our partners a definitive competitive edge.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                Our Mission
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-[#3b5bdb] shrink-0 mt-0.5" />
                  Deliver cutting-edge AI Solutions.
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-[#3b5bdb] shrink-0 mt-0.5" />
                  Secure global infrastructures.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                Core Values
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-[#3b5bdb] shrink-0 mt-0.5" />
                  Uncompromising Innovation.
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-[#3b5bdb] shrink-0 mt-0.5" />
                  Trust and Technical Excellence.
                </li>
              </ul>
            </div>
          </div>

          <button className="bg-[#3b5bdb] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#364fc7] transition-all shadow-lg hover:shadow-xl">
            Learn More About Us <ArrowRight className="w-5 h-5 bg-white/20 rounded-full p-0.5" />
          </button>
        </div>
        
      </div>
    </section>
  );
}
