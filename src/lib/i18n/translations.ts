// Define translation types
export type TranslationValue = string | Record<string, TranslationValue>;

type TranslationDictionary = {
  [language: string]: Record<string, TranslationValue>;
};

// Define translations for all supported languages
export const translations: TranslationDictionary = {
  // English translations
  en: {
    nav: {
      home: "Home",
      services: "Services",
      booking: "Booking",
      contact: "Contact",
      selectLanguage: "Select Language"
    },
    hero: {
      title: "Professional Property Management in Valencia",
      subtitle: "Complete solutions for property owners and travelers",
      cta: "Book Now"
    },
    services: {
      title: "Our Services",
      subtitle: "Everything you need to manage your property efficiently",
      item1: {
        title: "Guest Communication",
        description: "24/7 communication with guests in multiple languages to ensure a smooth stay."
      },
      item2: {
        title: "Calendar Management",
        description: "Professional management of your booking calendar across multiple platforms."
      },
      item3: {
        title: "Cleaning Service",
        description: "High-quality cleaning services between stays to maintain property standards."
      },
      item4: {
        title: "Maintenance",
        description: "Quick response to maintenance issues and regular property checks."
      },
      item5: {
        title: "Multilingual Support",
        description: "Support in English, Spanish, French and Valencian to accommodate all guests."
      },
      item6: {
        title: "Legal Documentation",
        description: "Handling of all legal requirements and tourist registrations."
      },
      item7: {
        title: "Revenue Optimization",
        description: "Strategic pricing to maximize your property's earning potential."
      }
    },
    booking: {
      title: "Book Our Services",
      description: "Get in touch to discuss how we can help manage your property",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      date: "Select Date",
      message: "Your Message",
      submit: "Send Request"
    },
    contact: {
      title: "Contact Us",
      address: "Address",
      phone: "Phone",
      email: "Email",
      follow: "Follow Us"
    },
    footer: {
      description: "Hola Hosts Valencia provides comprehensive property management services for hosts in Valencia, making hosting easier and more profitable.",
      quickLinks: "Quick Links",
      contact: "Contact",
      copyright: "All rights reserved."
    }
  },

  // Spanish translations
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      booking: "Reservas",
      contact: "Contacto",
      selectLanguage: "Seleccionar idioma"
    },
    hero: {
      title: "Gestión Profesional de Propiedades en Valencia",
      subtitle: "Soluciones completas para propietarios y viajeros",
      cta: "Reservar Ahora"
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Todo lo que necesitas para gestionar tu propiedad de manera eficiente",
      item1: {
        title: "Comunicación con Huéspedes",
        description: "Comunicación 24/7 con los huéspedes en varios idiomas para asegurar una estancia sin problemas."
      },
      item2: {
        title: "Gestión de Calendario",
        description: "Administración profesional de tu calendario de reservas en múltiples plataformas."
      },
      item3: {
        title: "Servicio de Limpieza",
        description: "Servicios de limpieza de alta calidad entre estancias para mantener los estándares de la propiedad."
      },
      item4: {
        title: "Mantenimiento",
        description: "Respuesta rápida a problemas de mantenimiento y verificaciones regulares de la propiedad."
      },
      item5: {
        title: "Soporte Multilingüe",
        description: "Soporte en Inglés, Español, Frances y Valenciano para acomodar a todos los huéspedes."
      },
      item6: {
        title: "Documentación Legal",
        description: "Gestión de todos los requisitos legales y registros turísticos."
      },
      item7: {
        title: "Optimización de Ingresos",
        description: "Precios estratégicos para maximizar el potencial de ganancia de tu propiedad."
      }
    },
    booking: {
      title: "Reservar Nuestros Servicios",
      description: "Contáctanos para discutir cómo podemos ayudarte a gestionar tu propiedad",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Número de Teléfono",
      date: "Seleccionar Fecha",
      message: "Tu Mensaje",
      submit: "Enviar Solicitud"
    },
    contact: {
      title: "Contáctanos",
      address: "Dirección",
      phone: "Teléfono",
      email: "Correo",
      follow: "Síguenos"
    },
    footer: {
      description: "Hola Hosts Valencia ofrece servicios completos de gestión de propiedades para anfitriones en Valencia, facilitando la gestión y haciéndola más rentable.",
      quickLinks: "Enlaces Rápidos",
      contact: "Contacto",
      copyright: "Todos los derechos reservados."
    }
  },

  // Valencian/Catalan translations
  ca: {
    nav: {
      home: "Inici",
      services: "Serveis",
      booking: "Reserves",
      contact: "Contacte",
      selectLanguage: "Seleccionar idioma"
    },
    hero: {
      title: "Gestió Professional de Propietats a València",
      subtitle: "Solucions completes per a propietaris i viatgers",
      cta: "Reservar Ara"
    },
    services: {
      title: "Els Nostres Serveis",
      subtitle: "Tot el que necessites per gestionar la teua propietat de manera eficient",
      item1: {
        title: "Comunicació amb Hostes",
        description: "Comunicació 24/7 amb els hostes en diversos idiomes per assegurar una estada sense problemes."
      },
      item2: {
        title: "Gestió de Calendari",
        description: "Administració professional del teu calendari de reserves en múltiples plataformes."
      },
      item3: {
        title: "Servei de Neteja",
        description: "Serveis de neteja d'alta qualitat entre estades per mantindre els estàndards de la propietat."
      },
      item4: {
        title: "Manteniment",
        description: "Resposta ràpida a problemes de manteniment i verificacions regulars de la propietat."
      },
      item5: {
        title: "Suport Multilingüe",
        description: "Suport en anglés, espanyol, francés i valencià per acomodar a tots els hostes."
      },
      item6: {
        title: "Documentació Legal",
        description: "Gestió de tots els requisits legals i registres turístics."
      },
      item7: {
        title: "Optimització d'Ingressos",
        description: "Preus estratègics per maximitzar el potencial de guany de la teua propietat."
      }
    },
    booking: {
      title: "Reservar Els Nostres Serveis",
      description: "Contacta'ns per discutir com podem ajudar-te a gestionar la teua propietat",
      name: "Nom Complet",
      email: "Correu Electrònic",
      phone: "Número de Telèfon",
      date: "Seleccionar Data",
      message: "El Teu Missatge",
      submit: "Enviar Sol·licitud"
    },
    contact: {
      title: "Contacta'ns",
      address: "Adreça",
      phone: "Telèfon",
      email: "Correu",
      follow: "Segueix-nos"
    },
    footer: {
      description: "Hola Hosts València ofereix serveis complets de gestió de propietats per a amfitrions a València, facilitant la gestió i fent-la més rendible.",
      quickLinks: "Enllaços Ràpids",
      contact: "Contacte",
      copyright: "Tots els drets reservats."
    }
  },
  
  // frances translations
  fr: {
    nav: {
      home: "Inici",
      services: "Serveis",
      booking: "Reserves",
      contact: "Contacte",
      selectLanguage: "Seleccionar idioma"
    },
    hero: {
      title: "Gestion professionnelle de propriétés à Valence ",
      subtitle: "Solutions complètes pour propriétaires et voyageurs",
      cta: "Réserver maintenant "
    },
    services: {
      title: "Els Nostres Serveis",
      subtitle: "Tout ce dont vous avez besoin pour gérer efficacement votre propriété ",
      item1: {
        title: "Communication avec les hôtes ",
        description: "Communication 24h/24 et 7j/7 avec les hôtes dans différentes langues pour garantir un séjour sans problème."
      },
      item2: {
        title: "Gestion du calendrier",
        description: "Gestion professionnelle de votre calendrier de réservations sur plusieurs plateformes."
      },
      item3: {
        title: "Service de nettoyage",
        description: "Services de nettoyage de haute qualité entre les séjours afin de maintenir les normes de la propriété."
      },
      item4: {
        title: "Maintenance",
        description: "Réponse rapide aux problèmes de maintenance et vérifications régulières de la propriété."
      },
      item5: {
        title: "Assistance multilingue",
        description: "Assistance en anglais, espagnol, français et valencien pour accueillir tous les hôtes."
      },
      item6: {
        title: "Documentation juridique",
        description: "Gestion de toutes les exigences légales et des registres touristiques."
      },
      item7: {
        title: "Optimisation des revenus",
        description: "Tarifs stratégiques pour maximiser le potentiel de rentabilité de votre propriété."
      }
    },
    booking: {
      title: "Réserver nos services",
      description: "Contactez-nous pour discuter de la manière dont nous pouvons vous aider à gérer votre propriété",
      name: "Nom Complet",
      email: "E-mail",
      phone: "Numéro de téléphone",
      date: "Sélectionner la date",
      message: "Votre message ",
      submit: "Envoyer la demande"
    },
    contact: {
      title: "Contactez-nous",
      address: "Adresse",
      phone: "Téléphone",
      email: " E-mail",
      follow: "Suivez-nous"
    },
    footer: {
      description: "Hola Hosts València offre des services complets de gestion immobilière pour les hôtes à Valence, facilitant la gestion et la rendant plus rentable.",
      quickLinks: "Liens rapides",
      contact: "Contact",
      copyright: "Tous droits réservés."
    }
  }  
};
