import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Shield, Cpu, Zap, CheckCircle2 } from "lucide-react";

const statusMessages = [
  "INITIALIZING NEURAL CORE",
  "ESTABLISHING SECURE GATEWAYS",
  "LOADING AI AGENTIC MODELS",
  "SYNCHRONIZING ENTERPRISE NODES",
  "SYSTEM OPERATIONAL"
];

export default function LogoPreloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    // 0 to 100 progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 4;
        return next > 100 ? 100 : next;
      });
    }, 55);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setStatusIndex((prev) => (prev < statusMessages.length - 1 ? prev + 1 : prev));
    }, 380);
    return () => clearInterval(messageInterval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="ultra-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-[#070A16] text-white flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* Cyber Grid Lines Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d25_1px,transparent_1px),linear-gradient(to_bottom,#1f293d25_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

          {/* Dual Split Curtain Exit Panels */}
          <motion.div
            initial={{ scaleY: 1 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#070A16] z-0 border-b border-cyan-500/30"
          />
          <motion.div
            initial={{ scaleY: 1 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#070A16] z-0 border-t border-cyan-500/30"
          />

          {/* Glowing Ambient Light Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-indigo-600/25 rounded-full blur-[150px] pointer-events-none animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/25 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDelay: "1s" }} />

          {/* Center Interactive Content */}
          <div className="relative z-10 flex flex-col items-center px-6 max-w-md w-full text-center">
            {/* Spinning Neon Laser Ring Container around Logo */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative mb-10 group"
            >
              {/* Animated Rotating Laser Border */}
              <div className="absolute -inset-5 rounded-[32px] bg-gradient-to-r from-indigo-500 via-purple-500 via-cyan-400 to-indigo-500 opacity-80 blur-lg animate-[spin_5s_linear_infinite]" />
              
              {/* Inner Glass Box */}
              <div className="relative bg-slate-950/90 backdrop-blur-3xl border border-slate-700/80 px-10 py-8 rounded-[28px] shadow-[0_0_60px_rgba(0,212,255,0.5)] flex items-center justify-center overflow-hidden">
                {/* Shimmer Light Sheen Sweep */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
                />

                <img
                  src="/images/logos/enfycon-white.png"
                  alt="Enfycon Logo"
                  className="h-16 md:h-20 w-auto object-contain brightness-125 drop-shadow-[0_0_25px_rgba(0,212,255,0.9)]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "https://www.enfycon.com/images/logos/enfycon-white.png";
                  }}
                />
              </div>
            </motion.div>

            {/* Glowing Tagline Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-slate-900/90 border border-slate-700/90 backdrop-blur-md rounded-full px-6 py-2 text-xs font-black uppercase tracking-[0.25em] text-cyan-300 shadow-[0_0_20px_rgba(0,212,255,0.25)] mb-8"
            >
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
              <span>Enterprise Intelligence</span>
            </motion.div>

            {/* Live Rotating Status Message */}
            <div className="h-6 mb-6 overflow-hidden flex items-center justify-center">
              <motion.div
                key={statusIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-[11px] font-mono font-extrabold tracking-widest text-slate-300 flex items-center gap-2"
              >
                {progress < 100 ? (
                  <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                ) : (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                )}
                <span>{statusMessages[statusIndex]}</span>
              </motion.div>
            </div>

            {/* Progress Bar & Numeric Indicator */}
            <div className="w-full max-w-xs flex flex-col items-center gap-3">
              <div className="w-full h-2 bg-slate-900/90 rounded-full overflow-hidden border border-slate-800 p-0.5 shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full shadow-[0_0_20px_#00D4FF]"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              
              <div className="flex items-center justify-between w-full text-xs font-mono font-extrabold text-slate-400 pt-1">
                <span className="flex items-center gap-1.5 text-slate-500">
                  <Shield className="w-3.5 h-3.5 text-indigo-400" />
                  ENFYCON CORE v2.0
                </span>
                <span className="text-cyan-400 text-sm font-black tracking-wider">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
