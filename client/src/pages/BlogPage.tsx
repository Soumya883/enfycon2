import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { Calendar, ArrowRight, Search, User, Clock } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

const blogPosts = [
  {
    title: "AI-Driven Enterprise Transformation: A Complete Guide",
    excerpt: "Discover how AI is reshaping enterprise operations, from automated workflows to predictive analytics and intelligent decision-making.",
    category: "AI Solutions",
    date: "July 2026",
    readTime: "8 min read",
    author: "Enfycon Research Team",
    color: "from-blue-500 to-indigo-600",
    slug: "ai-driven-enterprise-transformation",
  },
  {
    title: "Cybersecurity Best Practices for Modern Enterprises in 2026",
    excerpt: "Essential cybersecurity strategies to protect your enterprise from evolving threats, including zero-trust architecture and AI-powered threat detection.",
    category: "Cybersecurity",
    date: "June 2026",
    readTime: "10 min read",
    author: "Enfycon Security Team",
    color: "from-red-500 to-orange-600",
    slug: "cybersecurity-best-practices-2026",
  },
  {
    title: "The Complete Guide to US IT Staffing Solutions",
    excerpt: "Navigate the US IT staffing landscape with our comprehensive guide to hiring top talent, from contract roles to permanent placements.",
    category: "IT Staffing",
    date: "May 2026",
    readTime: "7 min read",
    author: "Enfycon Staffing Team",
    color: "from-emerald-500 to-teal-600",
    slug: "us-it-staffing-guide",
  },
  {
    title: "Building AI-First Platforms: A Comprehensive Guide",
    excerpt: "Best practices for architecting cloud-native platforms with AI capabilities at their core.",
    category: "Engineering",
    date: "June 28, 2026",
    readTime: "6 min read",
    author: "Enfycon Engineering",
    color: "from-purple-500 to-violet-600",
    slug: "building-ai-first-platforms",
  },
  {
    title: "Digital Transformation Strategies for Mid-Size Enterprises",
    excerpt: "Practical approaches to implementing digital transformation without overwhelming your organization.",
    category: "Digital Strategy",
    date: "June 20, 2026",
    readTime: "5 min read",
    author: "Enfycon Strategy Team",
    color: "from-blue-500 to-indigo-600",
    slug: "digital-transformation-strategies",
  },
  {
    title: "Enterprise Cloud Migration: Lessons Learned",
    excerpt: "Key insights from helping Fortune 500 companies migrate legacy systems to cloud-native architectures.",
    category: "Cloud",
    date: "June 5, 2026",
    readTime: "9 min read",
    author: "Enfycon Cloud Team",
    color: "from-teal-500 to-cyan-600",
    slug: "enterprise-cloud-migration",
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, navigate] = useLocation();

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Blogs & Insights"
        subtitle="Stay ahead with the latest insights on AI, cybersecurity, and enterprise technology."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Blogs", href: "/blogs" }]}
      />

      {/* Search */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className={`h-48 bg-gradient-to-br ${post.color} relative`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs text-gray-400">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="text-blue-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No posts found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
