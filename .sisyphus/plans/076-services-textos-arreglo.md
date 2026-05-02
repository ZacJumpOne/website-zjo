# Plan: Spotlight Card Tomar Textos del Arreglo Services

## Análisis

El spotlight de Monitoreo tiene **title y description hardcodeados** en el HTML, mientras que las secondary cards ya usan `{service.title}` y `{service.description}` del arreglo.

| Elemento | Actual | Debería ser |
|---|---|---|
| Título (línea 71) | `<h3>Monitoreo</h3>` hardcodeado | `{services[0].title}` |
| Descripción (línea 72-74) | Texto hardcodeado | `{services[0].description}` |
| Features (línea 77-92) | `services[0].features.map()` | ✅ Ya dinámico |

## Estado Actual

- **Archivo**: `src/components/Services.astro`
- Línea 71: `<h3 class="spotlight-title">Monitoreo</h3>`
- Líneas 72-74: `<p class="spotlight-description">Control y supervision en tiempo real...</p>`

## Tareas de Implementación (para revisión del usuario)

- [ ] Cambiar spotlight title a `{services[0].title}`
- [ ] Cambiar spotlight description a `{services[0].description}`
- [ ] Correr `bun run build` para validar

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.
