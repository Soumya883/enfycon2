import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Linkedin, Twitter, Mail, Users, Award, Globe, ArrowRight, Sparkles, ArrowUpRight } from "lucide-react";

const teamMembers = [
  { name: "Ashutosh Dash", role: "Founder & CEO", dept: "Leadership", bio: "Visionary technologist with 15+ years leading enterprise AI transformations across Fortune 500 companies. Founded Enfycon to democratize AI for enterprises globally.", image: "/images/team/founder2.jpeg", fallback: "https://www.enfycon.com/images/team/founder2.jpeg", linkedin: "#", twitter: "#", badge: "Founder" },
  { name: "Priya Sharma", role: "Chief Technology Officer", dept: "Engineering", bio: "AI and machine learning architect specializing in scalable enterprise platforms, cloud-native solutions, and zero-trust security frameworks.", image: "/images/team/team-2.jpg", fallback: "https://ui-avatars.com/api/?name=Priya+Sharma&background=4F46E5&color=fff&size=400", linkedin: "#", twitter: "#", badge: "CTO" },
  { name: "Arjun Mehta", role: "VP of AI Engineering", dept: "Engineering", bio: "Expert in autonomous AI agents and LLM orchestration with a track record of deploying mission-critical AI systems at scale.", image: "/images/team/team-3.jpg", fallback: "https://ui-avatars.com/api/?name=Arjun+Mehta&background=7C3AED&color=fff&size=400", linkedin: "#", twitter: "#", badge: "AI Lead" },
  { name: "Rachel Torres", role: "Head of Cybersecurity", dept: "Security", bio: "CISSP-certified security architect with expertise in SOC-2, ISO 27001, and zero-trust network design for global enterprises.", image: "/images/team/team-4.jpg", fallback: "https://ui-avatars.com/api/?name=Rachel+Torres&background=0891B2&color=fff&size=400", linkedin: "#", twitter: "#", badge: "CISSP" },
  { name: "David Chen", role: "Director of US IT Staffing", dept: "Staffing", bio: "15 years of talent acquisition experience connecting enterprises with elite AI, cloud, and cybersecurity professionals across the US.", image: "/images/team/team-5.jpg", fallback: "https://ui-avatars.com/api/?name=David+Chen&background=059669&color=fff&size=400", linkedin: "#", twitter: "#", badge: "Talent" },
  { name: "Neha Kulkarni", role: "Chief People Officer", dept: "Leadership", bio: "Organizational leadership expert focused on building high-performance engineering cultures and global workforce strategies.", image: "/images/team/team-6.jpg", fallback: "https://ui-avatars.com/api/?name=Neha+Kulkarni&background=DB2777&color=fff&size=400", linkedin: "#", twitter: "#", badge: "CPO" },
];

const depts = ["All", "Leadership", "Engineering", "Security", "Staffing"];

const stats = [
  { value: "150+", label: "Team Members Globally", icon: Users },
  { value: "12+", label: "Countries Represented", icon: Globe },
  { value: "10+", label: "Years of Excellence", icon: Award },
];

const deptColors: Record<string, string> = {
  Leadership: "from-indigo-500 to-purple-600",
  Engineering: "from-cyan-500 to-blue-600",
  Security: "from-rose-500 to-orange-500",
  Staffing: "from-emerald-500 to-teal-600",
};

export default function TeamPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = activeFilter === "All" ? teamMembers : teamMembers.filter(m => m.dept === activeFilter);

  return (
    <div className="min-h-screen bg-[#080C1E] font-sans relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[150px] pointer-events-none" />

      <Navbar />

      <PageHeader
        title="Meet the Leadership Team"
        subtitle="A world-class team of AI engineers, cybersecurity experts, and talent strategists united by one mission — delivering extraordinary outcomes."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Team", href: "/team" }]}
      />

      {/* Stats */}
      <section className="py-14 bg-slate-900/60 border-y border-slate-800/60 backdrop-blur-md relative z-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/15 border border-indigo-400/20 text-indigo-400 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7" />
                </div>
                <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-1">{stat.value}</p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-28">
        <div className="container">
          {/* Department Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-16">
            {depts.map(dept => (
              <button
                key={dept}
                onClick={() => setActiveFilter(dept)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold border transition-all duration-300 ${
                  activeFilter === dept
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-lg shadow-indigo-500/30"
                    : "bg-slate-900/60 border-slate-700/60 text-slate-300 hover:border-indigo-400/50 hover:text-white"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((member, i) => (
                <motion.div
                  key={member.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ y: -10 }}
                  className="group bg-slate-900/70 backdrop-blur-xl rounded-[24px] border border-slate-800/80 hover:border-indigo-500/40 overflow-hidden transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(79,70,229,0.2)]"
                >
                  {/* Image */}
                  <div className="h-64 overflow-hidden relative bg-slate-800">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = member.fallback; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent" />

                    {/* Dept badge */}
                    <div className={`absolute top-4 left-4 bg-gradient-to-r ${deptColors[member.dept] ?? "from-indigo-500 to-purple-600"} text-white text-[10px] font-extrabold px-3 py-1 rounded-full`}>
                      {member.badge}
                    </div>

                    {/* Social links overlay */}
                    <div className="absolute inset-0 flex items-end justify-center pb-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex gap-2">
                        {[
                          { icon: Linkedin, href: member.linkedin, color: "hover:bg-blue-600" },
                          { icon: Twitter, href: member.twitter, color: "hover:bg-cyan-500" },
                          { icon: Mail, href: "#contact", color: "hover:bg-emerald-500" },
                        ].map((social, si) => (
                          <a key={si} href={social.href} className={`w-9 h-9 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 ${social.color} flex items-center justify-center text-white transition-all duration-200`}>
                            <social.icon className="w-4 h-4" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-extrabold text-white mb-1 group-hover:text-indigo-300 transition-colors">{member.name}</h3>
                    <p className="text-indigo-400 font-bold text-xs uppercase tracking-wider mb-4">{member.role}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border border-indigo-800/40 p-12 text-center shadow-[0_40px_100px_rgba(79,70,229,0.2)]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.15),transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5" /> Join Our Team
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Want to Work With <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">World-Class Talent?</span>
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 font-light">We're always looking for exceptional people. Explore our open positions and join the team driving enterprise AI forward.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/career" className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-extrabold text-sm hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                  View Open Roles <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="/contact-us" className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-2xl font-extrabold text-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
