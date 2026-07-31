import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Award, Target, Heart, Sparkles, MapPin, Phone, Mail, ShieldCheck, Lightbulb, Handshake } from "lucide-react";

const founderStory = {
  name: "Ashutosh Dash",
  role: "Founder & CEO",
  image: "/images/team/founder2.jpeg",
  fallback: "https://www.enfycon.com/images/team/founder2.jpeg",
  quote: "At enfycon, we believe technology should be an equalizer — empowering organizations of all sizes to achieve extraordinary outcomes while keeping human empathy and integrity at the heart of everything we build.",
  paragraphs: [
    "enfycon was born out of a desire to build a company that delivers world-class technology while remaining deeply human at its core. From our inception, our purpose has been to simplify complex technical hurdles for modern enterprises.",
    "Fostering trust: enfycon was built on the foundation of trust, integrity, and client success. We started working closely with innovative businesses to understand their technology challenges and provide tailored solutions. Over time, our reputation for reliability enabled us to expand our footprint globally.",
    "AI-Driven Solutions: enfycon has evolved into an AI-first platforms and agentic solutions leader. Guided by the core principle that taking care of our people drives continuous innovation, we continue to push boundaries while remaining grounded in client success."
  ]
};

const timelineHistory = [
  {
    year: "2018",
    tag: "Milestone 01",
    title: "Inception & Vision",
    description: "Ashutosh Dash founded enfycon Inc with a vision to build a company that delivers world-class technology while remaining deeply human at its core.",
    image: "/images/history/history-inception.png",
    fallback: "https://www.enfycon.com/images/history/history-inception.png"
  },
  {
    year: "2019",
    tag: "Milestone 02",
    title: "Building Foundations",
    description: "Focused on creating value through integrity and trust, we established strong relationships with enterprise clients and innovative technology partners.",
    image: "/images/history/history-foundation.png",
    fallback: "https://www.enfycon.com/images/history/history-foundation.png"
  },
  {
    year: "2021",
    tag: "Milestone 03",
    title: "Global Expansion",
    description: "enfycon expanded operations across the USA, India, and the UAE, supporting enterprises with Technology Hiring Solutions and AI-driven systems.",
    image: "/images/history/history-expansion.png",
    fallback: "https://www.enfycon.com/images/history/history-expansion.png"
  },
  {
    year: "2024",
    tag: "Milestone 04",
    title: "AI-Led Innovation",
    description: "Evolving into AI-led products and advanced technology solutions, anchored by autonomous agentic workflows and platform engineering.",
    image: "/images/history/history-innovation.png",
    fallback: "https://www.enfycon.com/images/history/history-innovation.png"
  },
  {
    year: "2025",
    tag: "Milestone 05",
    title: "Strategic Partnerships",
    description: "Forged strategic partnerships with enterprise leaders and key technology partners to drive large-scale digital transformation globally.",
    image: "/images/history/history-partnerships.png",
    fallback: "https://www.enfycon.com/images/history/history-partnerships.png"
  },
];

const coreValues = [
  { title: "Integrity", description: "Doing the right thing always, building transparent relationships with our partners.", icon: ShieldCheck, glow: "rgba(16,185,129,0.3)" },
  { title: "Impact", description: "Delivering measurable business value through precision technology execution.", icon: Target, glow: "rgba(59,130,246,0.3)" },
  { title: "Innovation", description: "Pioneering next-gen AI platforms and autonomous workflow intelligence.", icon: Lightbulb, glow: "rgba(139,92,246,0.3)" },
  { title: "People First", description: "Investing in our talent and creating an inclusive culture of continuous growth.", icon: Heart, glow: "rgba(244,63,94,0.3)" },
  { title: "Excellence", description: "Uncompromising quality standards across engineering, security, and staffing.", icon: Award, glow: "rgba(234,179,8,0.3)" },
  { title: "Partnership", description: "Working alongside clients as dedicated extensions of their engineering teams.", icon: Handshake, glow: "rgba(6,182,212,0.3)" },
];

const csrInitiatives = [
  {
    title: "Food Distribution at SOS Children's Village",
    description: "Organized food distribution programs to support children and families in local communities.",
    image: "/images/csr/food-dist.jpeg",
    fallback: "https://www.enfycon.com/images/csr/food-dist.jpeg",
    badge: "Community Outreach"
  },
  {
    title: "Clothes & Essentials Distribution",
    description: "Provided essential clothing and care items to families in need, reinforcing social responsibility.",
    image: "/images/csr/clothes-distribution-1.jpg",
    fallback: "https://www.enfycon.com/images/csr/clothes-distribution-1.jpg",
    badge: "Social Impact"
  },
  {
    title: "Scholarship Program",
    description: "Empowering bright young minds with financial aid to pursue higher education and STEM fields.",
    image: "/images/csr/scholarship.jpg",
    fallback: "https://www.enfycon.com/images/csr/scholarship.jpg",
    badge: "Education Aid"
  },
  {
    title: "Community Volunteering",
    description: "Our global team actively dedicates hours to community service and local development projects.",
    image: "/images/csr/vol.jpg",
    fallback: "https://www.enfycon.com/images/csr/vol.jpg",
    badge: "Volunteer Action"
  },
];

