import { motion } from "framer-motion";
import { ArrowRight, Bot, Shield, Users, RefreshCw, MessageSquare, Cpu } from "lucide-react";

const services = [
  {
    title: "AI Agentic Solutions",
    description: "Autonomous AI agents designed to optimize complex enterprise workflows and decision-making processes.",
    image: "/manus-storage/ai-agentic-solutions_0f99ba61.jpg",
    slug: "ai-agentic-solutions",
    icon: Bot,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "AI-First Platforms",
    description: "Build robust, scalable platforms with artificial intelligence at their core, not as an afterthought.",
    image: "/manus-storage/ai-first-platforms_4e59186b.jpg",
    slug: "ai-first-platforms",
    icon: Cpu,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Cybersecurity Assessment",
    description: "Comprehensive security audits and penetration testing to fortify your digital infrastructure.",
    image: "/manus-storage/security-assessment_a738182e.jpg",
    slug: "cybersecurity",
    icon: Shield,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Enterprise Modernization",
    description: "Upgrade legacy systems to cloud-native architectures for unprecedented agility and scale.",
    image: "/manus-storage/enterprise-modernization_20a0ffbb.jpg",
    slug: "enterprise-modernization",
    icon: RefreshCw,
    color: "from-orange-500 to-amber-600",
  },
  {
    title: "US IT Staffing",
    description: "Connect with elite IT professionals. We source top-tier talent for your most critical technical roles.",
    image: "/manus-storage/us-it-staffing_77662f66.png",
    slug: "it-staffing",
    icon: Users,
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "Personalized Customer Engagement",
    description: "Leverage AI to deliver hyper-personalized experiences that drive customer loyalty.",
    image: "/manus-storage/personalized-customer-engagement_7501e706.jpg",
    slug: "customer-engagement",
    icon: MessageSquare,
    color: "from-cyan-500 to-blue-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-28 bg-gray-50 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-transparent to-purple-50/40 pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:w-2/3"
        >
          <p className="text-blue-600 font-semibold tracking-[0.2em] uppercase text-sm mb-3">
            Our Capabilities
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Bridging the Technical Gap{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">with Precision</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            We deliver end-to-end solutions that transform your business operations through advanced AI, impenetrable security, and world-class engineering talent.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-blue-200 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(59,130,246,0.1)] flex flex-col"
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {/* Icon badge */}
                <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                  <service.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
                  {service.description}
                </p>
                <a
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors mt-auto group/link"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
