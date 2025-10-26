import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, Brain, RefreshCw, Workflow, LayoutDashboard, Shield } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-time Inventory Tracking",
    description: "Monitor stock levels, movements, and locations with precision across all warehouses and distribution centers.",
  },
  {
    icon: Brain,
    title: "AI-Driven Analytics",
    description: "Leverage machine learning to predict demand, optimize stock levels, and identify supply chain inefficiencies.",
  },
  {
    icon: RefreshCw,
    title: "ERP Interoperability",
    description: "Seamlessly integrate with existing ERP systems for unified data flow and operational consistency.",
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "Streamline order processing, fulfillment, and inventory management with intelligent automation.",
  },
  {
    icon: LayoutDashboard,
    title: "Role-based Dashboards",
    description: "Customized views and controls for different stakeholders—from warehouse staff to C-suite executives.",
  },
  {
    icon: Shield,
    title: "Cloud Resilience & Security",
    description: "Enterprise-grade security, compliance, and 99.9% uptime backed by cloud infrastructure.",
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Powerful{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade capabilities designed to streamline your supply chain operations
            and drive measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-6 border border-border rounded-lg hover-elevate bg-card">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
