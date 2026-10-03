export type GalleryCategory = "Nature" | "Tech" | "School" | "Travel" | "Lifestyle";

export const galleryFilters = [
  "All",
  "Nature",
  "Tech",
  "School",
  "Travel",
  "Lifestyle",
] as const;

export type GalleryFilter = (typeof galleryFilters)[number];

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  src: string;
  width: number;
  height: number;
}

export const galleryItems: GalleryItem[] = [
  { id: "mountains", title: "Golden Hour Peaks", category: "Nature", src: "/images/nature-mountains.svg", width: 800, height: 1000 },
  { id: "circuit", title: "Inside the Machine", category: "Tech", src: "/images/tech-circuit.svg", width: 1200, height: 900 },
  { id: "sunset", title: "Sunset Over the Sea", category: "Travel", src: "/images/travel-sunset.svg", width: 1200, height: 800 },
  { id: "books", title: "Study Shelf", category: "School", src: "/images/school-books.svg", width: 900, height: 900 },
  { id: "code", title: "Late Night Code", category: "Tech", src: "/images/tech-code.svg", width: 900, height: 1200 },
  { id: "coffee", title: "Morning Coffee", category: "Lifestyle", src: "/images/lifestyle-coffee.svg", width: 900, height: 900 },
  { id: "forest", title: "Quiet Lake", category: "Nature", src: "/images/nature-forest.svg", width: 900, height: 900 },
  { id: "city", title: "City After Dark", category: "Travel", src: "/images/travel-city.svg", width: 800, height: 1000 },
  { id: "notebook", title: "Notes and Plans", category: "School", src: "/images/school-notebook.svg", width: 800, height: 1000 },
  { id: "headphones", title: "Focus Mode", category: "Lifestyle", src: "/images/lifestyle-headphones.svg", width: 800, height: 1066 },
];
