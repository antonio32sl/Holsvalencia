import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/i18n/language-context';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const { t, currentLanguage, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { name: t('nav.home'), to: 'hero' },
    { name: t('nav.services'), to: 'services' },
    { name: t('nav.booking'), to: 'booking' },
    { name: t('nav.contact'), to: 'contact' }
  ];
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'ca', name: 'Valencià' }
    { code: 'fr', name: 'Français' }
  ];
  
  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/assets/images/icon2.png" 
              alt="Hola Hosts Valencia" 
              className="h-10 w-auto"
            />
            <span className="ml-2 font-semibold text-lg">Hola Hosts Valencia</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <ScrollLink
                key={index}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </ScrollLink>
            ))}
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Globe size={16} />
                  {languages.find(lang => lang.code === currentLanguage)?.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map(lang => (
                  <DropdownMenuItem 
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={currentLanguage === lang.code ? "bg-blue-50" : ""}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mt-1 py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <ScrollLink
                key={index}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer font-medium py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ))}
            
            {/* Mobile Language Selector */}
            <div className="pt-2 border-t">
              <p className="text-sm text-gray-500 mb-2">{t('nav.selectLanguage')}</p>
              <div className="flex space-x-2">
                {languages.map(lang => (
                  <Button 
                    key={lang.code}
                    variant={currentLanguage === lang.code ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLanguage(lang.code)}
                  >
                    {lang.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
