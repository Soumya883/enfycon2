'use client';

import React, { useState } from 'react';
import { Phone, ChevronDown, Star, HelpCircle, MessageSquare } from 'lucide-react';

const faqs = [
  {
    q: "How does Enfycon deploy AI Agentic Solutions into existing legacy enterprise systems?",
    a: "We deploy lightweight SOC 2-compliant AI proxy layers and custom API adapters. Our autonomous agents interface with your existing ERP, CRM, or data lake without requiring disruptive overhauls to your legacy codebase."
  },
  {
    q: "What is your screening process for IT Staffing and engineering talent?",
    a: "Every engineer undergoes a rigorous 4-stage evaluation: live system architecture design, algorithmic code assessment, security practice verification, and soft skills evaluation. Only the top 1% are presented to our enterprise clients."
  },
  {
    q: "How do you ensure data privacy and compliance when fine-tuning LLMs?",
    a: "We utilize dedicated single-tenant VPCs with zero data retention guarantees. Your proprietary enterprise datasets never train public foundation models and remain strictly encrypted at rest and in transit."
  },
  {
    q: "Can Enfycon manage full end-to-end cloud migrations and cybersecurity hardening?",
    a: "Yes. Our cloud engineering team handles multi-cloud migrations across AWS, Azure, and GCP, alongside Zero-Trust security perimeter architecture, IAM configuration, and 24/7 SOC monitoring."
  },
  {
    q: "Where is Enfycon headquartered and what regions do you serve?",
    a: "Enfycon is headquartered in Flower Mound, Texas, with global technical hubs across North America, Europe, and Asia-Pacific to provide round-the-clock SLA support."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Image, Experience Badge & Testimonial */}
        <div className="lg:col-span-5 relative">
          
          <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop" 
              alt="Enfycon Executive Meeting" 
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          </div>
          
          {/* Floating Experience Callout */}
          <div className="absolute -right-4 top-10 z-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 md:p-8 rounded-3xl shadow-2xl w-64 border-4 border-white">
            <div className="text-3xl font-extrabold mb-1">10+ Years</div>
            <div className="text-xs uppercase tracking-wider font-bold text-blue-200 mb-4">Enterprise Excellence</div>
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl backdrop-blur-md">
              <div className="w-10 h-10 rounded-full bg-white text-[#2563eb] flex items-center justify-center font-bold">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-blue-200 uppercase font-bold">Direct Line</p>
                <p className="font-bold text-white text-sm">+1 201.201.7078</p>
              </div>
            </div>
          </div>

          {/* Testimonial Badge */}
          <div className="absolute -bottom-8 left-4 right-4 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-200/80">
            <div className="flex items-center gap-1 text-amber-400 mb-2">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed italic mb-3">
              "Enfycon transformed our data architecture. Their AI agents streamlined operations while maintaining 100% security compliance."
            </p>
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop" 
                alt="Client CTO" 
                className="w-8 h-8 rounded-full object-cover" 
              />
              <div>
                <div className="text-xs font-bold text-slate-900">Kevin Martin</div>
                <div className="text-[10px] text-slate-500 font-semibold">Chief Technology Officer, GlobalFin</div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: FAQ Accordion */}
        <div className="lg:col-span-7">
          
          <div className="inline-flex items-center gap-2 bg-blue-100/70 text-[#2563eb] px-4 py-1.5 rounded-full text-xs font-bold mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-10 tracking-tight leading-tight">
            We Are Here To <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Guide Your Roadmap</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => toggleFaq(idx)}
                  className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-blue-500 shadow-md ring-1 ring-blue-500/20' 
                      : 'bg-white/80 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="p-6 flex items-center justify-between gap-4">
                    <h4 className="font-bold text-slate-900 text-base sm:text-lg pr-2">
                      {faq.q}
                    </h4>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#2563eb] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 mt-2 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
