import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceCardProps {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
}

const PlaceCard = ({ id, name, location, description, image }: PlaceCardProps) => {
  return (
    <Link to={`/places/${id}`}>
      <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-500 border-border/50 bg-card">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <p className="text-muted-foreground line-clamp-3 leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PlaceCard;
