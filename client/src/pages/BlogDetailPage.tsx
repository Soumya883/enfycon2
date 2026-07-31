import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";

// Featured blog posts for static content (when DB post not found)
const featuredPosts: Record<string, {
  title: string; slug: string; excerpt: string; content: string;
  author: string; date: string; readTime: string; category: string;
  imageUrl: string; tags: string[];
}> = {
  "ai-driven-enterprise-transformation": {
    title: "AI-Driven Enterprise Transformation: A Complete Guide",
    slug: "ai-driven-enterprise-transformation",
    excerpt: "Discover how AI is reshaping enterprise operations, from automated workflows to predictive analytics and intelligent decision-making.",
    content: `The landscape of enterprise technology is undergoing a seismic shift. Artificial Intelligence, once confined to research labs and tech giants, is now the backbone of modern business operations. In this comprehensive guide, we explore how AI-driven enterprise transformation is reshaping industries across the globe.

## The New Era of Enterprise AI

Enterprises are no longer just adopting AI — they are being transformed by it. From supply chain optimization to customer experience personalization, AI solutions are delivering measurable ROI at scale.

At Enfycon, we specialize in building AI-first platforms that integrate seamlessly with existing enterprise systems. Our approach combines cutting-edge machine learning models with robust data engineering pipelines to create solutions that are both intelligent and reliable.

## Key Areas of AI Transformation

### 1. Intelligent Automation
Robotic Process Automation (RPA) enhanced with AI capabilities allows enterprises to automate complex, multi-step workflows. This goes beyond simple rule-based automation to include decision-making capabilities powered by natural language processing and computer vision.

### 2. Predictive Analytics
Machine learning models trained on historical enterprise data can forecast demand, predict equipment failures, and optimize resource allocation. These predictive capabilities transform reactive businesses into proactive organizations.

### 3. Natural Language Processing
NLP-powered solutions enable enterprises to understand and process unstructured data at scale. From automated document processing to intelligent chatbots, NLP is revolutionizing how businesses interact with information and customers.

### 4. Computer Vision
Visual AI solutions are transforming manufacturing quality control, security monitoring, and document verification. Computer vision algorithms can detect anomalies, classify objects, and extract information from images with superhuman accuracy.

## Implementation Best Practices

Successful AI transformation requires a strategic approach:

- **Start with high-value use cases** that demonstrate clear ROI
- **Build a robust data infrastructure** before deploying AI models
- **Invest in talent and training** to build internal AI capabilities
- **Ensure ethical AI practices** with transparency and fairness
- **Measure and iterate** continuously to improve model performance

## The Enfycon Approach

Our AI Agentic Solutions leverage autonomous AI systems that can independently execute complex enterprise workflows. These agents combine multiple AI capabilities — from natural language understanding to decision-making — to deliver end-to-end solutions that reduce operational costs by up to 60%.

The future of enterprise is intelligent, and Enfycon is leading the charge in making that future accessible to organizations of all sizes.`,
    author: "Enfycon Research Team",
    date: "July 2026",
    readTime: "8 min read",
    category: "AI Solutions",
    imageUrl: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fservice%2Fai-agentic-solutions.jpg&w=640&q=85",
    tags: ["AI", "Enterprise", "Automation", "Digital Transformation"],
  },
  "cybersecurity-best-practices-2026": {
    title: "Cybersecurity Best Practices for Modern Enterprises in 2026",
    slug: "cybersecurity-best-practices-2026",
    excerpt: "Essential cybersecurity strategies to protect your enterprise from evolving threats, including zero-trust architecture and AI-powered threat detection.",
    content: `As cyber threats grow more sophisticated, enterprises must evolve their security postures accordingly. In 2026, the threat landscape demands a comprehensive approach that combines advanced technology with robust processes and continuous vigilance.

## The Evolving Threat Landscape

The modern threat landscape is characterized by several key trends:

- **AI-Powered Attacks**: Cybercriminals are now using AI to craft more convincing phishing emails, automate vulnerability discovery, and create adaptive malware.
- **Supply Chain Attacks**: Attacks targeting software supply chains continue to rise, with attackers compromising legitimate software to distribute malware.
- **Ransomware-as-a-Service**: The ransomware ecosystem has matured into a sophisticated service model, making it accessible to a wider range of threat actors.

## Zero Trust Architecture

The Zero Trust security model has become the standard for enterprise security in 2026. This approach assumes that no user or device should be inherently trusted, regardless of their location or network.

### Core Principles:
1. **Verify Explicitly**: Authenticate and authorize every access request
2. **Least Privilege Access**: Grant minimum necessary access for the shortest time
3. **Assume Breach**: Design systems to minimize blast radius of potential breaches

## AI-Powered Threat Detection

Enfycon's Cybersecurity Assessment services leverage AI to provide proactive threat detection:

- **Behavioral Analytics**: Machine learning models that establish baselines and detect anomalous activity
- **Automated Response**: AI-driven incident response that can contain threats in seconds
- **Threat Intelligence**: Continuous monitoring of threat feeds with automated correlation

## Essential Security Measures

Every enterprise should implement these fundamental security practices:

1. Multi-factor authentication across all systems
2. Regular vulnerability assessments and penetration testing
3. Employee security awareness training programs
4. Comprehensive data backup and recovery procedures
5. Security Information and Event Management (SIEM) systems

## Compliance and Governance

Regulatory compliance remains a critical aspect of enterprise security. Key frameworks include:

- **SOC 2**: Service Organization Control for data security
- **ISO 27001**: International standard for information security management
- **GDPR**: European data protection regulation
- **HIPAA**: Healthcare information security requirements

At Enfycon, we provide comprehensive cybersecurity assessments that evaluate your current posture against these frameworks and provide actionable recommendations for improvement.`,
    author: "Enfycon Security Team",
    date: "June 2026",
    readTime: "10 min read",
    category: "Cybersecurity",
    imageUrl: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fservice%2Fsecurity-assessment.jpg&w=640&q=85",
    tags: ["Cybersecurity", "Zero Trust", "Threat Detection", "Compliance"],
  },
  "us-it-staffing-guide": {
    title: "The Complete Guide to US IT Staffing Solutions",
    slug: "us-it-staffing-guide",
    excerpt: "Navigate the US IT staffing landscape with our comprehensive guide to hiring top talent, from contract roles to permanent placements.",
    content: `The US IT staffing market in 2026 is characterized by intense competition for top talent and rapidly evolving skill requirements. As digital transformation accelerates across industries, the demand for skilled IT professionals continues to outpace supply.

## The Current IT Staffing Landscape

The US IT workforce faces several key challenges:

- **Skills Gap**: Critical shortages in AI/ML, cybersecurity, cloud architecture, and data engineering
- **Remote Work Complexity**: Managing distributed teams across multiple time zones
- **Contract vs. Full-Time**: Growing preference for flexible staffing models

## Enfycon's IT Staffing Approach

Our US IT Staffing services provide end-to-end recruitment solutions:

### 1. Talent Sourcing
We maintain an extensive network of verified IT professionals across all major skill domains. Our sourcing strategy combines traditional recruitment with AI-powered candidate matching to identify the best fit for each role.

### 2. Vetting and Assessment
Every candidate undergoes a rigorous vetting process including technical assessments, behavioral interviews, and reference verification. We only present candidates who meet or exceed the required skill level.

### 3. Onboarding Support
We provide comprehensive onboarding support to ensure smooth integration of new team members, including orientation programs and initial project ramp-up assistance.

## Staffing Models We Offer

- **Contract Staffing**: Flexible short-term engagements for project-based work
- **Contract-to-Hire**: Trial periods that convert to permanent positions
- **Direct Hire**: Full-time permanent placements with comprehensive screening
- **Managed Services**: Full IT team management and deployment

## Key Skill Areas

Our IT staffing covers all major technology domains:

| Domain | Top Skills |
|--------|-----------|
| Cloud | AWS, Azure, GCP, Kubernetes |
| AI/ML | TensorFlow, PyTorch, MLOps |
| Cybersecurity | SOC, SIEM, Pentesting |
| Data | Big Data, Analytics, Data Engineering |
| DevOps | CI/CD, Docker, Terraform |

## The Value of Partnered Staffing

Partnering with Enfycon for IT staffing delivers measurable benefits:

- **Faster Time-to-Hire**: Average 50% reduction in recruitment cycle time
- **Quality Assurance**: 95% candidate satisfaction rate
- **Cost Efficiency**: Reduced overhead compared to in-house recruitment
- **Flexibility**: Scale teams up or down based on project needs

Contact Enfycon to discuss your IT staffing needs and discover how we can help build your dream technology team.`,
    author: "Enfycon Staffing Team",
    date: "May 2026",
    readTime: "7 min read",
    category: "IT Staffing",
    imageUrl: "https://www.enfycon.com/_next/image?url=%2Fimages%2Fservice%2Fus-it-staffing.png&w=640&q=85",
    tags: ["IT Staffing", "Recruitment", "Talent", "US Market"],
  },
};