const locations = [
  {
    region: "USA",
    city: "Texas (HQ), USA",
    address: "3921 Long Prairie Road, Building 5, Flower Mound, TX 75208",
    phone: "+1 201.201.7878",
    email: "texas@enfycon.com",
    image: "/images/locations/texas.png",
    fallback: "https://www.enfycon.com/images/locations/texas.png"
  },
  {
    region: "USA",
    city: "Ohio, USA",
    address: "6500 Emerald Parkway, Suite 100, Dublin, OH 43016",
    phone: "+1 216.888.3007",
    email: "ohio@enfycon.com",
    image: "/images/locations/ohio.png",
    fallback: "https://www.enfycon.com/images/locations/ohio.png"
  },
  {
    region: "USA",
    city: "Delaware, USA",
    address: "112 Capitol Trail, Suite A33, Newark, DE 19711",
    phone: "+1 302.273.1130",
    email: "delaware@enfycon.com",
    image: "/images/locations/delaware.png",
    fallback: "https://www.enfycon.com/images/locations/delaware.png"
  },
  {
    region: "India",
    city: "Bhubaneswar, India",
    address: "DLF Cybercity, Technology Hub, Bhubaneswar, Odisha 751024",
    phone: "+91 674.291.0090",
    email: "india@enfycon.com",
    image: "/images/locations/bhubaneswar.jpg",
    fallback: "https://www.enfycon.com/images/locations/bhubaneswar.jpg"
  },
  {
    region: "India",
    city: "Visakhapatnam, India",
    address: "Millennium IT Tower, Rushikonda, Visakhapatnam, AP 530045",
    phone: "+91 891.272.4410",
    email: "vizag@enfycon.com",
    image: "/images/locations/visakhapatnam.jpg",
    fallback: "https://www.enfycon.com/images/locations/visakhapatnam.jpg"
  },
  {
    region: "India",
    city: "Hyderabad, India",
    address: "HITEC City, Cyber Towers, Hyderabad, Telangana 500081",
    phone: "+91 40.4855.9900",
    email: "hyderabad@enfycon.com",
    image: "/images/locations/hyderabad.jpg",
    fallback: "https://www.enfycon.com/images/locations/hyderabad.jpg"
  },
];

