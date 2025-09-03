import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Fuel, Settings, Star } from "lucide-react";
import bmwImage from "@/assets/bmw-7-series.jpg";
import mercedesImage from "@/assets/mercedes-s-class.jpg";
import vClassImage from "@/assets/mercedes-v-class.jpg";

const Fleet = () => {
  const vehicles = [
    {
      name: "BMW 7 Series",
      category: "Executive Sedan",
      image: bmwImage,
      passengers: "3 Passengers",
      features: ["Premium leather seats", "Climate control", "WiFi & charging", "Privacy partition"],
      rating: 4.9,
      price: "From $150/hr"
    },
    {
      name: "Mercedes S-Class",
      category: "Luxury Sedan",
      image: mercedesImage,
      passengers: "3 Passengers", 
      features: ["Massage seats", "Entertainment system", "Ambient lighting", "Champagne service"],
      rating: 5.0,
      price: "From $200/hr"
    },
    {
      name: "Mercedes V-Class",
      category: "Premium Van",
      image: vClassImage,
      passengers: "6 Passengers",
      features: ["Spacious interior", "Business seating", "Conference table", "Group amenities"],
      rating: 4.8,
      price: "From $180/hr"
    }
  ];

  return (
    <section id="fleet" className="py-20 px-6 bg-gradient-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Luxury <span className="gradient-text">Fleet</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of premium vehicles designed for comfort and sophistication
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <Card key={index} className="glass luxury-hover overflow-hidden">
              {/* Vehicle Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {vehicle.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{vehicle.rating}</span>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{vehicle.name}</CardTitle>
                    <p className="text-primary font-medium">{vehicle.price}</p>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{vehicle.passengers}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 luxury-hover">
                    View Details
                  </Button>
                  <Button variant="default" size="sm" className="flex-1 luxury-hover">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Fleet Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
          {[
            { number: "15+", label: "Premium Vehicles" },
            { number: "500+", label: "Happy Clients" }, 
            { number: "24/7", label: "Available Service" },
            { number: "5★", label: "Average Rating" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-light gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;