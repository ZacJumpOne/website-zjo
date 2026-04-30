# Plan: Botones sólidos con color arbol-obscuro

## Análisis
El usuario solicita cambiar los botones "Ver Portafolio" (Hero.astro) y "Explorar soluciones" (Services.astro) para que tengan un color sólido usando `var(--arbol-obscuro, #047857)` en lugar de gradientes.

### Estado Actual
- **Hero.astro** (línea 613-626): `.btn-primary` usa gradiente `var(--gradient-primary-dark)` (de `arbol-claro` a `arbol-obscuro`)
- **Services.astro** (líneas 312-324): `.spotlight-cta` usa gradiente `linear-gradient(135deg, var(--arbol-claro), var(--arbol-obscuro))`
- **Services.astro** (líneas 594-601): `.sc-cta:hover` usa gradiente `linear-gradient(135deg, var(--arbol-claro), var(--arbol-obscuro))`

### Variable CSS
- `--arbol-obscuro: #196632` (definida en `src/styles/global.css` línea 2)

## Tareas de Implementación (para revisión del usuario)
- [ ] Cambiar `.btn-primary` en `Hero.astro` para usar `background: var(--arbol-obscuro, #047857)` sólido (eliminar gradiente)
- [ ] Cambiar `.spotlight-cta` en `Services.astro` para usar `background: var(--arbol-obscuro, #047857)` sólido (eliminar gradiente)
- [ ] Cambiar `.sc-cta:hover` en `Services.astro` para usar `background: var(--arbol-obscuro, #047857)` sólido (eliminar gradiente en hover)
- [ ] Ejecutar `bun run build` para validar cambios

## Siguiente Paso
Revisar el plan propuesto. Una vez confirmado, usar `/plan-go` para ejecutar las tareas de implementación.

---
📁 Nota: El color arbol-obscuro (#047857) es más oscuro que arbol-claro (#059669), proporcionando mejor contraste para texto blanco.
