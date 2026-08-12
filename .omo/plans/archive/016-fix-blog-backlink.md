# Plan: Corregir Enlace de Regreso en Blog

## Análisis

El usuario identificó correctamente el problema:

**Flujo actual incorrecto:**
1. Usuario está en `blog/[slug]` (artículo individual)
2. Hace clic en "Volver"
3. Actualmente va a `/#footer` (página principal, sección footer)
4. ❌ Debería ir a `/blog` (índice del blog)

**El error:**
- En `blog/index.astro` y `blog/[...slug].astro`, el enlace "Volver" apunta a `href="/#footer"`
- Esto está mal porque cuando el usuario está navegando por el blog, "Volver" debe regresar al índice del blog (`/blog`), no a la página principal

**Comparación con FAQs:**
- En `faqs.astro`, el enlace va a `/#footer` porque FAQs está en la página principal (`/`), entonces "Volver" regresa al footer de la misma página
- En el blog, que es una sección separada, "Volver" debe regresar al índice de esa misma sección (`/blog`)

## Estado Actual

- ❌ `src/pages/blog/index.astro` - Enlace "Volver" va a `/#footer` (incorrecto)
- ❌ `src/pages/blog/[...slug].astro` - Enlaces "Volver" van a `/#footer` (incorrecto)
- ✅ `src/pages/faqs.astro` - Enlace "Volver" va a `/#footer` (correcto, porque FAQs está en la página principal)

## Tareas de Implementación (para revisión del usuario)

- [ ] Cambiar en `blog/index.astro`: `href="/#footer"` por `href="/blog"` en el enlace "Volver"
- [ ] Cambiar en `blog/[...slug].astro`: `href="/#footer"` por `href="/blog"` en ambos enlaces "Volver" (header y footer)
- [ ] Verificar que `bun run build` pasa sin errores

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/016-fix-blog-backlink.md`
