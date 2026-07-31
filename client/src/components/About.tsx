import { motion } from "framer-motion";

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "99%", label: "Client Retention" },
  { value: "24/7", label: "Support Coverage" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
        <img
          src="/manus-storage/pattern-3_82ab4001.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/manus-storage/about-us_88a1c2a2.jpg"
                alt="About Enfycon"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-primary/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl shadow-primary/20"
            >
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="text-sm text-white/80">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Pioneering the Future of{" "}
              <span className="text-gradient">Enterprise IT</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                At Enfycon, we believe in the transformative power of technology.
                As a premier provider of AI Agentic Solutions, AI-First Platforms,
                and Enterprise Modernization, we empower organizations to thrive in
                a digital-first world.
              </p>
              <p>
                Beyond engineering, our US IT Staffing division connects you with
                elite talent, ensuring your projects are driven by the brightest
                minds in the industry. Our commitment is to deliver secure,
                scalable, and intelligent solutions tailored to your unique
                challenges.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="bg-card border border-border/50 rounded-xl p-5 text-center hover:border-primary/20 transition-colors"
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
