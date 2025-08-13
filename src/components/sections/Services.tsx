import { useLanguage } from '@/lib/i18n/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Calendar, Wrench, Globe, FileText, TrendingUp, Brush } from 'lucide-react';

export default function Services() {
  const { t } = useLanguage();
  
  const serviceItems = [
    {
      id: 'item1',
      icon: <MessageSquare className="h-64 md:h-80 text-blue-500" />,
   
    },
    {
      id: 'item2',
      icon: <Calendar className="h-64 md:h-80 text-blue-500" />
    },
    {
      id: 'item3',
      icon: <Brush className="h-64 md:h-80text-blue-500" />
    },
    {
      id: 'item4',
      icon: <Wrench className="h-64 md:h-80 text-blue-500" />,
      
    },
    {
      id: 'item5',
      icon: <Globe className="h-64 md:h-80 text-blue-500" />
    },
    {
      id: 'item6',
      icon: <FileText className="h-64 md:h-80text-blue-500" />
    },
    {
      id: 'item7',
      icon: <TrendingUp className="h-64 md:h-80 text-blue-500" />
    }
  ];
  
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 bg-white">
              <CardHeader className="flex flex-row items-center gap-4">
                {item.icon}
                <CardTitle>{t(`services.${item.id}.title`)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t(`services.${item.id}.description`)}</p>
                
                {item.imageSrc && (
                  <div className="mt-4 rounded-md overflow-hidden">
                    <img 
                      src={item.imageSrc} 
                      alt={t(`services.${item.id}.title`)} 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
