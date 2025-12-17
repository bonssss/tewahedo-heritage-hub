import Navbar from "@/components/Navbar";
import PlaceCard from "@/components/PlaceCard";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPlaces, getImageUrl } from "@/lib/api";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Places = () => {
  const [region, setRegion] = useState<string>("all");

  const { data: places, isLoading, error } = useQuery({
    queryKey: ["places", region],
    queryFn: () =>
      fetchPlaces(region === "all" ? undefined : region),
  });

  const items = places?.results ?? [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Holy Places
          </h1>

          {/* REGION DROPDOWN */}
          <div className="max-w-xs">
            <Select value={region} onValueChange={setRegion}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Filter by region" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="Tigray">Tigray</SelectItem>
                <SelectItem value="Amhara">Amhara</SelectItem>
                <SelectItem value="Oromia">Oromia</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {isLoading && (
          <p className="text-center">Loading holy places...</p>
        )}

        {error && (
          <p className="text-center text-destructive">
            Failed to load places
          </p>
        )}

        {!isLoading && items.length === 0 && (
          <p className="text-center text-muted-foreground">
            No places found for this region
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((place) => (
            <PlaceCard
              key={place.id}
              id={place.id.toString()}
              name={place.name}
              location={place.location}
              description={place.description}
              image={
                place.images?.[0]
                  ? getImageUrl(place.images[0].image)
                  : "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80"
              }
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Places;
