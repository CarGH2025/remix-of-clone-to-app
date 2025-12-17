import { Home, TrendingUp, Search, Shield, Heart, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Luxury Home Sales",
      description: "Specializing in high-end properties in Miami's most prestigious neighborhoods including Coral Gables, Miami Beach, and Pinecrest.",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Comprehensive market insights and property valuations to help you make informed real estate decisions.",
      color: "text-accent"
    },
    {
      icon: Search,
      title: "Property Search",
      description: "Personalized property search services to find your perfect home that matches your lifestyle and budget.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Investment Guidance",
      description: "Expert advice on real estate investments with detailed analysis of ROI potential and market trends.",
      color: "text-accent"
    },
    {
      icon: Heart,
      title: "Relocation Services",
      description: "Complete relocation assistance for clients moving to Miami from anywhere in the world.",
      color: "text-primary"
    },
    {
      icon: Star,
      title: "Concierge Service",
      description: "White-glove service including home staging, professional photography, and luxury marketing.",
      color: "text-accent"
    },
  ];

  const specializations = [
    "Coral Gables Luxury Estates",
    "Miami Beach Condominiums", 
    "Pinecrest Family Homes",
    "Coconut Grove Properties",
    "Brickell High-Rise Condos",
    "Key Biscayne Waterfront"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Exceptional Real Estate Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With over 20 years of experience and 500+ properties sold, I provide comprehensive 
              real estate services tailored to your unique needs in Miami's luxury market.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 shadow-card hover:shadow-luxury transition-all duration-300 border-0 bg-gradient-card group hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Specializations */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 shadow-card animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                Area Specializations
              </h3>
              <p className="text-lg text-muted-foreground">
                Expert knowledge of Miami's most desirable neighborhoods
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {specializations.map((area, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="font-semibold text-foreground">{area}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="luxury" size="lg">
                <Search className="w-5 h-5 mr-2" />
                Explore Properties
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};