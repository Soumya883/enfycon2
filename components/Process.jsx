import React from 'react';

export default function Process() {
  return (
    <section className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-[#3b5bdb] px-4 py-2 rounded-full text-sm font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#3b5bdb]"></span>
              Our Process
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Seamless Process,<br /> Great <span className="text-[#3b5bdb]">Results.</span>
            </h2>
          </div>
          <button className="mt-6 md:mt-0 bg-[#3b5bdb] text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#364fc7] shadow-md transition-all text-sm">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-200 z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10">
            <div className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#3b5bdb] to-[#748ffc] mb-6 inline-block">
              01
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy & Planning</h3>
            <p className="text-gray-500">We analyze your business requirements, define key objectives, and architect a comprehensive blueprint for digital transformation.</p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10">
            <div className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#3b5bdb] to-[#748ffc] mb-6 inline-block">
              02
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Development & Testing</h3>
            <p className="text-gray-500">Our engineers build scalable solutions with rigorous testing protocols to ensure maximum security and performance at every layer.</p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10">
            <div className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#3b5bdb] to-[#748ffc] mb-6 inline-block">
              03
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Release & Support</h3>
            <p className="text-gray-500">We seamlessly deploy the solutions into your enterprise ecosystem and provide ongoing support for continuous optimization.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
