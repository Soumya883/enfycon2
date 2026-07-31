import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const offices = [
  {
    city: "Texas (HQ), USA",
    address: "3921 Long Prairie Road, Building 5, Flower Mound, TX 75208",
    phone: "+1 201.201.7878",
    email: "texas@enfycon.com",
    type: "HQ",
  },
  {
    city: "Ohio, USA",
    address: "6500 Emerald Parkway, Suite 100 Dublin, Ohio 43016",
    phone: "+1 216.888.3007",
    email: "ohio@enfycon.com",
    type: "ODC",
  },
  {
    city: "Delaware, USA",
    address: "112 Capitol Trail, Suite A33, Newark DE 19711",
    phone: "+1 302.273.1130",
    email: "delaware@enfycon.com",
    type: "ODC",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Drop Us a Line"
        subtitle="Get in touch with our team. We're here to help you navigate the digital future."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact Us", href: "/contact-us" }]}
      />

      {/* Contact Form + Info */}
      <section className="py-24 section-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Have a question about our services or want to discuss a project? Reach out to us and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Call Us", value: "+1 201.201.7078", href: "tel:+12012017078" },
                  { icon: Mail, label: "Email Us", value: "office@enfycon.com", href: "mailto:office@enfycon.com" },
                  { icon: MapPin, label: "Visit Us", value: "3921 Long Prairie Road, Building 5, Flower Mound, TX 75028", href: "#" },
                  { icon: Clock, label: "Business Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM (CST)", href: "#" },
                ].map((item, i) => (
                  <a key={i} href={item.href} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-gray-900 font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (702) 123-4567"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    placeholder="Type your message..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-[0_4px_25px_rgba(59,91,219,0.25)] active:scale-[0.97]"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">Our Locations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Global Presence, <span className="text-gradient">Local Excellence</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm card-hover"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold mb-4">
                  {office.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{office.city}</h3>
                <p className="text-muted-foreground text-sm mb-5">{office.address}</p>
                <div className="space-y-2">
                  <a href={`tel:${office.phone}`} className="block text-primary text-sm hover:underline">
                    {office.phone}
                  </a>
                  <a href={`mailto:${office.email}`} className="block text-primary text-sm hover:underline">
                    {office.email}
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
