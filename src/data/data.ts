import Apple from "../icons/apple";
import Facebook from "../icons/facebook";
import Instagram from "../icons/instagram";
import PlayStore from "../icons/playstore";
import Whatsapp from "../icons/whatsapp";

interface Benefit {
    text: string;
    active: boolean;
    tooltipInfo: string;
    displayText?: string;
  }
  
  interface PricingCardProps {
    name: string;
    price: number;
    bestOption: string;
    benefits: Benefit[];
  }
  
  export const pricingComparison: PricingCardProps[] = [
    {
      name: "Básico",
      price: 10500,
      bestOption: "monotributistas",
      benefits: [
        { text: "Asesoría", active: true, tooltipInfo: "Tipo de asesoría", displayText: "prioritaria" },
        { text: "Usuarios", active: true, tooltipInfo: "Usuarios disponibles. Sin contar vendedores", displayText: "1" },
        { text: "Vendedores", active: false, tooltipInfo: "Vendedores para pedidos en app móvil", displayText: "-" },
        { text: "Gestión", active: false, tooltipInfo: "Compras, Proveedores y Estadísticas" },
        { text: "Portal de clientes", active: false, tooltipInfo: "Acceso a ventas y pagos" },
        { text: "Reportes Contables", active: false, tooltipInfo: "IVA, IIBB e Imp. Municipal" },
        { text: "App Mobile", active: false, tooltipInfo: "Acceso a la aplicacion mobile." },
        { text: "Tienda Nube", active: false, tooltipInfo: "Integración con Tienda Nube." },
        { text: "Múltiples CUITs", active: false, tooltipInfo: "Facturar utilizando múltiples CUITs." },
        { text: "Percepciones Prov.", active: false, tooltipInfo: "Gestión de percepciones provinciales." },
      ],
    },
    {
      name: "Inicial",
      price: 13500,
      bestOption: "negocios locales",
      benefits: [
        { text: "Asesoría", active: true, tooltipInfo: "Asesoría rápida y eficaz.", displayText: "prioritaria" },
        { text: "Usuarios", active: true, tooltipInfo: "Acceso para 3 usuarios. Sin contar vendedores", displayText: "hasta 3" },
        { text: "Vendedores", active: false, tooltipInfo: "No incluye soporte para múltiples vendedores.", displayText: "-" },
        { text: "Gestión", active: true, tooltipInfo: "Compras, Proveedores y Estadísticas" },
        { text: "Portal de clientes", active: true, tooltipInfo: "Acceso a ventas y pagos" },
        { text: "Reportes Contables", active: true, tooltipInfo: "IVA, IIBB e Imp. Municipal" },
        { text: "App Mobile", active: true, tooltipInfo: "No incluye acceso a la aplicacion mobile." },
        { text: "Tienda Nube", active: true, tooltipInfo: "Incluye integración con Tienda Nube." },
        { text: "Multicuit", active: false, tooltipInfo: "No permite facturar utilizando múltiples CUITs." },
        { text: "Percepciones Prov.", active: false, tooltipInfo: "No incluye gestión de percepciones provinciales." },
      ],
    },
    {
      name: "Intermedio",
      price: 18500,
      bestOption: "pequeñas y medianas empresas",
      benefits: [
        { text: "Asesoría prioritaria", active: true, tooltipInfo: "Asesoría rápida y eficaz." ,displayText: "prioritaria"},
        { text: "Usuarios", active: true, tooltipInfo: "Acceso para 6 usuarios. Sin contar vendedores", displayText: "hasta 6" },
        { text: "Vendedores", active: true, tooltipInfo: "Soporte para hasta 3 vendedores.", displayText: "hasta 3" },
        { text: "Gestión", active: true, tooltipInfo: "Compras, Proveedores y Estadísticas" },
        { text: "Portal de clientes", active: true, tooltipInfo: "Acceso a ventas y pagos" },
        { text: "Reportes Contables", active: true, tooltipInfo: "IVA, IIBB e Imp. Municipal" },
        { text: "App Mobile", active: true, tooltipInfo: "Incluye acceso a la aplicacion mobile." },
        { text: "Tienda Nube", active: true, tooltipInfo: "Incluye integración con Tienda Nube." },
        { text: "Multicuit", active: true, tooltipInfo: "Permite facturar con hasta 2 CUITs diferentes.", displayText: "hasta 2" },
        { text: "Percepciones Prov.", active: false, tooltipInfo: "No incluye gestión de percepciones provinciales." },
      ],
    },
    {
      name: "Avanzado",
      price: 23000,
      bestOption: "grandes empresas",
      benefits: [
        { text: "Asesoría personalizada", active: true, tooltipInfo: "Asesoría personalizada y detallada.",displayText: "personalizada" },
        { text: "Usuarios", active: true, tooltipInfo: "Acceso para 12 usuarios. Sin contar vendedores", displayText: "hasta 12 *" },
        { text: "Vendedores", active: true, tooltipInfo: "Soporte para hasta 9 vendedores.", displayText: "hasta 9 *" },
        { text: "Gestión", active: true, tooltipInfo: "Compras, Proveedores y Estadísticas" },
        { text: "Portal de clientes", active: true, tooltipInfo: "Acceso a ventas y pagos" },
        { text: "Reportes Contables", active: true, tooltipInfo: "IVA, IIBB e Imp. Municipal" },
        { text: "App Mobile", active: true, tooltipInfo: "Incluye acceso a la aplicacion mobile." },
        { text: "Tienda Nube", active: true, tooltipInfo: "Incluye integración con Tienda Nube." },
        { text: "Multicuit", active: true, tooltipInfo: "Permite facturar con hasta 6 CUITs diferentes.", displayText: "hasta 6 *" },
        { text: "Percepciones Prov.", active: true, tooltipInfo: "Gestión de percepciones provinciales incluida." },
      ],
    },
  ];

 export const pricingData: PricingCardProps[] = [
    {
      name: "Básico",
      price: 10500,
      bestOption: "monotributistas",
      benefits: [
        { text: "Asesoría prioritaria", active: true, tooltipInfo: "Asesoría rápida y eficaz." },
        { text: "1 Usuario", active: true, tooltipInfo: "Acceso para 1 usuario. Sin contar vendedores" },
        { text: "Tienda Nube", active: false, tooltipInfo: "No incluye integración con Tienda Nube." },
        { text: "1 vendedor", active: false, tooltipInfo: "No incluye soporte para múltiples vendedores." },
        { text: "App Mobile", active: false, tooltipInfo: "No incluye acceso a la aplicacion mobile." },
        { text: "Múltiples CUITs", active: false, tooltipInfo: "No permite facturar utilizando múltiples CUITs." },
        { text: "Percepciones Prov.", active: false, tooltipInfo: "No incluye gestión de percepciones provinciales." },
      ],
    },
    {
      name: "Inicial",
      price: 13500,
      bestOption: "negocios locales",
      benefits: [
        { text: "Asesoría prioritaria", active: true, tooltipInfo: "Asesoría rápida y eficaz." },
        { text: "3 usuarios", active: true, tooltipInfo: "Acceso para 3 usuarios. Sin contar vendedores" },
        { text: "Tienda Nube", active: true, tooltipInfo: "Incluye integración con Tienda Nube." },
        { text: "1 vendedor", active: false, tooltipInfo: "No incluye soporte para múltiples vendedores." },
        { text: "App Mobile", active: false, tooltipInfo: "No incluye acceso a la aplicacion mobile." },
        { text: "Múltiples CUITs", active: false, tooltipInfo: "No permite facturar utilizando múltiples CUITs." },
        { text: "Percepciones Prov.", active: false, tooltipInfo: "No incluye gestión de percepciones provinciales." },
      ],
    },
    {
      name: "Intermedio",
      price: 18500,
      bestOption: "pequeñas y medianas empresas",
      benefits: [
        { text: "Asesoría prioritaria", active: true, tooltipInfo: "Asesoría rápida y eficaz." },
        { text: "6 usuarios", active: true, tooltipInfo: "Acceso para 6 usuarios. Sin contar vendedores" },
        { text: "Tienda Nube", active: true, tooltipInfo: "Incluye integración con Tienda Nube." },
        { text: "3 vendedores", active: true, tooltipInfo: "Soporte para hasta 3 vendedores." },
        { text: "App Mobile", active: true, tooltipInfo: "Incluye acceso a la aplicacion mobile." },
        { text: "Múltiples CUITs", active: true, tooltipInfo: "Permite facturar con hasta 2 CUITs diferentes." },
        { text: "Percepciones Prov.", active: false, tooltipInfo: "No incluye gestión de percepciones provinciales." },
      ],
    },
    {
      name: "Avanzado",
      price: 23000,
      bestOption: "grandes empresas",
      benefits: [
        { text: "Asesoría personalizada", active: true, tooltipInfo: "Asesoría personalizada y detallada." },
        { text: "12 usuarios", active: true, tooltipInfo: "Acceso para 12 usuarios. Sin contar vendedores" },
        { text: "Tienda Nube", active: true, tooltipInfo: "Incluye integración con Tienda Nube." },
        { text: "9 Vendedores", active: true, tooltipInfo: "Soporte para hasta 9 vendedores." },
        { text: "App Mobile", active: true, tooltipInfo: "Incluye acceso a la aplicacion mobile." },
        { text: "Múltiples CUITs", active: true, tooltipInfo: "Permite facturar con hasta 6 CUITs diferentes." },
        { text: "Percepciones Prov.", active: true, tooltipInfo: "Gestión de percepciones provinciales incluida." },
      ],
    },
  ];

  export  const socialLinks = [
    { href: "https://www.facebook.com/fidelgestion", icon: Facebook },
    { href: "https://api.whatsapp.com/send?phone=543564222935", icon: Whatsapp },
    { href: "https://www.instagram.com/fidelsistema", icon: Instagram },
  ];
  
  export  const footerLinks = [
    {
      title: "Home",
      links: [
        { text: "Product Features", href: "#link1" },
        { text: "Benefits", href: "#link2" },
        { text: "How To Use", href: "#link3" },
        { text: "Key Features", href: "#link4" },
        { text: "Pricing", href: "#link5" },
        { text: "Testimonials", href: "#link6" },
        { text: "FAQ’s", href: "#link7" },
      ],
    },
    {
      title: "App",
      links: [
        { text: "Mobile App", href: "#link8" },
        { text: "Desktop App", href: "#link9" },
        { text: "How To Use", href: "#link10" },
      ],
    },
    {
      title: "All Pages",
      links: [
        { text: "Home", href: "#link11" },
        { text: "App", href: "#link12" },
        { text: "Blogs", href: "#link13" },
        { text: "Blogs Open", href: "#link14" },
        { text: "Contact", href: "#link15" },
        { text: "Privacy Policy", href: "#link16" },
        { text: "404", href: "#link17" },
      ],
    },
  ];
  
 export const appLinks = [
    {
      href: "https://play.google.com/store/apps/details?id=ar.com.fidel",
      icon: PlayStore,
      platform: "Google Play",
    },
    {
      href: "https://apps.apple.com/ar/app/fidel-gesti%C3%B3n/id1670120525",
      icon: Apple,
      platform: "App Store",
    },
  ];