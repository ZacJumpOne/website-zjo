# Plan: Footer con Personalidad (T8 - Reintento)

## Análisis
T8 del plan 034: "Footer con personalidad — Agregar CTA final + pattern geométrico sutil en fondo". Esta tarea fue implementada previamente (plan 037) y revertida porque al usuario no le gustó el resultado. Este plan propone una versión más sutil y refinada.

## Estado Actual
- `src/components/Footer.astro`: Footer limpio, dark (`--bg-dark`), grid 4 columnas, sin CTA ni pattern.
- El footer actual es funcional pero genérico (dark + 4 columnas con links).

## Propuesta Rediseñada

**Diferencia clave vs. versión anterior (que no gustó):**
- CTA más minimalista: sin gradientes agresivos, sin iconos grandes, sin blob decorations
- Pattern más sutil: solo líneas diagonales finas (no dots + lines combinados)
- Enfoque en tipografía y espaciado, no en elementos decorativos llamativos

### Tareas Propuestas
- [ ] **T8.1**: Agregar CTA minimalista — texto "¿Listo para comenzar?" + link "Hablemos →" que lleva a `/#contacto`. Sin fondo de color, solo tipografía destacada con underline animado, separado por `border-top` del grid
- [ ] **T8.2**: Pattern geométrico sutil — líneas diagonales finas con 2% opacidad en el fondo del footer, sin dots ni gradientes
- [ ] **T8.3**: Verificar build y responsive

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/038-footer-personalidad-reintento.md`
