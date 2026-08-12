# Plan: Replicar Efecto YouTube en Facebook

## Análisis

El efecto de YouTube que el usuario quiere en Facebook es la **transición completa** del ícono:

| Estado | YouTube (small) | Facebook (large) actual |
|---|---|---|
| **Default** | Fondo plano `#f0fdf4` + ícono verde | Gradiente verde + ícono blanco |
| **Hover** | Gradiente verde + blanco + scale 1.15 + rotate 5° | scale 1.15 + rotate 5° (sin cambio de color) |

YouTube tiene un **cambio visual dramático**: el ícono pasa de "apagado" a "encendido". Facebook ya nace "encendido" (gradiente), por lo que su hover se siente "como un click" en vez de una activación.

**Solución**: Hacer que Facebook grande empiece como los small (fondo plano, ícono verde) y en hover transicione a gradiente + blanco + animación, exactamente igual que YouTube.

## Tareas de Implementación (para revisión del usuario)

- [ ] Cambiar `.social-link.large .social-icon` default: `background: #f0fdf4`, `color: var(--arbol-claro)` (neutro, como small)
- [ ] Actualizar `.social-link.large:hover .social-icon`: agregar gradiente + blanco + `scale(1.15) rotate(5deg)` (como small)
- [ ] Correr `bun run build` para validar

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.
