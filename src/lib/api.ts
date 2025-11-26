const API_BASE_URL = "http://127.0.0.1:8000/api";
const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/YOUR_CLOUD_NAME"; // Update with your Cloudinary cloud name

export interface PlaceImage {
  id: number;
  image: string;
}

export interface PlaceVideo {
  id: number;
  video: string;
}

export interface Place {
  id: number;
  name: string;
  location: string;
  region: string;
  description: string;
  history: string;
  latitude: number;
  longitude: number;
  images: PlaceImage[];
  videos: PlaceVideo[];
}

export const getImageUrl = (imagePath: string): string => {
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  return `${CLOUDINARY_BASE_URL}/${imagePath}`;
};

export const fetchPlaces = async (): Promise<Place[]> => {
  const response = await fetch(`${API_BASE_URL}/`);
  if (!response.ok) {
    throw new Error('Failed to fetch places');
  }
  return response.json();
};

export const fetchPlaceById = async (id: string): Promise<Place> => {
  const response = await fetch(`${API_BASE_URL}/${id}/`);
  if (!response.ok) {
    throw new Error('Failed to fetch place');
  }
  return response.json();
};
