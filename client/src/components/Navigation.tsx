import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@assets/IMG_7826_1761458161898.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            data-testid="link-logo"
          >
            <img 
              src={logoImage} 
              alt="KoraNav Logo" 
              className="h-10 w-auto"
            />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-products"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
              data-testid="button-cta-nav"
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl"
          >
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-mobile-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block w-full text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-mobile-products"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-mobile-features"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-mobile-contact"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="default"
                className="w-full"
                data-testid="button-mobile-cta"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
