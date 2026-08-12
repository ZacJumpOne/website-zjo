# Plan: T4 - Romper simetría en secciones (Layouts Asimétricos)

## Análisis
Todas las secciones siguen el patrón simétrico predecible: header centrado (label → título → subtítulo) + grid de cards centrado. Para romper la monotonía visual, se proponen layouts asimétricos en **Servicios** y **Social** — las dos secciones con mayor potencial de impacto sin necesitar assets externos.

## Estado Actual

### Services.astro (`src/components/Services.astro`)
- Patrón: section-header centrado + services-grid (3 cards en fila)
- Cada card: icono arriba → título → descripción → features → CTA
- 3 servicios: Monitoreo, Respuesta, Control

### Social.astro (`src/components/Social.astro`)
- Patrón: contenido centrado (título + descripción + links en fila)
- 5 redes sociales: Facebook, Twitter, YouTube, LinkedIn, Instagram

## Tareas de Implementación

### Servicios: Layout "Feature Spotlight"
- [ ] Convertir la sección de 3 cards simétricas a layout asimétrico:
  - **Primer servicio (Monitoreo)**: Layout horizontal grande — texto izquierda (título grande + descripción), imagen/visual decorativa derecha que se sale del contenedor
  - **Segundo y tercer servicio**: Cards más pequeñas en grid 2 columnas debajo, con stagger visual (una más alta que otra)
- [ ] Agregar offset visual: la imagen decorativa del primer servicio tiene `overflow` fuera del grid (efecto "bleed")
- [ ] Mantener responsive: en mobile vuelve a stack vertical

### Social: Layout "Split Banner"
- [ ] Convertir de centrado a layout dividido:
  - Izquierda: texto grande "¿Listo para conectarte?" + descripción
  - Derecha: iconos de redes en grid irregular (no fila uniforme) — Facebook grande arriba, los demás en 2x2 abajo
- [ ] Agregar forma geométrica decorativa (diagonal o curva) como separador visual entre las dos mitades
- [ ] Fondo con gradiente angular (no plano)

### Verificación
- [ ] Ejecutar `bun run build` y confirmar que compila sin errores

## Siguiente Paso
Usa /plan-go cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/036-layouts-asimetricos.md`
