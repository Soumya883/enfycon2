import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, Award, Users, Globe, ArrowRight, ShieldCheck, Target, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3b5bdb] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#3b5bdb]"></span>
            About Enfycon Inc.
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight mb-6 leading-tight">
            Accelerating Digital Transformation <br className="hidden md:block" />
            With <span className="text-[#3b5bdb]">AI-Driven Excellence</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Headquartered in Texas, Enfycon is a global enterprise solutions partner. We deliver next-gen AI platforms, IT staffing, cybersecurity, and cloud data architectures to fortune enterprises worldwide.
          </p>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-extrabold text-[#3b5bdb] mb-2">10+</div>
            <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-extrabold text-[#3b5bdb] mb-2">250+</div>
            <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Enterprise Clients</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-extrabold text-[#3b5bdb] mb-2">500+</div>
            <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">AI Deployments</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-extrabold text-[#3b5bdb] mb-2">99.9%</div>
            <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Core Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#3b5bdb] flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower global organizations by deploying intelligent AI systems, resilient IT infrastructure, and world-class technical talent, enabling seamless digital growth and operational agility.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#3b5bdb] flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted global catalyst for AI integration and digital engineering, setting benchmarks in enterprise innovation, security, and human-centric technology.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Driven By Uncompromising Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide our engineering, client relationships, and continuous innovation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <ShieldCheck className="w-10 h-10 text-[#3b5bdb] mb-4" />
              <h4 className="text-xl font-bold text-black mb-2">Security First</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Every solution we engineer prioritizes enterprise data protection and regulatory compliance.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Award className="w-10 h-10 text-[#3b5bdb] mb-4" />
              <h4 className="text-xl font-bold text-black mb-2">Technical Rigor</h4>
              <p className="text-gray-600 text-sm leading-relaxed">We employ elite engineers and continuous testing standards to guarantee zero-downtime execution.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Users className="w-10 h-10 text-[#3b5bdb] mb-4" />
              <h4 className="text-xl font-bold text-black mb-2">Client Partnership</h4>
              <p className="text-gray-600 text-sm leading-relaxed">We operate as an extended arm of your leadership team, aligned directly with your strategic goals.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
