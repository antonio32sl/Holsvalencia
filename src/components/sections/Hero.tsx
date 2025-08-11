import { useLanguage } from '@/lib/i18n/language-context';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink } from 'react-scroll';

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600">
              {t('hero.subtitle')}
            </p>
            
            <div className="pt-4">
              <ScrollLink
                to="booking"
                smooth={true}
                duration={500}
                offset={-70}
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  {t('hero.cta')}
                </Button>
              </ScrollLink>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-lg transform rotate-3 opacity-10 blur-xl"></div>
              <img 
                src="/assets/images/service1.png" 
                alt="Valencia Property Management" 
                className="relative z-10 rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}