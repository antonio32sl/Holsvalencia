import { useLanguage } from '@/lib/i18n/language-context';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
  const { t } = useLanguage();
  
  const contactInfo = [
    {
      icon: <MapPin className="h-7 w-7 text-blue-500" />,
      label: t('contact.address'),
      value: 'Carrer de la reina, 178, 46011 València, Spain',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6159.89230853022!2d-0.3331604108600349!3d39.47054513948601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604865fd132f99%3A0xb948abc225acf2ad!2sC%2F%20de%20la%20Reina%2C%20178%2C%20Poblats%20Mar%C3%ADtims%2C%2046011%20Val%C3%A8ncia!5e0!3m2!1ses!2ses!4v1756410448210!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    },
    {
      icon: <Phone className="h-7 w-7 text-blue-500" />,
      label: t('contact.phone'),
      value: '+34 641 908 620',
      link: 'tel:+34641908620'
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
      url: 'https://www.instagram.com/holahostsvalencia/', 
      color: 'bg-pink-500' 
    },
      { 
      name: 'Tiktok', 
      icon: <img src="/assets/images/tiktok.svg" alt="TikTok" className="w-6 h-6" />, 
      url: 'https://www.tiktok.com/@holahostsvalencia', 
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6159.89230853022!2d-0.3331604108600349!3d39.47054513948601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604865fd132f99%3A0xb948abc225acf2ad!2sC%2F%20de%20la%20Reina%2C%20178%2C%20Poblats%20Mar%C3%ADtims%2C%2046011%20Val%C3%A8ncia!5e0!3m2!1ses!2ses!4v1756410448210!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
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
