# Plan: Página Construyendo - Consolidado

## Análisis

Crear y mejorar una página "En Construcción" reutilizable (`construyendo.astro`) para múltiples opciones del footer.

## Estado Inicial

- **Footer**: `src/components/Footer.astro` línea 34 - `<li><a href="#">Blog</a></li>`
- **Imagen**: `/images/construyendo.png` disponible (1324 x 593px)

## Evolución del Proyecto

### Creación (016)
- [x] Crear página `src/pages/construyendo.astro`
- [x] Usar imagen `construyendo.png` en el header
- [x] Agregar contenido: título, mensaje descriptivo
- [x] Actualizar enlace en Footer de `href="#"` a `/construyendo`
- [x] Agregar botón para volver al inicio

### Mejora de Estilos (025)
- [x] Cambiar background de `.construyendo-visual` a `#f8fafc`
- [x] Cambiar `object-fit: cover` a `object-fit: contain`

### Imagen Sin Stretch (026)
- [x] Eliminar `width: 100%` y `height: 100%`
- [x] Agregar `object-position: top`

### Estructura Card (027)
- [x] Wrapper `.construyendo-header` con height fijo y overflow hidden
- [x] Renombrar secciones: header, content, footer

### Escala Imagen (028)
- [x] Agregar `transform: scale(0.7)` a la imagen

### Ajustes de Altura del Header (029-034)
| Plan | Desktop | Mobile |
|------|--------|--------|
| 029 | 280→336px (+20%) | - |
| 030 | 336→386px (+15%) | 240→276px |
| 031 | 386→444px (+15%) | 276→317px |
| 032 | 444→400px (-10%) | 317→285px |
| 034 | **420px** | **290px** |

### Frontground (033) - RECHAZADO
- [x] Se intentó agregar frontground semitransparente
- [x] El usuario lo rechazó, se quitó

## Resultado Final

| Elemento | Valor Final |
|----------|------------|
| Header Desktop | 420px |
| Header Mobile | 290px |
| Imagen Escala | 0.7 |
| Imagen Dimensiones | 1324 x 593px |
| Altura imagen (con escala) | 415px + 5px = 420px |

### CSS Final
```css
.construyendo-header {
  position: relative;
  height: 420px;
  overflow: hidden;
  background: #f8fafc;
}

.construyendo-visual img {
  width: auto;
  height: auto;
  object-position: top;
  transform: scale(0.7);
  transform-origin: top center;
}

.construyendo-tag {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 20;
}
```

### Media Queries
```css
@media (max-width: 768px) {
  .construyendo-header {
    height: 290px;
  }
}
```

## Tareas Completadas

- [x] Crear página construyendo.astro
- [x] Implementar diseño con header, contenido, footer
- [x] Agregar imagen con escala 0.7
- [x] Calcular altura basada en imagen (593px × 0.7 + 5px = 420px)
- [x] Ajustar mobile (290px)
- [x] Verificar build exitoso

## Siguiente Paso

Plan completado y verificado.

---
📁 Archivo: `.sisyphus/plans/016-construyendo.md`