import { motion } from "framer-motion";

const brands = [
  { src: "/images/brands/gen-brand-1.png", fallback: "https://www.enfycon.com/images/brands/gen-brand-1.png", alt: "Partner 1" },
  { src: "/images/brands/gen-brand-2.png", fallback: "https://www.enfycon.com/images/brands/gen-brand-2.png", alt: "Partner 2" },
  { src: "/images/brands/gen-brand-3.png", fallback: "https://www.enfycon.com/images/brands/gen-brand-3.png", alt: "Partner 3" },
  { src: "/images/brands/gen-brand-4.png", fallback: "https://www.enfycon.com/images/brands/gen-brand-4.png", alt: "Partner 4" },
  { src: "/images/brands/gen-brand-5.png", fallback: "https://www.enfycon.com/images/brands/gen-brand-5.png", alt: "Partner 5" },
];

export default function BrandCarousel() {
  return (
    <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-gray-500 font-bold">
            Trusted by Innovative Enterprises
          </p>
          <div className="w-20 h-1 bg-primary/60 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Auto-scrolling carousel strip */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden py-4">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center gap-16 md:gap-28 shrink-0"
            >
              {/* Duplicate set for seamless loop */}
              {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                <div key={i} className="group shrink-0 flex items-center justify-center">
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="h-20 md:h-28 lg:h-32 w-auto max-w-[240px] md:max-w-[320px] object-contain mix-blend-multiply transition-all duration-300 transform group-hover:scale-110"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = brand.fallback;
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
