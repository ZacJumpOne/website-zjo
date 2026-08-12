# Plan: Crear blog post "Piensa y trabaja… en esta tierra de dioses del código"

## TL;DR (For humans)
Crear un nuevo artículo de blog usando el contenido existente, con la imagen convertida a WebP.

## Context
- El contenido ya existe en `src/content/blog/Piensa y trabaja… en esta tierra de dioses del código.md`
- La imagen `ohmyopencode.png` ya fue convertida a WebP (`ohmyopencode.webp`)
- El PNG original ya fue eliminado
- Falta crear el archivo MDX con frontmatter

## Tasks

### 1. Crear archivo MDX con frontmatter
- **File**: `src/content/blog/piensa-y-trabaja.mdx`
- **Content**: Usar el contenido del archivo markdown existente
- **Frontmatter**:
  ```yaml
  ---
  title: "Piensa y trabaja… en esta tierra de dioses del código"
  date: 2026-08-11
  author: "Ing. Isaac Hernandez Castro"
  academicDegree: "Master en Dirección de Ingeniería de Software"
  image: "/images/ohmyopencode.webp"
  excerpt: "Explora cómo los agentes de IA como Prometheus, Atlas y Sisyphus están transformando la forma en que trabajamos, creando equipos de desarrollo más inteligentes y colaborativos."
  tags: ["inteligencia-artificial", "agentes", "desarrollo", "opencode", "productividad"]
  ---
  ```

### 2. Verificar que el blog aparezca en el listado
- Ejecutar `bun run dev` y verificar que el post aparezca en `/blog`
- Verificar que la imagen se muestra correctamente

## Acceptance Criteria
- [x] Archivo MDX creado con frontmatter correcto
- [x] Imagen WebP referenciada correctamente
- [x] Blog post aparece en el listado de blogs
- [x] Imagen se muestra en el blog post

## Commit
- Message: "feat(blog): add 'Piensa y trabaja' post with WebP image"
- Files: `src/content/blog/piensa-y-trabaja.mdx`
