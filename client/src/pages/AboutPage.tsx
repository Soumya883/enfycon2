import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Award, Globe, Users, Target, Heart, Sparkles, MapPin, Phone, Mail, ArrowRight, ShieldCheck, Lightbulb, Handshake } from "lucide-react";

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
  { title: "Integrity", description: "Doing the right thing always, building transparent relationships with our partners.", icon: ShieldCheck },
  { title: "Impact", description: "Delivering measurable business value through precision technology execution.", icon: Target },
  { title: "Innovation", description: "Pioneering next-gen AI platforms and autonomous workflow intelligence.", icon: Lightbulb },
  { title: "People First", description: "Investing in our talent and creating an inclusive culture of continuous growth.", icon: Heart },
  { title: "Excellence", description: "Uncompromising quality standards across engineering, security, and staffing.", icon: Award },
  { title: "Partnership", description: "Working alongside clients as dedicated extensions of their engineering teams.", icon: Handshake },
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute top-0 right-0 w-full h-[600px] pointer-events-none opacity-5 bg-no-repeat bg-right-top z-0"
        style={{ backgroundImage: "url('/images/bg/map.svg')" }}
      />
      <div
        className="absolute top-60 left-0 w-96 h-96 pointer-events-none opacity-10 bg-no-repeat z-0"
        style={{ backgroundImage: "url('/images/shape/pattern-2.svg')" }}
      />

      <Navbar />

      <PageHeader
        title="Building Success Together"
        subtitle="At enfycon, we empower enterprises to navigate the digital future with confidence. Specializing in AI-driven solutions and agentic workflows, we partner with clients globally."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }]}
      />

      {/* Founder & Story Section */}
      <section className="py-24 bg-white relative z-10 border-b border-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Leadership & Vision
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                Founder's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Story & Vision</span>
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed text-base mb-8">
                {founderStory.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Founder Quote Card */}
              <div className="bg-gradient-to-r from-gray-900 to-blue-950 text-white rounded-2xl p-7 shadow-xl border border-gray-800 relative overflow-hidden">
                <div
                  className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 bg-no-repeat bg-right"
                  style={{ backgroundImage: "url('/images/shape/pattern-3.svg')" }}
                />
                <p className="text-sm md:text-base italic text-gray-200 leading-relaxed mb-4 relative z-10">
                  "{founderStory.quote}"
                </p>
                <div className="flex items-center justify-between border-t border-gray-800 pt-4 relative z-10">
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-base">{founderStory.name}</h4>
                    <p className="text-xs text-blue-400 font-medium">{founderStory.role}</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300">
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-md w-full group">
                <img
                  src={founderStory.image}
                  alt={founderStory.name}
                  className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = founderStory.fallback;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold">{founderStory.name}</h3>
                  <p className="text-sm text-blue-300">{founderStory.role}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dark History Timeline Section (Matching Screenshot) */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 opacity-10 bg-no-repeat bg-right-top pointer-events-none"
          style={{ backgroundImage: "url('/images/bg/map.svg')" }}
        />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-blue-400 font-bold tracking-[0.2em] uppercase text-xs mb-3">Our Evolution</p>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Milestones of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Our Success</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
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
                className="bg-slate-900/90 rounded-3xl border border-slate-800 p-8 md:p-12 shadow-2xl hover:border-blue-500/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Text Side */}
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold">
                      {item.tag}
                    </span>
                    <span className="text-2xl font-extrabold text-blue-400">{item.year}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Image Side */}
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/60 shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 md:h-72 object-cover hover:scale-105 transition-transform duration-500"
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
      <section className="py-24 bg-gray-50 relative border-b border-gray-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">Our Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Driven by Core Principles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">The foundational values that guide our decisions, solutions, and culture.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <val.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {val.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Initiatives Section */}
      <section className="py-24 bg-white relative border-b border-gray-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">Our Social Impact</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Corporate Social Responsibility</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">Making a tangible difference through active community development and outreach programs.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {csrInitiatives.map((csr, i) => (
              <motion.div
                key={csr.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden relative bg-gray-100">
                  <img
                    src={csr.image}
                    alt={csr.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = csr.fallback;
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                    {csr.badge}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                      {csr.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
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
      <section className="py-24 bg-gray-50/70 relative">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">Global Offices</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Global Presence, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Local Excellence</span>
              </h2>
            </div>

            {/* Region Filter Buttons */}
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-gray-200 shadow-sm self-start md:self-auto">
              {["All", "USA", "India"].map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveLocationFilter(region)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeLocationFilter === region
                      ? "bg-primary text-white shadow-sm"
                      : "text-gray-600 hover:bg-gray-100"
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="h-44 overflow-hidden relative bg-gray-100">
                  <img
                    src={loc.image}
                    alt={loc.city}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = loc.fallback;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-xs font-bold bg-primary px-2.5 py-0.5 rounded-md shadow-sm">
                      {loc.region}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      {loc.city}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed mb-6">
                      {loc.address}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-gray-100 text-xs font-medium">
                    <a href={`tel:${loc.phone}`} className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                      <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                      {loc.phone}
                    </a>
                    <a href={`mailto:${loc.email}`} className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                      <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
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
