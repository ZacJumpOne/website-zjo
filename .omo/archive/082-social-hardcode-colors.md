# Plan: Sincronizar Colores de Social con Producción (Corregido)

## Análisis

La producción usa colores **hardcodeados**, no variables:

| Estado | Producción |
|---|---|
| **Large default** | `background: linear-gradient(135deg, #059669, #10b981); color: #fff` |
| **Small default** | `background: #f0fdf4; color: #059669` |
| **Small hover** | `background: linear-gradient(135deg, #059669, #10b981); color: #fff` |
| **Border/Large Card** | `border-color: #05966933` |
| **Hover shadow** | `box-shadow: 0 16px 40px -8px #05966933` |
| **Hover border** | `border-color: #0596694d` |

Nuestro código usa `var(--arbol-claro, #059669)` que ahora resuelve a `#3AB34A` (después del sync del plan 075).  
**Problema**: `#3AB34A ≠ #059669` — los colores no coinciden con producción.

## Solución

Reemplazar todas las referencias a variables CSS por los valores hardcodeados exactos de producción en `Social.astro`.

## Tareas de Implementación (para revisión del usuario)

- [ ] `.social-link.large .social-icon`: `linear-gradient(135deg, #059669, #10b981)` + `color: #fff`
- [ ] `.social-link.small .social-icon`: `background: #f0fdf4` + `color: #059669`
- [ ] `.social-link.small:hover .social-icon`: `linear-gradient(135deg, #059669, #10b981)` + `color: #fff`
- [ ] `.social-link.large`: `border-color: rgba(5, 150, 105, 0.2)` (usar rgba)
- [ ] `.social-link:hover`: `box-shadow: 0 16px 40px -8px rgba(5, 150, 105, 0.2)` + `border-color: rgba(5, 150, 105, 0.3)`
- [ ] `.social-tag`: `color: #059669` + background hardcodeado
- [ ] Correr `bun run build` para validar

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.
