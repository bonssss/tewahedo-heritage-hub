import PlaceCard from "./PlaceCard";
import { useQuery } from "@tanstack/react-query";
import { fetchPlaces, getImageUrl } from "@/lib/api";

const FeaturedPlaces = () => {
  const { data: places, isLoading } = useQuery({
    queryKey: ['places'],
    queryFn: fetchPlaces,
  });
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Holy Places
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the most sacred and historically significant sites of the Ethiopian Orthodox Church
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading featured places...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {places?.slice(0, 6).map((place) => (
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
    </section>
  );
};

export default FeaturedPlaces;
