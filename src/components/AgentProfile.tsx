import { Phone, Mail, MapPin, Award, Home, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import mariaProfile from "@/assets/maria-headshot.jpg";

export const AgentProfile = () => {
  const stats = [
    { label: "Years Experience", value: "20+", icon: Award },
    { label: "Properties Sold", value: "500+", icon: Home },
    { label: "Happy Clients", value: "1000+", icon: Users },
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <Badge variant="secondary" className="mb-4 text-sm font-medium">
                  Luxury Property Specialist
                </Badge>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Maria Callejas
                </h2>
                <p className="text-xl text-muted-foreground mb-2">Broker Associate</p>
                <p className="text-lg text-muted-foreground">
                  <MapPin className="inline w-5 h-5 mr-2" />
                  Coral Gables / Coconut Grove
                </p>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Welcome to exceptional real estate services in Miami-Dade County. With over two decades of experience, 
                I'm renowned for dedication, expertise, and commitment to excellence in luxury real estate.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center bg-primary/10 rounded-lg px-4 py-3 flex-1">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <p className="text-sm text-muted-foreground">Direct</p>
                      <a href="tel:+1-786-390-1050" className="font-semibold text-primary hover:underline">
                        786-390-1050
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center bg-accent/10 rounded-lg px-4 py-3 flex-1">
                    <Phone className="w-5 h-5 text-accent mr-3" />
                    <div>
                      <p className="text-sm text-muted-foreground">Office</p>
                      <a href="tel:+1-305-725-6584" className="font-semibold text-accent hover:underline">
                        305-725-6584
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center bg-muted/50 rounded-lg px-4 py-3">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href="mailto:maria.callejas@floridamoves.com" 
                      className="font-semibold text-primary hover:underline"
                    >
                      maria.callejas@floridamoves.com
                    </a>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  License: 0572793
                </div>
              </div>

              <Button variant="cta" size="lg" className="w-full md:w-auto">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me Today
              </Button>
            </div>

            {/* Profile Image & Stats */}
            <div className="space-y-8 animate-slide-up">
              <Card className="overflow-hidden shadow-luxury border-0 bg-gradient-card">
                <div className="aspect-[3/4] relative">
                  <img
                    src={mariaProfile}
                    alt="Maria Callejas - Luxury Real Estate Specialist"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </Card>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center p-6 shadow-card border-0 bg-gradient-card hover:shadow-luxury transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="font-display text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};