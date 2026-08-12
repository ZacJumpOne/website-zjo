# Plan: Agregar autor y grado académico al blog

## Análisis
El usuario quiere mostrar autor, grado académico y fecha en los posts del blog. La fecha ya existe y se muestra correctamente. Solo falta agregar los campos de `author` (autor) y `academicDegree` (grado académico) al schema de contenido, al frontmatter del post, y a las plantillas de visualización.

## Estado Actual
- **Schema**: `src/content/config.ts` — define `title`, `date`, `image`, `excerpt`, `tags`. Sin author ni academicDegree.
- **Post individual**: `src/pages/blog/[...slug].astro` — muestra fecha, título, tags, imagen, contenido. No muestra autor.
- **Lista de posts**: `src/pages/blog/index.astro` — muestra fecha, título, excerpt, tags. No muestra autor.
- **Primer post**: `src/content/blog/elefante.md` — tiene fecha pero no author ni academicDegree.

## Tareas de Implementación (para revisión del usuario)
- [ ] Agregar campos `author` (string) y `academicDegree` (string, optional) al schema en `src/content/config.ts`
- [ ] Agregar `author` y `academicDegree` al frontmatter de `src/content/blog/elefante.md`
- [ ] Modificar `src/pages/blog/[...slug].astro` para mostrar autor y grado académico debajo del título o junto a la fecha
- [ ] Modificar `src/pages/blog/index.astro` para mostrar autor en las tarjetas del listing

## Siguiente Paso
El usuario debe confirmar si quiere proceder con estos cambios y decidir los valores de autor y grado académico para el post elefante.md.
