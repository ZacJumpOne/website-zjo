# Plan: Agregar imagen elefante.webp al blog elefante.md

## Análisis
El usuario solicita colocar la imagen local `/public/images/elefante.webp` en el post del blog `src/content/blog/elefante.md`, manteniendo las mismas características que la imagen actual.

La imagen actual está definida en el frontmatter como `image: "https://picsum.photos/id/20/800/400"` (URL remota de 800x400px). La nueva imagen es `elefante.webp` (985x537px, formato WebP).

"Mismas características" se interpreta como: mismo uso (imagen de portada del post en el campo `image` del frontmatter), no necesariamente mismas dimensiones (la imagen actual es 800x400, la nueva es 985x537).

## Estado Actual
- Post del blog: `src/content/blog/elefante.md`
- Imagen actual en frontmatter: `image: "https://picsum.photos/id/20/800/400"`
- Imagen nueva disponible: `/public/images/elefante.webp`
- Ruta pública de la imagen: `/images/elefante.webp` (el directorio `/public` se sirve en la raíz del sitio)

## Tareas de Implementación (para revisión del usuario)
- [ ] Actualizar el campo `image` en el frontmatter de `src/content/blog/elefante.md` de la URL remota a `"/images/elefante.webp"`
- [ ] Verificar que la ruta de la imagen sea correcta y accesible

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/021-blog-elefante-image.md`
