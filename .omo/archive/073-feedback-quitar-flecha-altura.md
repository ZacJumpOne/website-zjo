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

- [x] Quitar `<div class="cta-icon"><ArrowRightOutlined /></div>` del HTML del botón
- [x] Quitar CSS de `.btn-submit .cta-icon` y `.btn-submit:hover .cta-icon`
- [x] Cambiar `height: 48px` → `height: 49px` en `.btn-submit`
- [x] Correr `bun run build` para validar

## Resultados de Implementación

- **Commit inicial**: `fa878ac` — chore: estado antes de implementar plan 073-feedback-quitar-flecha-altura
- **Archivo modificado**: `src/components/Feedback.astro` — flecha removida + altura 48→49px
- **Build final**: ✅ Exitoso — 14 pages, 0 errores, 17.47s
- **Resultado**: `[💬] Enviar Feedback` con altura 49px
