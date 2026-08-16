/**
 * ==============================================================================
 * CONFIGURACIÓN GENERAL — IGLESIA CRISTIANA EN AVIACIÓN
 * ==============================================================================
 * Información verificada y configurable de la iglesia.
 * ==============================================================================
 */

const CHURCH_CONFIG = {
  // --- IDENTIDAD ---
  name: "Iglesia Cristiana en Aviación",
  legalName: "Iglesia Cristiana en Aviación A.R.",
  shortName: "Iglesia Cristiana en Aviación",
  taglineDraft: "Un lugar para conocer a Dios, crecer en la fe y caminar juntos como comunidad.",
  
  // --- UBICACIÓN ---
  location: {
    city: "San Luis Potosí",
    state: "S.L.P., México",
    neighborhood: "Industrial Aviación 1ra Secc",
    streetAddress: "Av. Vasco de Quiroga 115",
    postalCode: "78140",
    fullAddressDisplay: "Av. Vasco de Quiroga 115, Industrial Aviación 1ra Secc, 78140 San Luis Potosí, S.L.P., México",
    latitude: 22.1785899,
    longitude: -100.9954835,
    googleMapsUrl: "https://www.google.com/maps/place/Iglesia+Cristiana+en+Aviaci%C3%B3n+A.R./@22.1785899,-100.9954835,17z",
    mapEmbedUrl: "https://maps.google.com/maps?q=Av.+Vasco+de+Quiroga+115,+Industrial+Aviacion+1ra+Secc,+78140+San+Luis+Potos%C3%AD,+S.L.P.,+Mexico&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },

  // --- HORARIOS DE REUNIONES VERIFICADOS ---
  schedules: [
    {
      id: "culto-dominical-1",
      day: "Domingo",
      title: "Primer Servicio Dominical",
      time: "9:00 AM",
      description: "Reunión matutina de alabanza, comunión, oración y exposición de la Palabra de Dios.",
      icon: "sun",
      badge: "Matutino"
    },
    {
      id: "culto-dominical-2",
      day: "Domingo",
      title: "Segundo Servicio Dominical",
      time: "11:30 AM",
      description: "Reunión de mediodía para toda la familia con alabanza congregacional y mensaje bíblico.",
      icon: "sun-medium",
      badge: "Mediodía"
    },
    {
      id: "culto-dominical-3",
      day: "Domingo",
      title: "Tercer Servicio Dominical",
      time: "6:00 PM",
      description: "Servicio vespertino de adoración, comunión fraternal y enseñanza bíblica práctica.",
      icon: "sunset",
      badge: "Vespertino"
    }
  ],

  // --- CONTACTO Y REDES SOCIALES ---
  contact: {
    phone: "+52 444 811 0970",
    phoneDisplay: "(444) 811-0970",
    phoneLink: "tel:+524448110970",
    
    // WhatsApp (puede enlazarse al número telefónico o número dedicado)
    whatsappNumber: "+52 444 811 0970",
    whatsappLink: "https://wa.me/524448110970?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20Iglesia%20Cristiana%20en%20Aviaci%C3%B3n",
    
    // Correo electrónico
    email: "[CORREO ELECTRÓNICO POR CONFIRMAR]",
    emailLink: "",
    
    // Redes Sociales
    social: {
      facebook: "Iglesia Cristiana en Aviación",
      facebookUrl: "",
      instagram: "",
      instagramUrl: "",
      youtube: "",
      youtubeUrl: ""
    }
  },

  // --- MINISTERIOS Y COMUNIDAD ---
  ministries: [
    {
      title: "Familias y Adultos",
      summary: "Espacios de acompañamiento y edificación mutua para matrimonios, padres y adultos.",
      status: "Activo"
    },
    {
      title: "Jóvenes",
      summary: "Encuentros para jóvenes con enfoque en amistades saludables, propósito de vida y valores bíblicos.",
      status: "Activo"
    },
    {
      title: "Niños / Clases Bíblicas",
      summary: "Atención y enseñanza adaptada a los más pequeños durante las actividades dominicales.",
      status: "Activo"
    },
    {
      title: "Música y Alabanza",
      summary: "Servicio de dirección musical y alabanza comunitaria en los tres servicios dominicales.",
      status: "Activo"
    }
  ],

  // --- AVISOS Y PRÓXIMAS ACTIVIDADES ---
  announcements: {
    hasActiveEvents: false,
    message: "Te invitamos a acompañarnos este domingo en cualquiera de nuestros tres servicios: 9:00 AM, 11:30 AM y 6:00 PM en Av. Vasco de Quiroga 115."
  }
};

// Exportar globalmente para el navegador
if (typeof window !== "undefined") {
  window.CHURCH_CONFIG = CHURCH_CONFIG;
}
