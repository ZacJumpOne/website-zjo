# Plan 005: Reposicionar Botón Card Monitoreo

## Análisis
El botón "Explorar soluciones" en la card de Monitoreo está actualmente al final del texto (spotlight-text), quedando desbalanceado visualmente. Se busca reposicionarlo para que esté centrado entre la gráfica (dashboard-preview) y los textos, mejorando la armonía visual del diseño "Neo-Dashboard".

## Estado Actual
- **Archivo**: `src/components/Services.astro`
- **Estructura actual** (líneas 63-148):
  - `spotlight-content` (grid 1.1fr 0.9fr)
    - `spotlight-text` (contiene icono, título, descripción, features, **botón**)
    - `spotlight-visual` (contiene dashboard-preview)
- **Botón actual** (líneas 85-88): Dentro de spotlight-text, al final

## Tareas de Implementación (para revisión del usuario)

- [ ] Mover el botón HTML de spotlight-text a spotlight-content (como hijo directo)
- [ ] Agregar CSS para posicionamiento absoluto centrado del botón en spotlight-content
- [ ] Ajustar z-index y estilos para que el botón se vea correctamente sobre la gráfica
- [ ] Verificar responsive: ajustar posición del botón en media queries (992px, 768px)
- [ ] Ejecutar bun run build para verificar

## Detalles Técnicos

### Cambio Estructural (HTML)
Mover el botón de:
```html
<div class="spotlight-text">
  ...
  <a href="#portafolio" class="spotlight-cta">...</a>
</div>
```

A:
```html
<div class="spotlight-content">
  <div class="spotlight-text">...</div>
  <div class="spotlight-visual">...</div>
  <a href="#portafolio" class="spotlight-cta spotlight-cta--centered">...</a>
</div>
```

### Nuevos Estilos CSS
```css
.spotlight-content {
  position: relative; /* Ya existe, necesario para posicionamiento absoluto */
}

.spotlight-cta--centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  /* Ajustes visuales para que resalte sobre el dashboard */
  box-shadow: 
    0 4px 14px rgba(16, 185, 129, 0.4),
    0 0 20px rgba(16, 185, 129, 0.2),
    0 0 40px rgba(16, 185, 129, 0.1);
}
```

### Ajustes Responsive
- **992px**: Cambiar a `position: relative; top: auto; left: auto; transform: none;` y centrar con `display: flex; justify-content: center;` en spotlight-content
- **768px**: Similar a 992px pero con padding ajustado

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/005-reposicionar-boton-monitoreo.md`
