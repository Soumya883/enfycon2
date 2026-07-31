import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";

const articles = [
  {
    title: "The Architecture of Enterprise Agentic AI: Beyond Simple Prompting",
    date: "July 27, 2026",
    readTime: "8 min read",
    author: "Enfycon AI Labs",
    category: "AI & Automation",
    image: "/images/blog/blog-1.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/07/ChatGPT-Image-Jul-27-2026-02_07_14-PM.png",
    slug: "/blog/architecture-of-enterprise-agentic-ai",
  },
  {
    title: "Zero-Trust Cybersecurity in the Era of Quantum Threat Vectors",
    date: "July 23, 2026",
    readTime: "10 min read",
    author: "Security Practice",
    category: "Cybersecurity",
    image: "/images/blog/blog-2.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/07/ChatGPT-Image-Jul-23-2026-02_17_54-PM-1.png",
    slug: "/blog/zero-trust-cybersecurity-quantum-threats",
  },
  {
    title: "Modernizing Legacy Financial Systems with Cloud-Native Microservices",
    date: "May 20, 2026",
    readTime: "7 min read",
    author: "Enterprise Architecture",
    category: "Cloud Migration",
    image: "/images/blog/blog-3.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/05/ChatGPT-Image-May-20-2026-03_05_05-PM.png",
    slug: "/blog/modernizing-legacy-financial-systems",
  },
  {
    title: "US IT Staffing Trends: Sourcing Specialized AI & DevOps Talent",
    date: "May 19, 2026",
    readTime: "6 min read",
    author: "Talent Acquisition",
    category: "IT Staffing",
    image: "/images/blog/blog-4.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/05/ChatGPT-Image-May-19-2026-10_12_47-AM.png",
    slug: "/blog/us-it-staffing-trends-ai-devops",
  },
];

export default function LatestInsights() {
  return (
    <section className="py-32 lg:py-40 bg-[#F0F7FF] relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100/80 text-indigo-700 text-xs font-extrabold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              Thought Leadership
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500">Insights & Deep-Dives</span>
            </h2>
          </div>
          <a
            href="/blogs"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-extrabold text-xs uppercase tracking-wider hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-600/30 shrink-0 hover:-translate-y-0.5"
          >
            <span>Explore All Insights</span>
            <ArrowRight className="w-4 h-4" />
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
              whileHover={{ y: -10 }}
              className="bg-white rounded-[20px] border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_50px_rgba(79,70,229,0.12)] transition-all duration-500 flex flex-col group cursor-pointer"
            >
              {/* Image with Scale 1.08 */}
              <div className="h-52 overflow-hidden relative bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-700 ease-out"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = article.fallback;
                  }}
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-extrabold text-slate-900 shadow-sm">
                  {article.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-indigo-600" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base leading-snug group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2 mb-4">
                    {article.title}
                  </h3>
                </div>

                <a
                  href={article.slug}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-indigo-600 group-hover/btn:translate-x-1.5 transition-transform"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
