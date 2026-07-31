import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Lock, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
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
    <div className="min-h-screen bg-[#080C1E] font-sans">
      <Navbar />

      {/* Hero Section with World Map & Dark Form Card */}
      <section className="relative bg-[#080C1E] text-white pt-32 pb-24 overflow-hidden border-b border-slate-800">
        {/* Glow Effects */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        {/* World Map Vector Overlay */}
        <div
          className="absolute inset-0 opacity-10 bg-no-repeat bg-cover bg-center pointer-events-none z-0"
          style={{ backgroundImage: "url('/images/bg/map.svg')" }}
        />

        {/* Map Pins / Beacons */}
        <div className="absolute top-[35%] left-[22%] z-10 hidden lg:block">
          <div className="relative group">
            <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-cyan-400 opacity-75" />
            <div className="relative inline-flex rounded-full px-3 py-1 bg-cyan-500 text-[10px] font-extrabold tracking-widest text-white shadow-[0_0_15px_rgba(6,182,212,0.6)] cursor-pointer hover:scale-110 transition-transform">
              HQ (Texas)
            </div>
          </div>
        </div>

        <div className="absolute top-[48%] left-[70%] z-10 hidden lg:block">
          <div className="relative group">
            <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-indigo-400 opacity-75" />
            <div className="relative inline-flex rounded-full px-3 py-1 bg-indigo-500 text-[10px] font-extrabold tracking-widest text-white shadow-[0_0_15px_rgba(99,102,241,0.6)] cursor-pointer hover:scale-110 transition-transform">
              GCC (India)
            </div>
          </div>
        </div>

        <div className="container relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Headline Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-xs font-extrabold uppercase tracking-widest mb-6">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Global Communication Hub
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
                Let's Build the Future <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">Together.</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed font-light max-w-lg">
                Have a question about our enterprise AI solutions, cybersecurity, or IT staffing? Reach out to our global team and get a response within 24 hours.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-extrabold tracking-widest uppercase text-slate-300">
                <div className="flex items-center gap-3 bg-slate-900/50 backdrop-blur-md border border-slate-700/50 p-4 rounded-2xl shadow-lg">
                  <div className="p-2 rounded-full bg-emerald-500/10 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-900/50 backdrop-blur-md border border-slate-700/50 p-4 rounded-2xl shadow-lg">
                  <div className="p-2 rounded-full bg-blue-500/10 text-blue-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>Global Coverage</span>
                </div>
              </div>
            </motion.div>

            {/* Right Dark Glass Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="bg-slate-900/70 backdrop-blur-2xl border border-slate-700 rounded-[32px] p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-cyan-500/5 opacity-50 pointer-events-none" />
                
                {/* Header Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-extrabold tracking-widest uppercase text-cyan-400 mb-6 relative z-10 shadow-sm">
                  <Lock className="w-3.5 h-3.5" />
                  Get in Touch
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 tracking-tight relative z-10">
                  Drop Us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Line.</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-xl bg-slate-950/60 border border-slate-700 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all backdrop-blur-md"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-xl bg-slate-950/60 border border-slate-700 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all backdrop-blur-md"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-2">
                        Phone Number
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={formData.phoneCode}
                          onChange={(e) => setFormData({ ...formData, phoneCode: e.target.value })}
                          className="px-3 py-3.5 rounded-xl bg-slate-950/60 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-500 backdrop-blur-md font-bold"
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
                          className="w-full px-5 py-3.5 rounded-xl bg-slate-950/60 border border-slate-700 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all backdrop-blur-md"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        placeholder="How can we help?"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-xl bg-slate-950/60 border border-slate-700 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all backdrop-blur-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-2">
                      Type message *
                    </label>
                    <textarea
                      placeholder="Tell us about your project requirements..."
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-slate-950/60 border border-slate-700 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none backdrop-blur-md"
                    />
                  </div>

                  {/* Cloudflare Turnstile Indicator */}
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs font-bold text-emerald-400 shadow-inner">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>Success - Protected by Cloudflare Turnstile</span>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white py-4 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(6,182,212,0.3)] transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="py-24 bg-[#0F172A] relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-400 text-xs font-extrabold uppercase tracking-widest mb-4">
              <MapPin className="w-3.5 h-3.5" />
              Our Global Footprint
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Global Offices
            </h2>
          </motion.div>

          {/* Filter Pills */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-800 shadow-lg">
              {["All Locations", "USA", "India"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-2.5 rounded-xl text-sm font-extrabold transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md"
                      : "text-slate-400 hover:text-white hover:bg-slate-800"
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
                whileHover={{ y: -8 }}
                className="bg-slate-900/60 backdrop-blur-md rounded-[24px] border border-slate-800 shadow-xl overflow-hidden hover:border-cyan-500/30 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)] transition-all duration-500 flex flex-col group"
              >
                {/* Office Image */}
                <div className="h-56 overflow-hidden relative bg-slate-950">
                  <div className="absolute inset-0 bg-indigo-600/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />
                  <img
                    src={loc.image}
                    alt={loc.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = loc.fallback;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm border border-slate-700 text-white text-[10px] font-extrabold uppercase tracking-widest rounded-md shadow-lg">
                      {loc.region}
                    </span>
                  </div>
                </div>

                {/* Office Details */}
                <div className="p-8 flex-1 flex flex-col justify-between relative z-10">
                  <div>
                    <h3 className="text-xl font-extrabold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {loc.city}
                    </h3>
                    <div className="flex items-start gap-3 text-sm text-slate-300 font-light mb-6 leading-relaxed">
                      <MapPin className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{loc.address}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-slate-800/80 text-sm font-semibold">
                    <a
                      href={`tel:${loc.phone}`}
                      className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group/link"
                    >
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover/link:bg-cyan-500/20 transition-colors">
                        <Phone className="w-3.5 h-3.5 text-cyan-500" />
                      </div>
                      <span>{loc.phone}</span>
                    </a>
                    <a
                      href={`mailto:${loc.email}`}
                      className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group/link"
                    >
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover/link:bg-cyan-500/20 transition-colors">
                        <Mail className="w-3.5 h-3.5 text-cyan-500" />
                      </div>
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
