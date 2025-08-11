import { useLanguage } from '@/lib/i18n/language-context';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, CheckCircle, Loader2 } from 'lucide-react';

export default function Booking() {
  const { t } = useLanguage();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset the submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('booking.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('booking.description')}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {isSubmitted ? (
            <div className="p-8 text-center">
              <div className="mb-4 inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-gray-600">
                Your booking request has been submitted successfully. We will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('booking.name')}</Label>
                  <Input 
                    id="name"
                    type="text" 
                    required
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">{t('booking.email')}</Label>
                  <Input 
                    id="email"
                    type="email" 
                    required
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('booking.phone')}</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    required 
                    placeholder="+34 612 345 678"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="date">{t('booking.date')}</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'PPP') : <span className="text-gray-500">Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="message">{t('booking.message')}</Label>
                  <Textarea 
                    id="message"
                    rows={4}
                    required
                    placeholder="Please tell us about your property and what services you're interested in."
                  />
                </div>
                
                <div className="md:col-span-2">
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      t('booking.submit')
                    )}
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}