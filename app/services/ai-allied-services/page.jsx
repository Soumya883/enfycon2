import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Cpu, Bot, Database, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AIAlliedServicesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50/50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3b5bdb] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#3b5bdb]"></span>
            Services
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight mb-6">
            AI & Allied <span className="text-[#3b5bdb]">Services</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Harness autonomous AI agents, machine learning workflows, and intelligent automation to transform business productivity and decision-making.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
            <Bot className="w-10 h-10 text-[#3b5bdb] mb-4" />
            <h3 className="text-xl font-bold text-black mb-3">Agentic AI Workflows</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">Deploy self-governing AI agents that automate multi-step enterprise processes with human-in-the-loop validation.</p>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3b5bdb]" /> Autonomous task execution</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3b5bdb]" /> Custom LLM fine-tuning</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
            <Cpu className="w-10 h-10 text-[#3b5bdb] mb-4" />
            <h3 className="text-xl font-bold text-black mb-3">Predictive Analytics</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">Turn raw data streams into real-time forecasting engines for supply chains, finance, and customer behavior.</p>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3b5bdb]" /> Real-time telemetry processing</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3b5bdb]" /> Anomaly detection models</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
            <Database className="w-10 h-10 text-[#3b5bdb] mb-4" />
            <h3 className="text-xl font-bold text-black mb-3">Vector & RAG Architectures</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">Build secure Retrieval-Augmented Generation systems connecting your internal knowledge base with state-of-the-art LLMs.</p>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3b5bdb]" /> Enterprise document search</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#3b5bdb]" /> Strict SOC2 data isolation</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
