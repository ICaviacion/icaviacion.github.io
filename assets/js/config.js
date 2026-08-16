/**
 * ==============================================================================
 * CONFIGURACIÓN GENERAL — IGLESIA CRISTIANA EN AVIACIÓN
 * ==============================================================================
 * Este archivo centraliza la información editable de la iglesia.
 * Cuando los datos reales sean confirmados por el liderazgo,
 * simplemente edita los valores entre comillas a continuación.
 * ==============================================================================
 */

const CHURCH_CONFIG = {
  // --- IDENTIDAD ---
  name: "Iglesia Cristiana en Aviación",
  shortName: "Iglesia Cristiana en Aviación",
  taglineDraft: "Un lugar para conocer a Dios, crecer en la fe y caminar juntos como comunidad.",
  
  // --- UBICACIÓN ---
  location: {
    city: "San Luis Potosí",
    state: "S.L.P., México",
    neighborhood: "Colonia Aviación",
    streetReference: "Vasco de Quiroga",
    // Reemplazar cuando se confirme el número exterior exacto:
    exactAddress: "[DIRECCIÓN EXACTA POR CONFIRMAR]",
    fullAddressDisplay: "Colonia Aviación (sobre/cerca de Vasco de Quiroga), San Luis Potosí, S.L.P.",
    // Enlace de Google Maps (actualmente apunta a la zona de Vasco de Quiroga, Col. Aviación, SLP)
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Vasco+de+Quiroga+Colonia+Aviacion+San+Luis+Potosi",
    // Código de iframe de Google Maps si se desea incrustar mapa interactivo
    mapEmbedUrl: ""
  },

  // --- HORARIOS DE REUNIONES (DRAFT / PENDIENTES DE CONFIRMAR) ---
  schedules: [
    {
      id: "culto-dominical",
      day: "Domingo",
      title: "Reunión Dominical",
      time: "[HORARIO POR CONFIRMAR]",
      description: "Tiempo principal de adoración en comunidad, oración y estudio de la Palabra de Dios para toda la familia.",
      icon: "calendar",
      badge: "Reunión Principal"
    },
    {
      id: "estudio-biblico",
      day: "Entre Semana",
      title: "Estudio Bíblico",
      time: "[HORARIO POR CONFIRMAR]",
      description: "Espacio para profundizar juntos en las Escrituras y fortalecer el crecimiento espiritual.",
      icon: "book-open",
      badge: "Discipulado"
    },
    {
      id: "tiempo-oracion",
      day: "Entre Semana",
      title: "Tiempo de Oración",
      time: "[HORARIO POR CONFIRMAR]",
      description: "Reunión dedicada a interceder por las familias, nuestra comunidad y necesidades particulares.",
      icon: "heart",
      badge: "Comunidad"
    }
  ],

  // --- CONTACTO Y REDES SOCIALES ---
  contact: {
    // Teléfono principal (p. ej. "444 123 4567")
    phone: "[TELÉFONO POR CONFIRMAR]",
    phoneLink: "", // p. ej. "tel:+524441234567"
    
    // WhatsApp (p. ej. "5214441234567")
    whatsappNumber: "[WHATSAPP POR CONFIRMAR]",
    whatsappLink: "", // p. ej. "https://wa.me/524441234567?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20iglesia"
    
    // Correo electrónico
    email: "[CORREO ELECTRÓNICO POR CONFIRMAR]",
    emailLink: "", // p. ej. "mailto:contacto@ejemplo.com"
    
    // Redes Sociales (dejar vacío "" si aún no existen)
    social: {
      facebook: "[ENLACE DE FACEBOOK POR CONFIRMAR]",
      facebookUrl: "",
      instagram: "[ENLACE DE INSTAGRAM POR CONFIRMAR]",
      instagramUrl: "",
      youtube: "",
      youtubeUrl: ""
    }
  },

  // --- MINISTERIOS Y COMUNIDAD (ESTRUCTURA BASE) ---
  ministries: [
    {
      title: "Familias y Adultos",
      summary: "Espacios de acompañamiento y edificación mutua para matrimonios, padres y adultos en general.",
      status: "Información por confirmar"
    },
    {
      title: "Jóvenes",
      summary: "Encuentros para jóvenes con enfoque en amistades saludables, propósito de vida y valores bíblicos.",
      status: "Información por confirmar"
    },
    {
      title: "Niños / Clases Bíblicas",
      summary: "Atención y enseñanza adaptada a los más pequeños durante las actividades de la iglesia.",
      status: "Información por confirmar"
    },
    {
      title: "Música y Alabanza",
      summary: "Servicio de dirección musical y alabanza comunitaria durante nuestras reuniones.",
      status: "Información por confirmar"
    }
  ],

  // --- AVISOS Y PRÓXIMAS ACTIVIDADES ---
  announcements: {
    hasActiveEvents: false,
    message: "Próximamente estaremos compartiendo las fechas de nuestras reuniones especiales, conferencias y actividades comunitarias en Colonia Aviación."
  }
};

// Exportar globalmente para el navegador
if (typeof window !== "undefined") {
  window.CHURCH_CONFIG = CHURCH_CONFIG;
}
