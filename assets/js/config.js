/**
 * ==============================================================================
 * CONFIGURACIÓN GENERAL — IGLESIA CRISTIANA EN AVIACIÓN
 * ==============================================================================
 */

const CHURCH_CONFIG = {
  // --- IDENTIDAD ---
  name: "Iglesia Cristiana en Aviación",
  legalName: "Iglesia Cristiana en Aviación A.R.",
  shortName: "Iglesia Cristiana en Aviación",
  tagline: "Un lugar para conocer a Dios, crecer en la fe y caminar juntos como comunidad.",
  
  // --- UBICACIÓN ---
  location: {
    address: "Av. Vasco de Quiroga 115, Industrial Aviación 1ra Secc, 78140 San Luis Potosí, S.L.P.",
    googleMapsUrl: "https://www.google.com/maps/place/Iglesia+Cristiana+en+Aviaci%C3%B3n+A.R./@22.1785899,-100.9954835,17z",
    mapEmbedUrl: "https://maps.google.com/maps?q=Av.+Vasco+de+Quiroga+115,+Industrial+Aviacion+1ra+Secc,+78140+San+Luis+Potos%C3%AD,+S.L.P.,+Mexico&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },

  // --- SERVICIOS DOMINICALES ---
  sundayServices: [
    { time: "9:00 AM", title: "Primer Servicio" },
    { time: "11:30 AM", title: "Segundo Servicio", isLive: true },
    { time: "6:00 PM", title: "Tercer Servicio" }
  ],
  childrensChurch: "Iglesia infantil durante cada servicio dominical.",

  // --- ACTIVIDADES ENTRE SEMANA ---
  weeklyActivities: [
    { day: "Lunes", time: "8:00 PM", name: "Célula", description: "Reunión de grupo en casa para compartir la Palabra y orar juntos." },
    { day: "Martes", time: "6:30 PM", name: "Femenil", description: "Reunión y estudio para mujeres." },
    { day: "Miércoles", time: "6:30 PM", name: "Familiar", description: "Reunión general para toda la familia." },
    { day: "Jueves", time: "6:00 PM", name: "Matrimonios", description: "Espacio para parejas y fortalecimiento conyugal." },
    { day: "Sábado", time: "5:30 PM", name: "Junta de Jóvenes", description: "Reunión de jóvenes y adolescentes." }
  ],

  // --- CONTACTO Y REDES SOCIALES ---
  contact: {
    phone: "(444) 811-0970",
    phoneLink: "tel:+524448110970",
    whatsappLink: "https://wa.me/524448110970?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20Iglesia%20Cristiana%20en%20Aviaci%C3%B3n",
    facebookUrl: "https://www.facebook.com/iglesia.aviacion.1",
    facebookName: "facebook.com/iglesia.aviacion.1"
  }
};

if (typeof window !== "undefined") {
  window.CHURCH_CONFIG = CHURCH_CONFIG;
}
