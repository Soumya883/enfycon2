import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

const particleDots = Array.from({ length: 18 });

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#080c1e] py-28 lg:py-36">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src="/video/hero-video.mp4" type="video/mp4" />
        <source src="https://www.enfycon.com/video/ENFYCON%20VIDEO%20HERO.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay per Spec: linear-gradient(rgba(8,12,30,.78), rgba(8,12,30,.72)) */}
      <div
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
        style={{
          background: "linear-gradient(rgba(8,12,30,.78), rgba(8,12,30,.72))",
        }}
      />

      {/* Floating Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none z-10 animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Floating Background Particle Dots */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {particleDots.map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: `${(i * 19) % 100}%`,
              y: `${(i * 23) % 100}%`,
              opacity: 0.2 + (i % 5) * 0.15,
              scale: 0.6 + (i % 4) * 0.3,
            }}
            animate={{
              y: [`${(i * 23) % 100}%`, `${((i * 23) + 30) % 100}%`, `${(i * 23) % 100}%`],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 8 + (i % 6) * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00D4FF]"
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-cyan-400/30 rounded-full px-6 py-2 mb-8 shadow-[0_0_30px_rgba(0,212,255,0.2)]"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
            <span className="text-white text-xs md:text-sm font-extrabold tracking-widest uppercase">
              Awwwards Grade Enterprise AI & Technology
            </span>
          </motion.div>

          {/* Heading (72px+, font-weight:800, line-height:1, letter-spacing:-2px) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 tracking-[-2px] leading-[1.05] drop-shadow-2xl"
          >
            Enterprise{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 animate-pulse">
              Intelligence
            </span>
            <br />
            Redefined
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-md"
          >
            Delivering precision AI solutions, robust cybersecurity, and elite IT
            staffing for modern Fortune 500 enterprises.
          </motion.p>

          {/* Buttons with Lift, Glow, & Ripple animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={() => scrollTo("#services")}
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white px-10 py-5 rounded-[14px] font-extrabold text-base transition-all duration-300 shadow-[0_10px_40px_rgba(79,70,229,0.5)] hover:shadow-[0_15px_50px_rgba(0,212,255,0.8)] hover:-translate-y-1.5 active:scale-[0.97] flex items-center justify-center gap-2 group"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-xl border border-white/30 text-white px-10 py-5 rounded-[14px] font-extrabold text-base transition-all duration-300 hover:bg-white/20 hover:border-white/60 hover:-translate-y-1.5 active:scale-[0.97] flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5 text-cyan-400" />
              <span>Partner With Us</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Feature Badges Below Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 text-xs text-slate-300 font-semibold"
        >
          <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ISO 27001 & SOC2 Certified</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-slate-800">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Sub-Second Response Latency</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-11 rounded-full border-2 border-cyan-400/50 flex items-start justify-center pt-2 backdrop-blur-md bg-slate-950/40 shadow-[0_0_20px_rgba(0,212,255,0.4)]"
        >
          <div className="w-1.5 h-3 rounded-full bg-cyan-400 animate-pulse" />
        </motion.div>
      </motion.div>
    </section>
  );
}
