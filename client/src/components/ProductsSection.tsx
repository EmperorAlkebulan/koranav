import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Package, BarChart3, Network, ArrowRight, Sparkles } from "lucide-react";
import severusImage from "@assets/IMG_7860_1761460607545.jpeg";

const products = [
  {
    icon: Package,
    name: "Severus-WMS",
    status: "Available Now",
    statusColor: "text-primary",
    description: "A next-generation Warehouse Management System designed for resilience, transparency, and automation. Real-time inventory tracking, order fulfillment, and AI-driven analytics starting with healthcare logistics.",
    features: ["Real-time Tracking", "AI Analytics", "Role-based Dashboards", "Order Fulfillment"],
    image: severusImage,
  },
  {
    icon: BarChart3,
    name: "KoraNav Analytics",
    status: "Coming Soon",
    statusColor: "text-accent",
    description: "Advanced predictive insights platform with seamless ERP integration and intelligent demand forecasting. Transform your supply chain data into actionable intelligence.",
    features: ["Predictive Insights", "ERP Integration", "Demand Forecasting", "Custom Reports"],
  },
  {
    icon: Network,
    name: "KoraNav Connect",
    status: "Coming Soon",
    statusColor: "text-accent",
    description: "A collaboration and interoperability hub for digital logistics ecosystems. Connect stakeholders, systems, and data streams in one unified platform.",
    features: ["Digital Ecosystem", "API Integration", "Collaboration Tools", "Data Interoperability"],
  },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Product Suite
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed to transform every aspect of your supply chain operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full border border-border rounded-lg overflow-hidden hover-elevate flex flex-col bg-card">
                {product.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                    <img 
                      src={product.image} 
                      alt={`${product.name} Preview`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <product.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full bg-background border border-border ${product.statusColor}`}>
                      {product.status === "Available Now" && <Sparkles className="w-3 h-3" />}
                      <span className="text-xs font-medium">{product.status}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant={index === 0 ? "default" : "outline"}
                    className="w-full group/btn"
                    data-testid={`button-learn-more-${index}`}
                    onClick={() => console.log(`Learn more about ${product.name}`)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
