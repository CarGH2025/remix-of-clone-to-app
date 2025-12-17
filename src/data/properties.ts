import luxuryHome from "@/assets/luxury-home.jpg";

export interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  images: string[];
  status: string;
  statusColor: string;
  description: string;
  amenities: string[];
  features: string[];
  yearBuilt: number;
  lotSize: string;
  garage: number;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Waterfront Estate",
    price: "$3,250,000",
    location: "Coral Gables, FL",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    images: [luxuryHome, luxuryHome, luxuryHome, luxuryHome],
    status: "Just Listed",
    statusColor: "bg-green-500",
    description: "Experience unparalleled luxury in this stunning waterfront estate located in the prestigious Coral Gables neighborhood. This magnificent property offers breathtaking views of Biscayne Bay, a private dock, and resort-style living at its finest. The open floor plan seamlessly blends indoor and outdoor spaces, perfect for entertaining or quiet family moments. High-end finishes throughout include marble flooring, custom millwork, and a chef's kitchen equipped with top-of-the-line appliances.",
    amenities: ["Private Pool", "Waterfront", "Private Dock", "Smart Home", "Wine Cellar", "Home Theater", "Gated Community", "24/7 Security"],
    features: ["Impact Windows", "Marble Floors", "Chef's Kitchen", "Summer Kitchen", "Elevator", "3-Car Garage"],
    yearBuilt: 2021,
    lotSize: "0.5 acres",
    garage: 3
  },
  {
    id: 2,
    title: "Modern Miami Beach Condo",
    price: "$1,850,000",
    location: "Miami Beach, FL",
    beds: 3,
    baths: 3,
    sqft: "2,100",
    images: [luxuryHome, luxuryHome, luxuryHome, luxuryHome],
    status: "New",
    statusColor: "bg-blue-500",
    description: "Welcome to sophisticated coastal living in this meticulously designed Miami Beach condominium. Floor-to-ceiling windows frame panoramic ocean views while flooding the space with natural light. The contemporary interior features Italian cabinetry, Miele appliances, and spa-inspired bathrooms with premium fixtures. Building amenities rival five-star resorts, offering residents an unmatched lifestyle experience.",
    amenities: ["Ocean Views", "Rooftop Pool", "Fitness Center", "Concierge", "Valet Parking", "Beach Service", "Spa", "Business Center"],
    features: ["Floor-to-Ceiling Windows", "Italian Kitchen", "Private Balcony", "Walk-in Closets", "Stone Countertops"],
    yearBuilt: 2019,
    lotSize: "N/A",
    garage: 2
  },
  {
    id: 3,
    title: "Pinecrest Family Home",
    price: "$2,100,000",
    location: "Pinecrest, FL",
    beds: 4,
    baths: 3,
    sqft: "3,500",
    images: [luxuryHome, luxuryHome, luxuryHome, luxuryHome],
    status: "Featured",
    statusColor: "bg-accent",
    description: "Nestled in the heart of Pinecrest, this exceptional family home offers the perfect blend of elegance and comfort. Set on a lush, tree-lined lot, the property features an expansive backyard oasis with a heated pool and covered patio. The thoughtfully designed interior includes a gourmet kitchen, formal living and dining areas, and a spacious family room that opens to the outdoor entertaining space. Top-rated Pinecrest schools are just minutes away.",
    amenities: ["Heated Pool", "Covered Patio", "Landscaped Garden", "Outdoor Kitchen", "Security System", "Irrigation System"],
    features: ["Open Floor Plan", "Gourmet Kitchen", "High Ceilings", "Wood Floors", "Hurricane Shutters", "New Roof"],
    yearBuilt: 2018,
    lotSize: "0.35 acres",
    garage: 2
  },
];

export const getPropertyById = (id: number): Property | undefined => {
  return properties.find(p => p.id === id);
};
