export const translations = {
  en: {
    // Navigation
    home: "Home",
    services: "Services", 
    fleet: "Fleet",
    about: "About",
    contact: "Contact",
    bookNow: "Book Now",
    
    // Hero
    heroTitle: "Premium Chauffeur Service",
    heroSubtitle: "Experience luxury transportation with our professional chauffeurs and premium fleet",
    heroDescription: "From airport transfers to corporate events, we provide exceptional service with attention to every detail.",
    
    // Services
    servicesTitle: "Our Premium Services",
    servicesSubtitle: "Tailored luxury transportation solutions for every occasion",
    executiveTitle: "Executive Service",
    executiveDesc: "Professional transportation for business executives and corporate events",
    vipTitle: "VIP Experience", 
    vipDesc: "Exclusive luxury service with premium amenities and personalized attention",
    airportTitle: "Airport Transfers",
    airportDesc: "Reliable and punctual airport pickup and drop-off services",
    tourismTitle: "Tourism & Events",
    tourismDesc: "Customized tours and special event transportation services",
    
    // Fleet
    fleetTitle: "Our Luxury Fleet",
    fleetSubtitle: "Premium vehicles maintained to the highest standards",
    
    // Booking  
    bookingTitle: "Reserve Your Premium Experience",
    bookingSubtitle: "Book your luxury transportation service",
    fullName: "Full Name",
    email: "Email Address", 
    phoneNumber: "Phone Number",
    pickupLocation: "Pickup Location",
    destination: "Destination",
    serviceType: "Service Type",
    selectService: "Select Service",
    executive: "Executive", 
    vip: "VIP",
    airport: "Airport Transfer",
    tourism: "Tourism",
    pickupDate: "Pickup Date",
    pickupTime: "Pickup Time", 
    specialRequests: "Special Requests",
    submitBooking: "Submit Booking",
    
    // Testimonials
    testimonialsTitle: "What Our Clients Say",
    testimonialsSubtitle: "Trusted by executives and VIPs worldwide",
    
    // Footer
    footerTagline: "Premium chauffeur service delivering luxury, reliability, and exceptional customer experience.",
    quickLinks: "Quick Links",
    contactInfo: "Contact Information",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved.",
    
    // Common
    available24h: "Available 24/7",
    professionalDrivers: "Professional Drivers",
    luxuryVehicles: "Luxury Vehicles",
    phone: "+1 (555) 123-4567"
  },
  ar: {
    // Navigation  
    home: "الرئيسية",
    services: "الخدمات",
    fleet: "الأسطول", 
    about: "نبذة عنا",
    contact: "اتصل بنا",
    bookNow: "احجز الآن",
    
    // Hero
    heroTitle: "خدمة السائق المتميزة",
    heroSubtitle: "استمتع بالنقل الفاخر مع سائقينا المحترفين وأسطولنا المتميز",
    heroDescription: "من النقل من وإلى المطار إلى الفعاليات التجارية، نقدم خدمة استثنائية مع الاهتمام بكل التفاصيل.",
    
    // Services
    servicesTitle: "خدماتنا المتميزة",
    servicesSubtitle: "حلول النقل الفاخر المخصصة لكل مناسبة",
    executiveTitle: "الخدمة التنفيذية",
    executiveDesc: "النقل المهني للمدراء التنفيذيين والفعاليات التجارية",
    vipTitle: "تجربة كبار الشخصيات",
    vipDesc: "خدمة فاخرة حصرية مع وسائل الراحة المتميزة والاهتمام الشخصي",
    airportTitle: "النقل من وإلى المطار", 
    airportDesc: "خدمات الاستقبال والتوصيل الموثوقة وفي الوقت المحدد",
    tourismTitle: "السياحة والفعاليات",
    tourismDesc: "جولات مخصصة وخدمات النقل للفعاليات الخاصة",
    
    // Fleet
    fleetTitle: "أسطولنا الفاخر",
    fleetSubtitle: "مركبات متميزة محافظ عليها بأعلى المعايير",
    
    // Booking
    bookingTitle: "احجز تجربتك المتميزة", 
    bookingSubtitle: "احجز خدمة النقل الفاخر",
    fullName: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phoneNumber: "رقم الهاتف",
    pickupLocation: "موقع الاستقبال",
    destination: "الوجهة",
    serviceType: "نوع الخدمة",
    selectService: "اختر الخدمة",
    executive: "تنفيذية",
    vip: "كبار الشخصيات", 
    airport: "النقل من المطار",
    tourism: "السياحة",
    pickupDate: "تاريخ الاستقبال",
    pickupTime: "وقت الاستقبال",
    specialRequests: "طلبات خاصة",
    submitBooking: "إرسال الحجز",
    
    // Testimonials  
    testimonialsTitle: "ماذا يقول عملاؤنا",
    testimonialsSubtitle: "موثوق من قبل المدراء التنفيذيين وكبار الشخصيات في جميع أنحاء العالم",
    
    // Footer
    footerTagline: "خدمة السائق المتميزة التي تقدم الفخامة والموثوقية وتجربة عملاء استثنائية.",
    quickLinks: "روابط سريعة", 
    contactInfo: "معلومات الاتصال",
    followUs: "تابعنا",
    allRightsReserved: "جميع الحقوق محفوظة.",
    
    // Common
    available24h: "متاح 24/7",
    professionalDrivers: "سائقون محترفون", 
    luxuryVehicles: "مركبات فاخرة",
    phone: "+1 (555) 123-4567"
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;