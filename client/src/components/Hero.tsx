import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, Sparkles, Star, Rocket, Lock, Zap, CheckCircle2 } from "lucide-react";

const particleDots = Array.from({ length: 20 }, (_, i) => ({
  x: (i * 17 + 5) % 100,
  y: (i * 23 + 10) % 100,
  dx: (i % 2 === 0 ? 1 : -1) * ((i % 5) + 1) * 2,
  size: 1.5 + (i % 4) * 0.8,
  duration: 6 + (i % 7) * 2,
  delay: (i % 6) * 0.6,
  opacity: 0.3 + (i % 5) * 0.1,
}));

// Magnetic button component
function MagneticButton({ children, className, onClick }: { children: React.ReactNode; className: string; onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.button>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Subtle parallax move on scroll
  const videoY = useTransform(scrollY, [0, 600], [0, -50]);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[95vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 py-32 lg:py-40"
    >
      {/* Crisp Background Video - No Blue Overlay Blocking It! */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-95 scale-[1.02]"
        >
          <source src="/video/hero-video.mp4" type="video/mp4" />
          <source src="https://www.enfycon.com/video/ENFYCON%20VIDEO%20HERO.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Subtle Natural Vignette Overlay - Protects text readability without turning blue or masking video */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/85" />

      {/* Very faint ambient cyan glow accents at edges (non-blocking) */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none z-10" />

      {/* Floating particles overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {particleDots.map((p, i) => (
          <motion.div
            key={i}
            initial={{ x: `${p.x}%`, y: `${p.y}%`, opacity: p.opacity }}
            animate={{
              x: [`${p.x}%`, `${p.x + p.dx}%`, `${p.x}%`],
              y: [`${p.y}%`, `${(p.y + 20) % 100}%`, `${p.y}%`],
              opacity: [p.opacity, p.opacity * 2.2, p.opacity],
            }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: p.size, height: p.size }}
            className="absolute rounded-full bg-cyan-400 shadow-[0_0_10px_#00D4FF]"
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 md:px-6 max-w-5xl mx-auto pt-16">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-xl border border-cyan-400/40 rounded-full px-5 py-2 mb-8 shadow-[0_0_25px_rgba(0,212,255,0.25)]"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-white text-xs md:text-sm font-extrabold tracking-widest uppercase">
            Enterprise AI & Next-Gen IT Solutions
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        >
          Enterprise{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
            Intelligence
          </span>{" "}
          Redefined
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-lg md:text-2xl text-slate-100 max-w-3xl mx-auto mb-12 leading-relaxed font-normal drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
        >
          Empowering global leaders with precision AI agents, zero-trust cybersecurity, and elite US IT staffing solutions.
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
        >
          <MagneticButton
            onClick={() => scrollTo("#services")}
            className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white px-9 py-4 rounded-xl font-black text-base shadow-[0_10px_35px_rgba(79,70,229,0.6)] hover:shadow-[0_15px_45px_rgba(0,212,255,0.8)] hover:scale-[1.02] flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer"
          >
            <span>Explore Our Solutions</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>

          <MagneticButton
            onClick={() => scrollTo("#contact")}
            className="w-full sm:w-auto bg-slate-900/80 backdrop-blur-xl border border-white/30 hover:border-cyan-400/80 text-white px-9 py-4 rounded-xl font-black text-base hover:bg-slate-800/90 shadow-xl hover:shadow-[0_10px_30px_rgba(0,212,255,0.3)] hover:scale-[1.02] flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer"
          >
            <Zap className="w-5 h-5 text-cyan-400" />
            <span>Schedule a Demo</span>
          </MagneticButton>
        </motion.div>

        {/* Glassmorphic Metrics / Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { metric: "200+", label: "Enterprise Clients", icon: Star, color: "text-amber-400" },
            { metric: "500+", label: "AI Deployments", icon: Rocket, color: "text-cyan-400" },
            { metric: "99.9%", label: "Platform Uptime", icon: CheckCircle2, color: "text-emerald-400" },
            { metric: "SOC-2", label: "Certified Security", icon: Lock, color: "text-indigo-400" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-900/75 backdrop-blur-xl border border-slate-700/80 hover:border-cyan-400/50 p-4 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-xl md:text-2xl font-black text-white tracking-tight">{item.metric}</span>
              </div>
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-cyan-400/60 flex items-start justify-center pt-2 backdrop-blur-md bg-slate-950/50 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
        </motion.div>
      </motion.div>
    </section>
  );
}
