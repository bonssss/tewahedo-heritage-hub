const API_BASE_URL = "https://eotc-places.onrender.com/api";
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
  if (imagePath.startsWith("http")) {
    return imagePath;
  }
  return `${CLOUDINARY_BASE_URL}/${imagePath}`;
};

// ✅ Updated to accept optional region
export const fetchPlaces = async (region?: string): Promise<{ results: Place[] }> => {
  const url = region && region !== "all" ? `${API_BASE_URL}/?region=${region}` : API_BASE_URL + "/";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }
  return response.json(); // returns { results: [...] }
};

export const fetchPlaceById = async (id: string): Promise<Place> => {
  const response = await fetch(`${API_BASE_URL}/${id}/`);
  if (!response.ok) {
    throw new Error("Failed to fetch place");
  }
  return response.json();
};
const API_BASE_URL = "https://eotc-places.onrender.com/api";
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
  if (imagePath.startsWith("http")) {
    return imagePath;
  }
  return `${CLOUDINARY_BASE_URL}/${imagePath}`;
};

// ✅ Updated to accept optional region
export const fetchPlaces = async (region?: string): Promise<{ results: Place[] }> => {
  const url = region && region !== "all" ? `${API_BASE_URL}/?region=${region}` : API_BASE_URL + "/";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }
  return response.json(); // returns { results: [...] }
};

export const fetchPlaceById = async (id: string): Promise<Place> => {
  const response = await fetch(`${API_BASE_URL}/${id}/`);
  if (!response.ok) {
    throw new Error("Failed to fetch place");
  }
  return response.json();
};
