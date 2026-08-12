# Plan: Corregir Header, Footer y Enlaces de Regreso en Blog

## Análisis

Detectaron dos problemas principales al comparar con `faqs.astro`:

**Problema 1: Falta Header y Footer en blog**
- `faqs.astro` (líneas 26 y 60) incluye `<Header />` y `<Footer />` explícitamente
- `blog/index.astro` y `blog/[...slug].astro` NO incluyen Header ni Footer
- El `Layout.astro` envuelve el contenido pero no incluye automáticamente Header/Footer

**Problema 2: Enlace de regreso incorrecto**
- Actualmente ambos archivos de blog tienen: `<a href="/#footer">` 
- Esto lleva a la página principal (index) con ancla al footer
- Debería ser `<a href="/blog">` para regresar al índice del blog

**Estado actual:**
- `src/pages/blog/index.astro` - Sin Header/Footer, back-link incorrecto
- `src/pages/blog/[...slug].astro` - Sin Header/Footer, back-link incorrecto
- `src/pages/faqs.astro` - Correcto: tiene Header, Footer y back-link a `/#footer` (que es su página principal)

## Estado Actual

- ✅ `src/pages/faqs.astro` - Tiene Header/Footer, back-link correcto a `/#footer`
- ❌ `src/pages/blog/index.astro` - Falta Header/Footer, back-link va a `/#footer` (incorrecto)
- ❌ `src/pages/blog/[...slug].astro` - Falta Header/Footer, back-link va a `/#footer` (incorrecto)

## Tareas de Implementación (para revisión del usuario)

- [ ] Agregar `<Header />` y `<Footer />` a `blog/index.astro` (antes del `<main>` y después del `</main>`)
- [ ] Cambiar enlace de regreso en `blog/index.astro`: de `href="/#footer"` a `href="/blog"` y texto "Volver a Blog"
- [ ] Agregar `<Header />` y `<Footer />` a `blog/[...slug].astro` (antes del `<article>` y después del `</article>`)
- [ ] Cambiar enlaces de regreso en `blog/[...slug].astro`: de `href="/#footer"` a `href="/blog"` (header y footer)
- [ ] Verificar que `bun run build` pasa sin errores

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/015-blog-header-footer-backlink.md`
