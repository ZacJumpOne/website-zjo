# Plan: Zoom de card en hover para ver imagen

## Análisis
Al hacer hover en una card del masonry, esta aumentará de tamaño y se centrará para que el usuario pueda ver los detalles de la imagen. Similar a un lightbox pero sin abrir modal.

## Estado Actual
- **Archivo**: `src/pages/ejemplo-procesos.astro`
- **Hover actual**: translateY(-8px), border glow, sin cambio de tamaño

## Tareas de Implementación (para revisión del usuario)
- [ ] Agregar scale(1.15) en hover para aumentar 15%
- [ ] Agregar transform-origin: center para centrar
- [ ] Agregar z-index alto para que flote sobre otras cards
- [ ] Quitar translateY para que no suba
- [ ] Verificar build exitoso

## Siguiente Paso
Confirmar para proceder con la implementación.