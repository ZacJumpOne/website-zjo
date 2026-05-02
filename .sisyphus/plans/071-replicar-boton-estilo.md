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

- [x] **Hero `.btn-primary`**: Cambiar `background` a gradiente verde, agregar glow shadow, border-radius 12→14, font-weight 600→700, agregar `border: 1px solid rgba(255,255,255,0.1)`. Conservar el `.btn-shine` existente.
- [x] **Feedback `.btn-submit`**: Cambiar `background` a gradiente verde, agregar glow shadow, reemplazar `var(--primary)` hardcodeado, font-weight 600→700, agregar ícono `ArrowRightOutlined` con fondo `rgba(255,255,255,0.2)` + animación flecha. Ajustar hover para que coincida con el patrón.
- [x] Correr `bun run build` para validar

## Resultados de Implementación

- **Commit inicial**: `5a23109` — chore: estado antes de implementar plan 071-replicar-boton-estilo
- **Build final**: ✅ Exitoso — 14 pages, 0 errores, 18.36s

### Archivos modificados (2 archivos):

| Archivo | Cambio |
|---|---|
| `Hero.astro` | `.btn-primary`: gradiente, glow shadow, radius 14px, font-weight 700, borde sutil |
| `Feedback.astro` | `.btn-submit`: gradiente, glow shadow, +`ArrowRightOutlined` con animación, hover mejorado |

### Estilo unificado aplicado en ambos botones:
- `background: linear-gradient(135deg, #10b981, #059669)`
- `box-shadow: 0 4px 14px rgba(16,185,129,0.4), 0 0 20px rgba(16,185,129,0.2)`
- `border-radius: 14px`
- `font-weight: 700`
- `border: 1px solid rgba(255,255,255,0.1)`
- Hover: `translateY(-3px)` + glow intensificado
- Ícono con fondo `rgba(255,255,255,0.2)` + animación de desplazamiento
