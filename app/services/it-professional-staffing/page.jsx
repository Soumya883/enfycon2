import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Award, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function ITStaffingPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50/50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3b5bdb] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#3b5bdb]"></span>
            IT Staffing
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight mb-6">
            Elite IT <span className="text-[#3b5bdb]">Professional Staffing</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Connect your team with top 1% vetted software engineers, cloud architects, data scientists, and cybersecurity specialists.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
            <Users className="w-10 h-10 text-[#3b5bdb] mb-4" />
            <h3 className="text-xl font-bold text-black mb-3">Contract Staffing</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Rapidly scale your development capacity for mission-critical projects with pre-screened talent.</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
            <Award className="w-10 h-10 text-[#3b5bdb] mb-4" />
            <h3 className="text-xl font-bold text-black mb-3">Direct Placement</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Permanent placement of senior leadership and specialized engineers tailored to your engineering culture.</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
            <ShieldCheck className="w-10 h-10 text-[#3b5bdb] mb-4" />
            <h3 className="text-xl font-bold text-black mb-3">Managed Talent Teams</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Fully autonomous, co-managed engineering squads aligned directly with your internal sprints.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
