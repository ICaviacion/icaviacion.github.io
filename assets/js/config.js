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
    {
      time: "9:00 AM",
      title: "Primer Servicio",
      description: "Reunión matutina de alabanza, comunión y mensaje bíblico."
    },
    {
      time: "11:30 AM",
      title: "Segundo Servicio",
      description: "Reunión mediodía de alabanza, comunión y mensaje bíblico.",
      isLive: true,
      liveUrl: "https://www.facebook.com/iglesia.aviacion.1"
    },
    {
      time: "6:00 PM",
      title: "Tercer Servicio",
      description: "Reunión vespertina de alabanza, mensaje bíblico y comunión."
    }
  ],
  childrensChurch: "Iglesia infantil durante cada servicio dominical.",

  // --- ACTIVIDADES ENTRE SEMANA ---
  weeklyActivities: [
    { day: "Lunes", time: "8:00 PM", name: "Célula", description: "Reunión en grupos para compartir la Palabra y orar juntos." },
    { day: "Martes", time: "6:30 PM", name: "Femenil", description: "Espacio de edificación, convivencia y estudio para mujeres." },
    { day: "Miércoles", time: "6:30 PM", name: "Familiar", description: "Reunión de estudio y oración para toda la familia." },
    { day: "Jueves", time: "6:00 PM", name: "Matrimonios", description: "Reunión para parejas y fortalecimiento de la vida conyugal." },
    { day: "Sábado", time: "5:30 PM", name: "Jóvenes", description: "Junta y actividades enfocadas en jóvenes y adolescentes." }
  ],

  // --- LAS 5 CITAS BÍBLICAS PRINCIPALES ---
  verses: {
    hero: {
      text: "Por tanto, recibíos los unos a los otros, como también Cristo nos recibió, para gloria de Dios.",
      ref: "Romanos 15:7"
    },
    about: {
      text: "La palabra de Cristo habite en abundancia en vosotros…",
      ref: "Colosenses 3:16"
    },
    community: {
      text: "Considerémonos unos a otros para estimularnos al amor…",
      ref: "Hebreos 10:24"
    },
    children: {
      text: "Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.",
      ref: "Proverbios 22:6"
    },
    invitation: {
      text: "Venid a mí todos los que estáis trabajados y cargados…",
      ref: "Mateo 11:28"
    }
  },

  // --- CONTACTO Y REDES SOCIALES ---
  contact: {
    phone: "(444) 811-0970",
    phoneLink: "tel:+524448110970",
    whatsappLink: "https://wa.me/524448110970?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20Iglesia%20Cristiana%20en%20Aviaci%C3%B3n",
    facebookUrl: "https://www.facebook.com/iglesia.aviacion.1",
    facebookName: "facebook.com/iglesia.aviacion.1"
  },

  // --- GALERÍA DINÁMICA VÍA GITHUB API ---
  gallery: {
    githubOwner: "ICaviacion",
    githubRepo: "icaviacion.github.io",
    photosPath: "assets/photos",
    autoplayInterval: 3800,
    preferredFirst: "navidad2.jpg",
    defaultPhotos: [
      "navidad2.jpg",
      "cruz.jpeg",
      "pastor.jpeg",
      "escuelitas.jpeg",
      "mujeres.jpg",
      "hombres.jpg",
      "celula.jpeg",
      "staff.jpg",
      "anexo.jpeg",
      "manzanita_y_kendall.jpg",
      "navidad.jpg"
    ]
  }
};

if (typeof window !== "undefined") {
  window.CHURCH_CONFIG = CHURCH_CONFIG;
}
