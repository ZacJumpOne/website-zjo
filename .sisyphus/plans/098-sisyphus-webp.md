# Plan: Convertir sisyphus.png a WebP

## Análisis

Convertir `public/images/sisyphus.png` (1323×800, RGBA) a `public/images/sisyphus.webp` usando Pillow (Python). La imagen no tiene referencias en el código, por lo que no se requieren cambios de código.

## Tareas de Implementación

- [ ] Convertir la imagen con `python3 -c "from PIL import Image; img = Image.open('public/images/sisyphus.png'); img.save('public/images/sisyphus.webp', 'WEBP', quality=85)"`
- [ ] Verificar que el archivo WebP se generó correctamente

## Siguiente Paso

Usa `/plan-go` cuando estés listo.
