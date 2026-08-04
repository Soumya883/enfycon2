import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Play, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Chief Technology Officer",
    company: "FinEdge Corporation",
    avatar: "/images/testimonial/user-avatar.png",
    fallback: "https://www.enfycon.com/images/testimonial/user-avatar.png",
    content: "Enfycon transformed our entire data infrastructure. Their AI Agentic solutions reduced our processing times by 80% while their security audit gave us total confidence in our SOC2 compliance.",
    rating: 5,
    highlight: "80% Processing Time Reduction"
  },
  {
    name: "David Chen",
    role: "VP of Engineering",
    company: "MedTech Innovations",
    avatar: "/images/testimonial/user-avatar.png",
    fallback: "https://www.enfycon.com/images/testimonial/user-avatar.png",
    content: "The IT staffing division sourced senior AI engineers for us in under 10 days. The caliber of talent was exceptional — every candidate was pre-vetted and hit the ground running.",
    rating: 5,
    highlight: "10-Day Senior Staffing Turnaround"
  },
  {
    name: "Rachel Torres",
    role: "Director of Digital Systems",
    company: "Global Enterprise Retail",
    avatar: "/images/testimonial/user-avatar.png",
    fallback: "https://www.enfycon.com/images/testimonial/user-avatar.png",
    content: "Their modernization team migrated 15 legacy services to cloud-native microservices with zero downtime. The ROI has been phenomenal across all regional hubs.",
    rating: 5,
    highlight: "Zero Downtime Cloud Migration"
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[activeIndex];

  return (
    <section className="py-28 lg:py-36 bg-gradient-to-b from-[#0F172A] via-[#080C1E] to-[#0F172A] text-white relative overflow-hidden">
      {/* Ambient Blur Circles */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Backdrop Image Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-center bg-cover" style={{ backgroundImage: "url('/images/testimonial/testimonial-img.webp')" }} />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-extrabold tracking-[0.25em] uppercase text-xs mb-3">
            Client Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Trusted by Leaders <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Worldwide</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
            Discover why global executives choose Enfycon as their strategic technology partner.
          </p>
        </motion.div>

        {/* Featured Testimonial Spotlight */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900/90 backdrop-blur-2xl rounded-[24px] border border-slate-800 p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Content */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <Quote className="w-10 h-10 text-cyan-400 opacity-80" />
                <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold">
                  {active.highlight}
                </span>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: active.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-2xl text-slate-100 font-medium leading-relaxed mb-8">
                "{active.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-800">
                <img
                  src={active.avatar}
                  alt={active.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400 shadow-md bg-slate-800"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = active.fallback; }}
                />
                <div>
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    {active.name}
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </h4>
                  <p className="text-sm text-cyan-300">{active.role} • {active.company}</p>
                </div>
              </div>
            </div>

            {/* Right Video Review CTA */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-8">
              <button
                onClick={() => setShowVideoModal(true)}
                className="group relative w-full h-44 rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/80 flex items-center justify-center hover:border-cyan-400 transition-all duration-300 shadow-xl"
              >
                <img
                  src="/images/testimonial/testimonial-img.webp"
                  alt="Video testimonial"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40" />
                <div className="relative z-10 w-14 h-14 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-[0_0_25px_#00D4FF] group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-slate-950 translate-x-0.5" />
                </div>
              </button>
              <p className="text-xs text-slate-400 font-semibold mt-3">Watch Executive Interview (2 min)</p>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "w-10 bg-cyan-400 shadow-[0_0_10px_#00D4FF]" : "w-2.5 bg-slate-700 hover:bg-slate-600"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white hover:bg-cyan-400 hover:text-slate-950 hover:border-cyan-400 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white hover:bg-cyan-400 hover:text-slate-950 hover:border-cyan-400 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Preview */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowVideoModal(false)}
          >
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-2xl w-full text-center relative" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-xl font-bold text-white mb-4">Client Executive Video Spotlight</h3>
              <div className="aspect-video bg-black rounded-2xl overflow-hidden flex items-center justify-center relative">
                <video autoPlay loop muted className="w-full h-full object-cover">
                  <source src="/video/hero-video.mp4" type="video/mp4" />
                </video>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="mt-6 px-6 py-2.5 rounded-full bg-cyan-400 text-slate-950 font-bold text-sm hover:bg-cyan-300 transition-colors"
              >
                Close Video
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
