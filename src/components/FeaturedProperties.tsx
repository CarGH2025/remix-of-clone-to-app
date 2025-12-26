import { useState, useMemo } from "react";
import { Eye, Heart, Share2, Bed, Bath, Square } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { properties, Property } from "@/data/properties";
import { PropertyFilters, FilterValues } from "@/components/PropertyFilters";

const parsePrice = (price: string): number => {
  return parseInt(price.replace(/[$,]/g, ""));
};

export const FeaturedProperties = () => {
  const [filters, setFilters] = useState<FilterValues>({
    search: "",
    minPrice: "",
    maxPrice: "",
    beds: "",
    baths: "",
    location: "",
  });

  const locations = useMemo(() => {
    return [...new Set(properties.map((p) => p.location))];
  }, []);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch =
          property.title.toLowerCase().includes(searchLower) ||
          property.location.toLowerCase().includes(searchLower) ||
          property.description.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Price filters
      const propertyPrice = parsePrice(property.price);
      if (filters.minPrice && propertyPrice < parseInt(filters.minPrice)) return false;
      if (filters.maxPrice && propertyPrice > parseInt(filters.maxPrice)) return false;

      // Beds filter
      if (filters.beds && property.beds < parseInt(filters.beds)) return false;

      // Baths filter
      if (filters.baths && property.baths < parseInt(filters.baths)) return false;

      // Location filter
      if (filters.location && property.location !== filters.location) return false;

      return true;
    });
  }, [filters]);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Properties
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover exceptional homes in Miami's most prestigious neighborhoods
            </p>
          </div>

          {/* Filters */}
          <PropertyFilters
            filters={filters}
            onFilterChange={setFilters}
            locations={locations}
          />

          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredProperties.map((property, index) => (
                <Card 
                  key={property.id} 
                  className="overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 border-0 bg-gradient-card group hover:-translate-y-2 animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Property Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Status Badge */}
                    <Badge 
                      className={`absolute top-4 left-4 ${property.statusColor} text-white border-0`}
                    >
                      {property.status}
                    </Badge>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="icon" variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Price Overlay */}
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                        <span className="text-white font-bold text-lg">{property.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {property.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">{property.location}</p>
                    </div>

                    <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Bed className="w-4 h-4 mr-1" />
                          <span>{property.beds} bed</span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="w-4 h-4 mr-1" />
                          <span>{property.baths} bath</span>
                        </div>
                        <div className="flex items-center">
                          <Square className="w-4 h-4 mr-1" />
                          <span>{property.sqft} sqft</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="font-display text-2xl font-bold text-foreground">
                        {property.price}
                      </div>
                      <Link to={`/property/${property.id}`}>
                        <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 mb-12">
              <p className="text-xl text-muted-foreground">No properties match your filters.</p>
              <p className="text-muted-foreground mt-2">Try adjusting your search criteria.</p>
            </div>
          )}

          {/* CTA */}
          <div className="text-center animate-fade-in">
            <Button variant="luxury" size="lg" className="px-8">
              View All Properties
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};