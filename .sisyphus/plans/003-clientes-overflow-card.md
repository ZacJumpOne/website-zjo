# Plan: Fix overflow de card de cliente

## Análisis (REVISADO)
El problema NO es `overflow: hidden`. El problema es la **altura del `.marquee-wrapper`** que no tiene suficiente espacio para el efecto de hover.

**Estado actual**:
```css
.marquee-wrapper {
  margin: 60px 0;
  padding: 20px 0;  /* Solo 20px vertical */
}

.client-card:hover {
  transform: translateY(-8px);  /* Se eleva 8px hacia arriba */
}
```

**Causa**: La card se eleva 8px pero el wrapper con solo 20px de padding no tiene suficientespacio vertical para mostrarla completa.

## Opción Recomendada (REVISADA)
Aumentar el padding vertical del `.marquee-wrapper`:

```css
.marquee-wrapper {
  padding: 30px 0;  /* Más espacio para el efecto hover */
}
```

Opcional: também agregar `overflow: visible` al `.marquee` si es necesario.

## Tareas de Implementación
- [x] Aumentar padding de `.marquee-wrapper` (20px → 30px)
- [x] overflow: visible en `.marquee`
- [x] Build exitoso

## Estado: COMPLETADO ✅

## Siguiente Paso
Esperar confirmación.