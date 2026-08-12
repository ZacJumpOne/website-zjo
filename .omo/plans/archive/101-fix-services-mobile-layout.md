# Plan: Fix layout de secondary cards en móvil

## Análisis

En `src/components/Services.astro`, la sección de servicios tiene tres cards:

1. **Spotlight (Monitoreo)** — se adapta correctamente en móvil porque su grid colapsa a `1fr` en `@media (max-width: 992px)` (línea 783).
2. **Secondary cards (Respuesta y Control)** — NO se adaptan. El contenedor `.secondary-grid` tiene `grid-template-columns: 1fr 1fr` fijo, sin media query que lo cambie en móvil.

En pantallas pequeñas, cada secondary card queda forzada a ~50% del viewport, haciendo que su contenido se comprima y se vea más angosto que la spotlight card.

## Estado Actual

- **Archivo:** `src/components/Services.astro`
- **Breakpoints existentes:** 992px y 768px
- **Selector problemático:** `.secondary-grid` (línea 614-618)
- **Media query 768px:** ajusta padding de `.secondary-card` pero no cambia el grid layout

## Tareas de Implementación

- [x] Agregar en `@media (max-width: 768px)` que `.secondary-grid` pase a `grid-template-columns: 1fr`
- [x] Verificar que en desktop siga siendo `1fr 1fr` (sin cambios)
- [x] Probar visualmente que ambas secondary cards ocupen todo el ancho en móvil, igual que la spotlight

## Resultados de Implementación

- **Commit inicial:** `cfae962` — `chore: estado antes de implementar plan 101-fix-services-mobile-layout`
- **Cambios aplicados:**
  - `src/components/Services.astro` — agregado `.secondary-grid { grid-template-columns: 1fr; }` dentro del media query `@media (max-width: 768px)`
- **Build final:** ✅ Exitoso — 15 páginas generadas en 16.73s
- **Notas:** En desktop el grid sigue en `1fr 1fr` (sin cambios). En móvil ahora ambas secondary cards ocuparán el ancho completo.
