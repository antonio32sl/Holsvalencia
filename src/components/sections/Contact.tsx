import { useLanguage } from '@/lib/i18n/language-context';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
  const { t } = useLanguage();
  
  const contactInfo = [
    {
      icon: <MapPin className="h-7 w-7 text-blue-500" />,
      label: t('contact.address'),
      value: 'Carrer de Guillem de Castro, 75, 46008 València, Spain',
      link: 'https://maps.google.com/?q=Carrer+de+Guillem+de+Castro+75+Valencia'
    },
    {
      icon: <Phone className="h-7 w-7 text-blue-500" />,
      label: t('contact.phone'),
      value: '+34 612 345 678',
      link: 'tel:+34612345678'
    },
    {
      icon: <Mail className="h-7 w-7 text-blue-500" />,
      label: t('contact.email'),
      value: 'info@holahostsvalencia.com',
      link: 'mailto:info@holahostsvalencia.com'
    }
  ];
  
  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: <Facebook size={24} />, 
      url: 'https://www.facebook.com/share/16EtiEifM4/?mibextid=wwXIfr', 
      color: 'bg-blue-500' 
    },
    { 
      name: 'Instagram', 
      icon: <Instagram size={24} />, 
      url: 'https://www.instagram.com/holahostsvalencia?igsh=cGtldzNnZTRjNTFz', 
      color: 'bg-pink-500' 
    },
      { 
      name: 'Tiktor', 
      icon: <img src="/assets/images/tiktok.svg" alt="TikTok" className="w-6 h-6" />, 
      url: 'https://https://www.tiktok.com/@holahostsvalencia?_t=ZN-8z5XrK78Wfu&_r=1', 
      color: 'bg-black-400' 
    }
  ];
  
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t('contact.title')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-0 shadow-md bg-white">
                  <CardContent className="pt-6">
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-start space-x-4 hover:text-blue-600 transition-colors"
                    >
                      <div className="bg-blue-50 p-3 rounded-full">{item.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{item.label}</h3>
                        <p className="text-gray-600">{item.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
              
              <Card className="border-0 shadow-md bg-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-3">
                    <h3 className="font-semibold text-lg mb-1">{t('contact.follow')}</h3>
                    <div className="flex space-x-3">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${social.color} text-white p-3 rounded-full hover:opacity-80 transition-opacity`}
                          aria-label={social.name}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg h-full overflow-hidden">
              <CardContent className="p-0 h-full">
                <iframe
                  title="Hola Hosts Valencia Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.9748402359993!2d-0.3896993!3d39.474891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f557d04bba7%3A0x9dcbf59f39e48f68!2sCarrer%20de%20Guillem%20de%20Castro%2C%2075%2C%2046008%20Val%C3%A8ncia!5e0!3m2!1sen!2ses!4v1692345678901!5m2!1sen!2ses"
                  className="w-full h-full min-h-[400px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
