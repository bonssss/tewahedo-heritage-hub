import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-sacred-gold blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block mb-4 px-6 py-2 bg-sacred-gold/10 border border-sacred-gold/20 rounded-full">
            <span className="text-sacred-gold font-medium">Preserving Sacred Heritage</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Ethiopian Orthodox Church
            <span className="block mt-2 bg-gradient-to-r from-primary via-sacred-gold to-secondary bg-clip-text text-transparent">
              Historical Places
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore centuries of sacred history, ancient monasteries, and holy sites that have shaped the spiritual landscape of Ethiopia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-sacred-gold hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8"
              asChild
            >
              <Link to="/places">
                Explore Holy Places
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/5 text-lg px-8"
              asChild
            >
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
