import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Crown, Plane, MapPin, Clock, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Executive Transport",
      description: "Professional chauffeur services for business executives and corporate clients.",
      features: ["Business-class vehicles", "Professional chauffeurs", "Corporate accounts", "Flexible scheduling"],
      price: "From $150/hr"
    },
    {
      icon: Crown,
      title: "VIP Experience",
      description: "Luxury transportation for special occasions and high-profile clients.",
      features: ["Premium fleet", "Red carpet service", "Personal concierge", "Privacy guaranteed"],
      price: "From $250/hr"
    },
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Reliable and punctual airport transportation with flight monitoring.",
      features: ["Flight tracking", "Meet & greet", "Luggage assistance", "24/7 availability"],
      price: "From $120"
    },
    {
      icon: MapPin,
      title: "Tourism Packages",
      description: "Customized sightseeing and tourism packages with local expertise.",
      features: ["Local guides", "Custom itineraries", "Multi-day packages", "Group discounts"],
      price: "From $200/day"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock service for your convenience"
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Comprehensive coverage for your peace of mind"
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Premium <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored transportation solutions designed to exceed your expectations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="glass luxury-hover h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <p className="text-primary font-medium">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full luxury-hover">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="glass rounded-lg p-6 text-center luxury-hover">
                <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;