# Plan 008: Gráfica para Card Control (Spotlight)

## Análisis
El usuario solicita una "gráfica bonita" que identifique visualmente al servicio de **Control** en la card spotlight. El concepto de Control es: "Sistemas diseñados para trabajar conjuntamente y escalar con su negocio" con features: sin islas de información, integración total, escalabilidad.

**Contexto visual actual**: El spotlight usa tema oscuro (gradient #0f172a → #1e293b) con acentos verdes (#10b981). El dashboard actual de Monitoreo tiene: barras de métricas, waveform animado, nodos con pulse.

## Estado Actual
- **Archivo**: `src/components/Services.astro`
- **Spotlight HTML**: líneas 61-166 (hardcoded)
- **Dashboard preview**: líneas 100-159 (barras CPU/RAM/DISK, waveform, nodos)
- **Estilo**: Tema oscuro con acentos verdes, glassmorphism

## Propuestas de Gráficas para Control

### Opción A: Network Integration Graph (Recomendada)
**Concepto**: Mostrar nodos interconectados representando sistemas integrándose.

**Elementos visuales**:
- 5-6 nodos con diferentes tamaños (representando diferentes sistemas)
- Líneas animadas entre nodos (datos fluyendo)
- Pulse animation en nodos centrales
- Colores: Verde esmeralda con opacidades

**Implementación técnica**:
```html
<div class="integration-graph">
  <svg viewBox="0 0 300 280" preserveAspectRatio="none">
    <!-- Conexiones animadas -->
    <line class="connector active" x1="150" y1="140" x2="60" y2="60" />
    <line class="connector" x1="150" y1="140" x2="240" y2="60" />
    <line class="connector active" x1="150" y1="140" x2="60" y2="220" />
    <line class="connector" x1="150" y1="140" x2="240" y2="220" />
    <line class="connector active" x1="150" y1="140" x2="150" y2="50" />
    
    <!-- Nodos -->
    <circle class="node center" cx="150" cy="140" r="24" />
    <circle class="node" cx="60" cy="60" r="16" />
    <circle class="node" cx="240" cy="60" r="16" />
    <circle class="node" cx="60" cy="220" r="16" />
    <circle class="node" cx="240" cy="220" r="16" />
    <circle class="node" cx="150" cy="50" r="14" />
    
    <!-- Labels -->
    <text x="150" y="145" class="node-text">CORE</text>
    <text x="60" y="65" class="node-text-sm">ERP</text>
    <text x="240" y="65" class="node-text-sm">CRM</text>
    <text x="60" y="225" class="node-text-sm">DB</text>
    <text x="240" y="225" class="node-text-sm">API</text>
  </svg>
</div>
```

**CSS destacado**:
```css
.integration-graph {
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.connector {
  stroke: rgba(16, 185, 129, 0.3);
  stroke-width: 2;
  stroke-dasharray: 4;
}

.connector.active {
  stroke: #10b981;
  animation: flowLine 2s linear infinite;
}

@keyframes flowLine {
  to { stroke-dashoffset: -20; }
}

.node {
  fill: rgba(16, 185, 129, 0.15);
  stroke: #10b981;
  stroke-width: 2;
  animation: nodePulse 3s ease-in-out infinite;
}

.node.center {
  fill: rgba(16, 185, 129, 0.3);
  stroke-width: 3;
  r: 28;
}

.node-text {
  fill: #f8fafc;
  font-size: 10px;
  text-anchor: middle;
  font-family: "Monaco", monospace;
  font-weight: 700;
}

.node-text-sm {
  fill: #94a3b8;
  font-size: 8px;
  text-anchor: middle;
  font-family: "Monaco", monospace;
}
```

### Opción B: Circular Progress / Radial Status
**Concepto**: Mostrar integración como un anillo circular con segmentos.

**Elementos visuales**:
- Anillo externo dividido en segmentos (cada sistema)
- Anillo interno con métrica de integración total
- Puntos de datos animados recorriendo el anillo
- Center metric: "100% Integración"

### Opción C: Pipeline Flow (Horizontal)
**Concepto**: Mostrar flujo de datos entre sistemas como un pipeline.

**Elementos visuales**:
- 4-5 cajas rectangulares conectadas
- Flechas animadas entre cajas
- Cada caja representa un sistema (ERP → CRM → DB → API)
- Efecto de "datos fluyendo"

## Comparativa

| Opción | Complejidad | Impacto Visual | Representa Control |
|--------|-------------|----------------|-------------------|
| A: Network Graph | Media | ⭐⭐⭐⭐ | ✅ Integración total |
| B: Circular | Baja | ⭐⭐⭐ | ⚠️ Más abstracto |
| C: Pipeline | Media | ⭐⭐⭐ | ✅ Flujo de procesos |

## Tareas de Implementación (Opción A - Recomendada)

- [ ] **Reemplazar dashboard-preview** en spotlight (líneas 100-159):
  - Eliminar métricas CPU/RAM/DISK
  - Eliminar waveform
  - Eliminar nodos Server 1/2/Backup
  - Insertar nueva estructura `.integration-graph`

- [ ] **Crear estructura HTML** para Network Graph:
  - SVG with viewBox
  - Líneas conectores (class="connector")
  - Círculos nodos (class="node")
  - Textos de etiquetas

- [ ] **Agregar CSS** para animaciones:
  - `.integration-graph` container
  - `.connector` y `.connector.active` con stroke-dasharray
  - `@keyframes flowLine` para animar flujo
  - `.node` con pulse animation
  - `.node-text` y `.node-text-sm` estilos

- [ ] **Actualizar JS** si es necesario:
  - Remover referencias a `.wave-line` (línea 1008)
  - Agregar observer para líneas animadas (opcional)

- [ ] **Actualizar título dashboard** (línea 106):
  - "monitor.zerojump.one" → "control.zerojump.one"

- [ ] **Mantener métrica spotlight** (líneas 162-165):
  - Cambiar a 100% (Integración total)

- [ ] **Ejecutar bun run build** para verificar

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan (Opción A recomendada).

Si prefieres otra opción (B o C), indícalo antes de ejecutar.

---
📁 Archivo: `.sisyphus/plans/008-grafica-control-spotlight.md`
