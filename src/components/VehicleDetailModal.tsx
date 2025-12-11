import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Users, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface VehicleGallery {
  front: string;
  back: string;
  interior: string;
  side: string;
}

interface Vehicle {
  name: string;
  category: string;
  image: string;
  passengers: string;
  features: string[];
  rating: number;
  price: string;
  gallery: VehicleGallery;
}

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  isOpen: boolean;
  onClose: () => void;
}

const VehicleDetailModal = ({ vehicle, isOpen, onClose }: VehicleDetailModalProps) => {
  const [activeView, setActiveView] = useState<keyof VehicleGallery>("front");
  const { language } = useLanguage();
  
  if (!vehicle) return null;

  const views: { key: keyof VehicleGallery; label: string; labelAr: string }[] = [
    { key: "front", label: "Front", labelAr: "أمامي" },
    { key: "back", label: "Back", labelAr: "خلفي" },
    { key: "interior", label: "Interior", labelAr: "داخلي" },
    { key: "side", label: "Side", labelAr: "جانبي" },
  ];

  const currentIndex = views.findIndex(v => v.key === activeView);
  
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? views.length - 1 : currentIndex - 1;
    setActiveView(views[newIndex].key);
  };

  const goToNext = () => {
    const newIndex = currentIndex === views.length - 1 ? 0 : currentIndex + 1;
    setActiveView(views[newIndex].key);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl glass border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light flex items-center justify-between">
            <span>{vehicle.name}</span>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-primary text-primary" />
              <span className="text-lg">{vehicle.rating}</span>
            </div>
          </DialogTitle>
        </DialogHeader>

        {/* Main Gallery Image */}
        <div className="relative aspect-video overflow-hidden rounded-lg bg-secondary/30">
          <img
            src={vehicle.gallery[activeView]}
            alt={`${vehicle.name} - ${activeView}`}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* View Label */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-sm font-medium">
              {language === "ar" 
                ? views.find(v => v.key === activeView)?.labelAr 
                : views.find(v => v.key === activeView)?.label}
            </span>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex gap-3 justify-center">
          {views.map((view) => (
            <button
              key={view.key}
              onClick={() => setActiveView(view.key)}
              className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                activeView === view.key 
                  ? "ring-2 ring-primary scale-105" 
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={vehicle.gallery[view.key]}
                alt={`${vehicle.name} - ${view.label}`}
                className="w-20 h-14 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs font-medium">
                {language === "ar" ? view.labelAr : view.label}
              </span>
            </button>
          ))}
        </div>

        {/* Vehicle Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                {vehicle.category}
              </span>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Users className="w-4 h-4" />
                <span className="text-sm">{vehicle.passengers}</span>
              </div>
            </div>
            <p className="text-2xl font-light text-primary">{vehicle.price}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-3">
              {language === "ar" ? "المميزات" : "Features"}
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {vehicle.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Book Now Button */}
        <Button 
          className="w-full mt-4 luxury-hover" 
          size="lg"
          onClick={() => {
            onClose();
            document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {language === "ar" ? "احجز الآن" : "Book Now"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default VehicleDetailModal;
