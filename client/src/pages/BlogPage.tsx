import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Calendar, ArrowRight, Search, User, Clock, Sparkles } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  fallback: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "architecture-of-enterprise-agentic-ai",
    title: "The Architecture of Enterprise Agentic AI: Beyond Simple Prompting",
    excerpt: "Discover how multi-agent architectures independently orchestrate complex business workflows with state machine persistence, feedback loops, and human-in-the-loop validation.",
    category: "AI & Automation",
    date: "July 27, 2026",
    readTime: "8 min read",
    author: "Enfycon AI Labs",
    image: "/images/blog/blog-1.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/07/ChatGPT-Image-Jul-27-2026-02_07_14-PM.png",
    slug: "architecture-of-enterprise-agentic-ai",
  },
  {
    id: "zero-trust-cybersecurity-quantum-threats",
    title: "Zero-Trust Cybersecurity in the Era of Quantum Threat Vectors",
    excerpt: "Essential post-quantum cryptography defense strategies to protect enterprise data infrastructure from next-generation cyber vulnerability exploits.",
    category: "Cybersecurity",
    date: "July 23, 2026",
    readTime: "10 min read",
    author: "Enfycon Security Team",
    image: "/images/blog/blog-2.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/07/ChatGPT-Image-Jul-23-2026-02_17_54-PM-1.png",
    slug: "zero-trust-cybersecurity-quantum-threats",
  },
  {
    id: "modernizing-legacy-financial-systems",
    title: "Modernizing Legacy Financial Systems with Cloud-Native Microservices",
    excerpt: "Key architectural patterns and zero-downtime migration protocols for transitioning core banking databases to scalable cloud microservices.",
    category: "Modernization",
    date: "May 20, 2026",
    readTime: "7 min read",
    author: "Enterprise Solutions",
    image: "/images/blog/blog-3.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/05/ChatGPT-Image-May-20-2026-03_05_05-PM.png",
    slug: "modernizing-legacy-financial-systems",
  },
  {
    id: "us-it-staffing-trends-ai-devops",
    title: "US IT Staffing Trends: Sourcing Specialized AI & DevOps Talent",
    excerpt: "Navigate the evolving technology recruitment pipeline with targeted candidate matching algorithms, remote talent pools, and skill verification.",
    category: "IT Staffing",
    date: "May 19, 2026",
    readTime: "6 min read",
    author: "Talent Acquisition",
    image: "/images/blog/blog-4.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/05/ChatGPT-Image-May-19-2026-10_12_47-AM.png",
    slug: "us-it-staffing-trends-ai-devops",
  },
  {
    id: "building-ai-first-data-pipelines",
    title: "Building AI-First Data Pipelines for Real-Time Streaming Analytics",
    excerpt: "Architecting automated ETL pipelines using Kafka, Spark, and Snowflake to process billions of events with sub-second decision latency.",
    category: "Data Engineering",
    date: "May 04, 2026",
    readTime: "9 min read",
    author: "Data Engineering Group",
    image: "/images/blog/blog-5.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/05/ChatGPT-Image-May-4-2026-04_57_57-PM.png",
    slug: "building-ai-first-data-pipelines",
  },
  {
    id: "generative-ai-in-healthcare-radiology",
    title: "Generative AI in Healthcare: Transforming Diagnostic Precision",
    excerpt: "How computer vision models and deep neural networks enable rapid radiograph analysis, reducing diagnostic turnaround times by over 60%.",
    category: "Healthcare AI",
    date: "April 28, 2026",
    readTime: "7 min read",
    author: "HealthTech Practice",
    image: "/images/blog/blog-6.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/04/Gemini_Generated_Image_9fcdnv9fcdnv9fcd-scaled.png",
    slug: "generative-ai-in-healthcare-radiology",
  },
  {
    id: "autonomous-code-remediation",
    title: "Autonomous Code Remediation: Securing the CI/CD Pipeline",
    excerpt: "Integrating automated static analysis with large language models to instantly patch code vulnerabilities prior to production deployment.",
    category: "DevOps & Security",
    date: "April 02, 2026",
    readTime: "8 min read",
    author: "DevSecOps Lead",
    image: "/images/blog/blog-7.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/04/ChatGPT-Image-Apr-2-2026-11_33_08-AM.png",
    slug: "autonomous-code-remediation",
  },
  {
    id: "legal-tech-ai-contract-analysis",
    title: "Legal Tech Evolution: AI-Powered Risk Scoring & Contract Analytics",
    excerpt: "Streamlining enterprise contract lifecycle management through natural language clause extraction and automated compliance verification.",
    category: "Legal Tech",
    date: "March 30, 2026",
    readTime: "6 min read",
    author: "Legal Engineering Team",
    image: "/images/blog/blog-8.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-30-2026-01_30_52-PM.png",
    slug: "legal-tech-ai-contract-analysis",
  },
  {
    id: "predictive-analytics-fintech",
    title: "Predictive Risk Analytics for Quantitative Algorithmic Trading",
    excerpt: "Leveraging machine learning models for real-time market anomaly detection, credit risk scoring, and automated portfolio rebalancing.",
    category: "FinTech Intelligence",
    date: "March 19, 2026",
    readTime: "9 min read",
    author: "Quantitative Research",
    image: "/images/blog/blog-9.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-19-2026-02_07_17-PM.png",
    slug: "predictive-analytics-fintech",
  },
  {
    id: "workforce-productivity-analytics",
    title: "Data-Driven HR Tech: Analyzing Workforce Velocity & Retention",
    excerpt: "How modern enterprises utilize predictive attrition models and engagement analytics to build high-performing engineering organizations.",
    category: "HR Tech",
    date: "March 17, 2026",
    readTime: "5 min read",
    author: "Human Capital Insights",
    image: "/images/blog/blog-10.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-17-2026-12_23_26-PM.png",
    slug: "workforce-productivity-analytics",
  },
  {
    id: "contactless-workplace-biometrics",
    title: "Contactless Biometrics & AI Perimeter Access Control",
    excerpt: "Integrating facial recognition, RFID edge gateways, and automated threat zone alerts to secure modern corporate facilities.",
    category: "Physical Security",
    date: "March 17, 2026",
    readTime: "6 min read",
    author: "Physical Security Division",
    image: "/images/blog/blog-11.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-17-2026-12_02_52-PM.png",
    slug: "contactless-workplace-biometrics",
  },
  {
    id: "cloud-native-microservices-scaling",
    title: "Scaling Cloud Microservices for 100M+ Daily API Requests",
    excerpt: "Battle-tested cloud architecture patterns for managing global traffic spikes, multi-region database replication, and zero-latency caching.",
    category: "Cloud Engineering",
    date: "March 16, 2026",
    readTime: "11 min read",
    author: "Cloud Infrastructure Team",
    image: "/images/blog/blog-12.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-16-2026-03_33_20-PM.png",
    slug: "cloud-native-microservices-scaling",
  },
  {
    id: "ai-personalized-customer-engagement",
    title: "Hyper-Personalized Customer Engagement via AI Recommendation Engines",
    excerpt: "Designing real-time recommendation platforms that analyze user behavioral signals to boost conversion rates and customer lifetime value.",
    category: "Customer AI",
    date: "March 10, 2026",
    readTime: "7 min read",
    author: "CX AI Group",
    image: "/images/blog/blog-14.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-10-2026-04_54_37-PM.png",
    slug: "ai-personalized-customer-engagement",
  },
  {
    id: "offshore-development-center-playbook",
    title: "The Offshore Dedicated Team Playbook: Driving Velocity & Scale",
    excerpt: "Best practices for setting up high-yield Offshore Development Centers (ODC) with seamless communication, Agile governance, and IP security.",
    category: "Global Capacity",
    date: "March 10, 2026",
    readTime: "8 min read",
    author: "Global Operations",
    image: "/images/blog/blog-15.png",
    fallback: "https://wp.enfycon.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-10-2026-12_38_01-PM.png",
    slug: "offshore-development-center-playbook",
  },
];

