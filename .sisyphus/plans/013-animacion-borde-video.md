# Plan: Animación de borde en botón de video

## Análisis
Agregar animación al borde blanco del botón de video para llamar atención del usuario.

## Estado Actual
**Archivo**: `src/pages/solucion/[slug].astro`

Borde actual: `outline: 3px solid white` sin animación.

## Opción Recomendada
Animación de "late pulsed":

```css
@keyframes border-pulse {
  0%, 100% { outline-color: white; }
  50% { outline-color: transparent; }
}

.video-thumbnail {
  animation: border-pulse 2s ease-in-out infinite;
}
```

**Duración**: 2s, infinita (se repite continuamente).

Alternativa: Solo animarse al hacer hover.

## Tareas de Implementación
- [x] Agregar @keyframes border-pulse
- [x] Aplicar animation al .video-thumbnail
- [x] Verificar build

## Siguiente Paso
Confirmación del usuario.