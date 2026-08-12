# Plan: Convertir imágenes a WebP en /public/images

## Análisis
El usuario solicita convertir ÚNICAMENTE los archivos que no están en WebP dentro del directorio `/public/images` a formato WebP.

No se deben hacer otras tareas (no verificar referencias, no build, no eliminar archivos originales, no cambios en código).

## Estado Actual
Imágenes en `/public/images/` que **no** están en WebP:
- `elefante.png`
- `rapidos.png`

Imágenes ya en WebP: 44 archivos (no tocar).
`favicon.ico` se excluye por decisión del usuario.

## Tareas de Implementación (para revisión del usuario)
- [ ] Convertir `elefante.png` a `elefante.webp` en `/public/images/`
- [ ] Convertir `rapidos.png` a `rapidos.webp` en `/public/images/`

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/020-convert-images-to-webp.md`
