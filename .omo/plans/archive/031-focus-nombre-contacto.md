# Plan: Auto-focus en campo "Tu nombre" al dar click en Contacto

## Análisis
Cuando el usuario da click en "Contacto" en el header, el smooth scroll lleva a la sección `#contacto`, pero no hay foco automático en el campo de nombre del formulario. Agregar un `focus()` mejoraría la UX al poner al usuario directamente en posición de escribir.

## Estado Actual
- `src/components/Header.astro`: El script de smooth scroll hace `scrollIntoView` y dispara el evento `set-feedback-category` al hacer click en "Contacto" (líneas ~466-485).
- `src/components/Feedback.astro`: El formulario tiene el campo `#name` (línea 27). No hay lógica de auto-focus.
- El `customEvent` `set-feedback-category` ya se dispara al hacer click en Contacto - este es el punto de extensión ideal.

## Tareas de Implementación (para revisión del usuario)
- [ ] En el listener del evento `set-feedback-category` dentro de Feedback.astro, agregar `document.getElementById('name')?.focus()` después de cambiar la categoría
- [ ] Verificar build

## Siguiente Paso
Usa /plan-go cuando estés listo para ejecutar el plan.
