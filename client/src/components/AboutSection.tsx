import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Lightbulb } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Transforming{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Supply Chain Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded on the vision of digitizing fragmented healthcare and enterprise logistics,
            KoraNav emerged from a deep understanding of supply chain challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-muted-foreground mb-4">
              KoraNav was born from witnessing the inefficiencies and fragmentation plaguing modern supply chains.
              Healthcare logistics, in particular, demanded a solution that could handle critical inventory with
              precision, transparency, and resilience.
            </p>
            <p className="text-muted-foreground">
              Our flagship product, <span className="text-primary font-semibold">Severus-WMS</span>, represents
              years of innovation—a next-generation warehouse management system that combines real-time tracking,
              intelligent automation, and AI-driven analytics to revolutionize how organizations manage their
              supply chains.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-border flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className="border border-primary/20"
                      style={{
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="relative z-10 text-center p-8">
                <div className="text-6xl font-bold text-primary/40">KN</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description: "To unify and digitize fragmented supply chains through innovative, secure, and intelligent software solutions.",
            },
            {
              icon: Lightbulb,
              title: "Our Vision",
              description: "A world where supply chains are seamless, data-driven, and resilient—strengthening patient care and operational efficiency.",
            },
            {
              icon: Users,
              title: "Our Values",
              description: "Innovation, transparency, and resilience guide everything we build—from code to customer relationships.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-6 border border-border rounded-lg hover-elevate">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
