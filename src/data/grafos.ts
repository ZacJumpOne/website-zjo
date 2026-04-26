export interface GrafItem {
  id: number;
  imageUrl: string;
  title: string;
  description?: string;
}

export const grafosData: GrafItem[] = [
  { id: 1, imageUrl: "/images/grafosModuloFacturacion.jpg", title: "Proceso Evolutivo de Facturación" },
  { id: 2, imageUrl: "/images/inventario.jpg", title: "Carga de Inventario (Excel -> Mov. Inv. -> Inventario)" },
  { id: 3, imageUrl: "/images/auditoria_lp.jpg", title: "Auditoria Lista Precios" },
  { id: 4, imageUrl: "/images/ventas.jpg", title: "Ventas (Punto de Venta, Cotizaciones)" },
  { id: 5, imageUrl: "/images/grafosModuloFacturacion.jpg", title: "Módulo Recursos" },
  { id: 6, imageUrl: "/images/grafosModuloFacturacion.jpg", title: "Módulo Reportes" },
  { id: 7, imageUrl: "/images/auditoria_pos.jpg", title: "Auditoria Punto de Venta (Pagos)" },
  { id: 8, imageUrl: "/images/grafosModuloFacturacion.jpg", title: "Módulo Seguridad" },
  { id: 9, imageUrl: "/images/grafosModuloFacturacion.jpg", title: "Módulo Configuración" },
  { id: 10, imageUrl: "/images/grafosModuloFacturacion.jpg", title: "Módulo Dashboard" },
];