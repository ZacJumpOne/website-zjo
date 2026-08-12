# Plan: Sincronizar Colores de Social con Producción

## Análisis

Comparación producción vs nuestro local:

| Elemento | Producción | Nuestro local |
|---|---|---|
| **Large default** | Gradiente `#059669→#10b981` + blanco | Plano `#f0fdf4` + verde |
| **Large hover** | `scale(1.1) rotate(-5deg)` (genérico) | `scale(1.15) rotate(5deg)` + gradiente (específico) |
| **Small default** | `#f0fdf4` + `#059669` | `#f0fdf4` + `var(--arbol-claro)` ✅ igual |
| **Small hover** | Gradiente + blanco + scale/rotate | Igual ✅ |

La producción tiene Facebook **siempre con gradiente** (nunca plano), y sin regla hover específica para large (solo hereda la genérica `scale(1.1) rotate(-5deg)`).

## Tareas de Implementación (para revisión del usuario)

- [ ] Restaurar `.social-link.large .social-icon` default: gradiente `var(--arbol-claro)` → `var(--arbol-obscuro)` + blanco (como producción)
- [ ] Eliminar `.social-link.large:hover .social-icon` (dejar que herede la regla genérica)
- [ ] Correr `bun run build` para validar

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.
