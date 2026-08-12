# Plan 009: Gráfica para Control (Textos Actualizados)

## Análisis
Los textos de Control cambiaron completamente. El nuevo enfoque es:
- **Descripción**: "Ya no mas preocupaciones, ahora su información al momento y en el lugar donde lo necesita."
- **Features**: Ahorro de tiempo/recursos, Integración con procesos, Información siempre disponible

**Concepto clave**: Disponibilidad instantánea de información ("al momento", "donde lo necesita", "siempre disponible"). Ya no es solo "integración" - es **acceso universal y tiempo real**.

## Estado Actual
- **Archivo**: `src/components/Services.astro`
- **Spotlight HTML**: líneas 61-166 (actualmente hardcoded para Monitoreo)
- **Control data** (líneas 35-46): accent "emerald", sin spotlight aún
- **Tema visual**: Dark (#0f172a) con acentos verdes (#10b981), glassmorphism

## Propuestas de Gráficas (Actualizadas)

### Opción A: Real-Time Data Stream (Recomendada) ⭐
**Concepto**: Mostrar información fluyendo instantáneamente a múltiples destinos ("al momento y en el lugar donde lo necesita").

**Elementos visuales**:
- Línea central tipo "pulse/heartbeat" (representando flujo constante de datos)
- 3-4 nodos destino con etiquetas: "ERP", "Mobile", "Web", "CRM"
- Líneas animadas desde el centro hacia cada nodo (datos llegando instantáneamente)
- Indicadores de estado "● ONLINE" en cada nodo
- Métrica central: "0ms Latency" o "100% Available"

```html
<div class="data-stream-graph">
  <svg viewBox="0 0 300 280" preserveAspectRatio="none">
    <!-- Central pulse line -->
    <polyline class="pulse-line" points="0,140 50,140 75,130 100,150 125,135 150,140 175,145 200,138 225,142 250,140 300,140" />
    
    <!-- Data flowing to nodes -->
    <line class="data-flow" x1="150" y1="140" x2="80" y2="60" />
    <line class="data-flow" x1="150" y1="140" x2="220" y2="60" />
    <line class="data-flow" x1="150" y1="140" x2="80" y2="220" />
    <line class="data-flow" x1="150" y1="140" x2="220" y2="220" />
    
    <!-- Center node -->
    <circle class="center-node" cx="150" cy="140" r="20" />
    <text x="150" y="145" class="node-label">CORE</text>
    
    <!-- Destination nodes -->
    <circle class="dest-node" cx="80" cy="60" r="12" />
    <text x="80" y="90" class="dest-label">ERP</text>
    <circle class="status-dot" cx="95" cy="55" r="3" />
    
    <circle class="dest-node" cx="220" cy="60" r="12" />
    <text x="220" y="90" class="dest-label">Mobile</text>
    <circle class="status-dot" cx="235" cy="55" r="3" />
    
    <circle class="dest-node" cx="80" cy="220" r="12" />
    <text x="80" y="250" class="dest-label">Web</text>
    <circle class="status-dot" cx="95" cy="215" r="3" />
    
    <circle class="dest-node" cx="220" cy="220" r="12" />
    <text x="220" y="250" class="dest-label">CRM</text>
    <circle class="status-dot" cx="235" cy="215" r="3" />
  </svg>
  <div class="stream-metrics">
    <span class="metric-item">0ms</span>
    <span class="metric-item">100%</span>
    <span class="metric-item">24/7</span>
  </div>
</div>
```

**CSS destacado**:
```css
.data-stream-graph {
  height: 280px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.pulse-line {
  fill: none;
  stroke: #10b981;
  stroke-width: 2;
  filter: drop-shadow(0 0 6px rgba(16, 185, 129, 0.6));
  animation: pulseGlow 2s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% { opacity: 0.6; stroke-width: 2; }
  50% { opacity: 1; stroke-width: 3; }
}

.data-flow {
  stroke: rgba(16, 185, 129, 0.4);
  stroke-width: 1.5;
  stroke-dasharray: 4;
  animation: flowToNode 1.5s linear infinite;
}

@keyframes flowToNode {
  to { stroke-dashoffset: -12; }
}

.dest-node {
  fill: rgba(16, 185, 129, 0.1);
  stroke: #10b981;
  stroke-width: 2;
  animation: nodeReady 3s ease-in-out infinite;
}

@keyframes nodeReady {
  0%, 100% { fill: rgba(16, 185, 129, 0.1); }
  50% { fill: rgba(16, 185, 129, 0.2); }
}

.status-dot {
  fill: #10b981;
  animation: statusPulse 2s ease-in-out infinite;
}

@keyframes statusPulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 6px #10b981; }
  50% { opacity: 0.5; }
}

.stream-metrics {
  display: flex;
  gap: 16px;
  justify-content: center;
  padding-top: 8px;
  border-top: 1px solid rgba(148, 163, 184, 0.1);
}

.metric-item {
  font-size: 0.7rem;
  color: #94a3b8;
  font-family: "Monaco", monospace;
}
```

### Opción B: Global Availability Map
**Concepto**: Información disponible "en el lugar donde lo necesita" (geolocalizado).

**Elementos visuales**:
- Silueta de mapa mundial simplificada (líneas)
- Puntos de acceso en diferentes ubicaciones
- Pulse rings animados en cada punto
- Métrica: "Global Access"

### Opción C: Instant Access Dashboard
**Concepto**: Enfoque en "ya no mas preocupaciones" - todo bajo control.

**Elementos visuales**:
- Grid de 4 tarjetas de estado (ERP, CRM, DB, API)
- Todas con checkmark verde ✅
- "All Systems Operational" en grande
- Animación de "sin preocupaciones"

## Comparativa Actualizada

| Opción | Representa "al momento" | Representa "donde lo necesita" | Visual Impact |
|--------|----------------------|----------------------------|---------------|
| A: Data Stream | ✅ Líneas animadas instantáneas | ✅ Múltiples nodos destino | ⭐⭐⭐⭐ |
| B: Global Map | ⚠️ Indirecto | ✅ Mapa global | ⭐⭐⭐ |
| C: Status Grid | ⚠️ Más estático | ❌ No muestra ubicación | ⭐⭐ |

## Tareas de Implementación (Opción A - Recomendada)

- [ ] **Reemplazar dashboard-preview** (líneas 100-159) con `.data-stream-graph`
- [ ] **Crear HTML**: SVG con pulse-line, data-flow lines, nodos, status-dots
- [ ] **Agregar CSS**: 
  - `.data-stream-graph` container
  - `@keyframes pulseGlow` para línea central
  - `@keyframes flowToNode` para flujo de datos
  - `@keyframes nodeReady` y `statusPulse` para nodos
  - `.stream-metrics` para métricas inferiores
- [ ] **Actualizar JS** (línea 1008):
  - Remover referencia a `.wave-line`
  - Agregar animación de pulse-line si se desea dinámica
- [ ] **Actualizar título dashboard** (línea 106): "control.zerojump.one"
- [ ] **Métrica spotlight** (líneas 162-165): Cambiar a 100% (o mantener 99%)
- [ ] **Ejecutar bun run build**

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan (Opción A recomendada).

Si prefieres la Opción B (Mapa) o C (Status Grid), indícalo antes de ejecutar.

---
📁 Archivo: `.sisyphus/plans/009-grafica-control-textos-nuevos.md`
