import { Crown, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Fleet", href: "#fleet" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" }
  ];

  return (
    <footer className="bg-card border-t border-border/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-primary rounded-full p-2">
                <Crown className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-medium gradient-text">Premium</h2>
                <p className="text-xs text-muted-foreground -mt-1">Chauffeur Service</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Experience luxury transportation with our fleet of premium vehicles and professional chauffeurs. 
              Serving discerning clients with unparalleled service and attention to detail.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>24/7 Hotline: +1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>bookings@premiumchauffeur.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Metropolitan Area & Major Airports</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span>Available 24/7, 365 days a year</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Social */}
          <div>
            <h3 className="text-lg font-medium mb-6">Our Services</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground text-sm">Executive Transport</li>
              <li className="text-muted-foreground text-sm">VIP Experience</li>
              <li className="text-muted-foreground text-sm">Airport Transfers</li>
              <li className="text-muted-foreground text-sm">Tourism Packages</li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button 
                    key={index}
                    variant="ghost" 
                    size="sm" 
                    className="w-10 h-10 p-0 luxury-hover"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <IconComponent className="w-4 h-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Premium Chauffeur Service. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Licensed & Insured</span>
            <span>•</span>
            <span>Professional Chauffeurs</span>
            <span>•</span>
            <span>Premium Fleet</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;