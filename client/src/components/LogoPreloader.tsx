import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function LogoPreloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter animation from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 5;
        return next > 100 ? 100 : next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0.9 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-[#080c1e] text-white flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* Ambient Background Glows */}
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDelay: "1s" }} />

          {/* Center Logo Box */}
          <div className="relative flex flex-col items-center z-10 px-6">
            {/* Glowing Logo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mb-8 group"
            >
              {/* Outer Pulsing Aura Ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-60 blur-xl animate-pulse" />
              
              <div className="relative bg-slate-950/80 backdrop-blur-2xl border border-slate-700/80 p-8 rounded-3xl shadow-[0_0_50px_rgba(0,212,255,0.4)] flex items-center justify-center">
                <img
                  src="/images/logos/enfycon-white.png"
                  alt="Enfycon Logo"
                  className="h-16 md:h-20 w-auto object-contain brightness-125 drop-shadow-[0_0_20px_rgba(0,212,255,0.8)]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "https://www.enfycon.com/images/logos/enfycon-white.png";
                  }}
                />
              </div>
            </motion.div>

            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-5 py-2 text-xs font-extrabold uppercase tracking-[0.25em] text-cyan-300 shadow-md mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              <span>Enterprise Intelligence</span>
            </motion.div>

            {/* Progress Bar & Percentage */}
            <div className="w-64 max-w-xs flex flex-col items-center gap-3">
              <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full shadow-[0_0_15px_#00D4FF]"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <div className="flex items-center justify-between w-full text-xs font-mono font-bold text-slate-400">
                <span>SYSTEM LOADING</span>
                <span className="text-cyan-400 font-extrabold">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
