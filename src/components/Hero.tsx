import { Button } from "@/components/ui/button";
import { ChevronDown, Crown, Star } from "lucide-react";
import heroImage from "@/assets/hero-luxury-car.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useParallax";

const Hero = () => {
  const { t } = useLanguage();
  const { ref: contentRef, isVisible: contentVisible } = useIntersectionObserver(0.1);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/20 rounded-full animate-float delay-200" />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/25 rounded-full animate-float delay-400" />
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary/35 rounded-full animate-float delay-300" />
        </div>
      </div>

      {/* Hero Content with Stagger Animation */}
      <div ref={contentRef} className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Crown Icon */}
          <div className={`mb-6 flex justify-center opacity-0 ${contentVisible ? 'animate-slide-up' : ''}`}>
            <div className="glass rounded-full p-4 luxury-hover animate-float">
              <Crown className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight opacity-0 ${contentVisible ? 'animate-slide-up delay-100' : ''}`}>
            <span className="gradient-text">{t("heroTitle")}</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed opacity-0 ${contentVisible ? 'animate-slide-up delay-200' : ''}`}>
            {t("heroSubtitle")}
          </p>

          {/* Star Rating */}
          <div className={`flex items-center justify-center gap-2 mb-8 opacity-0 ${contentVisible ? 'animate-slide-up delay-300' : ''}`}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
            <span className="text-muted-foreground ml-2">Trusted by 500+ clients</span>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 ${contentVisible ? 'animate-slide-up delay-400' : ''}`}>
            <Button variant="default" size="lg" className="text-lg px-8 py-4 luxury-hover">
              {t("bookNow")}
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 luxury-hover">
              {t("fleetTitle")}
            </Button>
          </div>

          {/* Services Preview - Horizontal Scroll on Mobile */}
          <div className={`opacity-0 ${contentVisible ? 'animate-slide-up delay-500' : ''}`}>
            <div className="flex md:grid md:grid-cols-3 gap-6 max-w-3xl mx-auto overflow-x-auto pb-4 snap-x snap-mandatory md:overflow-visible md:pb-0">
              {[
                { title: t("executiveTitle"), desc: t("professionalDrivers") },
                { title: t("vipTitle"), desc: t("luxuryVehicles") },
                { title: t("airportTitle"), desc: t("available24h") }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="glass rounded-lg p-6 luxury-hover min-w-[280px] md:min-w-0 snap-start"
                >
                  <h3 className="text-lg font-medium text-primary mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
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