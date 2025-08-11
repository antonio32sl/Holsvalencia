import { LanguageProvider } from '@/lib/i18n/language-context';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Booking from '@/components/sections/Booking';
import Contact from '@/components/sections/Contact';

export default function Index() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Services />
          <Booking />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}