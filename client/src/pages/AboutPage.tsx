import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Award, Globe, Users, Target } from "lucide-react";

const timeline = [
  { year: "2018", title: "Inception & Vision", description: "Ashutosh Dash founded enfycon Inc with a vision to build a company that delivers world-class technology while remaining deeply human at its core." },
  { year: "2019", title: "Building Foundations", description: "Focused on creating value through integrity and trust, we established strong relationships with enterprises and startups." },
  { year: "2021", title: "Global Expansion", description: "enfycon expanded operations across the USA, India, and the UAE, supporting enterprises with Technology Hiring Solutions and AI-driven solutions." },
  { year: "2024", title: "AI-Led Innovation", description: "Evolving into AI-led products and advanced technology solutions, anchored by the principle that taking care of people drives innovation." },
  { year: "2025", title: "Strategic Partnerships", description: "Forged strategic partnerships with the Government of India and key technology partners to drive large-scale digital initiatives." },
];

const csrInitiatives = [
  { title: "Food Distribution at SOS Children's Village", description: "Organized a food distribution program to support children at SOS Children's Village.", color: "from-orange-400 to-red-500" },
  { title: "Clothes & Essentials Distribution", description: "Provided clothes and essential items to those in need, reinforcing our commitment to community welfare.", color: "from-blue-400 to-indigo-500" },
  { title: "Scholarship Program", description: "Empowering bright minds with financial aid to pursue their education and achieve their dreams.", color: "from-emerald-400 to-teal-500" },
  { title: "Community Volunteering", description: "Our team actively participates in community service activities, contributing time and effort.", color: "from-purple-400 to-pink-500" },
];

const locations = [
  { city: "Texas (HQ), USA", address: "3921 Long Prairie Road, Building 5, Flower Mound, TX 75208", phone: "+1 201.201.7878", email: "texas@enfycon.com" },
  { city: "Ohio, USA", address: "6500 Emerald Parkway, Suite 100 Dublin, Ohio 43016", phone: "+1 216.888.3007", email: "ohio@enfycon.com" },
  { city: "Delaware, USA", address: "112 Capitol Trail, Suite A33, Newark DE 19711", phone: "+1 302.273.1130", email: "delaware@enfycon.com" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Building Success Together"
        subtitle="At enfycon, we empower enterprises to navigate the digital future with confidence. Specializing in AI-driven solutions and agentic workflows, we partner with clients globally."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }]}
      />

      {/* Overview */}
      <section className="py-24 section-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering Enterprises Through{" "}
                <span className="text-gradient">AI-Driven</span> Digital Transformation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our commitment to excellence and client success is the cornerstone of everything we build. We specialize in AI-driven solutions and agentic workflows, partnering with clients globally to drive innovation, modernize legacy systems, and achieve sustainable growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a premier provider of AI Agentic Solutions, AI-First Platforms, and Enterprise Modernization, we empower organizations to thrive in a digital-first world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-5"
            >
              {[
                { icon: Target, value: "200+", label: "Projects Delivered", color: "bg-blue-50 text-blue-600" },
                { icon: Globe, value: "3", label: "Global Offices", color: "bg-indigo-50 text-indigo-600" },
                { icon: Users, value: "50+", label: "Enterprise Clients", color: "bg-emerald-50 text-emerald-600" },
                { icon: Award, value: "10+", label: "Years of Excellence", color: "bg-purple-50 text-purple-600" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center mb-4`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Milestones of Our Success</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <span className="text-primary font-bold text-sm tracking-wider">{item.year}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0 shadow-lg shadow-primary/20">
                    {item.year}
                  </div>
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CSR Initiatives */}
      <section className="py-24 section-alt">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">Driven by Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Social Responsibility Initiatives</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Making a difference through simple efforts that bring small but meaningful change.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {csrInitiatives.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm card-hover"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">Our Locations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Global Presence, Local Excellence</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{loc.city}</h3>
                <p className="text-muted-foreground text-sm mb-4">{loc.address}</p>
                <div className="space-y-2">
                  <a href={`tel:${loc.phone}`} className="flex items-center gap-2 text-sm text-primary hover:underline">
                    {loc.phone}
                  </a>
                  <a href={`mailto:${loc.email}`} className="flex items-center gap-2 text-sm text-primary hover:underline">
                    {loc.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
