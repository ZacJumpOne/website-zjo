# Plan: Video y Habilidades en Detalle de Portafolio

## Análisis

**Requerimiento**: Agregar a cada solución del portafolio:
1. Enlace a video demostrativo (YouTube)
2. Lista de habilidades/funcionalidades con checkmarks (5-6 items)

**Estado actual**: 
- `src/data/portfolio.ts` tiene: title, shortDescription, description, tag, iconName, imageUrl, bodyImage, bodyImageSize
- Faltan: videoUrl, features (array de habilidades)
- La página de detalle ([slug].astro) muestra solo imagen, título, tag y descripción larga

---

## Opción Recomendada

Agregar campos al archivo centralizado y renderizar en la página de detalle:

### 1. Actualizar interface en `src/data/portfolio.ts`:
```typescript
export interface PortfolioItem {
  // ...existing fields
  videoUrl?: string;        // YouTube URL (shorts/embed)
  features: string[];      // Array de habilidades (5-6 items)
}
```

### 2. Agregar datos de ejemplo:
- **ERP Jump One**: `videoUrl: "https://www.youtube.com/shorts/8rIouRrKlFA"`
- features: ["Cotizaciones", "Inventario en tiempo real", "Multi-moneda", "Pedidos y facturas", "Reportes", "Multi-sucursal"]

### 3. Actualizar página de detalle ([slug].astro):
- Mostrar video embebido o enlace
- Renderizar lista de features con checkmarks

---

## Tareas de Implementación

- [x] 1. Agregar campos `videoUrl` y `features` al interface en portfolio.ts
- [x] 2. Agregar datos a cada item (video y 5-6 features)
- [x] 3. Actualizar [slug].astro para mostrar video
- [x] 4. Actualizar [slug].astro para mostrar features con checkmarks
- [x] 5. Verificar build y funcionalidad

---

## Estados

✅ COMPLETADO - Implementado y verificado