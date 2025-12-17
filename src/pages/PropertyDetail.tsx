import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PropertyInquiryForm } from "@/components/PropertyInquiryForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getPropertyById } from "@/data/properties";
import { 
  ArrowLeft, 
  Bed, 
  Bath, 
  Square, 
  Calendar, 
  Car, 
  Ruler, 
  Heart, 
  Share2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Check
} from "lucide-react";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = getPropertyById(Number(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Property Not Found
            </h1>
            <p className="text-muted-foreground mb-6">
              The property you're looking for doesn't exist.
            </p>
            <Link to="/">
              <Button variant="luxury">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Properties
          </Link>
        </div>

        {/* Image Gallery */}
        <section className="container mx-auto px-4 mb-8">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden group">
            <img
              src={property.images[currentImageIndex]}
              alt={`${property.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            {/* Status Badge */}
            <Badge 
              className={`absolute top-4 left-4 ${property.statusColor} text-white border-0`}
            >
              {property.status}
            </Badge>

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <Button size="icon" variant="outline" className="bg-background/80 backdrop-blur-sm border-0 hover:bg-background">
                <Heart className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="bg-background/80 backdrop-blur-sm border-0 hover:bg-background">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sm text-foreground">
                {currentImageIndex + 1} / {property.images.length}
              </span>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {property.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  currentImageIndex === index 
                    ? "border-primary" 
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </section>

        {/* Property Details */}
        <section className="container mx-auto px-4 pb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div className="animate-fade-in">
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {property.title}
                </h1>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location}
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">
                  {property.price}
                </div>
              </div>

              {/* Quick Stats */}
              <Card className="p-6 bg-gradient-card border-0 shadow-card animate-slide-up">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Bed className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-foreground">{property.beds}</div>
                    <div className="text-sm text-muted-foreground">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <Bath className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-foreground">{property.baths}</div>
                    <div className="text-sm text-muted-foreground">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <Square className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-foreground">{property.sqft}</div>
                    <div className="text-sm text-muted-foreground">Sq. Ft.</div>
                  </div>
                  <div className="text-center">
                    <Car className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-foreground">{property.garage}</div>
                    <div className="text-sm text-muted-foreground">Garage</div>
                  </div>
                </div>
              </Card>

              {/* Description */}
              <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  About This Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Property Details Grid */}
              <Card className="p-6 bg-gradient-card border-0 shadow-card animate-slide-up" style={{ animationDelay: "300ms" }}>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Property Details
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Year Built</div>
                      <div className="font-semibold text-foreground">{property.yearBuilt}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Ruler className="w-5 h-5 mr-3 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Lot Size</div>
                      <div className="font-semibold text-foreground">{property.lotSize}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Car className="w-5 h-5 mr-3 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Garage</div>
                      <div className="font-semibold text-foreground">{property.garage}-Car</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Amenities */}
              <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-3 rounded-lg bg-primary/5 text-foreground"
                    >
                      <Check className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="animate-fade-in" style={{ animationDelay: "500ms" }}>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Features
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center text-muted-foreground"
                    >
                      <Check className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Inquiry Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <PropertyInquiryForm propertyTitle={property.title} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
