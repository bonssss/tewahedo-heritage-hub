import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedPlaces from "@/components/FeaturedPlaces";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedPlaces />
      
      <footer className="bg-foreground/5 py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Ethiopian Orthodox Church Historical Platform. Preserving sacred heritage.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
