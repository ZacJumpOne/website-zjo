# Plan: Icono Izquierdo en Botón Enviar Feedback

## Análisis

El botón "Enviar Feedback" en `Feedback.astro` actualmente tiene el `ArrowRightOutlined` a la derecha (patrón `spotlight-cta`). El usuario pide:
1. **Icono a la izquierda**: `MessageOutlined` (burbuja de mensaje con tres puntitos)
2. Mantener la flecha a la derecha como parte del estilo unificado

## Estado Actual

- **Archivo**: `src/components/Feedback.astro`
- **HTML actual** (línea 75-78):
  ```html
  <button type="submit" class="btn-submit" id="submit-btn">
    <span id="btn-text">Enviar Feedback</span>
    <div class="cta-icon"><ArrowRightOutlined /></div>
  </button>
  ```
- `MessageOutlined` ya está importado (línea 3)

## Tareas de Implementación (para revisión del usuario)

- [x] Agregar `<MessageOutlined />` al inicio del botón, antes del `<span>`
- [x] Correr `bun run build` para validar

## Resultados de Implementación

- **Commit inicial**: `00b0a32` — chore: estado antes de implementar plan 072-feedback-icono-izquierdo
- **Archivo modificado**: `src/components/Feedback.astro` — `<MessageOutlined />` agregado a la izquierda del botón
- **Build final**: ✅ Exitoso — 14 pages, 0 errores, 17.21s
- **Resultado**: `[💬] Enviar Feedback [→]`
