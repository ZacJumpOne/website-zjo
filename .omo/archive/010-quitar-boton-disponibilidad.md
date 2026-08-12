# Plan 010: Quitar Botón de Disponibilidad

## Análisis
El usuario solicita **quitar el botón de disponibilidad** de la sección Services. 

Al leer `src/components/Services.astro`, se identifica que se refiere a:
- **Líneas 162-165**: `<div class="spotlight-metric" data-value="99">` que muestra "99%" y "Disponibilidad"
- Es la métrica destacada que aparece en la esquina inferior izquierda del spotlight

## Estado Actual
- **Archivo**: `src/components/Services.astro` (1036 líneas)
- **Elemento a eliminar**: Líneas 162-165 (spotlight-metric)
- **JS asociado**: Líneas 969-1005 (metric counter animation observer)
- **CSS asociado**: Líneas 640-672 (`.spotlight-metric`, `.metric-label`, `.metric-number`, `.metric-sub`)

## Tareas de Implementación

- [ ] **Eliminar HTML del spotlight-metric** (líneas 162-165):
  - Remover `<div class="spotlight-metric" data-value="99">...</div>`

- [ ] **Eliminar JS de metric counter** (líneas 969-1005):
  - Remover todo el bloque `// Metric counter animation` y su IntersectionObserver

- [ ] **Eliminar CSS de spotlight-metric** (líneas 640-672):
  - Remover `.spotlight-metric`, `.metric-label`, `.metric-number`, `.metric-sub`

- [ ] **Revisar array services** (línea 21):
  - Evaluar si mantener `metric: { value: 99, suffix: "%", label: "Disponibilidad garantizada" }` en Monitoreo
  - (Opcional) Mantener en JS para referencia futura, o eliminar

- [ ] **Ajustar posicionamiento del spotlight**:
  - `.spotlight-bleed` (línea 305) tiene `top: -40px; right: -40px;`
  - `.spotlight` (línea 289) tiene `overflow: visible` para que el metric sea visible
  - Al remover metric, evaluar si cambiar `overflow: visible` a `overflow: hidden`

- [ ] **Ejecutar bun run build** para verificar

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/010-quitar-boton-disponibilidad.md`
