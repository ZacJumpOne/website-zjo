# Plan 006: Reposicionar Badge Disponibilidad

## Análisis
El badge de "Disponibilidad garantizada" (99%) está actualmente posicionado de forma absoluta debajo de toda la card Monitoreo (`spotlight-metric` con `bottom: -30px`). Se busca reposicionarlo para que esté alineado visualmente debajo de la gráfica (dashboard-preview/spotlight-visual), creando mejor armonía visual entre la gráfica y la métrica.

## Estado Actual
- **Archivo**: `src/components/Services.astro`
- **Badge actual** (líneas 162-165): 
  - Posición: `position: absolute; bottom: -30px; left: 48px;`
  - Está relativo a `.spotlight` (toda la card)
- **Gráfica** (líneas 99-160): `spotlight-visual` que contiene `dashboard-preview`

## Tareas de Implementación (para revisión del usuario)

- [ ] Mover HTML de spotlight-metric de después de spotlight-content a dentro de spotlight-visual (como hijo de dashboard-preview)
- [ ] Ajustar CSS de spotlight-metric para posicionamiento relativo dentro de dashboard-preview
- [ ] Alinear spotlight-metric al fondo de dashboard-preview con márgenes apropiados
- [ ] Ajustar responsive: verificar posición en media queries (992px, 768px)
- [ ] Ejecutar bun run build para verificar

## Detalles Técnicos

### Cambio Estructural (HTML)
Mover el badge de:
```html
<!-- Después de spotlight-content -->
<div class="spotlight" data-tilt>
  <div class="spotlight-content">...</div>
  <div class="spotlight-metric" data-value="99">...</div>
</div>
```

A (dentro de dashboard-preview, al final):
```html
<div class="spotlight-visual">
  <div class="dashboard-preview">
    <!-- Header, métricas, waveform, nodos -->
    ...
    <!-- Badge al final del dashboard -->
    <div class="spotlight-metric" data-value="99">...</div>
  </div>
</div>
```

### Nuevos Estilos CSS
```css
/* Eliminar posicionamiento absoluto */
.spotlight-metric {
  position: relative; /* En lugar de absolute */
  bottom: auto;
  left: auto;
  margin-top: auto; /* Empuja al fondo del flex container */
  align-self: flex-start; /* Alineación izquierda */
  /* Mantener estilos visuales existentes */
}

.dashboard-preview {
  /* Ya tiene display: flex; flex-direction: column; */
  /* Agregar */
  justify-content: space-between; /* Empuja el badge al fondo */
}
```

### Ajustes Responsive
- **992px**: spotlight-visual cambia a `height: 280px` y `width: 100%`, dashboard-preview necesita `justify-content: flex-start` para evitar estiramiento
- **768px**: Similar a 992px

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/006-reposicionar-disponibilidad.md`
