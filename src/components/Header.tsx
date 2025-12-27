import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import coldwellLogo from "@/assets/coldwell-logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Properties", href: "#properties" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={coldwellLogo} 
              alt="Coldwell Banker" 
              className="h-10 md:h-12 w-auto"
            />
            <div className="flex flex-col">
              <div className="font-display text-xl md:text-2xl font-bold text-white">
                Maria Callejas
              </div>
              <div className="hidden md:block text-white/80 text-sm">
                Luxury Real Estate
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Contact Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+1-786-390-1050"
              className="flex items-center text-white/90 hover:text-white transition-colors duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">786-390-1050</span>
            </a>
            <Button variant="outline" size="sm" className="text-white border-white/50 hover:bg-white hover:text-primary">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/20 backdrop-blur-lg border-t border-white/20 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/90 hover:text-white transition-colors duration-300 font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-white/20 pt-4 px-4 space-y-3">
                <a
                  href="tel:+1-786-390-1050"
                  className="flex items-center text-white/90 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-medium">786-390-1050</span>
                </a>
                <Button variant="outline" size="sm" className="w-full text-white border-white/50 hover:bg-white hover:text-primary">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};