# Plan: Terminal en Vivo para Sección Monitoreo

## Análisis

El dashboard actual (3 tarjetas con barras de progreso al 100%) es plano y no comunica "monitoreo activo". Se reemplazará por una **ventana tipo terminal animada** que simula un log de monitoreo en tiempo real — estilo Vercel/Railway/Datadog. El fondo oscuro contrasta con el diseño claro del sitio, creando un punto focal de alto impacto.

### Diseño del Terminal

```
┌─────────────────────────────────┐
│ ●  ●  ●  zjo-monitor — status   │  ← barra superior con dots
│─────────────────────────────────│
│  $ zjo-monitor --watch          │  ← prompt con cursor parpadeante
│                                 │
│  ✓ Tareas automatizadas  100%  │  ← líneas animadas staggered
│  ✓ Respaldos diarios      100%  │
│  ✓ Integridad BD          100%  │
│                                 │
│  █ SISTEMA OPERATIVO            │  ← status bar final
│  █ Uptime 99.9%                 │
└─────────────────────────────────┘
```

## Estado Actual

- **Archivo**: `src/components/Services.astro`
- **HTML a reemplazar**: líneas 98-117 (`.spotlight-visual` > `.panel-dashboard`)
- **CSS a reemplazar**: líneas 417-508 (`.spotlight-visual` hasta `.panel-value`)
- **Features**: `["Tareas automatizadas", "Respaldos Diarios", "Integridad de la base de datos"]`
- **Layout padre**: `.spotlight-content` = grid 1.1fr / 0.9fr, gap 48px

## Tareas de Implementación

- [ ] Reemplazar HTML del `.spotlight-visual` (líneas 98-117) por markup del terminal
- [ ] Reemplazar CSS del dashboard (líneas 417-508) por estilos del terminal + animaciones
- [ ] Verificar responsive en breakpoints 992px y 768px (altura se ajusta, terminal se escala)
- [ ] Correr `bun run build` para validar

### Detalle del HTML nuevo (reemplaza líneas 98-117)

```html
<div class="spotlight-visual">
  <div class="terminal">
    <div class="terminal-bar">
      <span class="terminal-dot red"></span>
      <span class="terminal-dot yellow"></span>
      <span class="terminal-dot green"></span>
      <span class="terminal-title">zjo-monitor --status</span>
    </div>
    <div class="terminal-body">
      <div class="terminal-line prompt">
        <span class="prompt-sign">$</span>
        <span class="prompt-cmd">zjo-monitor --watch</span>
        <span class="cursor">▊</span>
      </div>
      {services[0].features.map((feature, i) => (
        <div class="terminal-line log" style={`--stagger: ${i * 0.4}s`}>
          <span class="log-check">✓</span>
          <span class="log-text">{feature}</span>
          <span class="log-status">100%</span>
        </div>
      ))}
      <div class="terminal-line status" style="--stagger: 1.6s">
        <span class="status-bar full"></span>
        <span class="status-label">SISTEMA OPERATIVO</span>
      </div>
      <div class="terminal-line uptime" style="--stagger: 2.0s">
        <span class="status-bar partial"></span>
        <span class="status-label">Uptime 99.9%</span>
      </div>
    </div>
  </div>
</div>
```

### Detalle del CSS nuevo (reemplaza líneas 417-508)

Elementos clave:
- **`.terminal`**: fondo `#0f172a` (slate-900), borde redondeado 16px, sombra sutil, overflow hidden
- **`.terminal-bar`**: barra superior con 3 dots (rojo/amarillo/verde, 10px c/u) + título centrado en gris claro
- **`.terminal-body`**: padding 20px, fuente monospace (`'JetBrains Mono', 'Fira Code', 'Consolas', monospace`)
- **`.terminal-line`**: cada línea con `opacity: 0` + animación `fadeInUp 0.4s ease forwards` con `animation-delay: var(--stagger)`
- **`.prompt`**: color blanco/gris, `$` en `--arbol-claro`, comando en blanco
- **`.cursor`**: animación `blink 1s step-end infinite`
- **`.log`**: texto blanco, check `✓` en `--arbol-claro`, status `100%` alineado a la derecha
- **`.status`** y **`.uptime`**: barras de estado horizontales (ancho parcial) + label, animadas con `fillGrow`
- **Responsive**: altura `.spotlight-visual` se mantiene en 320px (desktop) / 280px (tablet) / 240px (mobile). El terminal se escala naturalmente dentro de su contenedor. Ajustar font-size en mobile.

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar.
