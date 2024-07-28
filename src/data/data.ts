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
        { text: "Múltiples CUIT", active: false, tooltipInfo: "Facturar utilizando múltiples CUITs." },
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
        { text: "Múltiples CUIT", active: false, tooltipInfo: "No permite facturar utilizando múltiples CUITs." },
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
        { text: "Múltiples CUIT", active: false, tooltipInfo: "No permite facturar utilizando múltiples CUITs." },
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
        { text: "Múltiples CUIT", active: true, tooltipInfo: "Permite facturar con hasta 2 CUITs diferentes." },
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
        { text: "Múltiples CUIT", active: true, tooltipInfo: "Permite facturar con hasta 6 CUITs diferentes." },
        { text: "Percepciones Prov.", active: true, tooltipInfo: "Gestión de percepciones provinciales incluida." },
      ],
    },
  ];