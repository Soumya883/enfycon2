import { motion } from "framer-motion";
import { Award, Target, Eye, ArrowRight } from "lucide-react";

const stats = [
  { value: "200+", label: "Enterprise Projects" },
  { value: "50+", label: "Global Clients" },
  { value: "99%", label: "Client Retention" },
  { value: "24/7", label: "Managed SOC Coverage" },
];

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Background Accent Graphics */}
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-5 pointer-events-none">
        <img
          src="/images/shape/pattern-3.svg"
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://www.enfycon.com/images/shape/pattern-3.svg"; }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Image Stack with Floating Experience Badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[22px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-200/80">
              <img
                src="/images/about/about-us.jpg"
                alt="About Enfycon"
                className="w-full h-[520px] object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://www.enfycon.com/images/about/about-us.jpg"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge per spec */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-8 -right-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 text-white rounded-[20px] p-6 md:p-8 shadow-[0_20px_50px_rgba(79,70,229,0.4)] flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-3xl font-extrabold tracking-tight">10+</p>
                <p className="text-xs font-bold text-cyan-200 uppercase tracking-wider">Years of Enterprise Excellence</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Mission, Vision & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-extrabold uppercase tracking-widest mb-4">
              Strategic Engineering Partner
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Pioneering the Next Era of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500">
                Enterprise IT
              </span>
            </h2>

            <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-8">
              Enfycon combines deep artificial intelligence expertise, zero-trust cybersecurity frameworks, and world-class US IT talent deployment to accelerate digital transformation.
            </p>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="p-5 rounded-[16px] bg-slate-50 border border-slate-200/80 hover:border-indigo-400 transition-colors">
                <div className="w-10 h-10 rounded-[12px] bg-indigo-600/10 text-indigo-600 flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-base mb-1">Our Mission</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Deliver autonomous, high-yield AI systems and fortress-grade security that empower enterprise agility.
                </p>
              </div>

              <div className="p-5 rounded-[16px] bg-slate-50 border border-slate-200/80 hover:border-purple-400 transition-colors">
                <div className="w-10 h-10 rounded-[12px] bg-purple-600/10 text-purple-600 flex items-center justify-center mb-3">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-base mb-1">Our Vision</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Be the globally trusted platform for next-generation AI architectures and technology leadership.
                </p>
              </div>
            </div>

            {/* Statistics Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/80">
              {stats.map((stat, i) => (
                <div key={i} className="text-left">
                  <p className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-indigo-600 font-extrabold text-sm hover:text-indigo-800 transition-colors"
              >
                <span>Read Full Corporate Story</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
