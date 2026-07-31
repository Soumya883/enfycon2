import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CTO, FinEdge Corp",
    avatar: "/manus-storage/user-avatar_e4a96233.png",
    content:
      "Enfycon transformed our entire data infrastructure. Their AI solutions reduced our processing time by 80% and the cybersecurity assessment gave us confidence we never had before.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "VP Engineering, MedTech Solutions",
    avatar: "/manus-storage/user-avatar_e4a96233.png",
    content:
      "The IT staffing team found us senior engineers in under two weeks. The quality of talent was exceptional — every candidate was pre-vetted and perfectly matched to our needs.",
    rating: 5,
  },
  {
    name: "Rachel Torres",
    role: "Director of Digital, Global Retail Inc",
    avatar: "/manus-storage/user-avatar_e4a96233.png",
    content:
      "Their enterprise modernization project migrated us from legacy systems to cloud-native in 4 months. The ROI has been incredible and our team productivity skyrocketed.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <img
          src="/manus-storage/testimonial-img_5c69e47a.webp"
          alt=""
          className="w-full h-full object-cover"
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
          <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What Our{" "}
            <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
              className="relative bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/20 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-border/50 pt-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
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
