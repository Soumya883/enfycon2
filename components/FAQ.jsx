import React from 'react';
import { Phone, ChevronDown, Star } from 'lucide-react';

export default function FAQ() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Images & Floating CTA */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10 w-[90%] md:w-[80%]">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop" 
              alt="Team Meeting" 
              className="w-full h-[600px] object-cover"
            />
          </div>
          
          {/* Blue Overlay Box */}
          <div className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-20 bg-[#3b5bdb] text-white p-6 md:p-8 rounded-2xl shadow-xl w-56 md:w-72 border-[6px] border-white">
            <h3 className="text-xl md:text-2xl font-bold mb-4">10 Years Of<br />Experience</h3>
            <div className="flex items-center gap-3 bg-white/10 p-3 md:p-4 rounded-xl">
              <div className="bg-white text-[#3b5bdb] p-3 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-blue-100">Call Us Anytime</p>
                <p className="font-bold">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Testimonial Box */}
          <div className="absolute -bottom-10 right-10 z-20 bg-white p-6 rounded-2xl shadow-xl w-[90%] md:w-[80%] border border-gray-100 flex flex-col md:flex-row gap-6 items-center">
            <div className="text-[#3b5bdb]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21L16.41 14.536H10.973V3H21V14.536L18.514 21H14.017ZM3.017 21L5.41 14.536H0V3H10.027V14.536L7.514 21H3.017Z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-3 italic">"Enfycon revolutionized our data pipeline. Their AI integration is flawless."</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop" alt="Kevin Martin" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm">Kevin Martin</h5>
                    <p className="text-xs text-gray-500">CTO, DataScale</p>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: FAQ Accordion */}
        <div className="lg:pl-10 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3b5bdb] px-4 py-2 rounded-full text-sm font-bold mb-4 self-start">
            <span className="w-2 h-2 rounded-full bg-[#3b5bdb]"></span>
            Help & FAQs
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            We Are Here To <span className="text-[#3b5bdb]">Help You Out.</span>
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 - Open */}
            <div className="border border-gray-200 rounded-2xl p-6 bg-blue-50/50 shadow-sm">
              <div className="flex justify-between items-center cursor-pointer">
                <h4 className="font-bold text-gray-900 text-lg">How can I integrate AI into my business?</h4>
                <div className="bg-[#3b5bdb] text-white rounded-full p-1"><ChevronDown className="w-5 h-5 transform rotate-180" /></div>
              </div>
              <p className="text-gray-600 mt-4 leading-relaxed">
                We start with a comprehensive technical audit of your existing infrastructure, identify high-impact workflows, and systematically deploy autonomous agents to augment your workforce without disrupting current operations.
              </p>
            </div>

            {/* FAQ 2 - Closed */}
            <div className="border border-gray-100 rounded-2xl p-6 hover:border-gray-200 transition-colors cursor-pointer">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-gray-900 text-lg">What kind of IT Staffing do you provide?</h4>
                <div className="bg-gray-100 text-gray-500 rounded-full p-1"><ChevronDown className="w-5 h-5" /></div>
              </div>
            </div>

            {/* FAQ 3 - Closed */}
            <div className="border border-gray-100 rounded-2xl p-6 hover:border-gray-200 transition-colors cursor-pointer">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-gray-900 text-lg">Do you offer Cybersecurity audits?</h4>
                <div className="bg-gray-100 text-gray-500 rounded-full p-1"><ChevronDown className="w-5 h-5" /></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
