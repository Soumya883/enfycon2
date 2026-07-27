import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send, ShieldAlert, CheckCircle } from 'lucide-react';

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50/50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3b5bdb] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#3b5bdb]"></span>
            Contact Us
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight mb-6">
            Let's Build Something <span className="text-[#3b5bdb]">Extraordinary</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind, need expert IT staffing, or want to discuss enterprise AI implementation? Reach out to our global team today.
          </p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-black mb-4">Get In Touch</h2>
              <p className="text-gray-600 leading-relaxed">
                Our representatives are available around the clock to support your digital transformation requirements.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#3b5bdb] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg mb-1">Global Headquarters</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    3921 Long Prairie Road, Building 5,<br />
                    Flower Mound, TX 75028, United States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#3b5bdb] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg mb-1">Direct Line</h4>
                  <p className="text-gray-600 text-sm mb-1">+1 201.201.7078</p>
                  <p className="text-xs text-gray-500">Mon - Fri: 8:00 AM - 6:00 PM CST</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#3b5bdb] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg mb-1">Email Inquiry</h4>
                  <p className="text-gray-600 text-sm mb-1">office@enfycon.com</p>
                  <p className="text-xs text-gray-500">Fast response within 2 business hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name *</label>
                  <input type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#3b5bdb] text-black text-sm" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name *</label>
                  <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#3b5bdb] text-black text-sm" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Work Email *</label>
                  <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#3b5bdb] text-black text-sm" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#3b5bdb] text-black text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Service of Interest</label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#3b5bdb] text-black text-sm">
                  <option>AI & Allied Services</option>
                  <option>IT Professional Staffing</option>
                  <option>Cybersecurity Services</option>
                  <option>Data & Analytics</option>
                  <option>Enterprise Products (iVaak.ai, Truefix.ai)</option>
                  <option>Other Solutions</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
                <textarea rows="4" placeholder="Tell us about your technical requirements or project goals..." className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#3b5bdb] text-black text-sm" required></textarea>
              </div>

              <button type="submit" className="w-full bg-[#3b5bdb] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#364fc7] transition-colors shadow-lg">
                Submit Inquiry <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
