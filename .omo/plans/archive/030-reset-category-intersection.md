# Plan: Reset categoría a Sugerencia al salir de Contacto

## Análisis
Cuando el usuario navega a otras secciones (Servicios, Clientes) y luego vuelve a hacer scroll a la sección Feedback, la categoría debe regresar a "Sugerencia" (su valor base). Solo cuando viene desde el link "Contacto" debe ser "Soporte".

## Estado Actual
- Feedback.astro escucha `set-feedback-category` y cambia a "soporte"
- No hay lógica para resetear a "sugerencia" cuando se sale de la sección

## Tareas de Implementación (para revisión del usuario)
- [ ] Agregar IntersectionObserver en Feedback.astro: cuando la sección de feedback salga del viewport, resetear categoría a "sugerencia"

## Siguiente Paso
Confirmar con `/plan-go` para ejecutar.
