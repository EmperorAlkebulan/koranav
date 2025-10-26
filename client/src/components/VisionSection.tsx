import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export default function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="vision-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="currentColor" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#vision-grid)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Quote className="w-8 h-8 text-primary" />
          </div>

          <blockquote className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            >
              "Our vision is simple: a{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                unified supply chain
              </span>{" "}
              that reduces waste, improves efficiency, and strengthens patient care."
            </motion.p>

            <motion.footer
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground"
            >
              <cite className="not-italic">— KoraNav Founders</cite>
            </motion.footer>
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { label: "Reduce Waste", value: "Up to 40%" },
            { label: "Improve Efficiency", value: "3x Faster" },
            { label: "Increase Accuracy", value: "99.5%" },
            { label: "Cost Savings", value: "25% Average" },
          ].map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
