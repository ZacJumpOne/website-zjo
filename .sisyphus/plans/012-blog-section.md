# Plan: Sección de Blog

## Análisis
Crear una sección de blog completa en el sitio web de Zero Jump One siguiendo la estructura de Astro Content Collections. El blog debe tener:
- Posts en Markdown con frontmatter (ya definido en `src/content/config.ts`)
- Página de listado con diseño masonry
- Página individual para cada artículo
- Integración con el diseño existente (light theme, Ant Design, variables CSS)

## Estado Actual
- ✅ `src/content/config.ts` existe con esquema de blog configurado (title, date, image, excerpt, tags)
- ❌ Archivos Markdown en `src/content/blog/` no existen
- ❌ Páginas en `src/pages/blog/` no existen
- El proyecto usa Astro 4.x con React y Ant Design 5.x
- Estilo: light theme, variables CSS definidas en `global.css`, fuente Inter
- Idioma del sitio: Español

## Tareas de Implementación (para revisión del usuario)

- [ ] Crear archivos Markdown de ejemplo en `src/content/blog/` (mi-primer-articulo.md, otro-articulo.md, tercer-post.md) con frontmatter que coincida con el schema: title, date, image, excerpt, tags
- [ ] Crear `src/pages/blog/index.astro` con diseño masonry para listar todos los artículos, usando `getCollection('blog')` de Astro, ordenados por fecha descendente
- [ ] Crear `src/pages/blog/[...slug].astro` para renderizar artículos individuales usando `getEntry('blog', slug)` y `<Content />` de Astro
- [ ] Agregar enlace "Blog" al componente `Header.astro` en el menú de navegación
- [ ] Verificar que `bun run build` pasa sin errores

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/012-blog-section.md`
