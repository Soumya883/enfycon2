import React from 'react';
import { ArrowRight, Lightbulb, Code2, Rocket, RefreshCw, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    num: "01",
    title: "Discovery & AI Audit",
    icon: Lightbulb,
    desc: "We analyze your business architecture, data pipelines, and security posture to construct a high-impact AI & cloud execution roadmap.",
    deliverables: ["Architecture Assessment", "ROI Impact Matrix", "Security Audit"]
  },
  {
    num: "02",
    title: "Custom Engineering",
    icon: Code2,
    desc: "Our senior engineers build agentic workflows, fine-tune LLMs, or assemble dedicated engineering squads aligned to your sprint cycle.",
    deliverables: ["Agentic AI Workflows", "Vector DB Pipeline", "Custom API Harness"]
  },
  {
    num: "03",
    title: "Testing & Zero-Trust Deployment",
    icon: Rocket,
    desc: "Rigorous SOC 2 compliance testing, load testing, and zero-downtime integration directly into your enterprise cloud environment.",
    deliverables: ["Penetration Testing", "CI/CD Deployment", "SOC 2 Verification"]
  },
  {
    num: "04",
    title: "Scale & Continuous Optimization",
    icon: RefreshCw,
    desc: "24/7 autonomous monitoring, telemetry optimization, and iterative model improvements to ensure long-term competitive advantage.",
    deliverables: ["Real-Time Telemetry", "24/7 SLA Support", "Continuous MLOps"]
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2563eb] border border-blue-200/60 px-4 py-1.5 rounded-full text-xs font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#2563eb]"></span>
              Execution Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Seamless Process. <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Proven Results.</span>
            </h2>
          </div>

          <Link 
            href="/contact-us"
            className="inline-flex items-center gap-2.5 bg-[#2563eb] text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all"
          >
            <span>Start Your Transformation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-extrabold text-blue-600/30 group-hover:text-blue-600 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2563eb] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Deliverables</div>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
