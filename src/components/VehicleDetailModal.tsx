import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Users, Star, RotateCcw, Hand, X } from "lucide-react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  
  if (!vehicle) return null;

  const views: { key: keyof VehicleGallery; label: string; labelAr: string; angle: number }[] = [
    { key: "front", label: "Front", labelAr: "أمامي", angle: 0 },
    { key: "side", label: "Side", labelAr: "جانبي", angle: 90 },
    { key: "back", label: "Back", labelAr: "خلفي", angle: 180 },
    { key: "interior", label: "Interior", labelAr: "داخلي", angle: 270 },
  ];

  const galleryImages = [
    vehicle.gallery.front,
    vehicle.gallery.side,
    vehicle.gallery.back,
    vehicle.gallery.interior,
  ];

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveIndex(0);
      setRotation(0);
    }
  }, [isOpen]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleDrag(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleDrag(e.touches[0].clientX);
  };

  const handleDrag = (currentX: number) => {
    const diff = currentX - startX;
    const sensitivity = 2;
    
    if (Math.abs(diff) > 50) {
      const direction = diff > 0 ? -1 : 1;
      const newIndex = (activeIndex + direction + galleryImages.length) % galleryImages.length;
      setActiveIndex(newIndex);
      setRotation(prev => prev + (direction * 90));
      setStartX(currentX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const goToView = (index: number) => {
    const diff = index - activeIndex;
    setRotation(prev => prev + (diff * 90));
    setActiveIndex(index);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl glass border-primary/20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        
        <DialogHeader>
          <DialogTitle className="text-2xl font-light flex items-center justify-between pr-10">
            <span>{vehicle.name}</span>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-primary text-primary" />
              <span className="text-lg">{vehicle.rating}</span>
            </div>
          </DialogTitle>
        </DialogHeader>

        {/* 360° Gallery */}
        <div className="relative">
          {/* Drag Instruction */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-sm">
            <Hand className="w-4 h-4" />
            <span>{language === "ar" ? "اسحب للدوران 360°" : "Drag to rotate 360°"}</span>
          </div>

          {/* Main Gallery Container */}
          <div
            ref={containerRef}
            className={`relative aspect-video overflow-hidden rounded-lg bg-secondary/30 cursor-grab select-none ${isDragging ? 'cursor-grabbing' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Image with transition */}
            <div className="relative w-full h-full">
              {galleryImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${vehicle.name} - ${views[index].label}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  draggable={false}
                />
              ))}
            </div>

            {/* Rotation Indicator */}
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-full p-2">
              <RotateCcw 
                className="w-5 h-5 text-primary transition-transform duration-300"
                style={{ transform: `rotate(${rotation}deg)` }}
              />
            </div>

            {/* Current View Label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sm font-medium">
                {language === "ar" ? views[activeIndex].labelAr : views[activeIndex].label}
                <span className="text-muted-foreground ml-2">({views[activeIndex].angle}°)</span>
              </span>
            </div>

            {/* Drag Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary/50">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${((activeIndex + 1) / galleryImages.length) * 100}%` }}
              />
            </div>
          </div>

          {/* 360° Progress Indicator */}
          <div className="flex justify-center mt-4">
            <div className="relative w-20 h-20">
              {/* Circle background */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="8"
                  strokeDasharray={`${(activeIndex + 1) * 62.83} 251.32`}
                  className="transition-all duration-300"
                />
              </svg>
              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-medium">{views[activeIndex].angle}°</span>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex gap-3 justify-center">
          {views.map((view, index) => (
            <button
              key={view.key}
              onClick={() => goToView(index)}
              className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                activeIndex === index 
                  ? "ring-2 ring-primary scale-105" 
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={galleryImages[index]}
                alt={`${vehicle.name} - ${view.label}`}
                className="w-20 h-14 object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs font-medium whitespace-nowrap">
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
