import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import coldwellLogo from "@/assets/coldwell-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    "Luxury Homes",
    "Condominiums", 
    "Investment Properties",
    "Market Reports",
    "Neighborhood Guide"
  ];

  const areas = [
    "Coral Gables",
    "Miami Beach",
    "Pinecrest",
    "Coconut Grove",
    "Brickell",
    "Key Biscayne"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={coldwellLogo} 
                alt="Coldwell Banker" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="font-display text-2xl font-bold mb-1">Maria Callejas</h3>
                <p className="text-primary-foreground/80">Luxury Real Estate Specialist</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <a href="tel:+1-786-390-1050" className="hover:text-secondary transition-colors">
                  786-390-1050
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:Maria@vlz.co" className="hover:text-secondary transition-colors">
                  Maria@vlz.co
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <span>Coral Gables / Coconut Grove, FL</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Property Types</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Areas Served</h4>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area}>
                  <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Professional</h4>
            <div className="space-y-4 text-primary-foreground/80">
              <div>
                <p className="font-medium text-primary-foreground">License #0572793</p>
                <p>Florida Real Estate</p>
              </div>
              <div>
                <p className="font-medium text-primary-foreground">Coldwell Banker Realty</p>
                <p>Broker Associate</p>
              </div>
              <div>
                <p className="font-medium text-primary-foreground">20+ Years Experience</p>
                <p>500+ Properties Sold</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Maria Callejas Real Estate. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Equal Housing Opportunity
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};