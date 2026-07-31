import { motion } from "framer-motion";

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "99%", label: "Client Retention" },
  { value: "24/7", label: "Support Coverage" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-5 pointer-events-none">
        <img
          src="/images/shape/pattern-3.svg"
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://www.enfycon.com/images/shape/pattern-3.svg"; }}
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
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="/images/about/about-us.jpg"
                alt="About Enfycon"
                className="w-full h-[480px] object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://www.enfycon.com/images/about/about-us.jpg"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent" />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 right-6 bg-primary text-white rounded-2xl p-6 shadow-xl shadow-primary/30"
            >
              <p className="text-3xl font-black">10+</p>
              <p className="text-sm font-medium text-blue-100">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Pioneering the Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Enterprise IT</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center hover:border-primary/30 transition-all shadow-sm"
                >
                  <p className="text-2xl md:text-3xl font-extrabold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wider">
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
