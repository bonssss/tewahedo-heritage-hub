import Navbar from "@/components/Navbar";
import PlaceCard from "@/components/PlaceCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

const mockPlaces = [
  {
    id: "1",
    name: "Debre Damo Monastery",
    location: "Tigray Region",
    description: "One of the most important monasteries in Ethiopia, perched atop a flat-topped mountain only accessible by rope. Founded in the 6th century by Abuna Aregawi.",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80"
  },
  {
    id: "2",
    name: "Lalibela Rock Churches",
    location: "Amhara Region",
    description: "A UNESCO World Heritage site featuring 11 medieval monolithic cave churches carved from rock. Dating back to the 12th century under King Lalibela.",
    image: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?w=800&q=80"
  },
  {
    id: "3",
    name: "Axum Church of Our Lady Mary of Zion",
    location: "Axum, Tigray",
    description: "The holiest church in Ethiopia, believed to house the Ark of the Covenant. A center of Ethiopian Orthodox Christianity since the 4th century.",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80"
  },
  {
    id: "4",
    name: "Debre Berhan Selassie",
    location: "Gondar, Amhara",
    description: "Famous for its beautiful ceiling decorated with angelic faces. Built in the 17th century during the reign of Emperor Iyasu I.",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80"
  },
  {
    id: "5",
    name: "Gishen Mariam Monastery",
    location: "Wollo, Amhara",
    description: "Located on a mountain plateau, said to contain a piece of the True Cross. A major pilgrimage site established in the 13th century.",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80"
  },
  {
    id: "6",
    name: "Debre Libanos Monastery",
    location: "Oromia Region",
    description: "Founded by Saint Tekle Haymanot in the 13th century. One of the most important religious sites with stunning views of the Blue Nile gorge.",
    image: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?w=800&q=80"
  }
];

const Places = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Holy Places
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Explore the sacred heritage of Ethiopian Orthodox Christianity
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search holy places..." 
                className="pl-10 h-12 border-border bg-background"
              />
            </div>
            <Button variant="outline" className="h-12 px-6 border-border">
              <Filter className="mr-2 h-5 w-5" />
              Filter
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPlaces.map((place) => (
            <PlaceCard key={place.id} {...place} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;
