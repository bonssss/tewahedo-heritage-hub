import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockPlace = {
  name: "Lalibela Rock Churches",
  location: "Amhara Region, Ethiopia",
  description: "A UNESCO World Heritage site featuring 11 medieval monolithic cave churches carved from rock. Dating back to the 12th century under King Lalibela.",
  history: "The churches of Lalibela were carved from solid rock in the 12th and 13th centuries during the reign of King Gebre Mesqel Lalibela. According to tradition, angels helped with the construction. The churches are divided into two main groups, separated by the River Jordan. They remain active houses of worship and major pilgrimage sites for Ethiopian Orthodox Christians.",
  founded: "12th Century",
  significance: "UNESCO World Heritage Site, Major Pilgrimage Destination",
  image: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?w=1200&q=80",
  images: [
    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80",
    "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&q=80",
    "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&q=80"
  ]
};

const PlaceDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={mockPlace.image} 
          alt={mockPlace.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {mockPlace.name}
            </h1>
            <div className="flex items-center gap-2 text-white/90 text-lg">
              <MapPin className="h-5 w-5" />
              <span>{mockPlace.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">About</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {mockPlace.description}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">History</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {mockPlace.history}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {mockPlace.images.map((img, idx) => (
                  <div key={idx} className="aspect-square rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={img} 
                      alt={`${mockPlace.name} ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-foreground mb-4">Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Founded</p>
                      <p className="text-muted-foreground">{mockPlace.founded}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Significance</p>
                      <p className="text-muted-foreground">{mockPlace.significance}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-sacred-gold hover:opacity-90">
                Plan Your Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
