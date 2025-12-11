import { useLanguage } from "@/contexts/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useParallax";
import { MapPin, Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const destinations = [
  {
    id: "paris",
    titleEn: "Paris, France",
    titleAr: "باريس، فرنسا",
    descriptionEn: "Experience the City of Light with our premium chauffeur service. From the Eiffel Tower to the Champs-Élysées, travel in ultimate comfort and style through the world's most romantic city.",
    descriptionAr: "اكتشف مدينة الأضواء مع خدمة السائق المتميزة لدينا. من برج إيفل إلى الشانزليزيه، سافر براحة وأناقة فائقة عبر أكثر مدن العالم رومانسية.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    duration: "4-6 hours",
    rating: 4.9,
    highlights: ["Eiffel Tower", "Louvre Museum", "Champs-Élysées", "Montmartre"]
  },
  {
    id: "interlaken",
    titleEn: "Interlaken, Switzerland",
    titleAr: "إنترلاكن، سويسرا",
    descriptionEn: "Nestled between Lake Thun and Lake Brienz, Interlaken offers breathtaking Alpine scenery. Our luxury vehicles ensure a comfortable journey through Switzerland's most stunning mountain landscapes.",
    descriptionAr: "تقع إنترلاكن بين بحيرة ثون وبحيرة برينز، وتوفر مناظر جبال الألب الخلابة. تضمن مركباتنا الفاخرة رحلة مريحة عبر أجمل المناظر الجبلية في سويسرا.",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&h=600&fit=crop",
    duration: "Full Day",
    rating: 5.0,
    highlights: ["Jungfraujoch", "Lake Thun", "Harder Kulm", "Paragliding"]
  },
  {
    id: "zurich",
    titleEn: "Zurich, Switzerland",
    titleAr: "زيورخ، سويسرا",
    descriptionEn: "Switzerland's largest city combines medieval old town charm with cutting-edge modern architecture. Discover world-class shopping, dining, and culture with our executive transfer service.",
    descriptionAr: "أكبر مدينة في سويسرا تجمع بين سحر المدينة القديمة والعمارة الحديثة المتطورة. اكتشف التسوق والمطاعم والثقافة العالمية مع خدمة النقل التنفيذي لدينا.",
    image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&h=600&fit=crop",
    duration: "3-5 hours",
    rating: 4.8,
    highlights: ["Old Town", "Lake Zurich", "Bahnhofstrasse", "Swiss National Museum"]
  },
  {
    id: "geneva",
    titleEn: "Geneva, Switzerland",
    titleAr: "جنيف، سويسرا",
    descriptionEn: "The diplomatic capital of the world offers stunning lake views, luxury watchmaking heritage, and proximity to the French Alps. Perfect for business travelers and tourists alike.",
    descriptionAr: "العاصمة الدبلوماسية للعالم توفر إطلالات خلابة على البحيرة وتراث صناعة الساعات الفاخرة وقربها من جبال الألب الفرنسية. مثالية لرجال الأعمال والسياح على حد سواء.",
    image: "https://images.unsplash.com/photo-1573108037329-37aa135a142e?w=800&h=600&fit=crop",
    duration: "3-4 hours",
    rating: 4.9,
    highlights: ["Jet d'Eau", "UN Headquarters", "Old Town", "Lake Geneva"]
  },
  {
    id: "lucerne",
    titleEn: "Lucerne, Switzerland",
    titleAr: "لوسيرن، سويسرا",
    descriptionEn: "A picture-perfect Swiss city featuring the iconic Chapel Bridge, stunning lake views, and easy access to Mount Pilatus. Experience traditional Swiss charm at its finest.",
    descriptionAr: "مدينة سويسرية مثالية تتميز بجسر تشابل الشهير وإطلالات البحيرة الخلابة وسهولة الوصول إلى جبل بيلاتوس. اختبر السحر السويسري التقليدي في أفضل حالاته.",
    image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=800&h=600&fit=crop",
    duration: "4-6 hours",
    rating: 4.9,
    highlights: ["Chapel Bridge", "Mount Pilatus", "Lion Monument", "Lake Lucerne"]
  },
  {
    id: "monaco",
    titleEn: "Monaco",
    titleAr: "موناكو",
    descriptionEn: "The playground of the rich and famous awaits. From the Monte Carlo Casino to the Grand Prix circuit, experience Mediterranean glamour with our premium fleet.",
    descriptionAr: "ملعب الأثرياء والمشاهير في انتظارك. من كازينو مونت كارلو إلى حلبة جراند بري، اختبر سحر البحر الأبيض المتوسط مع أسطولنا المتميز.",
    image: "https://images.unsplash.com/photo-1534258868619-b61b8f8b5588?w=800&h=600&fit=crop",
    duration: "Full Day",
    rating: 5.0,
    highlights: ["Monte Carlo Casino", "Prince's Palace", "Grand Prix Circuit", "Oceanographic Museum"]
  }
];

const Destinations = () => {
  const { t, language } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver(0.1);
  const { ref: gridRef, isVisible: gridVisible } = useIntersectionObserver(0.1);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div 
          ref={headerRef}
          className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              {language === 'ar' ? 'اكتشف وجهاتنا' : 'Explore Our Destinations'}
            </span>
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              <span className="gradient-text font-medium">
                {language === 'ar' ? 'وجهات فاخرة' : 'Luxury Destinations'}
              </span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'اكتشف أجمل الوجهات في أوروبا مع خدمة السائق المتميزة لدينا'
                : 'Discover the most beautiful destinations in Europe with our premium chauffeur service'}
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div 
          ref={gridRef}
          className={`container mx-auto px-6 transition-all duration-1000 ${
            gridVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <DestinationCard 
                key={dest.id} 
                destination={dest} 
                language={language}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            {language === 'ar' ? 'جاهز للانطلاق؟' : 'Ready to Travel?'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {language === 'ar'
              ? 'احجز رحلتك اليوم واستمتع بتجربة سفر فاخرة لا تُنسى'
              : 'Book your journey today and enjoy an unforgettable luxury travel experience'}
          </p>
          <Link to="/#booking">
            <Button size="lg" className="luxury-hover">
              {t('bookNow')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

interface DestinationCardProps {
  destination: typeof destinations[0];
  language: string;
  index: number;
}

const DestinationCard = ({ destination, language, index }: DestinationCardProps) => {
  const { ref: cardRef, isVisible: cardVisible } = useIntersectionObserver(0.1);
  
  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-700 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 ${
        cardVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={destination.image}
          alt={language === 'ar' ? destination.titleAr : destination.titleEn}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <Star className="w-4 h-4 text-primary fill-primary" />
          <span className="text-sm font-medium">{destination.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <MapPin className="w-4 h-4 text-primary" />
          <span>{language === 'ar' ? destination.titleAr : destination.titleEn}</span>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {language === 'ar' ? destination.descriptionAr : destination.descriptionEn}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {destination.highlights.slice(0, 3).map((highlight) => (
            <span 
              key={highlight}
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Clock className="w-4 h-4" />
            <span>{destination.duration}</span>
          </div>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
            {language === 'ar' ? 'اكتشف المزيد' : 'Explore'}
            <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
