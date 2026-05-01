# Plan 007: Control como Spotlight (Simple)

## Objetivo
Intercambiar Monitoreo por Control como la card principal (spotlight), manteniendo el diseño actual.

## Cambios Mínimos Requeridos

### 1. Array services (líneas 9-47)
Reordenar para que Control sea `services[0]` con `spotlight: true`:

```javascript
const services = [
  {
    iconName: "ControlOutlined",
    title: "Control",
    description: "Sistemas diseñados para trabajar conjuntamente y escalar con su negocio.",
    features: [
      "Sin islas de información",
      "Integración total entre sus procesos",
      "Escalabilidad, nunca obsoleto",
    ],
    spotlight: true,
    metric: { value: 100, suffix: "%", label: "Integración total" },
  },
  {
    iconName: "CustomerServiceOutlined",
    title: "Respuesta",
    // sin cambios
    accent: "green",
  },
  {
    iconName: "MonitorOutlined",
    title: "Monitoreo",
    description: "Control y supervision en tiempo real por nuestro personal de los procesos de su empresa.",
    features: [
      "Tareas automatizadas",
      "Respaldos",
      "Auditoria a la base de datos",
    ],
    accent: "emerald",
  },
];
```

### 2. HTML Spotlight (líneas 61-166) - Cambios directos
- **Línea 68**: `<MonitorOutlined />` → `<ControlOutlined />`
- **Línea 71**: "Monitoreo" → "Control"
- **Líneas 72-74**: Cambiar descripción hardcoded a: "Sistemas diseñados para trabajar conjuntamente y escalar con su negocio."
- **Línea 106**: "monitor.zerojump.one" → "control.zerojump.one" (opcional, mantiene diseño)
- **Línea 162**: `data-value="99"` → `data-value="100"` (métrica de Control)

### 3. Sin cambios adicionales
- El dashboard-preview se mantiene igual (CPU/RAM/DISK)
- CSS no cambia
- Secondary cards se actualizan solas (`services.slice(1)` ahora es [Respuesta, Monitoreo])

## Tareas
- [ ] Reordenar array services
- [ ] Actualizar icono en spotlight (MonitorOutlined → ControlOutlined)
- [ ] Actualizar título (Monitoreo → Control)
- [ ] Actualizar descripción hardcoded
- [ ] Cambiar data-value a 100
- [ ] Ejecutar bun run build

---
📁 `.sisyphus/plans/007-control-spotlight.md`
