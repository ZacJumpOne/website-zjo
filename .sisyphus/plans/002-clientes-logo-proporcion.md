# Plan: Logo en proporción original

## Análisis
El logo actual está restringido con max-width/max-height, deformando la imagen. Debe mostrarse en su tamaño original.

## Estado Actual
**Archivo**: `src/components/Clients.astro`

```css
.logo-img {
  max-width: 64px;
  max-height: 64px;
  object-fit: contain;
}
```

**Problema**: `max-width: 64px` y `max-height: 64px` estrechan la imagen.

## Opción Recomendada
Eliminar restricciones de tamaño, usar solo `object-fit: contain` y permitir que la imagen tenga su tamaño natural:

```css
.logo-img {
  object-fit: contain;
  /* Sin max-width/max-height */
}
```

## Tareas de Implementación
- [x] Eliminar max-width/max-height de `.logo-img`
- [x] Ajustar .client-card: padding 20px 24px, min-width 140px
- [x] Build exitoso

## Estado: COMPLETADO ✅

## Siguiente Paso
Esperar confirmación.