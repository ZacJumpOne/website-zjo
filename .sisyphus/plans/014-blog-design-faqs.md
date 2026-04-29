# Plan: Aplicar Diseño de FAQs al Blog

## Análisis

El usuario solicita aplicar el diseño visual de `faqs.astro` al blog. Características a transferir:

**De faqs.astro (líneas 64-271):**
1. **Colores y degradados**: Fondo `#f8fafc`, gradientes `linear-gradient(90deg, #f0fdf4 0%, #f8fafc 100%)` para hover
2. **Efecto de entrada**: `animation: fadeInUp 0.6s ease forwards` con delays escalonados (`.faq-card:nth-child(n)`)
3. **Enlace de regreso**: `<a href="/#footer" class="back-link">` con `ArrowLeftOutlined` icon

**Archivos a modificar:**
- `src/pages/blog/index.astro` - Página de listado masonry
- `src/pages/blog/[...slug].astro` - Página individual de artículo

**Restricciones:**
- ✅ NO tocar la altura de imagen (`.post-image { height: 200px }` se mantiene)
- ✅ Agregar efecto de entrada (fadeInUp)
- ✅ Enlace de regreso con estilo de faqs
- ✅ Aplicar degradados y colores de faqs

## Estado Actual

- `src/pages/faqs.astro` - Tiene el diseño de referencia con animaciones y degradados
- `src/pages/blog/index.astro` - Listado masonry, fondo blanco, sin animaciones
- `src/pages/blog/[...slug].astro` - Página individual, sin animaciones, back-link básico

## Tareas de Implementación (para revisión del usuario)

- [ ] Aplicar diseño visual de faqs.astro a `blog/index.astro`: fondo #f8fafc, degradados en hover, efecto fadeInUp con delays escalonados en .masonry-item, enlace "Volver" con ArrowLeftOutlined
- [ ] Aplicar diseño visual de faqs.astro a `blog/[...slug].astro`: fondo #f8fafc, efecto fadeInUp al .container, enlace "Volver" con ArrowLeftOutlined estilizado
- [ ] Verificar que `bun run build` pasa sin errores

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/014-blog-design-faqs.md`
