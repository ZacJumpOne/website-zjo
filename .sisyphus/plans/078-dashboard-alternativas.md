# Plan: Alternativas de Visual para el Dashboard de Monitoreo

## Análisis

El dashboard actual (terminal oscuro con barras y waveform) es funcional pero no convence visualmente. Propongo 3 alternativas con diferente enfoque visual, manteniendo la esencia de "Monitoreo en tiempo real".

---

## Opción A — «Panel de Control» (recomendada)

Un panel con **3 tarjetas apiladas verticalmente**, cada una representando un feature:

```
┌──────────────────────────────┐
│  ⚙️ Tareas Automatizadas     │
│  ████████████████  100% ✓   │
│  ─────────────────────────── │
│  💾 Respaldos Diarios         │
│  ████████████████  100% ✓   │
│  ─────────────────────────── │
│  🗄️ Integridad Database       │
│  ████████████████  100% ✓   │
└──────────────────────────────┘
```

- **Fondo**: blanco/gris claro, matching el spotlight card
- **Cada feature**: ícono + nombre + barra de progreso verde + check verde
- **Animación**: las barras crecen secuencialmente (staggered)
- **Estilo**: limpio, profesional, tipo dashboard SaaS moderno

**CSS necesario**: reemplazar `.dashboard-preview` y `.db-*` por nuevo markup. ~30 líneas de CSS.

---

## Opción B — «Topología de Red»

Muestra **nodos conectados** simulando una red de monitoreo:

```
        [🖥️]
       /  |  \
   [💾] [⚙️] [🗄️]
      \  |  /
       [✓]
```

- **4 círculos/nodos** con íconos representando servidores
- **Líneas conectoras** (SVG) entre nodos con pulso animado
- **Nodo central** con check verde grande = "Sistema OK"
- **Fondo**: gradiente sutil verde claro
- **Animación**: pulsos viajando por las conexiones

**CSS necesario**: SVG inline + keyframes de pulso. ~40 líneas.

---

## Opción C — «Iconos con Estadísticas»

Enfoque **minimalista y tipográfico** con 3 columnas:

```
      ⚙️              💾              🗄️
   Automatización   Respaldos      Database

      100%            100%            100%
      Activo          Completado      Íntegro
```

- **Grid de 3 columnas** con ícono grande, porcentaje enorme, label pequeño
- **Fondo**: transparente/blanco, muy limpio
- **Animación**: contadores que suben de 0 a 100 (ya existe el patrón en Hero stats)
- **Estilo**: tipográfico, moderno, sin barras

**CSS necesario**: reemplazar dashboard por grid 3 cols + tipografía. ~25 líneas.

---

## Recomendación

**Opción A (Panel de Control)** — es la más coherente con el diseño SaaS del sitio, usa el patrón de barras de progreso ya familiar, y se integra naturalmente con el spotlight card.

## Siguiente Paso

Elige una opción (A, B o C) y usa `/plan-go` para implementarla.
