# Plan: Corregir Enlace de Regreso en Blog Index

## Análisis

El usuario aclara un punto fundamental que malinterpreté:

**Flujo correcto:**
1. Usuario está en página principal (`/`) con el footer visible (`id="footer"`)
2. Hace clic en "Blog" en el Footer.astro → Va a `/blog`
3. En `/blog` (index.astro), hace clic en "Volver"
4. **Debe regresar a `/#footer`** (donde fue llamado)

**Error en mi corrección anterior (plan 016):**
- Cambié incorrectamente `href="/#footer"` por `href="/blog"`
- Esto hace que el enlace "Volver" en `/blog` vaya a `/blog` (¡la misma página!)
- El usuario dice: "en el anterior corrección lo habías hecho bien" → Se refiere al estado ORIGINAL que tenía `href="/#footer"`

**Estado que debe restaurarse en `blog/index.astro`:**
- Enlace "Volver" debe apuntar a `href="/#footer"` (regresa a la página principal, sección footer)
- Texto debe ser "Volver" (no "Volver a Blog")

## Estado Actual

- ❌ `src/pages/blog/index.astro` - Enlace "Volver" va a `href="/blog"` (incorrecto, lleva a la misma página)
- ✅ `src/pages/blog/[...slug].astro` - Enlaces "Volver" van a `href="/blog"` (correcto, porque desde un artículo se regresa al índice del blog)

## Tareas de Implementación (para revisión del usuario)

- [ ] En `blog/index.astro`: Cambiar `href="/blog"` por `href="/#footer"` en el enlace "Volver" (restaurar estado original que era correcto)
- [ ] Verificar que `bun run build` pasa sin errores

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/017-fix-blog-index-backlink.md`
