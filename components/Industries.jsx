import React from 'react';
import { ArrowRight, Landmark, Stethoscope, Building2, ShieldCheck, Factory, Truck } from 'lucide-react';
import Link from 'next/link';

const industriesList = [
  { 
    name: 'Banking & Fintech', 
    icon: Landmark,
    link: '/industries/banking',
    desc: 'Fraud detection, algorithmic compliance & automated KYC.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    name: 'Healthcare & Life Sciences', 
    icon: Stethoscope,
    link: '/industries/healthcare',
    desc: 'HIPAA compliant diagnostic ML & patient care workflows.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    name: 'Capital Markets & Wealth', 
    icon: Building2,
    link: '/industries/finance',
    desc: 'Real-time telemetry, risk modeling & quant strategy.',
    img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    name: 'Government & Public Sector', 
    icon: ShieldCheck,
    link: '/industries/government',
    desc: 'Mission-critical secure cloud & civic digital platforms.',
    img: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    name: 'Smart Manufacturing', 
    icon: Factory,
    link: '/industries/manufacturing',
    desc: 'Predictive IoT maintenance & automated assembly analytics.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    name: 'Logistics & Supply Chain', 
    icon: Truck,
    link: '/industries/supply-chain-logistics',
    desc: 'Dynamic route optimization & automated inventory tracking.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop' 
  }
];

export default function Industries() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100/70 text-[#2563eb] px-4 py-1.5 rounded-full text-xs font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#2563eb]"></span>
              Domain Specialization
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Industries We <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Transform</span>
            </h2>
          </div>

          <Link 
            href="/industries/banking"
            className="inline-flex items-center gap-2 bg-white border border-slate-300/80 text-slate-900 px-6 py-3 rounded-full text-sm font-bold hover:border-[#2563eb] hover:text-[#2563eb] transition-all shadow-sm"
          >
            <span>View All Industries</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesList.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Link 
                key={i} 
                href={ind.link}
                className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-slate-900 h-96 flex flex-col justify-between p-8 border border-slate-200"
              >
                {/* Background Image */}
                <img 
                  src={ind.img} 
                  alt={ind.name} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                
                {/* Top Badge Icon */}
                <div className="relative z-10 self-start p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-blue-400 group-hover:bg-[#2563eb] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Bottom Content */}
                <div className="relative z-10">
                  <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 opacity-90">
                    {ind.desc}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 group-hover:text-white transition-colors">
                    <span>Explore Industry Solutions</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
