# Plan: Replicar Estilo del Botón "Explorar Soluciones"

## Análisis

El botón `spotlight-cta` ("Explorar soluciones") en `Services.astro` tiene un estilo distintivo:
- **Fondo**: gradiente verde `linear-gradient(135deg, #10b981, #059669)`
- **Sombra glow**: `0 4px 14px rgba(16,185,129,0.4), 0 0 20px rgba(16,185,129,0.2)`
- **Borde sutil**: `1px solid rgba(255,255,255,0.1)`
- **Border-radius**: `14px`
- **Font-weight**: `700`
- **Ícono con fondo**: `rgba(255,255,255,0.2)`, se desplaza al hover

Los dos botones destino tienen estilos diferentes que no coinciden con el patrón:

| Botón | Componente | Problema actual |
|---|---|---|
| "Ver Portafolio" | `Hero.astro` `.btn-primary` | Color sólido `#047857`, sin gradiente, sin glow, border-radius 12px |
| "Enviar Feedback" | `Feedback.astro` `.btn-submit` | `background: var(--primary)` (variable no definida), sin glow, sin ícono con fondo |

## Estado Actual

- **Fuente**: `Services.astro` — `.spotlight-cta` (líneas 406-443 CSS), HTML línea 93-96
- **Destino 1**: `Hero.astro` — `.btn-primary` (líneas 608-661 CSS), HTML líneas 152-156
- **Destino 2**: `Feedback.astro` — `.btn-submit` (líneas 428-455 CSS), HTML líneas 75-78

## Tareas de Implementación (para revisión del usuario)

- [ ] **Hero `.btn-primary`**: Cambiar `background` a gradiente verde, agregar glow shadow, border-radius 12→14, font-weight 600→700, agregar `border: 1px solid rgba(255,255,255,0.1)`. Conservar el `.btn-shine` existente.
- [ ] **Feedback `.btn-submit`**: Cambiar `background` a gradiente verde, agregar glow shadow, reemplazar `var(--primary)` hardcodeado, font-weight 600→700, agregar ícono con fondo `rgba(255,255,255,0.2)` + animación flecha. Ajustar hover para que coincida con el patrón.
- [ ] Correr `bun run build` para validar

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.
