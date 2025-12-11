import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useParallax";

const Testimonials = () => {
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver(0.1);
  const { ref: gridRef, isVisible: gridVisible } = useIntersectionObserver(0.1);
  const { ref: statsRef, isVisible: statsVisible } = useIntersectionObserver(0.1);
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Tech Innovations",
      content: "Exceptional service from start to finish. The chauffeur was professional, the vehicle was immaculate, and they arrived early. This is luxury transportation at its finest.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Investment Banker",
      content: "I use Premium Chauffeur for all my client meetings. Their attention to detail and reliability has never disappointed. Highly recommended for business executives.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Event Coordinator",
      content: "Perfect for special occasions. The VIP service made our anniversary unforgettable. The chauffeur went above and beyond to ensure every detail was perfect.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      role: "International Consultant",
      content: "Reliable airport transfers every time. Never missed a flight thanks to their punctuality and traffic monitoring. The Mercedes S-Class is incredibly comfortable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Lisa Park",
      role: "Tourism Director",
      content: "Our VIP clients love the tourism packages. Professional guides, luxurious vehicles, and seamless coordination. Premium Chauffeur delivers excellence.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Robert Kim",
      role: "Corporate Executive",
      content: "Five-star service consistently. The BMW 7 Series is my preferred choice for executive transport. Professional, discreet, and always on time.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 opacity-0 ${headerVisible ? 'animate-slide-up' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover why discerning clients choose Premium Chauffeur for their luxury transportation needs
          </p>
        </div>

        {/* Testimonials Grid - Horizontal Scroll on Mobile */}
        <div 
          ref={gridRef}
          className="flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto pb-4 snap-x snap-mandatory lg:overflow-visible lg:pb-0"
        >
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`glass luxury-hover h-full min-w-[320px] lg:min-w-0 snap-start opacity-0 ${gridVisible ? 'animate-slide-up' : ''}`}
              style={{ animationDelay: gridVisible ? `${index * 100}ms` : '0ms' }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16 pt-12 border-t border-border/20"
        >
          {[
            { number: "4.9/5", label: "Average Rating" },
            { number: "500+", label: "Satisfied Clients" },
            { number: "10,000+", label: "Successful Rides" },
            { number: "99%", label: "On-Time Rate" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`text-center opacity-0 ${statsVisible ? 'animate-slide-up' : ''}`}
              style={{ animationDelay: statsVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="text-2xl md:text-3xl font-light gradient-text mb-2">
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

export default Testimonials;