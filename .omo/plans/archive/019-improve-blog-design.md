# Plan: Mejorar Diseño del Blog

## Análisis

El blog es funcional pero tiene estética **genérica de SaaS** sin personalidad visual.

**Problemas identificados:**

1. **Tipografía Genérica (Crítico)**
   - ❌ Usa **Inter** en todo el blog (prohibido por skill frontend-design)
   - ✅ Tienes `Noticia Text` (serif) en global.css pero **no se usa en el blog**
   - Archivos afectados: Layout.astro (line 25), blog/index.astro (line 19), blog/[...slug].astro (line 19)

2. **Diseño Masonry Predecible**
   - ✅ Masonry de 3 columnas funciona
   - ❌ Altura fija de imagen: `height: 200px`
   - ❌ Todas las cards se ven idénticas
   - ❌ Sin variación de énfasis visual

3. **Falta de Micro-interacciones**
   - ✅ Hover básico (translateY(-4px))
   - ❌ Sin efectos de entrada variados
   - ❌ Tags planos sin personalidad
   - ❌ Fecha poco legible (gris claro #94a3b8)

4. **Contenido**
   - ❌ No hay paginación
   - ❌ No hay posts relacionados en `[...slug].astro`
   - ❌ Falta indicador de tiempo de lectura

## Estado Actual

- ✅ Blog funcional con masonry grid
- ✅ timeZone: "UTC" configurado (fix reciente)
- ❌ Usa Inter (tipografía genérica prohibida)
- ❌ `Noticia Text` disponible pero no implementado
- ❌ Imágenes: usuario las cambiará manualmente después

## Tareas de Implementación

- [ ] **Tarea 1: Tipografía Distintiva**
  - En `src/pages/blog/index.astro`: Cambiar `fontFamily` en antdConfig de Inter a combinación con `Noticia Text`
  - Usar `Noticia Text` para títulos de posts (clase `font-brand`)
  - Mantener sans-serif para UI pequeña (tags, fecha)
  - Actualizar `src/layouts/Layout.astro` para no cargar Inter (o cargar ambas fuentes)

- [ ] **Tarea 2: Diseño Visual Mejorado**
  - En `src/pages/blog/index.astro`: Quitar `height: 200px` fija, usar aspect-ratio o auto-height
  - Agregar variación de tamaños en masonry (primera card más grande)
  - Mejorar contraste de fecha (cambiar de `#94a3b8` a `#64748b` o similar más legible)

- [ ] **Tarea 3: Micro-interacciones**
  - Agregar transformaciones en tags al hover (scale, color change)
  - Efecto de lectura estimada o tiempo de lectura en cards
  - Transiciones más elaboradas en masonry items (staggered animations)

- [ ] **Tarea 4: Mejoras de Contenido**
  - Agregar tiempo de lectura estimado en `[...slug].astro`
  - Agregar sección "Posts relacionados" al final de `[...slug].astro`
  - (Opcional) Agregar paginación si hay más de 10 posts

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/019-improve-blog-design.md`
