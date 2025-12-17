import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, Calendar } from "lucide-react";

interface PropertyInquiryFormProps {
  propertyTitle: string;
}

export const PropertyInquiryForm = ({ propertyTitle }: PropertyInquiryFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `I'm interested in ${propertyTitle}. Please contact me with more information.`,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Inquiry Sent!",
      description: "Maria will contact you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: `I'm interested in ${propertyTitle}. Please contact me with more information.`,
    });
    setIsSubmitting(false);
  };

  return (
    <Card className="p-6 bg-gradient-card shadow-card border-0">
      <h3 className="font-display text-xl font-semibold text-foreground mb-6">
        Inquire About This Property
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bg-background/50"
          />
        </div>
        
        <div>
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="bg-background/50"
          />
        </div>
        
        <div>
          <Input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-background/50"
          />
        </div>
        
        <div>
          <Textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={4}
            className="bg-background/50 resize-none"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full" 
          variant="luxury"
          disabled={isSubmitting}
        >
          <Send className="w-4 h-4 mr-2" />
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </Button>
      </form>
      
      <div className="mt-6 pt-6 border-t border-border space-y-3">
        <p className="text-sm text-muted-foreground mb-3">Or contact directly:</p>
        <a 
          href="tel:+13055551234" 
          className="flex items-center text-sm text-foreground hover:text-primary transition-colors"
        >
          <Phone className="w-4 h-4 mr-2 text-primary" />
          (305) 555-1234
        </a>
        <a 
          href="mailto:maria@luxurymiamirealty.com" 
          className="flex items-center text-sm text-foreground hover:text-primary transition-colors"
        >
          <Mail className="w-4 h-4 mr-2 text-primary" />
          maria@luxurymiamirealty.com
        </a>
        <Button variant="outline" className="w-full mt-4">
          <Calendar className="w-4 h-4 mr-2" />
          Schedule a Tour
        </Button>
      </div>
    </Card>
  );
};
