# Plan: Unificar Botones — Efecto Diagonal + Estilo

## Análisis

Dos cambios:

1. **"Ver Portafolio"** (Hero `.btn-primary`) — la flecha no tiene el efecto diagonal (rotate 45deg) que sí tiene "Explorar soluciones"
2. **"Enviar Feedback"** (Feedback `.btn-submit`) — no coincide con el estilo (gradiente, glow, radius, cta-icon)

### Estado actual de la flecha:

| Botón | Hover de flecha |
|---|---|
| "Explorar soluciones" | `translate(4px) rotate(45deg)` ✅ diagonal |
| "Ver Portafolio" | `translateX(4px)` ❌ sin rotación |

## Tareas de Implementación (para revisión del usuario)

- [ ] Hero `.btn-primary:hover .btn-icon`: agregar `rotate(45deg)` (conservar `translateX(4px)`)
- [ ] Feedback `.btn-submit`: unificar estilo con Hero (gradiente, glow, radius 14px, cta-icon, animación)
- [ ] Correr `bun run build` para validar

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.
