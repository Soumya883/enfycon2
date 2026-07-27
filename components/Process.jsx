import React from 'react';

export default function Process() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3b5bdb] px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#3b5bdb]"></span>
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Seamless Process,<br /> Great <span className="text-[#3b5bdb]">Results.</span>
            </h2>
          </div>
          <button className="mt-6 md:mt-0 bg-[#3b5bdb] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#364fc7] transition-colors shadow-lg">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-6xl font-extrabold text-[#3b5bdb]/20 mb-4 inline-block">
              01
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Strategy & Planning</h3>
            <p className="text-gray-600 leading-relaxed">We analyze your business requirements, define key objectives, and architect a comprehensive blueprint for digital transformation.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow md:mt-12">
            <div className="text-6xl font-extrabold text-[#3b5bdb]/20 mb-4 inline-block">
              02
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Development & Testing</h3>
            <p className="text-gray-600 leading-relaxed">Our engineers build scalable solutions with rigorous testing protocols to ensure maximum security and performance.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow md:mt-24">
            <div className="text-6xl font-extrabold text-[#3b5bdb]/20 mb-4 inline-block">
              03
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Release & Support</h3>
            <p className="text-gray-600 leading-relaxed">We seamlessly deploy the solutions into your enterprise ecosystem and provide ongoing support for continuous optimization.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
