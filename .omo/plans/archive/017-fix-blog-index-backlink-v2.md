# Plan: Restaurar Enlace de Regreso en Blog Index

## Análisis

El usuario aclara que **en el plan 015 hice bien la corrección originalmente**:

**Flujo correcto:**
1. Usuario está en página principal (`/`) con footer visible (`id="footer"`)
2. Hace clic en "Blog" en el Footer.astro → Va a `/blog`
3. En `/blog` (index.astro), hace clic en "Volver"
4. **Debe regresar a `/#footer`** (a la página principal, sección footer)

**Error en mi plan 016:**
- Incorrectamente cambié `href="/#footer"` por `href="/blog"` en `blog/index.astro`
- Esto hace que "Volver" en `/blog` vaya a `/blog` (¡la misma página!)

**Estado que debe resturarse:**
- `blog/index.astro` línea 32: Actualmente `href="/blog"` → Debe ser `href="/#footer"` ✅
- `blog/[...slug].astro`: Se mantiene `href="/blog"` ✅ (porque desde un artículo sí debe regresar al índice del blog)

## Estado Actual

- ❌ `src/pages/blog/index.astro` - Enlace "Volver" va a `href="/blog"` (incorrecto, debe ser `/#footer`)
- ✅ `src/pages/blog/[...slug].astro` - Enlaces "Volver" van a `href="/blog"` (correcto)
- ✅ `src/pages/faqs.astro` - Enlace "Volver" va a `/#footer` (correcto)

## Tareas de Implementación (para revisión del usuario)

- [ ] En `blog/index.astro`: Cambiar `href="/blog"` por `href="/#footer"` en el enlace "Volver" (restaurar estado correcto del plan 015)
- [ ] Verificar que `bun run build` pasa sin errores

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/017-fix-blog-index-backlink-v2.md`
