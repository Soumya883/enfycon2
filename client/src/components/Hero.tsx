import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Star, Rocket, Lock, Zap } from "lucide-react";

const particleDots = Array.from({ length: 16 }, (_, i) => ({
  x: (i * 17 + 5) % 100,
  y: (i * 23 + 10) % 100,
  dx: (i % 2 === 0 ? 1 : -1) * ((i % 5) + 1) * 3,
  size: 1.5 + (i % 4) * 0.8,
  duration: 8 + (i % 7) * 2,
  delay: (i % 6) * 0.8,
  opacity: 0.2 + (i % 5) * 0.12,
}));

// Word-by-word stagger variants
const sentenceVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.3 } },
};
const wordVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// Magnetic button hook component
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

  // Parallax: video moves up slowly on scroll
  const videoY = useTransform(scrollY, [0, 600], [0, -80]);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#080c1e] py-32 lg:py-40"
    >
      {/* Background Video with parallax */}
      <motion.div style={{ y: videoY }} className="absolute top-0 left-0 w-full h-full z-0">
        <video
          autoPlay loop muted playsInline
          preload="none"
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/video/hero-video.mp4" type="video/mp4" />
          <source src="https://www.enfycon.com/video/ENFYCON%20VIDEO%20HERO.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark Overlay — slightly darker for crisper text readability */}
      <div
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
        style={{ background: "linear-gradient(rgba(8,12,30,.88), rgba(8,12,30,.82))" }}
      />

      {/* Slow-drifting gradient light orbs */}
      <motion.div
        className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-indigo-600/25 rounded-full blur-[130px] pointer-events-none z-10"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-[130px] pointer-events-none z-10"
        animate={{ x: [0, -35, 25, 0], y: [0, 25, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none z-10"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Background Particles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {particleDots.map((p, i) => (
          <motion.div
            key={i}
            initial={{ x: `${p.x}%`, y: `${p.y}%`, opacity: p.opacity }}
            animate={{
              x: [`${p.x}%`, `${p.x + p.dx}%`, `${p.x}%`],
              y: [`${p.y}%`, `${(p.y + 25) % 100}%`, `${p.y}%`],
              opacity: [p.opacity, p.opacity * 2.5, p.opacity],
            }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: p.size, height: p.size }}
            className="absolute rounded-full bg-cyan-400 shadow-[0_0_8px_#00D4FF]"
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto pt-16">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-cyan-400/30 rounded-full px-6 py-2 mb-8 shadow-[0_0_30px_rgba(0,212,255,0.2)]"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
          <span className="text-white text-xs md:text-sm font-extrabold tracking-widest uppercase">
            Awwwards Grade Enterprise AI & Technology
          </span>
        </motion.div>

        {/* Staggered word-by-word heading reveal */}
        <motion.h1
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
          className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 tracking-[-2px] leading-[1.05] drop-shadow-2xl"
        >
          {["Enterprise"].map((w) => (
            <motion.span key={w} variants={wordVariants} className="inline-block mr-[0.25em]">{w}</motion.span>
          ))}
          <motion.span
            variants={wordVariants}
            className="inline-block mr-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400"
          >
            Intelligence
          </motion.span>
          <br />
          {["Redefined"].map((w) => (
            <motion.span key={w} variants={wordVariants} className="inline-block">{w}</motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-lg md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-md"
        >
          Delivering precision AI solutions, robust cybersecurity, and elite IT
          staffing for modern Fortune 500 enterprises.
        </motion.p>

        {/* Magnetic CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <MagneticButton
            onClick={() => scrollTo("#services")}
            className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white px-10 py-5 rounded-[14px] font-extrabold text-base transition-all duration-300 shadow-[0_10px_40px_rgba(79,70,229,0.5)] hover:shadow-[0_15px_55px_rgba(0,212,255,0.8)] flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore Solutions</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </MagneticButton>

          <MagneticButton
            onClick={() => scrollTo("#contact")}
            className="w-full sm:w-auto bg-white/10 backdrop-blur-xl border border-white/30 text-white px-10 py-5 rounded-[14px] font-extrabold text-base transition-all duration-300 hover:bg-white/20 hover:border-white/60 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Zap className="w-5 h-5 text-cyan-400" />
            <span>Partner With Us</span>
          </MagneticButton>
        </motion.div>

        {/* Hero Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-16 text-xs text-slate-200 font-extrabold"
        >
          {[
            { icon: <Star className="w-4 h-4 fill-amber-400 text-amber-400" />, text: "Trusted by 200+ Businesses", hover: "hover:border-amber-400/50" },
            { icon: <Rocket className="w-4 h-4 text-cyan-400" />, text: "500+ Successful Projects", hover: "hover:border-cyan-400/50" },
            { icon: <Lock className="w-4 h-4 text-emerald-400" />, text: "Enterprise-Grade Security", hover: "hover:border-emerald-400/50" },
          ].map((badge, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`flex items-center gap-2 bg-slate-900/80 backdrop-blur-xl px-5 py-2.5 rounded-full border border-slate-700/80 shadow-lg ${badge.hover} transition-all duration-300`}
            >
              {badge.icon}
              <span>{badge.text}</span>
            </motion.div>
          ))}
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
