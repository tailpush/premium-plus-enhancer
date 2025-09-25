import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="luxury-hover"
    >
      <Languages className="w-4 h-4 mr-2" />
      {language === 'en' ? 'العربية' : 'English'}
    </Button>
  );
};

export default LanguageToggle;