export interface ProcesoItem {
  id: number;
  imageUrl: string;
  title: string;
  description?: string;
}

export const procesosData: ProcesoItem[] = [
  { id: 1, imageUrl: "/images/grafosModuloFacturacion.webp", title: "Proceso Evolutivo de Facturación" },
  { id: 2, imageUrl: "/images/inventario.webp", title: "Carga de Inventario (Excel -> Mov. Inv. -> Inventario)" },
  { id: 3, imageUrl: "/images/auditoria_lp.webp", title: "Auditoria Lista Precios" },
  { id: 4, imageUrl: "/images/requisiciones.webp", title: "Proceso de Requisiciones" },
  { id: 5, imageUrl: "/images/implementacion_x.webp", title: "Control de Implementaciones" },
  { id: 6, imageUrl: "/images/antivirus.webp", title: "Recomendaciones de mejoras (antivirus)" },
  { id: 7, imageUrl: "/images/auditoria_pos.webp", title: "Auditoria Punto de Venta (Pagos)" },
  { id: 8, imageUrl: "/images/pos_venta.webp", title: "Diagrama de Flujo: Punto de Venta (Ventas)" },
  { id: 9, imageUrl: "/images/facturaEntregado.webp", title: "Evolucion Estatus Procesos Factura" },
  { id: 10, imageUrl: "/images/scrum.webp", title: "Seguimiento de Tareas (Metodologia: Scrum)" },
  { id: 11, imageUrl: "/images/sdd.webp", title: "Estamos a la Vanguardia, nuestra página la generamos con AI/SDD" },
];