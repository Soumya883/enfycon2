import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="/manus-storage/hero-video_0f84c0a5.mp4"
          type="video/mp4"
        />
      </video>

      {/* Lighter Overlay for light theme readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/45 to-black/70 z-10" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide">
              Enterprise AI Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]"
          >
            Enterprise{" "}
            <span className="text-gradient">Intelligence</span>
            <br />
            Redefined
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Delivering precision AI solutions, robust cybersecurity, and elite IT
            staffing for the modern enterprise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollTo("#services")}
              className="bg-primary text-white px-10 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-[0_4px_30px_rgba(59,91,219,0.4)] hover:shadow-[0_4px_40px_rgba(59,91,219,0.6)] active:scale-[0.97] duration-160"
            >
              Explore Solutions
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-4 rounded-full font-semibold hover:bg-white/20 hover:border-white/50 transition-all active:scale-[0.97] duration-160"
            >
              Partner With Us
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent z-10" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
