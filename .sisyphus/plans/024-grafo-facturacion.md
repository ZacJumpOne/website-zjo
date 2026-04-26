# Plan: Botón para mostrar grafo de facturación en ERP Jump One

## Análisis

Necesitas agregar un botón en la sección de "Características" (features) del slug "erp-jump-one" que muestre la imagen `/images/grafoModuloFacturacion.png` de forma práctica (modal/lightbox) siguiendo buenas prácticas de frontend.

## Estado Actual

| Archivo | Propósito |
|---------|-----------|
| `src/data/portfolio.ts` | Define `PortfolioItem.features[]` - array de strings |
| `src/pages/solucion/[slug].astro` | Renderiza la página de detalle con features como lista de checks |

**Problema identificado**: Los features son simples strings en un array. Para agregar un botón interactivo necesitaríamos:
1. Modificar la estructura de datos para soportar un feature especial con acción
2. O detectar el feature específico y renderizar un componente especial

**Solución propuesta**: Modificar el array `features` para "Facturación electrónica" e insertar un botón que abre la imagen en un modal/lightbox.

## Tareas de Implementación (para revisión del usuario)

- [ ] **Agregar campo `featureAction` a `PortfolioItem`** en `src/data/portfolio.ts`:
  - Añadir campo opcional `featureAction?: { label: string; imageUrl: string; }` a la interfaz
  - En `erp-jump-one`, en el item "Facturación electrónica", agregar el `featureAction`

- [ ] **Crear componente Modal/Lightbox** para mostrar la imagen (usar Ant Design Modal)

- [ ] **Modificar `[slug].astro`** para:
  - Detectar si existe `featureAction` en un feature
  - Renderizar el feature con un botón que abra el modal
  - Mantener compatibilidad con features normales

- [ ] **Verificar build** con `bun run build`

## Siguiente Paso

Confirmar la estructura de datos propuesta antes de implementar.