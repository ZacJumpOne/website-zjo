# Plan: Agregar categoría Proyectos al feedback

## Análisis
El usuario quiere agregar una nueva opción "Proyectos" en el selector de categoría del formulario de feedback. Además, el enlace "Contacto" del encabezado debe seleccionar esta nueva categoría (en lugar de "Soporte" como lo hace actualmente).

## Estado Actual

### Feedback.astro (`src/components/Feedback.astro`)
- Línea 37-43: `<select>` con opciones: sugerencia (default), servicio, producto, soporte, otro
- Línea 163: Observer resetea categoría a `sugerencia` cuando la sección sale del viewport
- Línea 100-122: Lógica para leer categoría desde URL `?cat=` y `sessionStorage`

### Header.astro (`src/components/Header.astro`)
- Línea 12: `navItems` define Contacto con `cat: "soporte"`
- El `data-cat` se usa en Header.astro script (línea 478-482) para despachar `set-feedback-category`

## Tareas de Implementación (para revisión del usuario)

- [ ] Agregar `<option value="proyectos">Proyectos</option>` al select de categorías en Feedback.astro (antes de "otro")
- [ ] Cambiar `cat: "soporte"` → `cat: "proyectos"` en `navItems` de Header.astro
- [ ] Verificar que la lógica existente (`?cat=`, sessionStorage, custom event, IntersectionObserver reset) funciona con el nuevo valor sin modificaciones adicionales
- [ ] Ejecutar `bun run build` y confirmar que compila sin errores

## Siguiente Paso
Usa /plan-go cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/035-categoria-proyectos.md`
