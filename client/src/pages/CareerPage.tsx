import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { MapPin, Briefcase, ArrowRight, Sparkles, Star, Heart, Target, Lightbulb, Users, CheckCircle2, ArrowUpRight } from "lucide-react";

const openPositions = [
  { title: "Senior AI/ML Engineer", location: "Flower Mound, TX (On-site)", type: "Full-time", department: "Engineering", experience: "5+ Years", salary: "$140k - $180k" },
  { title: "Full Stack Developer (React/Node.js)", location: "Remote", type: "Full-time", department: "Engineering", experience: "3+ Years", salary: "$100k - $130k" },
  { title: "DevOps Engineer", location: "Dublin, OH (Hybrid)", type: "Full-time", department: "Infrastructure", experience: "4+ Years", salary: "$115k - $145k" },
  { title: "Data Scientist", location: "Newark, DE (Hybrid)", type: "Full-time", department: "Data & Analytics", experience: "3+ Years", salary: "$120k - $150k" },
  { title: "Cybersecurity Analyst", location: "Remote", type: "Full-time", department: "Security", experience: "4+ Years", salary: "$110k - $140k" },
  { title: "Technical Recruiter", location: "Flower Mound, TX (On-site)", type: "Full-time", department: "HR", experience: "2+ Years", salary: "$70k - $90k" },
];

const departments = ["All", "Engineering", "Infrastructure", "Data & Analytics", "Security", "HR"];

const benefits = [
  { icon: Heart, title: "Health & Wellness", desc: "Premium medical, dental, and vision insurance packages for you and your family." },
  { icon: Target, title: "Career Growth", desc: "Dedicated learning stipend, cert costs coverage, and clear mentorship paths." },
  { icon: Lightbulb, title: "Innovation Time", desc: "10% time dedicated to working on custom open-source projects or R&D." },
  { icon: Users, title: "Inclusive Culture", desc: "Collaborative, diverse environment with team building events and off-sites." },
];

const cultureImages = [
  {
    url: "https://www.enfycon.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1573164713988-8665fc963095%3Fixlib%3Drb-4.0.3%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D80&w=1080&q=75",
    title: "Innovative Mindsets",
    desc: "Collaborative dynamic brainstorming sessions."
  },
  {
    url: "https://www.enfycon.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1521737711867-e3b97375f902%3Fixlib%3Drb-4.0.3%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D80&w=1080&q=75",
    title: "Global Teamwork",
    desc: "Cross-functional teams designing futuristic solutions."
  },
  {
    url: "https://www.enfycon.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1529400971008-f566de0e6dfc%3Fixlib%3Drb-4.0.3%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D80&w=1080&q=75",
    title: "Focus & Execution",
    desc: "Driven by technical perfection and clean execution."
  },
  {
    url: "https://www.enfycon.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1552664730-d307ca884978%3Fixlib%3Drb-4.0.3%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D80&w=1080&q=75",
    title: "Whiteboard Sessions",
    desc: "Deep tech-stack planning and architecture mapping."
  },
  {
    url: "https://www.enfycon.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1531482615713-2afd69097998%3Fixlib%3Drb-4.0.3%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D80&w=1080&q=75",
    title: "Product Milestones",
    desc: "Celebrating key releases and system deployments."
  },
  {
    url: "https://www.enfycon.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1460925895917-afdab827c52f%3Fixlib%3Drb-4.0.3%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D80&w=1080&q=75",
    title: "Data Visualization",
    desc: "Analyzing key performance telemetry & metrics."
  }
];

