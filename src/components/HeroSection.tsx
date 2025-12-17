import { useState } from "react";
import { Search, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import heroImage from "@/assets/hero-miami.jpg";

export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your 
            <span className="block bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
              Dream Home
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light">
            Discover luxury properties in Miami's most prestigious neighborhoods
          </p>

          {/* Search Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-floating border border-white/20 animate-slide-up">
            <Tabs defaultValue="location" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-white/20 backdrop-blur-sm">
                <TabsTrigger 
                  value="location" 
                  className="data-[state=active]:bg-white data-[state=active]:text-primary flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Search by Location
                </TabsTrigger>
                <TabsTrigger 
                  value="drive-time"
                  className="data-[state=active]:bg-white data-[state=active]:text-primary flex items-center gap-2"
                >
                  <Clock className="w-4 h-4" />
                  Search by Drive Time™
                </TabsTrigger>
              </TabsList>

              <TabsContent value="location">
                <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Neighborhood, City, ZIP, or MLS#"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="h-14 text-lg bg-white/90 border-0 focus:bg-white transition-all duration-300"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="h-14 px-8 text-lg font-semibold"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Search Properties
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="drive-time">
                <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Enter an address or landmark"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="h-14 text-lg bg-white/90 border-0 focus:bg-white transition-all duration-300"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="h-14 px-8 text-lg font-semibold"
                  >
                    <Clock className="w-5 h-5 mr-2" />
                    Find by Drive Time
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <Button 
              variant="outline" 
              className="mt-4 text-white border-white/50 hover:bg-white hover:text-primary"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Search Near Me
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Animation Element */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};