import { useQuery } from "@tanstack/react-query";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchPlaces, getImageUrl, Place } from "@/lib/api";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

// Fix for default marker icon
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

// Custom marker icon
const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

const Map = () => {
  const { data: places, isLoading, error } = useQuery({
    queryKey: ["places"],
    queryFn: () => fetchPlaces(),
  });

  const items = places?.results ?? [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <p className="text-muted-foreground">Loading map...</p>
        </div>
      </div>
    );
  }

  if (error || !places) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <p className="text-destructive">Failed to load map data.</p>
        </div>
      </div>
    );
  }

  // Center of Ethiopia
  const centerPosition: [number, number] = [9.145, 40.489];

  const { BaseLayer } = LayersControl;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Interactive Map
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Explore the locations of Ethiopian Orthodox holy places
          </p>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5 text-primary" />
            <span>{items.length} sacred sites across Ethiopia</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="rounded-lg overflow-hidden shadow-xl border border-border h-[600px]">
          <MapContainer
            center={centerPosition}
            zoom={6}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={true}
          >
            <LayersControl position="topright">
              {/* Standard OpenStreetMap */}
              <BaseLayer checked name="Standard Map">
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </BaseLayer>

              {/* Satellite view */}
              <BaseLayer name="Satellite">
                <TileLayer
                  attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye"
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
              </BaseLayer>
            </LayersControl>

            {/* Markers for each place */}
            {items.map((place: Place) => (
              <Marker
                key={place.id}
                position={[place.latitude, place.longitude]}
                icon={customIcon}
              >
                <Popup maxWidth={300}>
                  <div className="p-2">
                    {place.images[0] && (
                      <img
                        src={getImageUrl(place.images[0].image)}
                        alt={place.name}
                        className="w-full h-32 object-cover rounded-md mb-3"
                      />
                    )}
                    <h3 className="font-bold text-lg mb-2">{place.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {place.location}
                    </p>
                    <p className="text-sm mb-3 line-clamp-2">
                      {place.description}
                    </p>
                    <Link
                      to={`/places/${place.id}`}
                      className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      View Details
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Map;
