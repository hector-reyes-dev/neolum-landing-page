export const navLinks = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" }
] as const;

export const marketingServices = [
  "Diagnostico de marca y posicionamiento",
  "Arquitectura de mensajes y propuesta de valor",
  "Estrategia de contenido para canales digitales",
  "Planeacion de campanas y activaciones",
  "Analisis de conversion y optimizacion"
] as const;

export const designServices = [
  "Identidad visual y lineamientos de marca",
  "Direccion de arte para campañas",
  "Diseno de sitios web orientados a negocio",
  "Landing pages para captacion de leads",
  "Sistemas UI escalables para crecimiento"
] as const;

export const projectCards = [
  {
    title: "Campana de relanzamiento",
    category: "Estrategia + contenido",
    image: "/assets/placeholders/PLACEHOLDER_03.webp",
    alt: "Vista editorial de proyecto de relanzamiento"
  },
  {
    title: "Rediseño de experiencia web",
    category: "UX/UI + desarrollo",
    image: "/assets/placeholders/PLACEHOLDER_02.webp",
    alt: "Pantallas de rediseño web para marca"
  },
  {
    title: "Sistema visual omnicanal",
    category: "Identidad + performance",
    image: "/assets/placeholders/PLACEHOLDER_05.webp",
    alt: "Piezas visuales de proyecto omnicanal"
  }
] as const;

export const contactDetails = {
  email: "hola@neolum.mx",
  phone: "+52 55 0000 0000",
  address: "Ciudad de Mexico, Mexico"
} as const;
