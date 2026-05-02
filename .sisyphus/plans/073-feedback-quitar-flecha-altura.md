# Plan: Quitar Flecha y Aumentar Altura del Botón Feedback

## Análisis

Dos cambios en el botón "Enviar Feedback":
1. **Quitar el `<div class="cta-icon"><ArrowRightOutlined /></div>`** del botón
2. **Aumentar altura 2%**: `height: 48px` → `height: 49px`

## Estado Actual

- **Archivo**: `src/components/Feedback.astro`
- HTML línea 75-79: `<MessageOutlined /> <span>Enviar Feedback</span> <div class="cta-icon"><ArrowRightOutlined /></div>`
- CSS `.btn-submit`: `height: 48px;`

## Tareas de Implementación (para revisión del usuario)

- [ ] Quitar `<div class="cta-icon"><ArrowRightOutlined /></div>` del HTML del botón
- [ ] Quitar CSS de `.btn-submit .cta-icon` y `.btn-submit:hover .cta-icon`
- [ ] Cambiar `height: 48px` → `height: 49px` en `.btn-submit`
- [ ] Correr `bun run build` para validar

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.
