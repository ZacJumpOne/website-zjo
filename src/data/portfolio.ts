export interface PortfolioItem {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  tag: string;
  iconName: string;
  imageUrl: string;
  bodyImage?: string;
  bodyImageSize?: string;
  videoUrl?: string;
  features: string[];
}

export const portfolioData: PortfolioItem[] = [
  {
    slug: "erp-jump-one",
    title: "ERP Jump One",
    shortDescription: "Controle todos sus procesos de una forma optima, segura, rápida y eficaz.",
    description:
      "Controle todos sus procesos de una forma optima, segura, rápida y eficaz. Nuestro sistema es modular y está diseñado para controlar sus procesos sin islas de información,  que se realizan al cambiar entre estados, de esta forma nos aseguramos que su evolución sea constante y nunca quede obsoleto.",
    tag: "ERP",
    iconName: "BankOutlined",
    imageUrl: "/images/web_erp3.png",
    bodyImage: "/images/hoja_arbol.png",
    bodyImageSize: "60%",
    videoUrl: "https://www.youtube.com/shorts/0sI4JObtvOE",
    features: [
      "Diseño de sus procesos",
      "Eventos que se realizan entre cambios de estado ( A -> B -> C)",
      "Pre diseño de plantillas para esas cotizaciones repetitivas",
      "Control de costos",
      "Control del margen de utlidad",
      "Inventario real al momento de cotizar",
      "Ubicaciones de sus productos",
      "Pedimentos de importación",      
      "Facturación electrónica",
      "Control de anticipos",
      "SAT - Clasificacion de productos por exclusión, logrando una adminsitración rapida",
      "Report Jump One, todo un set de reportes analíticos y personalizados",
      "Finanzas",
      "etc.",
    ],
  },
  {
    slug: "boutique",
    title: "Boutique",
    shortDescription: "Controle el manejo de sus productos por talla, colores, tallas y colores.",
    description:
      "Controle sin complicaciones todas las variantes de temporadas para el manejo de sus productos, con una gestion completa para tiendas de moda.",
    tag: "Tallas y Colores",
    iconName: "SkinOutlined",
    imageUrl: "/images/boutique.png",
    bodyImage: "/images/hoja_boutique.png",
    bodyImageSize: "60%",
    videoUrl: "https://www.youtube.com/shorts/8rIouRrKlFA",
    features: [
      "Control de básicos",
      "Control de tallas",
      "Control de colores",
      "Control de tallas y colores",
      "Impresion de codigos de barras",
      "Control de precios",
      "POS (Point of Sales, puntos de ventas)",
      "Traspasos entre diferentes almacenes (POS)",
      "Inventario real desde POS",
      "Devoluciones (POS)",
      "Alta rapida de productos desde POS",
      "Margenes de utlidad",
      "Control de Costos",
      "Multiples imagenes para venta en linea",
      "etc.",
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    shortDescription: "Control de almacenes y puntos de venta (POS).",
    description:
      "Control de almacenes y puntos de venta. Rotación de inventario real. Múltiples sucursales, transferencias entre almacenes, punto de venta intuitivo.",
    tag: "Almacenes y POS",
    iconName: "ShopOutlined",
    imageUrl: "/images/retail.png",
    bodyImage: "/images/hoja_saludo.png",
    features: [
      "POS (Point of Sales, Punto de ventas)",
      "Multi-monedas",
      "Multi-almacén",
      "Transferencias entre almacenes desde POS",
      "Impresion de código de barras",
      "Reportes por sucursales",
      "Corte de caja",
      "Configuracioes personalizadas por usuario",
      "Control de Ubicaciones",
      "etc.",
    ],
  },
  {
    slug: "produccion",
    title: "Producción",
    shortDescription: "Control de producción con BOM (Bill of material), costos y materiales.",
    description:
      "Control de producción con BOM (Bill of material), costos y materiales. con una trazabilidad completa de nuestras ordenes de producción.",
    tag: "BOM y Materiales",
    iconName: "ExperimentOutlined",
    imageUrl: "/images/zapato.png",
    bodyImage: "/images/hoja_produccion.png",
    features: [
      "Lista de materiales (BOM)",
      "Órdenes de producción",
      "Trazabilidad",
      "Control de calidad",
      "Control de costos",
      "Control de precios",
      "Manejo de entrada/salida de almacén efectivo",
      "Composicion, tareas y receta",
      "etc.",
    ],
  },
  {
    slug: "construccion",
    title: "Construcción",
    shortDescription: "Control de proyectos de construcción (Obras).",
    description:
      "Control de proyectos de construcción (materiales, precios, costos). Seguimiento de avance de la obra óptimo, para dar salidas de notas de venta y facturacion en forma controlada.",
    tag: "Proyectos",
    iconName: "BuildOutlined",
    imageUrl: "/images/construccion.png",
    bodyImage: "/images/hoja_construccion.png",
    bodyImageSize: "55%",
    features: [
      "Cotizaciones",
      "Presupuestos",
      "Control de avance de obra por montos",
      "Control de facturacion por obra",
      "Control de notas de ventas por obra",
      "Control de costos",
      "Control de margenes",
      "Inventario consumido por obra",
      "Inventario apartado por obra",
      "Pedir para obra (Materiales)",
      "Consulta de obra vs obras (materiales)",
      "etc.",
    ],
  },
  {
    slug: "desarrollo-a-medida",
    title: "Desarrollo a la Medida",
    shortDescription: "Desarrollamos software a la medida.",
    description:
      "Desarrollamos software a la medida con la experiencia de +25 años, adaptamos nuestra tecnología a sus necesidades para hacer realidad sus proyectos.",
    tag: "Personalizado",
    iconName: "CodeOutlined",
    imageUrl: "/images/desarrollador.png",
    bodyImage: "/images/hoja_engrane.png",
    features: [
      "Análisis de requisitos",      
      "Entregas por sprint (SCRUM)",
      "Control de tareas",
      "Diseño personalizado",
      "Base de datos dedicada",
      "Soporte continuo",
      "Integracion natural a cada proceso",
      "Capacitación",
      "Conocimiento de CMMI (En una evaluacion aprobada nivel 2)",
      "etc."
    ],
  },
];