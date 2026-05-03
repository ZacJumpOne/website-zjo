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

- [ ] Agregar en `@media (max-width: 768px)` que `.secondary-grid` pase a `grid-template-columns: 1fr`
- [ ] Verificar que en desktop siga siendo `1fr 1fr` (sin cambios)
- [ ] Probar visualmente que ambas secondary cards ocupen todo el ancho en móvil, igual que la spotlight

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar.
