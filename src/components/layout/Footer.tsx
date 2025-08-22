import { useLanguage } from '@/lib/i18n/language-context';
import { Link as ScrollLink } from 'react-scroll';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: t('nav.home'), to: 'hero' },
    { name: t('nav.services'), to: 'services' },
    { name: t('nav.booking'), to: 'booking' },
    { name: t('nav.contact'), to: 'contact' }
  ];
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/assets/images/icon2.png" 
                alt="Hola Hosts Valencia" 
                className="h-10 w-auto mr-2 bg-white p-1 rounded"
              />
              <h3 className="text-xl font-bold">Hola Hosts Valencia</h3>
            </div>
            <p className="text-gray-400 mb-6">{t('footer.description')}</p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/16EtiEifM4/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/holahostsvalencia?igsh=cGtldzNnZTRjNTFz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition-colors"
              >
                <a href="https://www.tiktok.com/@holahostsvalencia?_t=ZN-8z5XrK78Wfu&_r=1" target="_blank" rel="noopener noreferrer">
  <img src="/assets/icons/tiktok.svg" alt="TikTok" className="w-6 h-6" />
</a>

                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={20} className="mr-2 text-blue-400" />
                <span className="text-gray-400">Carrer de Guillem de Castro, 75<br/>46008 València, Spain</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-blue-400" />
                <span className="text-gray-400">+34 612 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-blue-400" />
                <span className="text-gray-400">info@holahostsvalencia.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-6 bg-gray-700" />
        
        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          &copy; {currentYear} Hola Hosts Valencia. {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
