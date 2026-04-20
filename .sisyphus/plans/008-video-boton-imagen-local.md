# Plan: Video Thumbnail sobre Imagen Principal

## Análisis

**Requerimiento**: Mover el botón de video a la imagen principal (`.solucion-visual`), manteniendo el tamaño de botón thumbnail.

**Estado actual**:
- Video thumbnail debajo de la descripción
- Tamaño: max-width 400px

**Objetivo**:
- Mover a `.solucion-visual` (sobre la imagen principal)
- Mantener tamaño de botón (no enlargecer)
- Position absolute, bottom-right o similar

---

## Estructura Propuesta

```html
<div class="solucion-visual">
  <img src="imagen-principal" />
  <span class="solucion-tag">tag</span>
  <!-- Video thumbnail overlayed -->
  {solucion.videoUrl && (
    <a class="video-thumbnail-small">
      <img src="/images/youtube_erp.png" />
      <play-icon />
    </a>
  )}
</div>
```

---

## Tareas de Implementación

- [x] 1. Mover código de video thumbnail a solucion-visual
- [x] 2. Ajustar CSS para tamaño de botón (más pequeño)
- [x] 3. Position absolute en corner
- [x] 4. Borde blanco alrededor (outline: 3px solid white)
- [x] 5. Verificar build

---

## Estado

✅ COMPLETADO - Borde blanco agregado