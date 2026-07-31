import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsTransitioning(false);
      // Scroll to top on page change
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 250);
    return () => clearTimeout(timer);
  }, [location, children]);

  return (
    <>
      {/* Progress bar at top */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ width: "0%", opacity: 1 }}
            animate={{ width: "60%", opacity: 1 }}
            exit={{ width: "100%", opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 to-purple-600 z-[100]"
          />
        )}
      </AnimatePresence>

      {/* Page content with fade animation */}
      <div
        className={`transition-all duration-250 ease-out ${
          isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
        }`}
      >
        {displayChildren}
      </div>
    </>
  );
}
