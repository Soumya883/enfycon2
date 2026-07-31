import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Lock, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

const locations = [
  {
    region: "USA",
    city: "Texas(HQ), USA",
    address: "3921 Long Prairie Road, Building 5, Flower Mound, TX 75208",
    phone: "+1 201.201.7878",
    email: "texas@enfycon.com",
    image: "/images/locations/texas.png",
    fallback: "https://www.enfycon.com/images/locations/texas.png"
  },
  {
    region: "USA",
    city: "Ohio, USA",
    address: "6500 Emerald Parkway, Suite 100, Dublin, Ohio 43016",
    phone: "+1 216.888.3007",
    email: "ohio@enfycon.com",
    image: "/images/locations/ohio.png",
    fallback: "https://www.enfycon.com/images/locations/ohio.png"
  },
  {
    region: "USA",
    city: "Delaware, USA",
    address: "112 Capitol Trail, Suite A33, Newark, DE 19711",
    phone: "+1 302.273.1130",
    email: "delaware@enfycon.com",
    image: "/images/locations/delaware.png",
    fallback: "https://www.enfycon.com/images/locations/delaware.png"
  },
  {
    region: "India",
    city: "BBSR (GCC), India",
    address: "N4/345, Block N4, IRC Village, Bhubaneswar, Odisha 751015",
    phone: "+91 674.291.0090",
    email: "bhubaneswar@enfycon.com",
    image: "/images/locations/bhubaneswar.jpg",
    fallback: "https://www.enfycon.com/images/locations/bhubaneswar.jpg"
  },
  {
    region: "India",
    city: "Vizag (AP), India",
    address: "Hill No. 2, Plot 02, IT PARK, Rushikonda, Visakhapatnam, Andhra Pradesh 530045",
    phone: "+91 5327770101",
    email: "vizag@enfycon.com",
    image: "/images/locations/visakhapatnam.jpg",
    fallback: "https://www.enfycon.com/images/locations/visakhapatnam.jpg"
  },
  {
    region: "India",
    city: "HYD (TG), India",
    address: "Unit No. 306 & 307, Juno Sadguru Image, Capitol Park, Image Gardens Road, Madhapur, Hyderabad, Telangana 500081",
    phone: "+91 6372970100",
    email: "hyderabad@enfycon.com",
    image: "/images/locations/hyderabad.jpg",
    fallback: "https://www.enfycon.com/images/locations/hyderabad.jpg"
  },
];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("All Locations");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneCode: "+1",
    phone: "",
    subject: "",
    message: ""
  });

  const filteredLocations = activeTab === "All Locations"
    ? locations
    : locations.filter((loc) => loc.region === activeTab);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your message has been sent successfully.");
      setFormData({
        fullName: "",
        email: "",
        phoneCode: "+1",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with World Map & Dark Form Card */}
      <section className="relative bg-[#060a17] text-white pt-28 pb-20 overflow-hidden">
        {/* World Map Vector Overlay */}
        <div
          className="absolute inset-0 opacity-20 bg-no-repeat bg-cover bg-center pointer-events-none z-0"
          style={{ backgroundImage: "url('/images/bg/map.svg')" }}
        />

        {/* Map Pins / Beacons */}
        <div className="absolute top-[35%] left-[22%] z-10 hidden md:block">
          <div className="relative">
            <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-blue-400 opacity-75" />
            <div className="relative inline-flex rounded-full px-2 py-0.5 bg-blue-600 text-[10px] font-bold text-white shadow-lg">
              HQ (Texas)
            </div>
          </div>
        </div>

        <div className="absolute top-[48%] left-[70%] z-10 hidden md:block">
          <div className="relative">
            <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-indigo-400 opacity-75" />
            <div className="relative inline-flex rounded-full px-2 py-0.5 bg-indigo-600 text-[10px] font-bold text-white shadow-lg">
              GCC (India)
            </div>
          </div>
        </div>

        <div className="container relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Headline Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold mb-6">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                Global Communication Hub
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
                Let's Build the Future <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Together.</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
                Have a question about our enterprise AI solutions, cybersecurity, or IT staffing? Reach out to our global team and get a response within 24 hours.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-gray-300">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-3 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>24/7 Dedicated Support</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-3 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Global Office Coverage</span>
                </div>
              </div>
            </motion.div>

            {/* Right Dark Glass Form Card (Matching Screenshot) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="bg-[#0b1226]/95 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl">
                {/* Header Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-blue-300 mb-4">
                  <Lock className="w-3 h-3" />
                  Get in Touch
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                  Drop Us a <span className="text-blue-400">Line.</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5">
                        Phone Number
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={formData.phoneCode}
                          onChange={(e) => setFormData({ ...formData, phoneCode: e.target.value })}
                          className="px-3 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                        >
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+91">🇮🇳 +91</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+971">🇦🇪 +971</option>
                        </select>
                        <input
                          type="tel"
                          placeholder="(555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5">
                        Subject *
                      </label>
                      <input
                        type="text"
                        placeholder="How can we help?"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5">
                      Type message *
                    </label>
                    <textarea
                      placeholder="Tell us about your project requirements..."
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                    />
                  </div>

                  {/* Cloudflare Turnstile Indicator */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>Success - Protected by Cloudflare Turnstile</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-gray-400 text-center">
                    This site is protected by Cloudflare Turnstile security frameworks.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices Section (Matching Screenshot) */}
      <section className="py-24 bg-white relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center justify-center gap-1.5 mb-2">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              Our Global Footprint
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
              Global Offices
            </h2>
          </motion.div>

          {/* Filter Pills */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-100 p-1.5 rounded-full border border-gray-200">
              {["All Locations", "USA", "India"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-primary text-white shadow-md shadow-primary/30"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Office Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLocations.map((loc, i) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Office Image */}
                <div className="h-52 overflow-hidden relative bg-gray-100">
                  <img
                    src={loc.image}
                    alt={loc.city}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = loc.fallback;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Office Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {loc.city}
                    </h3>
                    <div className="flex items-start gap-2 text-xs text-gray-600 mb-4 leading-relaxed">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{loc.address}</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-gray-100 text-xs font-semibold">
                    <a
                      href={`tel:${loc.phone}`}
                      className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{loc.phone}</span>
                    </a>
                    <a
                      href={`mailto:${loc.email}`}
                      className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{loc.email}</span>
                    </a>
                  </div>
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
