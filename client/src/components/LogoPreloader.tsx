import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";

// Only show preloader once per browser session
const HAS_LOADED_KEY = "enfycon_loaded";

const sciFiStatuses = [
  { text: "BOOTSTRAPPING QUANTUM NEURAL MATRIX", icon: "⬡" },
  { text: "ENCRYPTING ZERO-TRUST PROTOCOLS", icon: "◈" },
  { text: "CALIBRATING AI AGENT ORCHESTRATOR", icon: "⬟" },
  { text: "SYNCHRONIZING ENTERPRISE NODES", icon: "◉" },
  { text: "ALL SYSTEMS OPERATIONAL", icon: "✦" }
];

// Floating particle dots
const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 4,
  opacity: Math.random() * 0.5 + 0.1,
}));

// Orbital marker dots
const orbitalMarkers = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  angle: (i / 8) * 360,
  filled: i % 3 !== 1,
}));

export default function LogoPreloader() {
  // Skip preloader on repeat visits in same session — critical for LCP on navigations
  const alreadyLoaded = typeof sessionStorage !== "undefined" && sessionStorage.getItem(HAS_LOADED_KEY);
  const [visible, setVisible] = useState(!alreadyLoaded);
  const [progress, setProgress] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);
  const [glitch, setGlitch] = useState(false);

  // Spring-eased progress for smoother bar fill
  const springProgress = useSpring(0, { stiffness: 80, damping: 20 });
  const barWidth = useTransform(springProgress, [0, 100], ["0%", "100%"]);

  useEffect(() => {
    if (!visible) return; // already hidden, skip interval
    const interval = setInterval(() => {
      setProgress((prev) => {
        const delta = Math.floor(Math.random() * 10) + 4;
        const next = prev + delta > 100 ? 100 : prev + delta;
        springProgress.set(next);
        if (next >= 100) {
          clearInterval(interval);
          // Mark session so preloader won't show again this session
          sessionStorage.setItem(HAS_LOADED_KEY, "1");
          setTimeout(() => setVisible(false), 600);
        }
        return next;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setStatusIdx((p) => (p < sciFiStatuses.length - 1 ? p + 1 : p));
    }, 380);
    return () => clearInterval(msgInterval);
  }, []);

  // Random glitch flicker on the logo
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 120);
      }
    }, 1400);
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="futuristic-preloader"
          initial={{ opacity: 1 }}
          exit={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden select-none"
          style={{ background: "radial-gradient(ellipse at center, #0A0F2C 0%, #040714 60%, #000308 100%)" }}
        >
          {/* ── Scanline overlay ── */}
          <div className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay opacity-20"
            style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,212,255,0.04) 2px, rgba(0,212,255,0.04) 4px)" }} />

          {/* ── Cyber hex grid ── */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "linear-gradient(to right, #00D4FF06 1px, transparent 1px), linear-gradient(to bottom, #00D4FF06 1px, transparent 1px)", backgroundSize: "3.2rem 3.2rem" }} />

          {/* ── Floating Particles ── */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-cyan-400"
              style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, opacity: p.opacity }}
              animate={{ y: [0, -24, 0], opacity: [p.opacity, p.opacity * 2, p.opacity] }}
              transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          {/* ── Deep ambient glows ── */}
          <div className="absolute top-1/4 left-1/5 w-[550px] h-[550px] rounded-full blur-[180px] bg-indigo-600/20 animate-pulse pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/5 w-[550px] h-[550px] rounded-full blur-[180px] bg-cyan-500/15 animate-pulse pointer-events-none" style={{ animationDelay: "1.2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full blur-[120px] bg-purple-600/15 animate-pulse pointer-events-none" style={{ animationDelay: "0.6s" }} />

          {/* ── Corner HUD info ── */}
          {[
            { pos: "top-6 left-6", text: "[ CORE: ONLINE // CPU: 2.4 GHz ]" },
            { pos: "top-6 right-6", text: "[ ENCRYPT: AES-256-QUANTUM ]" },
            { pos: "bottom-6 left-6", text: "[ REGION: US-EAST-1 // 0.2ms ]" },
            { pos: "bottom-6 right-6", text: "[ BUILD: v2.4.1 // STABLE ]" },
          ].map(({ pos, text }) => (
            <motion.div key={pos} className={`absolute ${pos} font-mono text-[9px] tracking-[0.2em] text-cyan-400/30 hidden md:block`}
              animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
              {text}
            </motion.div>
          ))}

          {/* ══════════ MAIN STAGE ══════════ */}
          <div className="relative z-20 flex flex-col items-center px-6 max-w-md w-full text-center">

            {/* ── Orbital HUD ── */}
            <div className="relative flex items-center justify-center mb-10" style={{ width: 280, height: 280 }}>

              {/* Orbit rings SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 280">
                {/* Outer dashed ring */}
                <motion.circle cx="140" cy="140" r="130" fill="none" stroke="url(#ringGrad1)" strokeWidth="1.5"
                  strokeDasharray="20 10 5 10" animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "140px 140px" }} opacity="0.5" />
                {/* Mid ring */}
                <motion.circle cx="140" cy="140" r="110" fill="none" stroke="url(#ringGrad2)" strokeWidth="1"
                  strokeDasharray="35 15 8 12" animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "140px 140px" }} opacity="0.6" />
                {/* Inner ring */}
                <motion.circle cx="140" cy="140" r="88" fill="none" stroke="#00D4FF" strokeWidth="1"
                  strokeDasharray="12 22" animate={{ rotate: 360 }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "140px 140px" }} opacity="0.35" />
                {/* Gradient defs */}
                <defs>
                  <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4F46E5" />
                    <stop offset="50%" stopColor="#00D4FF" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                  <linearGradient id="ringGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#00D4FF" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Orbital dot markers spinning around outer ring */}
              {orbitalMarkers.map((m) => {
                const rad = (m.angle / 180) * Math.PI;
                const cx = 140 + 130 * Math.cos(rad);
                const cy = 140 + 130 * Math.sin(rad);
                return (
                  <motion.div key={m.id} className={`absolute w-2.5 h-2.5 rounded-full border-2 ${m.filled ? "bg-cyan-400 border-cyan-400" : "border-indigo-400 bg-transparent"} shadow-[0_0_8px_#00D4FF]`}
                    style={{ left: cx - 5, top: cy - 5 }}
                    animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }} />
                );
              })}

              {/* ── Central Logo Glass Shield ── */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className={`relative overflow-hidden bg-slate-950/90 backdrop-blur-3xl border p-8 rounded-[28px] ${glitch ? "border-cyan-300/80 shadow-[0_0_100px_rgba(0,212,255,0.7)]" : "border-cyan-400/30 shadow-[0_0_70px_rgba(0,212,255,0.4)]"}`}
                  style={{ transition: "box-shadow 0.08s, border-color 0.08s" }}>

                  {/* Laser sheen sweep */}
                  <motion.div animate={{ x: ["-150%", "250%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent -skew-x-12 pointer-events-none" />

                  {/* Glitch offset layers */}
                  {glitch && (
                    <>
                      <img src="/images/logos/enfycon-white.png" alt="" aria-hidden
                        className="absolute inset-0 m-auto h-14 md:h-16 object-contain opacity-70"
                        style={{ filter: "hue-rotate(90deg) brightness(2)", transform: "translate(-4px, 2px)" }} />
                      <img src="/images/logos/enfycon-white.png" alt="" aria-hidden
                        className="absolute inset-0 m-auto h-14 md:h-16 object-contain opacity-50"
                        style={{ filter: "hue-rotate(200deg) brightness(2)", transform: "translate(4px, -2px)" }} />
                    </>
                  )}

                  <img src="/images/logos/enfycon-white.png" alt="Enfycon Logo"
                    className="relative h-14 md:h-16 w-auto object-contain brightness-125 drop-shadow-[0_0_30px_rgba(0,212,255,1)]"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://www.enfycon.com/images/logos/enfycon-white.png"; }} />
                </div>
              </motion.div>
            </div>

            {/* ── Enterprise Badge ── */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-slate-900/80 border border-cyan-400/35 backdrop-blur-xl rounded-full px-6 py-2 mb-6 shadow-[0_0_30px_rgba(0,212,255,0.25)]">
              <motion.span animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="text-cyan-400 text-sm">✦</motion.span>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">Enterprise Intelligence</span>
              <motion.span animate={{ rotate: -360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="text-purple-400 text-sm">✦</motion.span>
            </motion.div>

            {/* ── Neural Equalizer Bars ── */}
            <div className="flex items-end justify-center gap-1.5 mb-5 h-8">
              {[35, 65, 45, 90, 55, 80, 40, 100, 60, 75, 50, 85, 30, 70, 45].map((h, i) => (
                <motion.div key={i}
                  style={{ width: 5, borderRadius: 3, background: "linear-gradient(to top, #4F46E5, #7C3AED, #00D4FF)" }}
                  animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`] }}
                  transition={{ duration: 0.5 + (i % 5) * 0.15, repeat: Infinity, ease: "easeInOut" }}
                  className="shadow-[0_0_6px_#00D4FF]"
                />
              ))}
            </div>

            {/* ── Live Status Line ── */}
            <div className="h-7 mb-5 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div key={statusIdx}
                  initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex items-center gap-2 font-mono text-[11px] font-extrabold tracking-widest text-cyan-300">
                  <span className="text-base">{sciFiStatuses[statusIdx].icon}</span>
                  <span>{sciFiStatuses[statusIdx].text}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Segmented Progress HUD ── */}
            <div className="w-full max-w-xs flex flex-col items-center gap-2">

              {/* Segmented glow bar */}
              <div className="w-full h-3 bg-slate-900/80 rounded-full overflow-hidden border border-slate-700/60 p-0.5 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                <motion.div className="h-full rounded-full shadow-[0_0_18px_#00D4FF]"
                  style={{ width: barWidth, background: "linear-gradient(to right, #4F46E5, #7C3AED, #06B6D4, #00D4FF)" }}
                  transition={{ duration: 0.1 }} />
              </div>

              {/* Percentage & label row */}
              <div className="flex items-center justify-between w-full text-xs font-mono font-extrabold tracking-wider">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse inline-block" />
                  ENFYCON.CORE
                </span>
                <motion.span
                  key={progress}
                  initial={{ scale: 1.3, color: "#00D4FF" }}
                  animate={{ scale: 1, color: "#67E8F9" }}
                  transition={{ duration: 0.15 }}
                  className="text-sm font-black"
                >
                  {progress}%
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
