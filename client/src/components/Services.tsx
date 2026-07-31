import { motion } from "framer-motion";
import { ArrowRight, Bot, Shield, Users, RefreshCw, MessageSquare, Cpu, Share2, Sparkles } from "lucide-react";

const services = [
  {
    title: "AI Agentic Solutions",
    description: "Autonomous AI agents designed to optimize complex enterprise workflows and decision-making processes.",
    image: "/images/service/ai-agentic-solutions.jpg",
    fallback: "https://www.enfycon.com/images/service/ai-agentic-solutions.jpg",
    slug: "ai-agentic-solutions",
    icon: Bot,
    color: "from-indigo-600 to-purple-600",
  },
  {
    title: "AI-First Platforms",
    description: "Build robust, scalable platforms with artificial intelligence at their core, not as an afterthought.",
    image: "/images/service/ai-first-platforms.jpg",
    fallback: "https://www.enfycon.com/images/service/ai-first-platforms.jpg",
    slug: "ai-first-platforms",
    icon: Cpu,
    color: "from-blue-600 to-cyan-600",
  },
  {
    title: "Cybersecurity Assessment",
    description: "Comprehensive security audits and penetration testing to fortify your digital infrastructure.",
    image: "/images/service/security-assessment.jpg",
    fallback: "https://www.enfycon.com/images/service/security-assessment.jpg",
    slug: "cybersecurity",
    icon: Shield,
    color: "from-emerald-600 to-teal-600",
  },
  {
    title: "Enterprise Modernization",
    description: "Upgrade legacy systems to cloud-native architectures for unprecedented agility and scale.",
    image: "/images/service/enterprise-modernization.jpg",
    fallback: "https://www.enfycon.com/images/service/enterprise-modernization.jpg",
    slug: "enterprise-modernization",
    icon: RefreshCw,
    color: "from-amber-600 to-orange-600",
  },
  {
    title: "US IT Staffing",
    description: "Connect with elite IT professionals. We source top-tier talent for your most critical technical roles.",
    image: "/images/service/us-it-staffing.png",
    fallback: "https://www.enfycon.com/images/service/us-it-staffing.png",
    slug: "it-staffing",
    icon: Users,
    color: "from-rose-600 to-pink-600",
  },
  {
    title: "Personalized Customer Engagement",
    description: "Leverage AI to deliver hyper-personalized experiences that drive customer loyalty.",
    image: "/images/service/personalized-customer-engagement.jpg",
    fallback: "https://www.enfycon.com/images/service/personalized-customer-engagement.jpg",
    slug: "customer-engagement",
    icon: MessageSquare,
    color: "from-cyan-600 to-blue-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 lg:py-36 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-extrabold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            Our Core Capabilities
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Bridging the Technical Gap{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500">
              with Precision
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            End-to-end solutions that transform enterprise operations through advanced AI, impenetrable security, and world-class engineering talent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -12 }}
              className="group bg-white rounded-[20px] border border-slate-200/80 overflow-hidden transition-all duration-500 hover:border-indigo-400 hover:shadow-[0_30px_70px_rgba(79,70,229,0.12)] flex flex-col"
            >
              {/* Image Container with 1.08 Scale */}
              <div className="h-56 overflow-hidden relative bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-700 ease-out"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = service.fallback; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                
                {/* Floating Icon */}
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-[14px] bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg text-white group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Animated Learn More Button */}
                <a
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-2 text-indigo-600 font-extrabold text-sm hover:text-indigo-800 transition-colors group/btn mt-auto"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
