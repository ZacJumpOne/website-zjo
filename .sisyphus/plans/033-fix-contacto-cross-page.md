# Plan: Fix Contacto category change from cross-page navigation

## Análisis
El cambio de categoría a "Soporte" funciona desde la página principal (via CustomEvent) pero NO funciona desde otras páginas porque al navegar a `/#contacto` la página carga de nuevo y el evento se pierde.

## Estado Actual
- Header.astro: Contacto `href="/#contacto"` con `data-cat="soporte"`
- Header.astro script: dispatch `CustomEvent` + smooth scroll (solo funciona same-page)
- Feedback.astro: escucha `CustomEvent` (solo funciona same-page)
- Feedback.astro: lee `?cat=` de URL (legacy, no se usa actualmente)

## Tareas de Implementación
- [ ] Header.astro script: al dar click en Contacto, guardar `soporte` en sessionStorage como respaldo cross-page
- [ ] Feedback.astro script: al cargar, leer sessionStorage primero, aplicar categoría si existe, luego limpiar

## Siguiente Paso
Ejecutar inmediatamente.
