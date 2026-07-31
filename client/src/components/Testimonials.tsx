import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CTO, FinEdge Corp",
    avatar: "/images/testimonial/user-avatar.png",
    fallback: "https://www.enfycon.com/images/testimonial/user-avatar.png",
    content:
      "Enfycon transformed our entire data infrastructure. Their AI solutions reduced our processing time by 80% and the cybersecurity assessment gave us confidence we never had before.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "VP Engineering, MedTech Solutions",
    avatar: "/images/testimonial/user-avatar.png",
    fallback: "https://www.enfycon.com/images/testimonial/user-avatar.png",
    content:
      "The IT staffing team found us senior engineers in under two weeks. The quality of talent was exceptional — every candidate was pre-vetted and perfectly matched to our needs.",
    rating: 5,
  },
  {
    name: "Rachel Torres",
    role: "Director of Digital, Global Retail Inc",
    avatar: "/images/testimonial/user-avatar.png",
    fallback: "https://www.enfycon.com/images/testimonial/user-avatar.png",
    content:
      "Their enterprise modernization project migrated us from legacy systems to cloud-native in 4 months. The ROI has been incredible and our team productivity skyrocketed.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50/70 border-t border-gray-100 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img
          src="/images/testimonial/testimonial-img.webp"
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://www.enfycon.com/images/testimonial/testimonial-img.webp"; }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Clients Say</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Trusted by industry leaders to deliver transformative technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-blue-500/30 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 bg-gray-100"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = testimonial.fallback; }}
                />
                <div>
                  <p className="text-gray-900 font-bold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
