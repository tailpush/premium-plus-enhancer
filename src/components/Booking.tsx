import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, Phone, Mail, Crown } from "lucide-react";

const Booking = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Book Your <span className="gradient-text">Premium</span> Ride
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience luxury transportation at its finest. Contact us for reservations or inquiries.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              <Card className="glass luxury-hover">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">24/7 Booking Hotline</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass luxury-hover">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Reservations</h3>
                    <p className="text-muted-foreground">bookings@premiumchauffeur.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass luxury-hover">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Service Area</h3>
                    <p className="text-muted-foreground">Metropolitan Area & Airports</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Premium Features */}
            <div className="glass rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Crown className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-medium">Premium Benefits</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Complimentary refreshments and WiFi
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Professional uniformed chauffeurs
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Real-time flight and traffic monitoring
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Flexible cancellation policy
                </li>
              </ul>
            </div>
          </div>

          {/* Booking Form */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Crown className="w-6 h-6 text-primary" />
                Reserve Your Ride
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Smith" className="mt-1" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-1" />
                </div>
              </div>

              {/* Service Details */}
              <div>
                <Label htmlFor="service">Service Type</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="executive">Executive Transport</SelectItem>
                    <SelectItem value="vip">VIP Experience</SelectItem>
                    <SelectItem value="airport">Airport Transfer</SelectItem>
                    <SelectItem value="tourism">Tourism Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="pickup">Pickup Location</Label>
                  <Input id="pickup" placeholder="Enter pickup address" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="destination">Destination</Label>
                  <Input id="destination" placeholder="Enter destination" className="mt-1" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" className="mt-1" />
                </div>
              </div>

              <div>
                <Label htmlFor="passengers">Number of Passengers</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select passengers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Passenger</SelectItem>
                    <SelectItem value="2">2 Passengers</SelectItem>
                    <SelectItem value="3">3 Passengers</SelectItem>
                    <SelectItem value="4-6">4-6 Passengers</SelectItem>
                    <SelectItem value="7+">7+ Passengers</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="notes">Special Requests</Label>
                <Textarea 
                  id="notes" 
                  placeholder="Any special requirements or requests..."
                  className="mt-1"
                  rows={3}
                />
              </div>

              <Button className="w-full text-lg py-6 luxury-hover">
                Request Quote
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                You'll receive a confirmation email within 30 minutes. 
                For immediate assistance, call our 24/7 hotline.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Booking;