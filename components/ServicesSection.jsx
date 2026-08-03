'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Bot, Database, Lock, Cpu, Megaphone, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const categories = [
  { id: 'ai', label: 'AI Agentic Solutions', icon: Bot },
  { id: 'staffing', label: 'IT Staffing & Talent', icon: Users },
  { id: 'cyber', label: 'Cybersecurity', icon: Lock },
  { id: 'data', label: 'Data & Analytics', icon: Database },
  { id: 'marketing', label: 'Digital Growth', icon: Megaphone }
];

const serviceDetails = {
  ai: [
    {
      title: "Agentic AI & LLM Automation",
      desc: "Deploy self-orchestrating AI agents that automate complex multi-step enterprise workflows with human-in-the-loop oversight.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
      link: "/services/ai-allied-services"
    },
    {
      title: "Advanced Data Engineering & RAG",
      desc: "Build secure vector databases and Retrieval-Augmented Generation architectures connecting internal knowledge bases to LLMs.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",
      link: "/services/data-analytics"
    },
    {
      title: "Personalized Customer Engagement AI",
      desc: "Transform enterprise customer interactions through real-time voice, chat, and predictive intent models.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
      link: "/services/ai-allied-services"
    }
  ],
  staffing: [
    {
      title: "Contract Engineering Staffing",
      desc: "Rapidly scale your sprint velocity with pre-vetted senior software engineers, cloud architects, and full-stack devs.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
      link: "/services/it-professional-staffing"
    },
    {
      title: "Direct Executive Placement",
      desc: "Acquire high-impact technical leaders, CTOs, and AI department leads tailored precisely to your company culture.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
      link: "/services/it-professional-staffing"
    },
    {
      title: "Dedicated Squad Delivery",
      desc: "Deploy complete, autonomous engineering squads ready to take ownership of end-to-end product development.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop",
      link: "/services/it-professional-staffing"
    }
  ],
  cyber: [
    {
      title: "Zero-Trust Architecture & Audits",
      desc: "Implement modern Zero-Trust perimeter security, identity federation, and SOC 2 compliance frameworks.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop",
      link: "/services/cybersecurity-services"
    },
    {
      title: "AI Threat Detection & Response",
      desc: "Autonomous 24/7 endpoint monitoring and real-time anomaly isolation powered by specialized security models.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
      link: "/services/cybersecurity-services"
    },
    {
      title: "Cloud Infrastructure Hardening",
      desc: "Multi-cloud security posture management across AWS, Azure, and Google Cloud environments.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      link: "/services/cybersecurity-services"
    }
  ],
  data: [
    {
      title: "Enterprise Data Warehousing",
      desc: "Consolidate siloes with Snowflake, Databricks, and BigQuery architectures optimized for high concurrency.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
      link: "/services/data-analytics"
    },
    {
      title: "Real-Time Telemetry Dashboards",
      desc: "Empower executives with real-time operational intelligence, executive scorecards, and predictive telemetry.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
      link: "/services/data-analytics"
    },
    {
      title: "MLOps & Pipeline Automation",
      desc: "Streamline model training, CI/CD deployment pipelines, and continuous model performance monitoring.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
      link: "/services/data-analytics"
    }
  ],
  marketing: [
    {
      title: "Data-Driven Performance Growth",
      desc: "Scale global enterprise presence through algorithmic customer acquisition, conversion optimization, and brand narrative.",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2000&auto=format&fit=crop",
      link: "/services/digital-marketing"
    },
    {
      title: "Omnichannel Brand Strategy",
      desc: "Unify your B2B corporate identity across digital channels, executive positioning, and event ecosystems.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop",
      link: "/services/digital-marketing"
    },
    {
      title: "Marketing Automation Engine",
      desc: "Integrate HubSpot, Salesforce, and custom AI lead scoring engines for maximum pipeline conversion.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
      link: "/services/digital-marketing"
    }
  ]
};

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('ai');
  const activeServices = serviceDetails[activeTab] || serviceDetails.ai;

  return (
    <section className="py-24 bg-[#090d16] text-white relative overflow-hidden">
      
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-950/80 text-blue-400 border border-blue-800/50 px-4 py-1.5 rounded-full text-xs font-bold mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              Core Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Innovative Solutions for <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Modern Enterprises
              </span>
            </h2>
          </div>

          <p className="text-slate-400 max-w-xl text-base leading-relaxed">
            We deliver end-to-end solutions that elevate operations, secure infrastructure, and provide unprecedented computational capabilities.
          </p>
        </div>
        
        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12 pb-4 border-b border-slate-800/80 overflow-x-auto hide-scrollbar">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-600 to-[#2563eb] text-white shadow-lg shadow-blue-600/30 scale-105' 
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeServices.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-900/60 rounded-3xl p-6 border border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-900/90 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Image Container */}
                <div className="rounded-2xl overflow-hidden h-52 mb-6 relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h4>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <Link 
                  href={service.link}
                  className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5 group-hover:text-white transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                
                <div className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 group-hover:bg-[#2563eb] group-hover:text-white group-hover:border-[#2563eb] transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
