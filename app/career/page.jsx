import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles, Heart, Rocket, Shield } from 'lucide-react';

const jobOpenings = [
  {
    title: "Senior AI & ML Architect",
    location: "Flower Mound, TX (Hybrid)",
    type: "Full-Time",
    department: "AI Engineering",
    description: "Lead the design and deployment of multi-agent LLM systems for enterprise clients."
  },
  {
    title: "Lead Cybersecurity Specialist",
    location: "Remote (US)",
    type: "Full-Time",
    department: "Security",
    description: "Architect zero-trust network defenses and execute threat modeling for fintech partners."
  },
  {
    title: "Senior Full-Stack Engineer (Next.js & Node)",
    location: "Flower Mound, TX",
    type: "Full-Time",
    department: "Product",
    description: "Build high-throughput SaaS platforms supporting real-time data pipelines."
  },
  {
    title: "Enterprise Account Executive - IT Staffing",
    location: "Hybrid / Remote",
    type: "Full-Time",
    department: "Sales & Talent",
    description: "Expand Enfycon's technical staffing partnerships across Fortune 500 accounts."
  }
];

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50/50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3b5bdb] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#3b5bdb]"></span>
            Careers at Enfycon
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight mb-6">
            Shape The Future Of <span className="text-[#3b5bdb]">Enterprise Tech</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We are looking for bold thinkers, elite engineers, and creative problem solvers to join our global family.
          </p>
        </div>
      </section>

      {/* Culture Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Why Build Your Career Here?</h2>
            <p className="text-gray-600">Empowering environment designed to accelerate your technical growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
              <Rocket className="w-10 h-10 text-[#3b5bdb] mx-auto mb-4" />
              <h4 className="font-bold text-black text-lg mb-2">Cutting-Edge Tech</h4>
              <p className="text-gray-600 text-sm">Work directly with agentic AI models, cloud infrastructures, and modern stacks.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
              <Sparkles className="w-10 h-10 text-[#3b5bdb] mx-auto mb-4" />
              <h4 className="font-bold text-black text-lg mb-2">Continuous Learning</h4>
              <p className="text-gray-600 text-sm">Dedicated budgets for certifications, conferences, and technical workshops.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
              <Heart className="w-10 h-10 text-[#3b5bdb] mx-auto mb-4" />
              <h4 className="font-bold text-black text-lg mb-2">Work-Life Balance</h4>
              <p className="text-gray-600 text-sm">Flexible hybrid options, generous PTO, and full health benefit packages.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
              <Shield className="w-10 h-10 text-[#3b5bdb] mx-auto mb-4" />
              <h4 className="font-bold text-black text-lg mb-2">Global Impact</h4>
              <p className="text-gray-600 text-sm">Deliver solutions powering critical operations for world-leading brands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-black mb-2">Current Openings</h2>
              <p className="text-gray-600">Find the role where you can make an immediate impact.</p>
            </div>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#3b5bdb] shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-50 text-[#3b5bdb] text-xs font-bold px-3 py-1 rounded-full uppercase">{job.department}</span>
                    <span className="text-xs text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3" /> {job.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-black">{job.title}</h3>
                  <p className="text-gray-600 text-sm max-w-2xl">{job.description}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1 pt-1"><MapPin className="w-3.5 h-3.5 text-[#3b5bdb]" /> {job.location}</p>
                </div>
                <button className="bg-[#3b5bdb] text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-[#364fc7] transition-colors shrink-0">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
