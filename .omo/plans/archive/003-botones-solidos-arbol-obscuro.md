# Plan: Botones sólidos con color arbol-obscuro

## Análisis
El usuario solicita cambiar los botones "Ver Portafolio" (Hero.astro) y "Explorar soluciones" (Services.astro) para que tengan un color sólido usando `var(--arbol-obscuro, #047857)` en lugar de gradientes.

### Estado Actual
- **Hero.astro** (línea 613-626): `.btn-primary` usa gradiente `var(--gradient-primary-dark)` (de `arbol-claro` a `arbol-obscuro`)
- **Services.astro** (líneas 312-324): `.spotlight-cta` usa gradiente `linear-gradient(135deg, var(--arbol-claro), var(--arbol-obscuro))`
- **Services.astro** (líneas 594-601): `.sc-cta:hover` usa gradiente `linear-gradient(135deg, var(--arbol-claro), var(--arbol-obscuro))`

### Variable CSS
- `--arbol-obscuro: #196632` (definida en `src/styles/global.css` línea 2)

## Tareas de Implementación
- [x] Cambiar `.btn-primary` en `Hero.astro` para usar `background: var(--arbol-obscuro, #047857)` sólido (eliminar gradiente)
- [x] Cambiar `.spotlight-cta` en `Services.astro` para usar `background: var(--arbol-obscuro, #047857)` sólido (eliminar gradiente)
- [x] Cambiar `.sc-cta:hover` en `Services.astro` para usar `background: var(--arbol-obscuro, #047857)` sólido (eliminar gradiente en hover)
- [x] Ejecutar `bun run build` para validar cambios

## Resultados de Implementación

### Commit Inicial
- **Hash**: `0aded55`
- **Mensaje**: `chore: estado antes de implementar plan botones-solidos-arbol-obscuro`

### Cambios Aplicados
- `src/components/Hero.astro` - `.btn-primary`: Cambiado de gradiente `var(--gradient-primary-dark)` a sólido `var(--arbol-obscuro, #047857)`
- `src/components/Services.astro` - `.spotlight-cta`: Cambiado de gradiente a sólido `var(--arbol-obscuro, #047857)`
- `src/components/Services.astro` - `.sc-cta:hover`: Cambiado de gradiente a sólido `var(--arbol-obscuro, #047857)`

### Build Final
- **Estado**: ✓ Exitoso
- **Tiempo**: 20.55s
- **Páginas generadas**: 14
- **Sin errores de CSS o TypeScript**

---
📁 Nota: El color arbol-obscuro (#047857) es más oscuro que arbol-claro (#059669), proporcionando mejor contraste para texto blanco.
