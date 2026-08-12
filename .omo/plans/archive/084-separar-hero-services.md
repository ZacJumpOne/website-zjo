# Plan: Separar Visualmente Hero y Services

## Análisis

Hero y Services se ven como un solo bloque porque sus fondos son muy similares:

| Sección | Fondo |
|---|---|
| Hero | `linear-gradient(180deg, #fafbfc, #fff, #f0f4f8)` |
| Services | `linear-gradient(180deg, #fff, #f0fdf4, #fff)` |

Ambos son gradientes claros que se mezclan. Services ya tiene un `::before` con una línea divisoria sutil (gris), pero es muy tenue.

## Opciones

### A — Aumentar separación visual
- Cambiar `::before` de Services: `#e2e8f0` → `rgba(5, 150, 105, 0.15)` (línea verde más visible)
- Subir altura de la línea de `1px` → `2px`

### B — Diferenciar fondos
- Cambiar Hero bottom a `#f0fdf4` para transicionar suavemente al verde de Services

### C — Agregar spacer
- Insertar un `padding-top` extra en Services o un margen negativo

## Recomendación

**Opción A** — la más simple y efectiva. Una línea divisoria verde más visible entre secciones.

## Tareas de Implementación (para revisión del usuario)

- [ ] Cambiar `::before` de Services: línea más gruesa y verde
- [ ] Correr `bun run build` para validar

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.