export default function AboutPage() {
  const [activeLocationFilter, setActiveLocationFilter] = useState("All");

  const filteredLocations = activeLocationFilter === "All"
    ? locations
    : locations.filter((loc) => loc.region === activeLocationFilter);

  return (
    <div className="min-h-screen bg-[#080C1E] relative overflow-hidden font-sans">
      <Navbar />

      <PageHeader
        title="Building Success Together"
        subtitle="At enfycon, we empower enterprises to navigate the digital future with confidence. Specializing in AI-driven solutions and agentic workflows, we partner with clients globally."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }]}
      />

      {/* Founder & Story Section */}
      <section className="py-24 bg-[#0F172A] relative z-10 border-b border-slate-800">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Leadership & Vision
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                Founder's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Story & Vision</span>
              </h2>

              <div className="space-y-4 text-slate-300 leading-relaxed text-base lg:text-lg mb-10 font-light">
                {founderStory.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Founder Quote Card (Glassmorphism) */}
              <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-7 shadow-xl border border-slate-700/50 relative overflow-hidden group hover:border-cyan-400/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="text-sm md:text-base italic text-slate-200 leading-relaxed mb-6 relative z-10 font-light">
                  "{founderStory.quote}"
                </p>
                <div className="flex items-center justify-between border-t border-slate-700/60 pt-4 relative z-10">
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-base">{founderStory.name}</h4>
                    <p className="text-xs text-cyan-400 font-medium">{founderStory.role}</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300">
                    Enfycon Inc
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Founder Photo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 max-w-md w-full group">
                <img
                  src={founderStory.image}
                  alt={founderStory.name}
                  className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = founderStory.fallback;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold drop-shadow-md">{founderStory.name}</h3>
                  <p className="text-sm text-cyan-300 drop-shadow-md">{founderStory.role}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dark History Timeline Section */}
      <section className="py-24 bg-[#080C1E] text-white relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-3/4 bg-gradient-to-b from-transparent via-indigo-600/30 to-transparent hidden lg:block" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-xs font-extrabold uppercase tracking-widest mb-4">
              Our Evolution
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Milestones of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Our Success</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base lg:text-lg font-light">
              A timeline of relentless innovation, global expansion, and client excellence.
            </p>
          </motion.div>

          <div className="space-y-16">
            {timelineHistory.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-800 p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)] hover:border-cyan-400/40 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group"
              >
                {/* Text Side */}
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold tracking-wider uppercase">
                      {item.tag}
                    </span>
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">{item.year}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-base lg:text-lg leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Image Side */}
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/60 shadow-lg relative">
                    <div className="absolute inset-0 bg-indigo-600/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 md:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = item.fallback;
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-[#0F172A] relative border-b border-slate-800/80">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold uppercase tracking-widest mb-4">
              Our Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Core Principles</span></h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base lg:text-lg font-light">The foundational values that guide our decisions, solutions, and culture.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -10, boxShadow: `0 30px 60px ${val.glow}` }}
                className="bg-slate-900/80 backdrop-blur-md rounded-[20px] p-8 border border-slate-800 shadow-xl transition-all duration-500 group relative overflow-hidden"
              >
                {/* Glow backdrop on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundColor: val.glow.replace('0.3', '1') }} />
                
                <div className="w-14 h-14 rounded-[14px] bg-slate-800 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm relative z-10" style={{ border: `1px solid ${val.glow.replace('0.3', '0.5')}` }}>
                  <val.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3 transition-colors relative z-10 group-hover:text-cyan-300">
                  {val.title}
                </h3>
                <p className="text-slate-300 text-sm lg:text-base leading-relaxed font-light relative z-10">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Initiatives Section */}
      <section className="py-24 bg-[#080C1E] relative border-b border-slate-800/80">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-extrabold uppercase tracking-widest mb-4">
              Our Social Impact
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Social Responsibility</span></h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base lg:text-lg font-light">Making a tangible difference through active community development and outreach programs.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {csrInitiatives.map((csr, i) => (
              <motion.div
                key={csr.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800 shadow-xl overflow-hidden hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:border-emerald-500/30 transition-all duration-500 flex flex-col group"
              >
                <div className="h-48 overflow-hidden relative bg-slate-800">
                  <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />
                  <img
                    src={csr.image}
                    alt={csr.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = csr.fallback;
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-extrabold text-emerald-400 border border-emerald-500/30 shadow-sm z-20">
                    {csr.badge}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-extrabold text-white mb-3 leading-snug group-hover:text-emerald-400 transition-colors">
                      {csr.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed font-light">
                      {csr.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Locations Section */}
      <section className="py-24 bg-[#0F172A] relative">
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-extrabold uppercase tracking-widest mb-4">
                Global Offices
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Global Presence, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Local Excellence</span>
              </h2>
            </div>

            {/* Region Filter Buttons */}
            <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 shadow-sm self-start lg:self-auto backdrop-blur-md">
              {["All", "USA", "India"].map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveLocationFilter(region)}
                  className={`px-6 py-2 rounded-lg text-sm font-extrabold transition-all duration-300 ${
                    activeLocationFilter === region
                      ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md"
                      : "text-slate-400 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLocations.map((loc, i) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800 shadow-xl overflow-hidden hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:border-blue-500/30 transition-all duration-500 flex flex-col group"
              >
                <div className="h-48 overflow-hidden relative bg-slate-800">
                  <img
                    src={loc.image}
                    alt={loc.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = loc.fallback;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-5 text-white z-10">
                    <span className="text-xs font-extrabold bg-blue-600/90 backdrop-blur-md px-3 py-1 rounded-md shadow-lg border border-blue-500/50">
                      {loc.region}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-white mb-3 flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                      <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                      {loc.city}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                      {loc.address}
                    </p>
                  </div>

                  <div className="space-y-3 pt-5 border-t border-slate-800/80 text-sm font-medium">
                    <a href={`tel:${loc.phone}`} className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group/link">
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover/link:bg-cyan-500/20 transition-colors">
                        <Phone className="w-3.5 h-3.5 text-cyan-500" />
                      </div>
                      {loc.phone}
                    </a>
                    <a href={`mailto:${loc.email}`} className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group/link">
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover/link:bg-cyan-500/20 transition-colors">
                        <Mail className="w-3.5 h-3.5 text-cyan-500" />
                      </div>
                      {loc.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
