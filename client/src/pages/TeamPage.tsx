import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Linkedin, Twitter, Mail, Users, Award, Globe } from "lucide-react";

const teamMembers = [
  {
    name: "Soumya Ranjan Behura",
    role: "Founder & CEO",
    bio: "Visionary technologist with 15+ years leading enterprise AI transformations across Fortune 500 companies globally.",
    image: "/images/team/team-1.jpg",
    fallback: "https://www.enfycon.com/images/team/team-1.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    bio: "AI and machine learning architect specializing in scalable enterprise platforms, cloud-native solutions and zero-trust security.",
    image: "/images/team/team-2.jpg",
    fallback: "https://www.enfycon.com/images/team/team-2.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Arjun Mehta",
    role: "VP of AI Engineering",
    bio: "Expert in autonomous AI agents and LLM orchestration with a track record of deploying mission-critical AI systems.",
    image: "/images/team/team-3.jpg",
    fallback: "https://www.enfycon.com/images/team/team-3.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Rachel Torres",
    role: "Head of Cybersecurity",
    bio: "CISSP-certified security architect with expertise in SOC-2, ISO 27001, and zero-trust network design for global enterprises.",
    image: "/images/team/team-4.jpg",
    fallback: "https://www.enfycon.com/images/team/team-4.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Chen",
    role: "Director of US IT Staffing",
    bio: "15 years of talent acquisition experience connecting enterprises with elite AI, cloud, and cybersecurity professionals.",
    image: "/images/team/team-5.jpg",
    fallback: "https://www.enfycon.com/images/team/team-5.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Neha Kulkarni",
    role: "Chief People Officer",
    bio: "Organizational leadership expert focused on building high-performance engineering cultures and global workforce strategies.",
    image: "/images/team/team-6.jpg",
    fallback: "https://www.enfycon.com/images/team/team-6.jpg",
    linkedin: "#",
    twitter: "#",
  },
];

const stats = [
  { value: "150+", label: "Team Members Globally", icon: Users },
  { value: "12+", label: "Countries Represented", icon: Globe },
  { value: "10+", label: "Years of Excellence", icon: Award },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      <Navbar />

      <PageHeader
        title="Meet the Leadership Team"
        subtitle="A world-class team of AI engineers, cybersecurity experts, and talent strategists driving enterprise transformation."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Team", href: "/team" }]}
      />

      {/* Stats */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7" />
                </div>
                <p className="text-4xl font-black text-slate-900 mb-1">{stat.value}</p>
                <p className="text-slate-500 font-semibold text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-28 lg:py-36">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-[20px] border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-500"
              >
                <div className="h-64 overflow-hidden bg-slate-100 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(member.name) + "&background=4F46E5&color=fff&size=400"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
                    <a href={member.linkedin} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-indigo-600 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={member.twitter} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-cyan-500 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#contact" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-emerald-500 transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-bold text-sm mb-3">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
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
