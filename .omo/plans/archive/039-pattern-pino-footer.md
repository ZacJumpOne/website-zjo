# Plan: Pattern Hojas de Pino en Footer

## Análisis
El pattern actual del footer (dots + líneas diagonales) no tiene relación con la marca. El logo de Zero Jump One son árboles (pinos). Se propone reemplazar el pattern geométrico genérico por un pattern de hojas/agujas de pino que refuerce la identidad visual de la marca.

## Estado Actual
- `src/components/Footer.astro` (líneas 120-138): `::before` pseudo-element con pattern de dots + líneas diagonales a 3.5% opacidad
- El logo usa forma de árboles de pino

## Tareas de Implementación
- [ ] **P39.1**: Reemplazar pattern actual por SVG inline de agujas de pino (3-5 agujas agrupadas en forma de abanico, como las reales del pino)
- [ ] **P39.2**: Configurar repetición del pattern con `background-size` apropiado (80-120px) y opacidad sutil (~3%)
- [ ] **P39.3**: Rotación alternada de las hojas para simular caída natural (múltiples capas con diferentes rotaciones)
- [ ] **P39.4**: Verificar build

## Detalles técnicos
El pattern usará `background-image` con `url('data:image/svg+xml,...')` conteniendo un cluster de agujas de pino estilizado. Para efecto de "caída natural":
- Capa 1: agujas rotadas 0° (opacity 100%)
- Capa 2: agujas rotadas 45° con offset (opacity 60%)
- Capa 3: agujas rotadas -30° con otro offset (opacity 40%)

Esto crea densidad visual sin ser abrumador.

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/039-pattern-pino-footer.md`