export default function BlogDetailPage() {
  const [location, navigate] = useLocation();

  // Extract slug from URL
  const slug = location.replace("/blog/", "");

  // Try to fetch from database first
  const dbQuery = trpc.admin.blogPosts.list.useQuery({ page: 1, limit: 100 });
  const dbPost = dbQuery.data?.posts.find((p) => p.slug === slug && p.published);

  const post = dbPost ? {
    title: dbPost.title,
    slug: dbPost.slug,
    excerpt: dbPost.excerpt || "",
    content: dbPost.content,
    author: dbPost.author || "Enfycon Team",
    date: new Date(dbPost.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long" }),
    readTime: `${Math.max(3, Math.ceil(dbPost.content.length / 200))} min read`,
    category: dbPost.category || "Technology",
    imageUrl: dbPost.imageUrl || "",
    tags: [],
  } : featuredPosts[slug];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post?.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container py-20 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog Post Not Found</h2>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate("/blogs")}>Back to Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <button onClick={() => navigate("/")} className="hover:text-blue-600 transition-colors">Home</button>
            <span>/</span>
            <button onClick={() => navigate("/blogs")} className="hover:text-blue-600 transition-colors">Blog</button>
            <span>/</span>
            <span className="text-gray-800 font-medium truncate max-w-[300px]">{post.title}</span>
          </div>
        </div>
      </div>

      <main className="container py-12 max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/blogs")}
          className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Blog</span>
        </button>

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">{post.category}</Badge>
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <Clock className="h-3 w-3" /> {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{post.author}</p>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {post.date}
                </p>
              </div>
            </div>
            <div className="flex gap-2 ml-auto">
              <Button variant="ghost" size="icon" onClick={handleShare} className="text-gray-400 hover:text-blue-600">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-600">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.imageUrl && (
          <div className="rounded-xl overflow-hidden mb-10 shadow-lg">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
            {renderContent(post.content)}
          </div>
        </article>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex items-center gap-2 mt-10 pt-8 border-t border-gray-100">
            <Tag className="h-4 w-4 text-gray-400" />
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Related Articles */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(featuredPosts)
              .filter(([key]) => key !== slug)
              .slice(0, 2)
              .map(([key, related]) => (
                <Card key={key} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                  {related.imageUrl && (
                    <div className="h-40 overflow-hidden">
                      <img
                        src={related.imageUrl}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <Badge variant="secondary" className="text-xs mb-2">{related.category}</Badge>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {related.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">{related.excerpt}</p>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Transform Your Enterprise?</h3>
            <p className="text-gray-600 mb-6">Let Enfycon help you implement these strategies in your organization.</p>
            <Button onClick={() => navigate("/contact-us")} className="bg-blue-600 hover:bg-blue-700">
              Get Started Today
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

// Simple content renderer that handles markdown-like formatting
function renderContent(content: string) {
  const lines = content.split("\n");
  return lines.map((line, i) => {
    // Headers
    if (line.startsWith("### ")) return <h3 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-4">{line.replace("### ", "")}</h3>;
    if (line.startsWith("## ")) return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">{line.replace("## ", "")}</h2>;
    if (line.startsWith("# ")) return <h1 key={i} className="text-3xl font-bold text-gray-900 mt-12 mb-6">{line.replace("# ", "")}</h1>;

    // Bold text
    let processed = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Italic
    processed = processed.replace(/\*(.*?)\*/g, "<em>$1</em>");

    // Empty line
    if (line.trim() === "") return <br key={i} />;

    // List items
    if (line.startsWith("- ") || line.startsWith("* ")) {
      const text = line.replace(/^[-*] /, "");
      return (
        <div key={i} className="flex gap-3 my-2 ml-4">
          <span className="text-blue-500 mt-1.5">•</span>
          <span dangerouslySetInnerHTML={{ __html: processed.replace(/^[-*] /, "") }} />
        </div>
      );
    }

    // Numbered items
    if (/^\d+\.\s/.test(line)) {
      const text = line.replace(/^\d+\.\s/, "");
      return (
        <div key={i} className="flex gap-3 my-2 ml-4">
          <span className="text-blue-600 font-bold">{line.match(/^\d+/)?.[0]}.</span>
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      );
    }

    return <p key={i} className="my-3" dangerouslySetInnerHTML={{ __html: processed }} />;
  });
}
