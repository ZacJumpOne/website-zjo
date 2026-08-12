# Plan: Fix Contacto - cambiar categoría con hashchange

## Análisis
El click en Contacto hace smooth scroll pero NO cambia la categoría a Soporte. Esto es porque el script de Feedback.astro se ejecuta solo al cargar la página. Al ser un hash link (mismo dominio, sin reload), el script no se re-ejecuta.

## Estado Actual
- Header.astro: Contacto href = `/#contacto` con `data-cat="soporte"`
- Header.astro script: Al clickear, guarda `data-cat` en sessionStorage y hace smooth scroll
- Feedback.astro script: Lee sessionStorage al cargar la página (solo funciona con reload)

## Tareas de Implementación (para revisión del usuario)
- [ ] Agregar listener `hashchange` en Feedback.astro: cuando hash sea `#contacto`, leer sessionStorage y cambiar categoría a "soporte"

## Siguiente Paso
Confirmar con `/plan-go` para ejecutar.
