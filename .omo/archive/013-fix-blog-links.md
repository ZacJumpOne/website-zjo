# Plan: Corrección de enlaces de Blog

## Análisis
El usuario solicita:
1. **Quitar el link "Blog" del menú del Header** - Actualmente existe en la navegación principal (línea 12 de Header.astro)
2. **El blog ya está referenciado en el Footer.astro** - En la sección "Empresa" (línea 37) está apuntando a `/construyendo` en lugar de `/blog`
3. **Corregir el enlace en el Footer** - Cambiar el href de `/construyendo` a `/blog` donde ya está el espacio reservado

## Estado Actual
- ✅ `src/content/config.ts` - Existe con esquema de blog configurado
- ✅ `src/content/blog/*.md` - Archivos Markdown creados
- ✅ `src/pages/blog/index.astro` - Página de listado con masonry
- ✅ `src/pages/blog/[...slug].astro` - Página individual
- ❌ Header.astro línea 12: Tiene `{ key: "blog", label: "Blog", href: "/blog" }` que debe eliminarse
- ⚠️ Footer.astro línea 37: `<li><a href="/construyendo">Blog</a></li>` apunta a página incorrecta, debe ser `/blog`

## Tareas de Implementación (para revisión del usuario)
- [ ] Eliminar el objeto `{ key: "blog", label: "Blog", href: "/blog" }` del array `navItems` en Header.astro (línea 12)
- [ ] Cambiar en Footer.astro la línea 37: `href="/construyendo"` por `href="/blog"` para apuntar a la sección de blog real
- [ ] Verificar que `bun run build` pasa sin errores

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/013-fix-blog-links.md`
