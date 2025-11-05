import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";
import demoVideo from "@assets/ScreenRecording_08-20-2025 12-17-23_1_1762347359807.mov";

export default function DemoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="demo" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            See{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Severus-WMS
            </span>
            {" "}in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Watch how our intelligent warehouse management system transforms supply chain operations
            with real-time tracking, AI-powered analytics, and seamless integration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Video container with modern styling */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
            <video
              controls
              preload="metadata"
              className="w-full h-auto"
              poster="/api/placeholder/1200/675"
              data-testid="video-demo"
            >
              <source src={demoVideo} type="video/quicktime" />
              <source src={demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Decorative gradient overlay on edges */}
            <div className="absolute inset-0 pointer-events-none border-2 border-primary/20 rounded-2xl" />
          </div>

          {/* Floating badges */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium">
              <Play className="w-4 h-4 inline-block mr-2" />
              Live Product Demo
            </div>
            <div className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium">
              Real-time Tracking
            </div>
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium">
              AI-Powered Analytics
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Ready to transform your supply chain operations?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-elevate active-elevate-2 transition-all"
            data-testid="button-schedule-demo"
          >
            Schedule a Personalized Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
