# Plan: Quitar botón "99% Disponibilidad"

## Análisis
El usuario quiere eliminar el elemento visual tipo badge/botón que muestra "99% Disponibilidad" en la sección de Monitoreo dentro de `Services.astro`. Este elemento consiste en un `<div class="spotlight-metric">` con animación de contador.

## Estado Actual
Archivo: `src/components/Services.astro`

Elementos relacionados que deben eliminarse:

1. **Frontmatter** (línea 21): `metric: { value: 99, suffix: "%", label: "Disponibilidad garantizada" }` — dato que alimenta el badge
2. **HTML** (líneas 162-165): `<div class="spotlight-metric" data-value="99">...</div>` — el elemento visual
3. **CSS** (líneas 640-672): Estilos `.spotlight-metric`, `.metric-label`, `.metric-number`, `.metric-sub`
4. **CSS responsive** (líneas 852-858): Media query `@media (max-width: 992px)` contiene reglas para `.spotlight-metric`
5. **JavaScript** (líneas 969-1005): Observer que anima el contador del metric

## Tareas de Implementación (para revisión del usuario)
- [ ] Eliminar la propiedad `metric` del objeto Monitoreo en el frontmatter (línea 21)
- [ ] Eliminar el bloque HTML `<div class="spotlight-metric" data-value="99">...</div>` (líneas 162-165)
- [ ] Eliminar los estilos CSS `.spotlight-metric`, `.metric-label`, `.metric-number`, `.metric-sub` (líneas 640-672)
- [ ] Eliminar/ajustar la regla `.spotlight-metric` dentro del media query `@media (max-width: 992px)` (líneas 852-858)
- [ ] Eliminar el bloque de JavaScript del `IntersectionObserver` que anima el contador metric (líneas 969-1005)
- [ ] Ejecutar `bun run build` para verificar que no hay errores

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/048-quitar-boton-disponibilidad.md`
