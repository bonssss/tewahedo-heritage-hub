import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { fetchPlaceById, getImageUrl } from "@/lib/api";

const PlaceDetail = () => {
  const { id } = useParams();
  
  const { data: place, isLoading, error } = useQuery({
    queryKey: ['place', id],
    queryFn: () => fetchPlaceById(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <p className="text-muted-foreground">Loading place details...</p>
        </div>
      </div>
    );
  }

  if (error || !place) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <p className="text-destructive">Failed to load place details.</p>
        </div>
      </div>
    );
  }

  const mainImage = place.images[0] ? getImageUrl(place.images[0].image) : 'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?w=1200&q=80';

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={mainImage} 
          alt={place.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {place.name}
            </h1>
            <div className="flex items-center gap-2 text-white/90 text-lg">
              <MapPin className="h-5 w-5" />
              <span>{place.location}</span>
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
                {place.description}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">History</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {place.history}
              </p>
            </div>

            {place.images.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {place.images.map((img, idx) => (
                    <div key={img.id} className="aspect-square rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={getImageUrl(img.image)} 
                        alt={`${place.name} ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {place.videos.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Videos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {place.videos.map((video) => (
                    <div key={video.id} className="aspect-video rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src={video.video.replace('watch?v=', 'embed/')}
                        title={`${place.name} video`}
                        className="w-full h-full"
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-foreground mb-4">Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Region</p>
                      <p className="text-muted-foreground">{place.region}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Coordinates</p>
                      <p className="text-muted-foreground">{place.latitude}, {place.longitude}</p>
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
