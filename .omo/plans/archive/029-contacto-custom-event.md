# Plan: Contacto con evento custom para categoría

## Análisis
El click en Contacto hace smooth scroll pero no cambia categoría. Usaremos un evento custom para comunicar Header.astro con Feedback.astro sin sessionStorage ni reload.

## Estado Actual
- Header.astro: Contacto href = `/#contacto` con `data-cat="soporte"`
- Feedback.astro script: Lee `?cat=` de URL al cargar

## Tareas de Implementación (para revisión del usuario)
- [ ] Header.astro script: Al clickear Contacto, dispatch `CustomEvent('set-feedback-category', { detail: 'soporte' })`
- [ ] Feedback.astro script: Agregar listener para `set-feedback-category` y cambiar select al recibir el evento

## Siguiente Paso
Confirmar con `/plan-go` para ejecutar.
