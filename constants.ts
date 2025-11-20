
import { Project, NavItem } from './types';

export const PROFILE = {
  name: "Alexis Tomaselli",
  role: "Ingeniero en Sistemas | Desarrollador Full-Stack",
  email: "alexistomaselli@gmail.com",
  whatsapp: "543388430068",
  linkedin: "https://ar.linkedin.com/in/alexis-tomaselli",
  // Using the provided LinkedIn profile image
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHnl-YiTIeQdA/profile-displayphoto-shrink_200_200/B4DZWrZTsAHAAc-/0/1742337293545?e=1765411200&v=beta&t=K_d1Z0glJ3y582IhGurgxngEss58FpuziCPrYlCZZ7E", 
  about: "Ingeniero en Sistemas apasionado por crear soluciones tecnológicas de alto impacto. Especializado en desarrollo Full-Stack, Automatización e Inteligencia Artificial, transformo ideas complejas en ecosistemas digitales eficientes y escalables."
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

// In a real-world scenario with the Puppeteer script running at build time, 
// image URLs would point to local assets like './assets/projects/swisshospital/thumbnail.webp'
// For this demo, we use high-quality placeholders seeded with the project name to stay consistent.
const getPlaceholderImage = (seed: string) => `https://picsum.photos/seed/${seed}/800/600`;

export const PROJECTS: Project[] = [
  {
    id: '8',
    name: 'AFPets',
    slug: 'afpets',
    description: 'E-commerce especializado en alimentos y accesorios para mascotas. Plataforma intuitiva para dueños de perros y gatos.',
    url: 'https://afpets.com',
    tags: ['E-commerce', 'Pets', 'Retail'],
    category: 'e-commerce',
    imageUrl: 'https://afpets.com/assets/dogs-hero-Cn9MNITh.png',
  },
  {
    id: '1',
    name: 'Swiss Hospital',
    slug: 'swisshospital',
    description: 'Plataforma integral para gestión hospitalaria y presentación de servicios médicos. Optimizado para SEO y experiencia de usuario paciente.',
    url: 'https://www.swisshospital.mx',
    tags: ['React', 'Medical', 'Corporate'],
    category: 'medical',
    imageUrl: 'https://www.swisshospital.mx/wp-content/uploads/2023/04/swiss-home-slider-1-1024x682.jpg',
  },
  {
    id: '9',
    name: 'Dydia Labs',
    slug: 'dydia-labs',
    description: 'Empresa especializada en automatización de procesos e integración de Inteligencia Artificial. Soluciones tecnológicas para escalar negocios.',
    url: 'https://dydialabs.tech/',
    tags: ['AI', 'Automation', 'Innovation'],
    category: 'corporate',
    imageUrl: 'https://dydialabs.tech/wp-content/uploads/2025/03/hero.webp',
  },
  {
    id: '2',
    name: 'Vinted Clothes',
    slug: 'vinted-clone',
    description: 'Marketplace de moda de segunda mano. Implementación de carrito de compras, filtros avanzados y pasarela de pagos.',
    url: 'https://vinted.mauroferrante.website',
    tags: ['E-commerce', 'Marketplace', 'Full Stack'],
    category: 'e-commerce',
    imageUrl: 'https://vinted.mauroferrante.website/wp-content/uploads/2023/05/77c49144ed9e862ef48349f4f217b48e.jpeg',
  },
  {
    id: '3',
    name: 'La Clochette',
    slug: 'laclochette',
    description: 'Sitio web elegante para restaurante de alta cocina. Incluye sistema de reservas y galería de menú interactiva.',
    url: 'https://www.laclochette.it',
    tags: ['Hospitality', 'UX/UI', 'Frontend'],
    category: 'corporate',
    imageUrl: 'https://www.laclochette.it/wp-content/uploads/2023/12/sunlight-over-dutch-farmland-in-summer-2022-02-02-03-49-47-utc-min-v2.jpg',
  },
  {
    id: '4',
    name: 'Ferrara Ristrutturazioni',
    slug: 'ferrara',
    description: 'Portfolio corporativo para empresa de construcción y remodelación. Enfoque en la exhibición visual de trabajos realizados.',
    url: 'https://ferrararistrutturazioni.com',
    tags: ['Construction', 'Portfolio', 'Business'],
    category: 'corporate',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    id: '5',
    name: 'Emmanuel Global Missions',
    slug: 'emmanuel',
    description: 'Plataforma para organización sin fines de lucro, facilitando donaciones y difusión de misiones globales.',
    url: 'https://www.emmanuelglobalmissions.org',
    tags: ['Non-profit', 'Donations', 'Community'],
    category: 'non-profit',
    imageUrl: 'https://www.emmanuelglobalmissions.org//assets/hero-divine-light-D6cvBJl1.jpg',
  },
  {
    id: '6',
    name: 'Bomberos Villegas',
    slug: 'bomberos',
    description: 'Sitio institucional para el cuerpo de bomberos. Sistema de noticias, alertas y recursos para la comunidad.',
    url: 'https://bomberosvillegas.com.ar',
    tags: ['Government', 'News', 'Alerts'],
    category: 'corporate',
    imageUrl: 'https://bomberosvillegas.com.ar/wp-content/uploads/2019/01/cuartel3-1.png',
  },
  {
    id: '7',
    name: 'Valora Plus',
    slug: 'valora',
    description: 'Solución fintech/servicios para gestión de valor y activos. Dashboard intuitivo y seguro.',
    url: 'https://valora.plus',
    tags: ['Fintech', 'Dashboard', 'Secure'],
    category: 'corporate',
    imageUrl: 'https://valora.plus/assets/hero-analytics-HCZweFY8.jpg',
  },
];