export default function CareerPage() {
  const [selectedDept, setSelectedDept] = useState("All");

  const filteredJobs = selectedDept === "All"
    ? openPositions
    : openPositions.filter(job => job.department === selectedDept);

  return (
    <div className="min-h-screen bg-[#080C1E] text-white font-sans relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <Navbar />

      <PageHeader
        title="Careers at Enfycon"
        subtitle="Shape the future of enterprise AI, cybersecurity, and engineering alongside premium minds globally."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Careers", href: "/career" }]}
      />

      {/* Hero Culture Showcase section */}
      <section className="py-24 relative z-10 border-b border-slate-800">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                Work With Impact
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                Empowering Minds, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Engineering Future</span>
              </h2>
              <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed mb-8">
                At Enfycon, our values drive our technology decisions. We build cloud-native software and agentic workflows that matter. If you are passionate about optimization, clean code, and working on challenging global systems, you belong here.
              </p>
              <div className="space-y-4">
                {[
                  "Accelerated professional development options.",
                  "Transparent, collaborative flat organizational structure.",
                  "Freedom to innovate with emerging open-source tech stacks."
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">
                <img
                  src="https://www.enfycon.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1522071820081-009f0129c71c%3Fixlib%3Drb-4.0.3%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D80&w=1920&q=75"
                  alt="Enfycon Collaborative Team"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C1E] via-slate-900/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-400/30">
                    <Star className="w-3.5 h-3.5 fill-current" /> Premium Workplace
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Life at Enfycon Gallery Grid */}
      <section className="py-24 bg-[#0B0F24]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-4">
              Culture Gallery
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Life Inside <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Our Space</span>
            </h2>
            <p className="text-slate-400 font-light leading-relaxed">
              Explore the snapshots of collaboration, technical breakthroughs, and smart workplaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cultureImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/40 p-2 shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="h-56 rounded-xl overflow-hidden relative">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">{img.title}</h3>
                  <p className="text-xs text-slate-400 font-light">{img.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-24 border-b border-slate-800">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Benefits & Perks</span>
            </h2>
            <p className="text-slate-400 font-light">
              We design packages that take care of your growth, wellness, and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-7 hover:border-indigo-500/30 transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
                  <b.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{b.title}</h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job listings section */}
      <section className="py-24 bg-[#090D22]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Open Positions</h2>
            <p className="text-slate-400 font-light leading-relaxed mb-10">
              Find your next role. Select your specialization and see current job openings.
            </p>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-5 py-2.5 rounded-full text-xs font-extrabold border transition-all duration-300 ${
                    selectedDept === dept
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-lg shadow-indigo-500/30"
                      : "bg-slate-900/60 border-slate-700/60 text-slate-300 hover:border-indigo-400/50 hover:text-white"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredJobs.map((job, i) => (
                <motion.div
                  key={job.title}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-900/70 border border-slate-800/80 hover:border-indigo-500/40 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">{job.title}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">
                        {job.department}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 text-sm text-slate-400 font-light">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-indigo-400" /> {job.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-indigo-400" /> {job.location}
                      </span>
                      <span className="text-slate-500">
                        Exp: <span className="text-slate-300">{job.experience}</span>
                      </span>
                      <span className="text-slate-500">
                        Salary: <span className="text-slate-300">{job.salary}</span>
                      </span>
                    </div>
                  </div>
                  <a href="/contact-us" className="bg-slate-800 hover:bg-indigo-600 text-white hover:text-white px-5 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 group-hover:gap-2.5 transition-all shrink-0">
                    Apply Now <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Brand asset logo display segment using enfycon logos */}
      <section className="py-20 border-t border-slate-800 bg-[#070B1D]">
        <div className="container text-center">
          <p className="text-xs font-extrabold uppercase text-slate-500 tracking-widest mb-10">Enfycon Brand Excellence</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <img
              src="https://www.enfycon.com/images/logos/enfycon-logo-only.png"
              alt="Enfycon Logo Icon"
              className="h-10 w-auto object-contain brightness-110"
            />
            <img
              src="https://www.enfycon.com/images/logos/logo-large.webp"
              alt="Enfycon Corporate Branding"
              className="h-12 w-auto object-contain brightness-110"
            />
            <img
              src="https://www.enfycon.com/_next/image?url=%2Fimages%2Flogos%2Flogo-large.webp&w=384&q=75"
              alt="Enfycon Small Webp Logo"
              className="h-10 w-auto object-contain brightness-110"
            />
            <img
              src="https://www.enfycon.com/images/logos/enfycon-white.png"
              alt="Enfycon White Logo"
              className="h-12 w-auto object-contain brightness-110"
            />
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border border-indigo-800/40 p-12 text-center shadow-[0_40px_100px_rgba(79,70,229,0.2)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.15),transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl font-black text-white mb-4">
                Don't Find the Right Fit?
              </h2>
              <p className="text-slate-300 text-lg max-w-xl mx-auto mb-8 font-light">
                Submit an open application. Let's align your skills with upcoming capabilities.
              </p>
              <a href="/contact-us" className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-10 py-4 rounded-2xl font-extrabold text-sm hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2">
                Open Application <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
