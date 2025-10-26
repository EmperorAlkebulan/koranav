import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import VisionSection from "@/components/VisionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <FeaturesSection />
        <VisionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
