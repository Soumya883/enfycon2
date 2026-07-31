import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
  bgClass?: string;
}

export default function PageHeader({ title, subtitle, breadcrumb, bgClass = "bg-hero-gradient" }: PageHeaderProps) {
  return (
    <section className={`relative pt-32 pb-20 ${bgClass} overflow-hidden`}>
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-blue-300 blur-3xl" />
      </div>

      <div className="container relative z-10">
        {breadcrumb && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-gray-400">/</span>}
                <a href={crumb.href} className="hover:text-primary transition-colors">
                  {crumb.label}
                </a>
              </span>
            ))}
          </div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
