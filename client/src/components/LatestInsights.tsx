import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

const articles = [
  {
    title: "The Architecture of Enterprise Agentic AI: Beyond Simple Prompting",
    date: "July 27, 2026",
    author: "Enfycon AI Labs",
    category: "AI & Automation",
    image: "/images/blog/blog-1.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/07/ChatGPT-Image-Jul-27-2026-02_07_14-PM.png",
    slug: "/blog/architecture-of-enterprise-agentic-ai",
  },
  {
    title: "Zero-Trust Cybersecurity in the Era of Quantum Threat Vectors",
    date: "July 23, 2026",
    author: "Cybersecurity Team",
    category: "Security",
    image: "/images/blog/blog-2.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/07/ChatGPT-Image-Jul-23-2026-02_17_54-PM-1.png",
    slug: "/blog/zero-trust-cybersecurity-quantum-threats",
  },
  {
    title: "Modernizing Legacy Financial Systems with Cloud-Native Microservices",
    date: "May 20, 2026",
    author: "Enterprise Solutions",
    category: "Modernization",
    image: "/images/blog/blog-3.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/05/ChatGPT-Image-May-20-2026-03_05_05-PM.png",
    slug: "/blog/modernizing-legacy-financial-systems",
  },
  {
    title: "US IT Staffing Trends: Sourcing Specialized AI & DevOps Talent",
    date: "May 19, 2026",
    author: "Talent Acquisition",
    category: "IT Staffing",
    image: "/images/blog/blog-4.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/05/ChatGPT-Image-May-19-2026-10_12_47-AM.png",
    slug: "/blog/us-it-staffing-trends-ai-devops",
  },
];

export default function LatestInsights() {
  return (
    <section className="py-24 bg-gray-50/70 border-t border-gray-100 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">
              Thought Leadership
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Insights & Tech Articles</span>
            </h2>
          </div>
          <a
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all shadow-md shadow-primary/20 shrink-0"
          >
            Explore All Insights <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="h-48 overflow-hidden relative bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = article.fallback;
                  }}
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                  {article.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {article.author}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-4">
                    {article.title}
                  </h3>
                </div>

                <a
                  href="/blogs"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform"
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
