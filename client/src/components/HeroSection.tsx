import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Next-Generation Supply Chain Intelligence</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Navigating the Future of{" "}
          <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            Supply Chain Intelligence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          KoraNav develops intelligent software systems that transform healthcare and enterprise supply chains.
          Our innovative solutions unify and digitize fragmented operations, enhancing efficiency, resilience,
          and transparency through cutting-edge automation and AI-driven insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("products")}
            className="group"
            data-testid="button-explore-severus"
          >
            Explore Severus-WMS
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            data-testid="button-contact-hero"
          >
            Contact Us
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "99.9%", label: "System Uptime" },
            { value: "50+", label: "Enterprise Clients" },
            { value: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
