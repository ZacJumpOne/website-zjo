# Plan: Pattern Hojas de Abedul (Birch) en Footer

## Análisis
El usuario quiere reemplazar el pattern actual del footer por un pattern de **hojas de abedul** (birch leaves). El logo de Zero Jump One son árboles de abedul, así que las hojas deben tener la forma característica del abedul: triangular/cordada con bordes dentados. Esto refuerza la identidad de marca.

## Estado Actual
- `src/components/Footer.astro` (líneas 120-138): `::before` pseudo-element con pattern de dots + líneas diagonales a 3.5% opacidad
- El logo usa árboles de abedul (birch)

## Propuesta Técnica

### Forma de hoja de abedul
SVG inline (data URI) con forma triangular-cordada:
- Base redondeada (cordada, como corazón invertido)
- Punta aguda en la parte superior
- Bordes con muescas/aspas que simulan dientes naturales
- Línea central sutil (nervadura media)

### Composición del pattern
- **Capa `::before`**: 3 instancias del SVG rotadas y desplazadas (0°, 30°, -25°) a 3.5% opacidad
- **Capa `::after`**: 1 instancia rotada 60° a 1.5% opacidad para profundidad
- **Tamaño**: 90px entre hojas — densidad natural sin saturar

## Tareas de Implementación
- [ ] **P40.1**: Crear SVG de hoja de abedul triangular con bordes dentados como data URI
- [ ] **P40.2**: Aplicar 3 capas con rotaciones distintas en `::before` + capa adicional en `::after`
- [ ] **P40.3**: Verificar build

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/040-pattern-birch-footer.md`
