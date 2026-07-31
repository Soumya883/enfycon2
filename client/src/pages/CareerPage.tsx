import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";

const openPositions = [
  { title: "Senior AI/ML Engineer", location: "Flower Mound, TX (On-site)", type: "Full-time", department: "Engineering" },
  { title: "Full Stack Developer (React/Node.js)", location: "Remote", type: "Full-time", department: "Engineering" },
  { title: "DevOps Engineer", location: "Dublin, OH (Hybrid)", type: "Full-time", department: "Infrastructure" },
  { title: "Data Scientist", location: "Newark, DE (Hybrid)", type: "Full-time", department: "Data & Analytics" },
  { title: "Cybersecurity Analyst", location: "Remote", type: "Full-time", department: "Security" },
  { title: "Technical Recruiter", location: "Flower Mound, TX (On-site)", type: "Full-time", department: "HR" },
];

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Careers"
        subtitle="Join our team of innovators and help shape the future of enterprise technology."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Career", href: "/career" }]}
      />

      <section className="py-24 section-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <p className="text-muted-foreground leading-relaxed">
              We're always looking for talented individuals who share our passion for innovation and excellence. Explore our current openings below.
            </p>
          </div>

          <div className="space-y-4">
            {openPositions.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary/20 hover:shadow-md transition-all group"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Briefcase className="w-4 h-4" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-primary/5 text-primary text-xs font-medium">
                      {job.department}
                    </span>
                  </div>
                </div>
                <button className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all shrink-0">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Don't see a position that fits? We're always open to connecting with talented professionals.</p>
            <a href="/contact-us" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
