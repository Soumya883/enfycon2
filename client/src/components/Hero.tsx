import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-950 py-24">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source
          src="/video/hero-video.mp4"
          type="video/mp4"
        />
        <source
          src="https://www.enfycon.com/video/ENFYCON%20VIDEO%20HERO.mp4"
          type="video/mp4"
        />
      </video>

      {/* High readability Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950/70 via-slate-900/50 to-slate-950/80 z-10 pointer-events-none" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full z-10 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 shadow-lg"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-white text-sm font-semibold tracking-wide">
              Enterprise AI Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[1.1] drop-shadow-lg"
          >
            Enterprise{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Intelligence</span>
            <br />
            Redefined
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow"
          >
            Delivering precision AI solutions, robust cybersecurity, and elite IT
            staffing for the modern enterprise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <button
              onClick={() => scrollTo("#services")}
              className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-full font-bold text-base hover:bg-primary/90 transition-all shadow-[0_4px_30px_rgba(59,91,219,0.5)] hover:shadow-[0_4px_40px_rgba(59,91,219,0.7)] active:scale-[0.97]"
            >
              Explore Solutions
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="w-full sm:w-auto bg-white/15 backdrop-blur-md border border-white/40 text-white px-10 py-4 rounded-full font-bold text-base hover:bg-white/25 hover:border-white/60 transition-all active:scale-[0.97]"
            >
              Partner With Us
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2 backdrop-blur-sm bg-black/20"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}
