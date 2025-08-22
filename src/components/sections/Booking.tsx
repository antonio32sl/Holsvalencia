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

// Importa el cliente supabase
import { supabase } from '@/lib/supabase-client';

export default function Booking() {
  const { t } = useLanguage();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date) {
      setErrorMsg('Please select a date');
      return;
    }
  // ✅ 2. Enviar email usando Edge Function
  try {
    const response = await fetch('https://mlupwafvacqddtfnuwuf.supabase.co/functions/v1/super-api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        date: date.toISOString(),
        message
      })
    });

    if (!response.ok) {
      console.error('Error al enviar el correo:', await response.text());
    }
  } catch (e) {
    console.error('Error llamando a la función de correo:', e);
  }

    setIsSubmitting(true);
    setErrorMsg('');

    // Inserta datos en la tabla "bookings" (cambia por el nombre real de tu tabla)
    const { data, error } = await supabase.from('reserva').insert([
      {
        name,
        email,
        phone,
        date: date.toISOString(),
        message,
        created_at: new Date().toISOString()
      }
    ]);

    setIsSubmitting(false);

    if (error) {
      setErrorMsg('Error al enviar la reserva: ' + error.message);
      return;
    }

    setIsSubmitted(true);

    // Limpiar formulario
    setName('');
    setEmail('');
    setPhone('');
    setDate(undefined);
    setMessage('');

    // Resetear estado enviado después de 5 segundos
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
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
              {errorMsg && (
                <p className="mb-4 text-red-600 font-semibold">{errorMsg}</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('booking.name')}</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t('booking.email')}</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{t('booking.phone')}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+34 612 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
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
