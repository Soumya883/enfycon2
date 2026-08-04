import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
  bgClass?: string;
}

const particleDots = Array.from({ length: 8 }, (_, i) => ({
  x: (i * 25 + 10) % 100,
  y: (i * 30 + 15) % 100,
  dx: (i % 2 === 0 ? 1 : -1) * 2,
  size: 1.5 + (i % 3) * 0.5,
  duration: 10 + (i % 5) * 2,
  opacity: 0.15 + (i % 3) * 0.1,
}));

export default function PageHeader({ title, subtitle, breadcrumb, bgClass = "bg-[#080c1e]" }: PageHeaderProps) {
  return (
    <section className={`relative pt-40 pb-24 ${bgClass} overflow-hidden border-b border-slate-800/60`}>
      {/* Background Decorators */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow Orbs */}
        <motion.div
          className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[120px]"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Diagonal Gradient overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(79,70,229,0.05)_0%,transparent_50%,rgba(0,212,255,0.03)_100%)]" />

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particleDots.map((p, i) => (
            <motion.div
              key={i}
              initial={{ x: `${p.x}%`, y: `${p.y}%`, opacity: p.opacity }}
              animate={{
                x: [`${p.x}%`, `${p.x + p.dx}%`, `${p.x}%`],
                y: [`${p.y}%`, `${(p.y + 15) % 100}%`, `${p.y}%`],
                opacity: [p.opacity, p.opacity * 2, p.opacity],
              }}
              transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: p.size, height: p.size }}
              className="absolute rounded-full bg-cyan-400 shadow-[0_0_8px_#00D4FF]"
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10">
        {breadcrumb && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8 uppercase tracking-widest"
          >
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-slate-600">/</span>}
                <a href={crumb.href} className="hover:text-cyan-400 transition-colors">
                  {crumb.label}
                </a>
              </span>
            ))}
          </motion.div>
        )}

        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed font-light max-w-3xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
