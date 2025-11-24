import Navbar from "@/components/Navbar";
import { Heart, Globe, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About This Platform
          </h1>
          <p className="text-xl text-muted-foreground">
            Preserving and sharing Ethiopian Orthodox heritage
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This platform is dedicated to digitizing and preserving the rich heritage of Ethiopian Orthodox Church historical places. We provide detailed descriptions, images, and videos of churches, monasteries, and sacred sites, making this invaluable cultural and spiritual heritage accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Preservation</h3>
              <p className="text-muted-foreground">
                Protecting sacred heritage for future generations through digital documentation
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-sacred-gold/10 flex items-center justify-center">
                <Globe className="h-8 w-8 text-sacred-gold" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Accessibility</h3>
              <p className="text-muted-foreground">
                Making Ethiopian Orthodox heritage accessible to people worldwide
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Education</h3>
              <p className="text-muted-foreground">
                Providing comprehensive information about each sacred site's history
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Ethiopian Orthodox Church Heritage</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The Ethiopian Orthodox Tewahedo Church is one of the oldest Christian denominations in the world, with roots dating back to the 4th century. The church has played a central role in Ethiopian history, culture, and identity for over 1,700 years.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From the ancient rock-hewn churches of Lalibela to the cliff-side monasteries of Tigray, these sacred sites represent not just religious significance but also remarkable architectural and artistic achievements that deserve to be preserved and celebrated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
