import { Button } from "@/components/ui/button";
import { ChevronDown, Crown, Star } from "lucide-react";
import heroImage from "@/assets/hero-luxury-car.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Crown Icon */}
          <div className="mb-6 flex justify-center">
            <div className="glass rounded-full p-4 luxury-hover">
              <Crown className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight">
            <span className="gradient-text">Premium</span>
            <br />
            Chauffeur Service
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience luxury transportation with our fleet of premium vehicles and professional chauffeurs
          </p>

          {/* Star Rating */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
            <span className="text-muted-foreground ml-2">Trusted by 500+ clients</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="default" size="lg" className="text-lg px-8 py-4 luxury-hover">
              Book Your Ride
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 luxury-hover">
              View Fleet
            </Button>
          </div>

          {/* Services Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { title: "Executive Transport", desc: "Professional business travel" },
              { title: "VIP Service", desc: "Luxury experience guaranteed" },
              { title: "Airport Transfers", desc: "Punctual & comfortable" }
            ].map((service, index) => (
              <div key={index} className="glass rounded-lg p-6 luxury-hover">
                <h3 className="text-lg font-medium text-primary mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-muted-foreground">
          <span className="text-sm mb-2">Discover More</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;