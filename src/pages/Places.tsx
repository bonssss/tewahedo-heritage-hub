import Navbar from "@/components/Navbar";
import PlaceCard from "@/components/PlaceCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchPlaces, getImageUrl } from "@/lib/api";
import Footer from "@/components/Footer";

const Places = () => {
  const { data: places, isLoading, error } = useQuery({
    queryKey: ['places'],
    queryFn: fetchPlaces,
  });
  const items = places?.results ?? [];
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
        {isLoading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading holy places...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center py-12">
            <p className="text-destructive">Failed to load places. Please try again later.</p>
          </div>
        )}
        
        {places && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((place) => (
              <PlaceCard 
                key={place.id} 
                id={place.id.toString()}
                name={place.name}
                location={place.location}
                description={place.description}
                image={place.images[0] ? getImageUrl(place.images[0].image) : 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80'}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Places;