const categories = [
  "All",
  "AI & Automation",
  "Cybersecurity",
  "Modernization",
  "IT Staffing",
  "Data Engineering",
  "Healthcare AI",
  "DevOps & Security",
  "Legal Tech",
  "FinTech Intelligence"
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [location, navigate] = useLocation();

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute top-0 right-0 w-full h-[600px] pointer-events-none opacity-5 bg-no-repeat bg-right-top z-0"
        style={{ backgroundImage: "url('/images/bg/map.svg')" }}
      />

      <Navbar />

      <PageHeader
        title="Blogs & Thought Leadership"
        subtitle="Explore expert analysis, technical deep-dives, and industry insights on AI, cybersecurity, cloud architecture, and IT staffing."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Blogs", href: "/blogs" }]}
      />

      {/* Featured Banner Hero */}
      <section className="py-8 relative z-10">
        <div className="container">
          <div className="relative rounded-3xl overflow-hidden bg-slate-950 text-white p-8 md:p-12 border border-slate-800 shadow-2xl">
            <img
              src="/images/blog/blogs-backdrop.jpg"
              alt="Blogs Backdrop"
              className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "https://www.enfycon.com/images/blog/blogs-backdrop.jpg";
              }}
            />
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                Featured Intelligence
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
                Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Technology Insights</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
                Stay at the forefront of digital transformation with technical guides written by Enfycon's principal architects and engineering leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Category Filter Section */}
      <section className="py-6 relative z-10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-100 shadow-sm">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                      : "bg-gray-100/80 text-gray-600 hover:bg-gray-200/80 hover:text-gray-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid (All 15 Images & Cards) */}
      <section className="py-10 pb-24 relative z-10">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 p-8">
              <p className="text-gray-500 text-lg font-medium">No articles found matching your search.</p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredPosts.map((post, i) => (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    onClick={() => navigate(`/blog/${post.slug}`)}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-1"
                  >
                    {/* Article Cover Image */}
                    <div className="h-52 overflow-hidden relative bg-gray-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = post.fallback;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-gray-900 text-xs font-bold shadow-sm">
                        {post.category}
                      </span>
                    </div>

                    {/* Article Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-medium">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-primary" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-primary" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Footer info */}
                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold">
                          <User className="w-3.5 h-3.5 text-primary" />
                          {post.author}
                        </span>
                        <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read Article <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
