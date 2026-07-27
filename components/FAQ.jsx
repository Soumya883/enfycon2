import React from 'react';
import { Phone, ChevronDown, Star } from 'lucide-react';

export default function FAQ() {
  return (
    <section className="py-32 bg-[#030614] border-t border-white/5 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Images & Floating CTA */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] relative z-10 w-[90%] md:w-[85%] border border-white/10 group">
            <div className="absolute inset-0 bg-[#3b5bdb]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none" />
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop" 
              alt="Team Meeting" 
              className="w-full h-[650px] object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
            />
          </div>
          
          {/* Blue Overlay Box */}
          <div className="absolute right-0 md:-right-8 top-1/3 -translate-y-1/2 z-20 bg-[#050914] text-white p-6 md:p-8 rounded-3xl shadow-[0_0_40px_rgba(59,91,219,0.3)] w-60 md:w-80 border border-[#3b5bdb]/40 backdrop-blur-xl">
            <h3 className="text-xl md:text-3xl font-bold mb-6 font-['Space_Grotesk'] leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b5bdb] to-[#4c6ef5]">10 Years</span> Of<br />Experience
            </h3>
            <div className="flex items-center gap-4 bg-white/5 p-4 md:p-5 rounded-2xl border border-white/10">
              <div className="bg-[#3b5bdb]/20 text-[#4c6ef5] p-3 rounded-full shadow-[0_0_15px_rgba(59,91,219,0.5)] border border-[#3b5bdb]/50">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Call Us Anytime</p>
                <p className="font-bold text-[#4c6ef5]">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Testimonial Box */}
          <div className="absolute -bottom-10 right-4 z-20 glass-panel p-6 md:p-8 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.8)] w-[90%] md:w-[85%] flex flex-col md:flex-row gap-6 items-center">
            <div className="text-[#3b5bdb] drop-shadow-[0_0_10px_rgba(59,91,219,0.8)]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21L16.41 14.536H10.973V3H21V14.536L18.514 21H14.017ZM3.017 21L5.41 14.536H0V3H10.027V14.536L7.514 21H3.017Z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-300 text-sm md:text-base mb-4 italic leading-relaxed">"Enfycon revolutionized our data pipeline. Their AI integration is flawless and their technical mastery is unparalleled."</p>
              <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-2">
                <div className="flex items-center gap-4">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop" alt="Kevin Martin" className="w-12 h-12 rounded-full object-cover border border-[#3b5bdb]/50" />
                  <div>
                    <h5 className="font-bold text-white text-sm">Kevin Martin</h5>
                    <p className="text-xs text-[#4c6ef5]">CTO, DataScale</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: FAQ Accordion */}
        <div className="lg:pl-10 flex flex-col justify-center relative z-10">
          <div className="inline-flex items-center gap-3 border border-[#3b5bdb]/30 bg-[#3b5bdb]/10 text-[#4c6ef5] px-5 py-2 rounded-full text-sm font-bold mb-8 shadow-[inset_0_0_15px_rgba(59,91,219,0.2)] uppercase tracking-widest self-start">
            Help & FAQs
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 leading-[1.1] font-['Space_Grotesk']">
            We Are Here To <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b5bdb] to-[#4c6ef5]">Help You Out.</span>
          </h2>

          <div className="space-y-6">
            {/* FAQ 1 - Open */}
            <div className="border border-[#3b5bdb]/50 rounded-2xl p-7 bg-[#3b5bdb]/10 shadow-[0_0_20px_rgba(59,91,219,0.1)]">
              <div className="flex justify-between items-center cursor-pointer">
                <h4 className="font-bold text-white text-lg pr-4 leading-tight">How can I integrate AI into my business?</h4>
                <div className="bg-[#3b5bdb] text-white rounded-full p-1.5 shadow-[0_0_10px_rgba(59,91,219,0.8)]"><ChevronDown className="w-5 h-5 transform rotate-180" /></div>
              </div>
              <p className="text-gray-400 mt-5 leading-relaxed text-sm">
                We start with a comprehensive technical audit of your existing infrastructure, identify high-impact workflows, and systematically deploy autonomous agents to augment your workforce without disrupting current operations.
              </p>
            </div>

            {/* FAQ 2 - Closed */}
            <div className="border border-white/10 rounded-2xl p-7 hover:border-white/30 hover:bg-white/5 transition-all cursor-pointer">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-gray-300 text-lg hover:text-white transition-colors">What kind of IT Staffing do you provide?</h4>
                <div className="bg-white/10 text-gray-400 rounded-full p-1.5"><ChevronDown className="w-5 h-5" /></div>
              </div>
            </div>

            {/* FAQ 3 - Closed */}
            <div className="border border-white/10 rounded-2xl p-7 hover:border-white/30 hover:bg-white/5 transition-all cursor-pointer">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-gray-300 text-lg hover:text-white transition-colors">Do you offer Cybersecurity audits?</h4>
                <div className="bg-white/10 text-gray-400 rounded-full p-1.5"><ChevronDown className="w-5 h-5" /></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
