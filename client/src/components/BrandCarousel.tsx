import { motion } from "framer-motion";

const brands = [
  { src: "/manus-storage/gen-brand-1_c99b1a29.png", alt: "Partner 1" },
  { src: "/manus-storage/gen-brand-2_160ce192.png", alt: "Partner 2" },
  { src: "/manus-storage/gen-brand-3_c7ef35dd.png", alt: "Partner 3" },
  { src: "/manus-storage/gen-brand-4_d8812478.png", alt: "Partner 4" },
  { src: "/manus-storage/gen-brand-5_7912f700.png", alt: "Partner 5" },
];

export default function BrandCarousel() {
  return (
    <section className="py-20 bg-background border-y border-border/50 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-semibold">
            Trusted by Innovative Enterprises
          </p>
          <div className="w-16 h-0.5 bg-primary/50 mx-auto mt-4" />
        </motion.div>

        {/* Auto-scrolling carousel strip */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center gap-12 md:gap-20 shrink-0"
            >
              {/* Duplicate set for seamless loop */}
              {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                <div key={i} className="group shrink-0">
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="h-10 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100"
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
