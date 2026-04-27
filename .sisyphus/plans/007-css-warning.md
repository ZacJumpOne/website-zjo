# Plan: Corregir CSS warning

## Análisis
El warning indica propiedades CSS huérfanas en ejemplo-procesos.astro líneas 333-336.

## Estado Actual
- `.modal-title` se cierra en línea 332
- Líneas 333-336 tiene propiedades sin selector

## Tareas de Implementación
- [ ] Mover propiedades dentro de .modal-title
- [ ] Verificar build sin warnings

## Siguiente Paso
Confirmación del usuario